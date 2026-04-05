/** Shared types & helpers for illustration components (keeps Fast Refresh happy on WorkIllustrations.tsx). */

export type AnalyticsDashboardSize = 'default' | 'hero' | 'compact'

const SPECIALTY_VISUAL_IDS = [
  'bi',
  'engineering',
  'marketing',
  'finance',
  'hr',
  'science',
  'training',
] as const

export type SpecialtyVisualId = (typeof SPECIALTY_VISUAL_IDS)[number]

export function specialtyVisualForIndex(index: number): SpecialtyVisualId {
  return SPECIALTY_VISUAL_IDS[index % SPECIALTY_VISUAL_IDS.length]
}
