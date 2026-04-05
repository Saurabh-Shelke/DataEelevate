import { useCallback, useState } from 'react'

import {
  submitContactForm,
  type ContactFormPayload,
  type ContactFormStatus,
} from './submitContactForm'

const initial: ContactFormPayload = {
  name: '',
  email: '',
  company: '',
  message: '',
}

export function useContactFormController() {
  const [fields, setFields] = useState<ContactFormPayload>(initial)
  const [status, setStatus] = useState<ContactFormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const setField = useCallback(
    <K extends keyof ContactFormPayload>(key: K, value: ContactFormPayload[K]) => {
      setFields((f) => ({ ...f, [key]: value }))
      setErrorMessage(null)
    },
    [],
  )

  const send = useCallback(async () => {
    setStatus('sending')
    setErrorMessage(null)
    try {
      await submitContactForm(fields)
      setStatus('success')
      setFields(initial)
    } catch (e) {
      setStatus('error')
      setErrorMessage(e instanceof Error ? e.message : 'Something went wrong.')
    }
  }, [fields])

  const resetStatus = useCallback(() => {
    setStatus('idle')
    setErrorMessage(null)
  }, [])

  return {
    fields,
    setField,
    status,
    errorMessage,
    send,
    resetStatus,
  }
}
