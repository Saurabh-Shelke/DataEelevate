import { Link } from 'react-router-dom'

import { getContactFormRecipientEmail } from '../../controllers/submitContactForm'
import type { CompanyModel } from '../../models/company.model'
import type { useContactFormController } from '../../controllers/useContactFormController'
import { PAGE_GUTTER, PAGE_SECTION_Y } from '../layout/pageShellClasses'

export type ContactPageViewProps = ReturnType<typeof useContactFormController> & {
  company: CompanyModel
}

export function ContactPageView({
  company,
  fields,
  setField,
  status,
  errorMessage,
  send,
  resetStatus,
}: ContactPageViewProps) {
  const disabled = status === 'sending'
  const deliveryEmail = getContactFormRecipientEmail()
  const usesWeb3Forms = Boolean(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim())

  return (
    <main className={`${PAGE_SECTION_Y} ${PAGE_GUTTER}`}>
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
        Contact us
      </p>
      <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        Let&apos;s talk about your data roadmap
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-400">
        Share a short note about your goals—we&apos;ll route it to our team. You can
        also find us on{' '}
        <a
          href={company.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-emerald-400 hover:text-emerald-300"
        >
          LinkedIn
        </a>
        .
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          {status === 'success' ? (
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-8">
              <p className="text-lg font-medium text-white">Message sent</p>
              <p className="mt-2 text-slate-300">
                Thanks for reaching out. We&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={resetStatus}
                className="mt-6 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                void send()
              }}
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={fields.name}
                  disabled={disabled}
                  onChange={(e) => setField('name', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={fields.email}
                  disabled={disabled}
                  onChange={(e) => setField('email', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 disabled:opacity-50"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-company"
                  className="block text-sm font-medium text-slate-300"
                >
                  Company <span className="text-slate-500">(optional)</span>
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={fields.company ?? ''}
                  disabled={disabled}
                  onChange={(e) => setField('company', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 disabled:opacity-50"
                  placeholder="Organization"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={fields.message}
                  disabled={disabled}
                  onChange={(e) => setField('message', e.target.value)}
                  className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 disabled:opacity-50"
                  placeholder="What are you trying to solve?"
                />
              </div>
              {errorMessage ? (
                <p className="text-sm text-red-400" role="alert">
                  {errorMessage}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={disabled}
                className="inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              <p className="text-xs text-slate-500">
                {usesWeb3Forms ? (
                  <>
                    Messages are sent through Web3Forms to the inbox you configured for
                    your access key.
                  </>
                ) : (
                  <>
                    Submissions are forwarded to{' '}
                    <span className="text-slate-400">{deliveryEmail}</span>. The first time
                    you use FormSubmit with that address, open the activation email from
                    FormSubmit and confirm—until then, nothing is delivered. Also check
                    spam.
                  </>
                )}
              </p>
            </form>
          )}
        </div>

        <div className="flex min-h-0 flex-col gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-400/90">
              {company.location.label}
            </h2>
            <address className="mt-4 not-italic text-slate-300">
              {company.location.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 text-sm text-slate-500">{company.headquarters}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title={`Map — ${company.name} location`}
              src={company.location.mapEmbedUrl}
              className="aspect-video w-full min-h-[240px] grayscale-[30%] contrast-[1.05] sm:min-h-[280px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <Link
            to="/blog"
            className="text-sm font-medium text-slate-400 hover:text-white"
          >
            Read insights on the blog →
          </Link>
        </div>
      </div>
    </main>
  )
}
