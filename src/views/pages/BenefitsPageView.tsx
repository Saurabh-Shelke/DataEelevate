import { Link } from 'react-router-dom'

import { COMPANY_MODEL } from '../../models/company.model'
import { AnalyticsDashboardGraphic } from '../components/illustrations/WorkIllustrations'
import { PAGE_GUTTER, PAGE_SECTION_Y } from '../layout/pageShellClasses'

const company = COMPANY_MODEL

export function BenefitsPageView() {
  return (
    <main className={`${PAGE_SECTION_Y} ${PAGE_GUTTER} bg-slate-900/40`}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
            For our team
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {company.benefitsTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {company.benefitsLead}
          </p>
        </div>
        <div className="flex w-full min-w-0 justify-center opacity-95 lg:justify-end">
          <AnalyticsDashboardGraphic />
        </div>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {company.benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/3 p-6 transition hover:border-emerald-400/30 sm:p-7"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-white">{benefit.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 sm:p-8">
        <h2 className="font-display text-lg font-semibold text-white sm:text-xl">
          Hiring profile
        </h2>
        <p className="mt-3 text-slate-300">
          We look for people who enjoy ambiguity just enough to structure it—strong SQL, clear
          writing, and curiosity about business context. If that sounds like you, reach out via{' '}
          <Link to="/contact" className="font-medium text-emerald-300 hover:text-emerald-200">
            Contact
          </Link>{' '}
          with your background and the kind of analytics problems you like to solve.
        </p>
      </div>
    </main>
  )
}
