export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  readMinutes: number
  body: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'medallion-architecture-primer',
    title: 'Why Medallion architecture pays off in the lakehouse',
    excerpt:
      'Bronze, silver, and gold layers reduce rework and make analytics teams faster—not slower.',
    publishedAt: '2025-03-12',
    readMinutes: 5,
    body: [
      'Medallion architecture organizes raw ingestion (bronze), cleaned and conformed data (silver), and business-ready metrics (gold). Teams that skip straight to “gold” often rebuild pipelines when source schemas change.',
      'Start bronze with append-only history and clear lineage. Silver is where you standardize keys, deduplicate, and apply slowly changing dimensions. Gold exposes curated facts and dimensions for BI and ML.',
      'At DataElevate Consulting, we design layers so each tier has a single responsibility and clear SLAs—so analysts trust the numbers and engineers can evolve pipelines without breaking dashboards.',
    ],
  },
  {
    slug: 'data-observability-essentials',
    title: 'Data observability: the minimum viable practice',
    excerpt:
      'Freshness, volume, and schema checks catch most pipeline failures before executives do.',
    publishedAt: '2025-02-28',
    readMinutes: 4,
    body: [
      'Most data incidents are not mysterious—they are late data, empty partitions, or unexpected null rates. Observability starts with monitoring those signals on critical tables.',
      'Pair automated alerts with ownership: every dataset should have a named on-call rotation and a runbook. Noise is the enemy; tune thresholds from real incidents.',
      'We help clients wire observability into existing stacks—whether warehouse, lakehouse, or hybrid—so engineers spend less time firefighting and more time shipping features.',
    ],
  },
  {
    slug: 'governance-without-gridlock',
    title: 'Governance that speeds delivery instead of blocking it',
    excerpt:
      'Central catalogs, access patterns, and documentation templates keep compliance and agility aligned.',
    publishedAt: '2025-01-15',
    readMinutes: 6,
    body: [
      'Governance fails when it is a separate approval queue. It succeeds when policies are encoded in tooling: catalogs, column masks, row filters, and automated classification.',
      'Document the “why” for each domain dataset—business definition, refresh cadence, and known caveats. Analysts onboard faster and fewer tickets bounce between teams.',
      'Our engagements focus on practical governance: enough control for regulators and security, enough freedom for product teams to iterate weekly.',
    ],
  },
]

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
