import type { NavItem } from '../types'

/** Order here is the order of sections on the Home page (Projects sits just before Skills). */
export const homeSections: NavItem[] = [
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'academic', label: 'Academic' },
  { id: 'education', label: 'Education' },
]
