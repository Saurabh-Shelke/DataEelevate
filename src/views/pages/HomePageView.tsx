import { Link } from 'react-router-dom'

import { BLOG_POSTS } from '../../models/blog.model'
import { COMPANY_MODEL } from '../../models/company.model'
import {
  AnalyticsDashboardGraphic,
  GrowthSparkGraphic,
} from '../components/illustrations/WorkIllustrations'
import { PAGE_GUTTER, PAGE_SECTION_Y } from '../layout/pageShellClasses'

const company = COMPANY_MODEL

export function HomePageView() {
  const preview = BLOG_POSTS.slice(0, 3)

  return (
    <main>
      <section
        className={`${PAGE_GUTTER} pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pt-28`}
        aria-labelledby="hero-heading"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-4xl xl:max-w-5xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300/95">
              Data analytics · BI · engineering
            </p>
            <h1
              id="hero-heading"
              className="font-display mt-6 text-4xl font-semibold tracking-tight break-words text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]"
            >
              {company.tagline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              {company.aboutLead}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-500 sm:text-lg">
              {company.analyticsPositioning}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:brightness-110"
              >
                Learn how we help
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="relative flex w-full min-w-0 justify-center lg:justify-end">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-emerald-500/10 blur-3xl" aria-hidden />
            <AnalyticsDashboardGraphic size="hero" className="drop-shadow-2xl" />
          </div>
        </div>

        <div className="mt-16 grid w-full gap-4 sm:grid-cols-3">
          {[
            { label: 'Lifecycle coverage', value: 'Analytics to engineering' },
            { label: 'Delivery', value: 'Scalable, governed solutions' },
            { label: 'Outcome', value: 'Measurable business value' },
          ].map((item) => (
            <div
              key={item.label}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur-sm"
            >
              <div className="absolute right-3 top-3 w-16 opacity-80">
                <GrowthSparkGraphic />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90">
                {item.label}
              </p>
              <p className="mt-2 max-w-[85%] text-sm font-medium text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`border-t border-white/10 bg-slate-950/50 ${PAGE_SECTION_Y} ${PAGE_GUTTER}`}
        aria-labelledby="blog-preview-heading"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="blog-preview-heading"
              className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              From the blog
            </h2>
            <p className="mt-2 max-w-xl text-slate-400">
              Ideas on lakehouses, observability, and governance—practical, not
              theoretical.
            </p>
          </div>
          <Link
            to="/blog"
            className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
          >
            View all posts →
          </Link>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {preview.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/3 p-6 transition hover:border-emerald-400/30"
              >
                <time
                  dateTime={post.publishedAt}
                  className="text-xs font-medium uppercase tracking-wider text-slate-500"
                >
                  {post.publishedAt}
                </time>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-emerald-200">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{post.excerpt}</p>
                <span className="mt-4 text-sm font-medium text-emerald-400">
                  Read more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
