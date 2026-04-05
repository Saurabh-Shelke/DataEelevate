import { COMPANY_MODEL } from '../../models/company.model'
import { CollaborationGraphic } from '../components/illustrations/WorkIllustrations'
import { PAGE_GUTTER, PAGE_SECTION_Y } from '../layout/pageShellClasses'

const company = COMPANY_MODEL

export function WorkplacePageView() {
  return (
    <main className={`${PAGE_SECTION_Y} ${PAGE_GUTTER}`}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400/90">
            Remote workplace
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {company.workplaceTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            {company.workplaceLead}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            {company.workplaceDescription}
          </p>
        </div>
        <div className="flex justify-center rounded-2xl border border-white/10 bg-linear-to-br from-emerald-500/10 to-cyan-500/5 p-8 sm:p-10">
          <CollaborationGraphic />
        </div>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        {company.workplaceSections.map((section) => (
          <section
            key={section.heading}
            className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8"
          >
            <h2 className="font-display text-lg font-semibold text-white sm:text-xl">
              {section.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">{section.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Analytics delivery, distributed
        </h2>
        <p className="mt-4 max-w-3xl text-slate-400">
          Whether we are building a semantic layer, a board deck metrics pack, or a self-serve BI
          rollout, the same principles apply: explicit definitions, reviewed merges, and demos
          that stakeholders can challenge early. That is how we keep remote analytics teams
          aligned with your outcomes.
        </p>
      </div>
    </main>
  )
}
