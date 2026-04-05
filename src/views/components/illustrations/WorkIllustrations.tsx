import { useId } from 'react'

import type { AnalyticsDashboardSize, SpecialtyVisualId } from './illustrationConstants'

/** Decorative SVGs — analytics / data work (no external assets). */

const panel = {
  stroke: 'rgba(255,255,255,0.12)',
  fill: 'rgba(15,23,42,0.9)',
  muted: 'rgba(148,163,184,0.35)',
}

export function AnalyticsDashboardGraphic({
  className = '',
  size = 'default',
}: {
  className?: string
  /** hero = home column (largest); compact = side panels */
  size?: AnalyticsDashboardSize
}) {
  const uid = useId()
  const barG = `${uid}-bar`
  const lineG = `${uid}-line`
  const glowF = `${uid}-glow`

  const frame =
    size === 'hero'
      ? 'w-full max-w-[min(100%,720px)] sm:max-w-[min(100%,800px)] xl:max-w-[min(100%,880px)] 2xl:max-w-[920px]'
      : size === 'compact'
        ? 'w-full max-w-[min(100%,440px)] sm:max-w-[500px]'
        : 'w-full max-w-[min(100%,600px)] sm:max-w-[min(100%,680px)] lg:max-w-[min(100%,720px)] xl:max-w-[780px]'

  return (
    <div className={`${frame} ${className}`} aria-hidden>
      <svg
        viewBox="0 0 420 340"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id={barG} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id={lineG} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
          </linearGradient>
          <filter id={glowF} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect
          x="8"
          y="8"
          width="404"
          height="324"
          rx="20"
          fill={panel.fill}
          stroke={panel.stroke}
          strokeWidth="1"
        />
        <circle cx="36" cy="36" r="4" fill="#f87171" opacity="0.85" />
        <circle cx="54" cy="36" r="4" fill="#fbbf24" opacity="0.85" />
        <circle cx="72" cy="36" r="4" fill="#4ade80" opacity="0.85" />
        <text x="100" y="40" fill="rgba(226,232,240,0.9)" fontSize="13" fontFamily="system-ui,sans-serif">
          Executive metrics
        </text>
        <rect x="24" y="56" width="112" height="52" rx="8" fill="rgba(16,185,129,0.12)" stroke={panel.stroke} />
        <text x="36" y="78" fill="#94a3b8" fontSize="10" fontFamily="system-ui,sans-serif">
          Revenue YTD
        </text>
        <text x="36" y="98" fill="#e2e8f0" fontSize="18" fontWeight="600" fontFamily="system-ui,sans-serif">
          ₹24.8Cr
        </text>
        <rect x="148" y="56" width="112" height="52" rx="8" fill="rgba(6,182,212,0.1)" stroke={panel.stroke} />
        <text x="160" y="78" fill="#94a3b8" fontSize="10" fontFamily="system-ui,sans-serif">
          Active users
        </text>
        <text x="160" y="98" fill="#e2e8f0" fontSize="18" fontWeight="600" fontFamily="system-ui,sans-serif">
          12.4k
        </text>
        <rect x="272" y="56" width="124" height="52" rx="8" fill="rgba(99,102,241,0.08)" stroke={panel.stroke} />
        <text x="284" y="78" fill="#94a3b8" fontSize="10" fontFamily="system-ui,sans-serif">
          Conv. rate
        </text>
        <text x="284" y="98" fill="#e2e8f0" fontSize="18" fontWeight="600" fontFamily="system-ui,sans-serif">
          3.2%
        </text>
        <text x="24" y="138" fill="#64748b" fontSize="11" fontFamily="system-ui,sans-serif">
         
        </text>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x={32 + i * 58}
            y={200 - [40, 65, 52, 88, 70, 80][i]}
            width="28"
            height={[40, 65, 52, 88, 70, 80][i]}
            rx="4"
            fill={`url(#${barG})`}
            opacity={0.35 + i * 0.1}
          />
        ))}
        <path
          d="M 40 250 Q 100 220 160 235 T 280 210 T 380 195"
          stroke={`url(#${lineG})`}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          filter={`url(#${glowF})`}
        />
        <circle cx="380" cy="195" r="5" fill="#22d3ee" />
        <rect x="24" y="268" width="372" height="48" rx="8" fill="rgba(30,41,59,0.6)" stroke={panel.stroke} />
        <rect x="36" y="282" width="120" height="8" rx="2" fill={panel.muted} />
        <rect x="36" y="296" width="200" height="6" rx="2" fill="rgba(100,116,139,0.25)" />
        <rect x="300" y="284" width="84" height="28" rx="6" fill="rgba(52,211,153,0.25)" stroke="rgba(52,211,153,0.35)" />
        <text x="318" y="302" fill="#6ee7b7" fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif">
          Export
        </text>
      </svg>
    </div>
  )
}

