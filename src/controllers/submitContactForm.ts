import { COMPANY_MODEL } from '../models/company.model'

export type ContactFormStatus = 'idle' | 'sending' | 'success' | 'error'

export interface ContactFormPayload {
  name: string
  email: string
  company?: string
  message: string
}

/** Same logic as FormSubmit URL target; use for UI labels. */
export function getContactFormRecipientEmail(): string {
  const fromEnv = import.meta.env.VITE_CONTACT_RECIPIENT_EMAIL?.trim()
  if (fromEnv) return fromEnv
  return COMPANY_MODEL.contactFormRecipientEmail
}

function recipientEmail(): string {
  return getContactFormRecipientEmail()
}

function formSubmitLooksLikeActivationRequired(raw: string, message?: string): boolean {
  const text = `${message ?? ''}\n${raw}`.toLowerCase()
  return (
    text.includes('activate form') ||
    (text.includes('activation') && text.includes('form')) ||
    text.includes('needs activation')
  )
}

function formSubmitActivationError(): Error {
  const email = recipientEmail()
  return new Error(
    `FormSubmit is not activated for ${email} yet. Open that inbox (and spam), find the email from FormSubmit, click “Activate Form”, then submit again. Or set VITE_WEB3FORMS_ACCESS_KEY to skip FormSubmit.`,
  )
}

/** Full `https://formsubmit.co/el/…` link from FormSubmit’s activation email (optional). */
function getFormSubmitActionUrl(): string | null {
  const raw =
    import.meta.env.VITE_FORMSUBMIT_ACTION_URL?.trim() ||
    COMPANY_MODEL.formSubmitActionUrl?.trim()
  if (!raw) return null
  let u: URL
  try {
    u = new URL(raw)
  } catch {
    throw new Error(
      'Invalid FormSubmit URL. Paste the full https://formsubmit.co/el/… link from your activation email, or set VITE_FORMSUBMIT_ACTION_URL.',
    )
  }
  const host = u.hostname.replace(/^www\./, '')
  if (host !== 'formsubmit.co') {
    throw new Error('FormSubmit action URL must use the formsubmit.co domain.')
  }
  return u.href
}

function formSubmitInvisibleSuccess(res: Response): boolean {
  return (
    res.type === 'opaqueredirect' ||
    (res.status >= 300 && res.status < 400)
  )
}

/**
 * Invisible FormSubmit URLs (`/el/…`) expect a normal form POST (urlencoded), not `/ajax/{email}` JSON.
 * Browsers follow redirects by default; we use `manual` so the SPA can treat 302 as success.
 */
async function submitViaFormSubmitInvisible(
  actionUrl: string,
  payload: ContactFormPayload,
): Promise<void> {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : ''

  const body = new URLSearchParams()
  body.set('name', payload.name)
  body.set('email', payload.email)
  body.set('company', payload.company ?? '')
  body.set('message', payload.message)
  body.set('_subject', `Website inquiry — ${COMPANY_MODEL.name}`)
  body.set('_template', 'table')
  body.set('_captcha', 'false')
  body.set('_replyto', payload.email)
  if (pageUrl) {
    body.set('_url', pageUrl)
  }

  const res = await fetch(actionUrl, {
    method: 'POST',
    redirect: 'manual',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'text/html,application/json',
    },
    body,
  })

  if (formSubmitInvisibleSuccess(res)) {
    return
  }

  const raw = await res.text()
  if (formSubmitLooksLikeActivationRequired(raw)) {
    throw formSubmitActivationError()
  }
  if (!res.ok) {
    throw new Error(raw || `Request failed (${res.status})`)
  }
}

async function submitViaWeb3Forms(payload: ContactFormPayload): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim()
  if (!accessKey) {
    throw new Error('Web3Forms access key is not configured.')
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Website inquiry — ${COMPANY_MODEL.name}`,
      from_name: payload.name,
      name: payload.name,
      email: payload.email,
      company: payload.company ?? '',
      message: payload.message,
    }),
  })

  const data = (await res.json().catch(() => null)) as {
    success?: boolean
    message?: string
  } | null

  if (!res.ok || !data?.success) {
    throw new Error(data?.message || `Web3Forms error (${res.status})`)
  }
}

/**
 * FormSubmit (https://formsubmit.co): first use sends an activation email to the recipient
 * inbox — you must open it and confirm before submissions are forwarded.
 * Invisible links (`/el/…`) use form-urlencoded to that URL; otherwise JSON to `/ajax/{email}`.
 */
async function submitViaFormSubmit(payload: ContactFormPayload): Promise<void> {
  const actionUrl = getFormSubmitActionUrl()
  if (actionUrl) {
    await submitViaFormSubmitInvisible(actionUrl, payload)
    return
  }

  const to = recipientEmail()
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      company: payload.company ?? '',
      message: payload.message,
      _subject: `Website inquiry — ${COMPANY_MODEL.name}`,
      _template: 'table',
      _captcha: false,
      _replyto: payload.email,
    }),
  })

  const raw = await res.text()
  let data: { success?: boolean | string; message?: string } | null = null
  try {
    data = JSON.parse(raw) as { success?: boolean | string; message?: string }
  } catch {
    /* FormSubmit sometimes returns non-JSON on error */
  }

  if (!res.ok) {
    if (formSubmitLooksLikeActivationRequired(raw, data?.message)) {
      throw formSubmitActivationError()
    }
    throw new Error(data?.message || raw || `Request failed (${res.status})`)
  }

  if (data && (data.success === false || data.success === 'false')) {
    if (formSubmitLooksLikeActivationRequired(raw, data.message)) {
      throw formSubmitActivationError()
    }
    throw new Error(data.message || 'FormSubmit rejected the submission.')
  }
}

export async function submitContactForm(payload: ContactFormPayload): Promise<void> {
  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim()
  if (web3Key) {
    await submitViaWeb3Forms(payload)
    return
  }
  await submitViaFormSubmit(payload)
}
