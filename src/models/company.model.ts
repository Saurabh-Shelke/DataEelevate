export interface NavItem {
  path: string
  label: string
}

export interface CompanyLocation {
  /** Short label for cards and headings */
  label: string
  lines: string[]
  /** Google Maps embed (no API key) */
  mapEmbedUrl: string
}

/** Detailed specialty area (analytics-led delivery). */
export interface SpecialtyArea {
  title: string
  /** Short subtitle / lens */
  focus: string
  description: string
  offerings: string[]
}

export interface WorkplaceSection {
  heading: string
  body: string
}

export interface BenefitItem {
  title: string
  description: string
}

export interface CompanyModel {
  name: string
  logoUrl: string
  tagline: string
  industry: string
  aboutLead: string
  /** Short line for home / about reinforcing analytics focus */
  analyticsPositioning: string
  aboutBody: string
  /** Page intro for Specialties */
  specialtiesPageLead: string
  /** Core practice areas with depth */
  specialtyAreas: SpecialtyArea[]
  workplaceTitle: string
  workplaceLead: string
  workplaceDescription: string
  workplaceSections: WorkplaceSection[]
  benefitsTitle: string
  benefitsLead: string
  benefits: BenefitItem[]
  headquarters: string
  linkedInUrl: string
  /** Inquiries from the contact form are delivered here (via FormSubmit). */
  contactFormRecipientEmail: string
  /**
   * After FormSubmit activation, they email you a private form URL like
   * `https://formsubmit.co/el/xxxxx`. Paste that here so the SPA posts to it (form-urlencoded +
   * redirect), instead of using `/ajax/your@email` JSON.
   */
  formSubmitActionUrl?: string
  location: CompanyLocation
  nav: NavItem[]
}

