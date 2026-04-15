export interface Section {
  name: string
  link?: string
  items: string[]
}

export interface Project {
  title: string
  period: string
  description: string
  role: string
  team: string
  github?: string
  sections: Section[]
  techs: string[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Award {
  title: string
  date: string
  organizer: string
  description?: string
}

export interface Activity {
  title: string
  period: string
  description: string | null
  tooltip: string | null
}

export interface ResumeData {
  projects: Project[]
  skillGroups: SkillGroup[]
  awards: Award[]
  activities: Activity[]
}

export interface VariantMeta {
  company: string
  role: string
  createdAt: string
  changes: string[]
}

export interface ResumeVariant {
  meta: VariantMeta
  data: ResumeData
}
