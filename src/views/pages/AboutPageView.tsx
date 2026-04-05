import { COMPANY_MODEL } from '../../models/company.model'
import { DataLifecycleGraphic } from '../components/illustrations/WorkIllustrations'
import { PAGE_GUTTER, PAGE_SECTION_Y } from '../layout/pageShellClasses'

const company = COMPANY_MODEL

export function AboutPageView() {
  return (
    <main className={`${PAGE_SECTION_Y} ${PAGE_GUTTER}`}>
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            About us
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-400">{company.aboutLead}</p>
          <p className="mt-4 max-w-3xl rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-base text-emerald-100/90">
            {company.analyticsPositioning}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400/90">
            How work flows
          </p>
          <p className="mt-2 text-sm text-slate-500">
            From raw systems to decisions your leaders can act on.
          </p>
          <div className="mt-6">
            <DataLifecycleGraphic />
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="font-display text-2xl font-semibold text-white">
            Partnership, not just projects
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            {company.aboutBody}
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/[0.07] to-transparent p-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            What we optimize
          </h3>
          <ul className="mt-6 space-y-4 text-slate-300">
            {[
              'Efficiency across reporting and operations',
              'Visibility into performance and trends',
              'Reliability with governance-aligned delivery',
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