export function DataLifecycleGraphic({ className = '' }: { className?: string }) {
  const uid = useId()
  const arrowG = `${uid}-dl-arrow`

  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 480 200" className="h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={arrowG} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        {[
          { x: 24, label: 'Sources', sub: 'ERP · CRM · Ads' },
          { x: 184, label: 'Trusted layer', sub: 'Models · QA' },
          { x: 344, label: 'Insights', sub: 'BI · Metrics' },
        ].map((node) => (
          <g key={node.label}>
            <rect
              x={node.x}
              y="48"
              width="112"
              height="104"
              rx="14"
              fill="rgba(15,23,42,0.85)"
              stroke="rgba(255,255,255,0.12)"
            />
            <text
              x={node.x + 56}
              y="82"
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="13"
              fontWeight="600"
              fontFamily="system-ui,sans-serif"
            >
              {node.label}
            </text>
            <text
              x={node.x + 56}
              y="108"
              textAnchor="middle"
              fill="#64748b"
              fontSize="10"
              fontFamily="system-ui,sans-serif"
            >
              {node.sub}
            </text>
          </g>
        ))}
        <path
          d="M 144 100 H 168"
          stroke={`url(#${arrowG})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M 168 92 L 178 100 L 168 108 Z" fill="#22d3ee" opacity="0.95" />
        <path
          d="M 304 100 H 328"
          stroke={`url(#${arrowG})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M 328 92 L 338 100 L 328 108 Z" fill="#22d3ee" opacity="0.95" />
      </svg>
    </div>
  )
}

export function PipelineLayersGraphic({ className = '' }: { className?: string }) {
  const layers = [
    { y: 24, w: 280, label: 'Gold — KPIs & curated views', color: 'rgba(52,211,153,0.2)' },
    { y: 72, w: 320, label: 'Silver — conformed dimensions', color: 'rgba(6,182,212,0.15)' },
    { y: 120, w: 360, label: 'Bronze — raw & history', color: 'rgba(99,102,241,0.12)' },
  ]
  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 400 180" className="h-auto w-full" fill="none">
        {layers.map((L) => (
          <g key={L.label}>
            <rect
              x={200 - L.w / 2}
              y={L.y}
              width={L.w}
              height="40"
              rx="8"
              fill={L.color}
              stroke="rgba(255,255,255,0.1)"
            />
            <text
              x="200"
              y={L.y + 25}
              textAnchor="middle"
              fill="#cbd5e1"
              fontSize="11"
              fontFamily="system-ui,sans-serif"
            >
              {L.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

export function CollaborationGraphic({ className = '' }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 360 200" className="h-auto w-full max-w-md" fill="none">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${40 + i * 110}, 60)`}>
            <circle r="28" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.35)" />
            <circle r="12" fill="rgba(34,211,238,0.4)" />
          </g>
        ))}
        <path
          d="M 68 88 Q 120 120 180 88 T 292 88"
          stroke="rgba(148,163,184,0.35)"
          strokeWidth="2"
          strokeDasharray="6 4"
          fill="none"
        />
        <rect x="100" y="140" width="160" height="36" rx="8" fill="rgba(15,23,42,0.8)" stroke="rgba(255,255,255,0.1)" />
        <text x="180" y="162" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="system-ui,sans-serif">
          Async + live sessions
        </text>
      </svg>
    </div>
  )
}

export function GrowthSparkGraphic({ className = '' }: { className?: string }) {
  const uid = useId()
  const grad = `${uid}-spark`

  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 120 80" className="h-auto w-full" fill="none">
        <defs>
          <linearGradient id={grad} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <path
          d="M 8 60 L 28 45 L 48 52 L 68 28 L 88 35 L 108 12"
          stroke={`url(#${grad})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  )
}

export function SpecialtyAreaGraphic({
  id,
  className = '',
}: {
  id: SpecialtyVisualId
  className?: string
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-emerald-500/15 to-cyan-500/10 p-4 sm:p-5 ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 88 88" className="h-16 w-16 sm:h-20 sm:w-20" fill="none">
        {id === 'bi' ? (
          <>
            <rect x="12" y="52" width="12" height="28" rx="2" fill="#34d399" opacity="0.85" />
            <rect x="30" y="40" width="12" height="40" rx="2" fill="#22d3ee" opacity="0.85" />
            <rect x="48" y="48" width="12" height="32" rx="2" fill="#34d399" opacity="0.55" />
            <rect x="66" y="32" width="12" height="48" rx="2" fill="#22d3ee" opacity="0.65" />
          </>
        ) : null}
        {id === 'engineering' ? (
          <>
            <rect x="10" y="28" width="68" height="12" rx="3" fill="rgba(52,211,153,0.25)" stroke="rgba(52,211,153,0.4)" />
            <path d="M 20 46 L 44 46 M 44 46 L 38 40 M 44 46 L 38 52" stroke="#22d3ee" strokeWidth="2" />
            <rect x="50" y="40" width="28" height="12" rx="3" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.4)" />
            <path d="M 20 64 L 44 64 M 44 64 L 38 58 M 44 64 L 38 70" stroke="#34d399" strokeWidth="2" />
            <rect x="50" y="58" width="28" height="12" rx="3" fill="rgba(52,211,153,0.2)" stroke="rgba(52,211,153,0.35)" />
          </>
        ) : null}
        {id === 'marketing' ? (
          <>
            <circle cx="44" cy="40" r="18" stroke="rgba(52,211,153,0.5)" strokeWidth="2" fill="none" />
            <path d="M 44 22 L 44 58 M 26 40 L 62 40" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" />
            <circle cx="44" cy="40" r="6" fill="#22d3ee" opacity="0.8" />
            <path d="M 52 62 L 72 72" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
          </>
        ) : null}
        {id === 'finance' ? (
          <>
            <rect x="14" y="20" width="60" height="48" rx="4" stroke="rgba(148,163,184,0.4)" fill="rgba(15,23,42,0.5)" />
            <path d="M 22 36 H 66 M 22 48 H 56 M 22 60 H 62" stroke="rgba(52,211,153,0.5)" strokeWidth="2" />
            <rect x="52" y="24" width="18" height="10" rx="2" fill="#22d3ee" opacity="0.6" />
          </>
        ) : null}
        {id === 'hr' ? (
          <>
            <circle cx="32" cy="36" r="10" fill="rgba(52,211,153,0.35)" />
            <path d="M 18 68 Q 32 52 46 68" stroke="rgba(34,211,238,0.5)" strokeWidth="3" fill="none" />
            <circle cx="56" cy="38" r="8" fill="rgba(34,211,238,0.3)" />
            <circle cx="68" cy="52" r="6" fill="rgba(52,211,153,0.25)" />
          </>
        ) : null}
        {id === 'science' ? (
          <>
            <path d="M 20 60 Q 44 20 68 60" stroke="#34d399" strokeWidth="2" fill="none" />
            <circle cx="32" cy="48" r="4" fill="#22d3ee" />
            <circle cx="50" cy="36" r="4" fill="#34d399" />
            <circle cx="56" cy="52" r="4" fill="#22d3ee" opacity="0.7" />
          </>
        ) : null}
        {id === 'training' ? (
          <>
            <rect x="22" y="18" width="44" height="52" rx="4" stroke="rgba(52,211,153,0.45)" fill="rgba(15,23,42,0.6)" />
            <path d="M 30 32 H 58 M 30 44 H 52 M 30 56 H 56" stroke="rgba(148,163,184,0.5)" strokeWidth="2" />
            <polygon points="38,68 50,62 50,74" fill="#22d3ee" opacity="0.85" />
          </>
        ) : null}
      </svg>
    </div>
  )
}
