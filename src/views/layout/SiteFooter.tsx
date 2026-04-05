import { Link } from 'react-router-dom'

import type { CompanyModel } from '../../models/company.model'
import { BrandLogo } from '../components/BrandLogo'

export interface SiteFooterProps {
  company: CompanyModel
}

export function SiteFooter({ company }: SiteFooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="w-full px-4 py-12 sm:px-6 md:px-6 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <BrandLogo
              src={company.logoUrl}
              alt={`${company.name} logo`}
              size="sm"
            />
            <p className="max-w-md text-sm text-slate-500">
              <span className="font-medium text-slate-300">{company.name}</span>
              <br />
              {company.industry}
              <br />
              <span className="mt-2 inline-block text-slate-400">
                {company.location.lines.slice(1, 3).join(' · ')}
              </span>
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
              Location
            </p>
            <address className="mt-3 not-italic text-sm text-slate-400">
              {company.location.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <div className="flex flex-col gap-3 sm:items-start lg:items-end">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/blog"
                className="text-sm font-medium text-slate-400 hover:text-white"
              >
                Blog
              </Link>
              <span className="text-slate-600" aria-hidden>
                ·
              </span>
              <Link
                to="/contact"
                className="text-sm font-medium text-slate-400 hover:text-white"
              >
                Contact
              </Link>
              <span className="text-slate-600" aria-hidden>
                ·
              </span>
              <a
                href={company.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-600 sm:text-left">
          © {year} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
