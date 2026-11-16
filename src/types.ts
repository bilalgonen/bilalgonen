export interface Project {
  id: string
  name: string
  tagline: string
  summary: string[]
  highlights: string[]
  tech: string[]
  demoUrl?: string
  sourceUrl?: string
}

export interface ExperienceItem {
  id: string
  period: string
  role: string
  org: string
  location?: string
  description: string
  current?: boolean
}

export interface Certificate {
  id: string
  code: string
  name: string
  issuer: string
  url: string
  pdfUrl?: string
  examBadgeUrl?: string
}

export interface SkillGroup {
  id: string
  label: string
  items: string[]
}

export interface EducationItem {
  id: string
  degree: string
  school: string
  date: string
}

export interface NavItem {
  id: string
  label: string
}
