import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import type { CompanyModel } from '../../models/company.model'
import { BrandLogo } from '../components/BrandLogo'

export interface SiteHeaderProps {
  company: CompanyModel
}

function navClassName(isActive: boolean) {
  return `rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
    isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
  }`
}

export function SiteHeader({ company }: SiteHeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="flex h-16 w-full min-w-0 items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <NavLink
          to="/"
          className="group min-w-0 max-w-[min(100%,14rem)] text-left transition-opacity hover:opacity-90 sm:max-w-none"
          aria-label={`${company.name}, home`}
          onClick={() => setMobileNavOpen(false)}
        >
          <BrandLogo src={company.logoUrl} alt="" size="md" />
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {company.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => navClassName(isActive)}
              end={item.path === '/' || item.path !== '/blog'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={company.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-emerald-400/40 hover:bg-emerald-400/10 sm:inline-flex"
          >
            LinkedIn
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav"
            aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              {mobileNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileNavOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {company.nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-left text-sm font-medium ${
                    isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/5'
                  }`
                }
                end={item.path === '/' || item.path !== '/blog'}
                onClick={() => setMobileNavOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={company.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg border border-white/15 px-3 py-3 text-center text-sm font-medium text-emerald-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
