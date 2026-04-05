import { COMPANY_MODEL } from '../../models/company.model'
import { specialtyVisualForIndex } from '../components/illustrations/illustrationConstants'
import { PipelineLayersGraphic, SpecialtyAreaGraphic } from '../components/illustrations/WorkIllustrations'
import { PAGE_GUTTER, PAGE_SECTION_Y } from '../layout/pageShellClasses'

const company = COMPANY_MODEL

export function SpecialtiesPageView() {
  return (
    <main className={`${PAGE_SECTION_Y} ${PAGE_GUTTER}`}>
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
        What we deliver
      </p>
      <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        Specialties
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
        {company.specialtiesPageLead}
      </p>

      <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-5 py-4 text-sm text-emerald-100/90">
        <strong className="font-semibold text-emerald-200">Focus:</strong>{' '}
        Data analytics is our core—supported by engineering, science, and training so insights
        stay accurate as you scale.
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-slate-900/50 p-6 sm:p-10">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
          Lakehouse-style layers (example pattern we use)
        </p>
        <div className="mt-6 max-w-lg mx-auto">
          <PipelineLayersGraphic />
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-10">
        {company.specialtyAreas.map((area, index) => (
          <article
            key={area.title}
            className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8 lg:p-10"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
              <SpecialtyAreaGraphic
                id={specialtyVisualForIndex(index)}
                className="mx-auto lg:mx-0"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {area.title}
                  </h2>
                  <p className="text-sm font-medium uppercase tracking-wider text-cyan-400/90">
                    {area.focus}
                  </p>
                </div>
                <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                  {area.description}
                </p>
                <h3 className="mt-8 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Typical deliverables
                </h3>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {area.offerings.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-400">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