export const COMPANY_MODEL: CompanyModel = {
  name: 'DataElevate Consulting',
  logoUrl: '/logo.png',
  tagline: 'Elevating Data. Empowering Decisions.',
  industry: 'Data analytics consultancy',
  aboutLead:
    'DataElevate Consulting is a data analytics consultancy that helps organizations convert data into clear insights and confident decisions.',
  analyticsPositioning:
    'Most of our work centers on data analytics—trusted metrics, executive and operational dashboards, and the pipelines that keep those numbers correct—as well as the engineering and training that let your team scale insight on its own.',
  aboutBody:
    'We partner with businesses to deliver scalable analytics solutions that improve efficiency, visibility, and performance. Our expertise spans data analytics, business intelligence, reporting, automation, and data engineering across the full data lifecycle. We focus on practical, reliable, and governance-aligned solutions that create measurable business value.',
  specialtiesPageLead:
    'Data analytics is at the heart of what we do—turning raw signals into dashboards, metrics, and decisions your teams can trust. We combine modern BI, statistical rigor, and solid data engineering so analytics scales with your business.',
  specialtyAreas: [
    {
      title: 'Data analytics & BI',
      focus: 'Primary practice — insight delivery',
      description:
        'We design measurement frameworks, self-service BI, and executive reporting that answer the questions leadership actually asks—not just what is easy to chart.',
      offerings: [
        'Metric design, KPI trees, and north-star alignment',
        'Dashboards in Power BI, Tableau, Looker, and similar stacks',
        'Ad hoc analysis, cohort views, and funnel diagnostics',
        'Analytics QA: definitions, reconciliations, and trust checks',
      ],
    },
    {
      title: 'Data engineering for analytics',
      focus: 'Reliable data for analysts',
      description:
        'Analytics is only as good as the pipelines behind it. We build ingestion, modeling layers, and orchestration so analysts spend time on insight—not fixing broken jobs.',
      offerings: [
        'ELT/ETL, warehouse and lakehouse patterns (incl. medallion-style layers)',
        'dbt/SQL models, dimensional models, and slowly changing dimensions',
        'Orchestration, idempotent loads, and backfill strategies',
        'Performance tuning for large tables and semantic performance',
      ],
    },
    {
      title: 'Marketing & growth analytics',
      focus: 'Attribution, campaigns, and ROI',
      description:
        'Connect spend, channels, and outcomes with clear attribution stories. We help marketing and growth teams measure what works without drowning in vendor exports.',
      offerings: [
        'Campaign and channel reporting with consistent definitions',
        'Attribution models, incrementality framing, and test design',
        'Customer journey stitching across web, CRM, and ads',
        'Executive summaries for CMO and revenue leadership',
      ],
    },
    {
      title: 'Financial & supply chain analytics',
      focus: 'Margin, cash, and operations',
      description:
        'Finance and operations teams need reconciled numbers and drill-downs that match the GL and operational reality. We align reporting to how your business actually closes the books and moves inventory.',
      offerings: [
        'P&L bridges, margin analysis, and variance reporting',
        'Working capital, inventory, and fulfillment analytics',
        'Forecast support with transparent assumptions',
        'Integration of ERP, WMS, and planning tools into one analytical layer',
      ],
    },
    {
      title: 'HR & people analytics',
      focus: 'Workforce visibility with care',
      description:
        'People analytics should support better decisions and fairness—not box-checking. We help HR teams report on hiring, retention, and engagement with privacy-aware practices.',
      offerings: [
        'Hiring funnel, time-to-fill, and source effectiveness',
        'Retention, attrition drivers, and team composition views',
        'Engagement and survey analytics where appropriate',
        'Guidance on governance for sensitive people data',
      ],
    },
    {
      title: 'Data science & advanced analytics',
      focus: 'When models add real value',
      description:
        'We apply ML and statistical methods when the problem, data volume, and maintenance story justify it—often alongside—not instead of—strong descriptive analytics.',
      offerings: [
        'Forecasting, segmentation, and propensity-style use cases',
        'Experiment design and uplift measurement',
        'Feature preparation and handoff to production patterns',
        'Training for teams adopting notebooks and ML workflows',
      ],
    },
    {
      title: 'Trainings & certifications support',
      focus: 'Upskill your analytics bench',
      description:
        'We run workshops and mentoring tracks so your internal teams own more of the stack—SQL, BI tools, data modeling, and analytics best practices.',
      offerings: [
        'SQL for analytics, data modeling, and BI tool deep dives',
        'Custom curricula aligned to your stack and roles',
        'Office hours and code/design review for internal squads',
        'Pathways toward industry certifications where relevant',
      ],
    },
  ],
  workplaceTitle: 'Remote-first culture',
  workplaceLead:
    'Most of our work is delivered remotely with the discipline of a product team: clear goals, written context, and regular demos. We hire for communication and ownership because analytics projects fail when requirements drift in silence.',
  workplaceDescription:
    'We follow a flexible work model that supports remote and hybrid arrangements based on project needs. Employees are empowered to work independently while collaborating closely with teams, ensuring productivity, accountability, and work-life balance.',
  workplaceSections: [
    {
      heading: 'How we collaborate with clients',
      body: 'You get a named lead analyst or engineer, a shared backlog of questions and deliverables, and weekly or bi-weekly working sessions. Artifacts—data dictionaries, metric specs, and dashboard designs—live in tools you already use so nothing sits in email limbo.',
    },
    {
      heading: 'How we work internally',
      body: 'Squads pair on complex models and reviews; juniors get structured feedback on SQL, storytelling, and stakeholder management. We document decisions so context survives handoffs and time zones.',
    },
    {
      heading: 'Security & confidentiality',
      body: 'We align to your VPN, SSO, and data-handling policies. Access is least-privilege; we prefer client-controlled environments for production data and use anonymized samples for local development when possible.',
    },
    {
      heading: 'Time zones & availability',
      body: 'Core collaboration hours overlap with your stakeholders; async updates keep India, US, and EU engagements moving without midnight calls every week.',
    },
  ],
  benefitsTitle: 'Featured benefits',
  benefitsLead:
    'We invest in people who like depth—analytics, data, and honest communication. Benefits are structured to support focus, learning, and sustainable pace.',
  benefits: [
    {
      title: 'Remote & hybrid options',
      description:
        'Work from where you do your best deep work. Many roles are fully remote; some clients prefer hybrid workshops—we flex to the engagement.',
    },
    {
      title: 'Flexible hours',
      description:
        'Core overlap hours for clients, otherwise we trust you to manage your calendar around deliverables and team commitments.',
    },
    {
      title: 'Learning stipend & conference budget',
      description:
        'Annual allowance for courses, books, certifications, and conferences that sharpen analytics, engineering, or domain skills.',
    },
    {
      title: 'Mentorship & career paths',
      description:
        'Structured 1:1s, internal tech talks, and clear growth tracks from analyst to lead consultant or principal.',
    },
    {
      title: 'Modern tooling',
      description:
        'Access to cloud warehouses, BI licenses, and collaboration stacks used on active projects—so you learn what clients actually run.',
    },
    {
      title: 'Wellness & balance',
      description:
        'Encouraged time off, no heroics culture, and realistic sprint planning so analytics quality does not come from burnout.',
    },
  ],
  headquarters: 'Pune, Maharashtra, India',
  linkedInUrl: 'https://www.linkedin.com/company/data-elevate-consulting/',
  contactFormRecipientEmail: 'shelkesaurabh180@gmail.com',
  formSubmitActionUrl: 'https://formsubmit.co/el/korida',
  location: {
    label: 'Headquarters — Pune',
    lines: [
      'DataElevate Consulting',
      'Pune, Maharashtra',
      'India',
      'Serving clients remotely across regions.',
    ],
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Pune,+Maharashtra,+India&z=11&output=embed',
  },
  nav: [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/specialties', label: 'Specialties' },
    { path: '/workplace', label: 'Workplace' },
    { path: '/benefits', label: 'Benefits' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ],
}
