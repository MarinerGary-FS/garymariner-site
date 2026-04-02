export const CAL_USERNAME = 'garymariner'

export interface MeetingType {
  id: string
  calLink: string
  label: string
  duration: string
  description: string
}

export const MEETING_TYPES: MeetingType[] = [
  {
    id: 'strategy-call',
    calLink: `${CAL_USERNAME}/strategy-call`,
    label: 'Strategy Call',
    duration: '30 min',
    description:
      'For founders and operators who want to explore AI systems strategy and identify where to begin.',
  },
  {
    id: 'systems-review',
    calLink: `${CAL_USERNAME}/systems-review`,
    label: 'Systems Review',
    duration: '45 min',
    description:
      'A deeper look at your current operations — mapping friction points and identifying real automation opportunities.',
  },
  {
    id: 'optimization-session',
    calLink: `${CAL_USERNAME}/optimization-session`,
    label: 'Optimization Session',
    duration: '60 min',
    description:
      'For active engagements or existing clients focused on iteration, refinement, and performance improvement.',
  },
]

export const DEFAULT_CAL_LINK = `${CAL_USERNAME}/strategy-call`
