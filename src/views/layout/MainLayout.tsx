import { Outlet, useLocation } from 'react-router-dom'

import { COMPANY_MODEL } from '../../models/company.model'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function MainLayout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-svh w-full max-w-[100%] flex-col overflow-x-clip bg-slate-950 font-sans text-slate-300">
      <div className="pointer-events-none fixed inset-0 overflow-x-clip overflow-y-hidden">
        <div className="absolute left-[max(-8rem,calc(50%-100vw))] top-0 h-[min(520px,100vw)] w-[min(520px,100vw)] rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="absolute right-[max(-8rem,calc(50%-100vw))] top-1/3 h-[min(480px,100vw)] w-[min(480px,100vw)] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[min(360px,90vw)] w-[min(360px,90vw)] -translate-x-1/2 rounded-full bg-teal-600/10 blur-[90px]" />
      </div>

      <div className="relative z-0 flex flex-1 flex-col">
        <SiteHeader key={pathname} company={COMPANY_MODEL} />
        <div className="flex flex-1 flex-col min-h-0">
          <Outlet />
        </div>
        <SiteFooter company={COMPANY_MODEL} />
      </div>
    </div>
  )
}
