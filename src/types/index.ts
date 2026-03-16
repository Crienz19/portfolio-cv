export interface SkillCategory {
  category: string
  icon: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level: number // 1-5
  levelVisible: boolean
}

export interface WorkExperience {
  id: number
  company: string
  role: string
  period: string
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'freelance'
  description: string
  achievements: string[]
  technologies: string[]
  current: boolean
}

export interface Education {
  id: number
  institution: string
  degree: string
  field: string
  period: string
  location: string
  description?: string
  honors?: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  featured: boolean
  hasFooter?: boolean
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  username: string
}

export interface CvData {
  name: string
  title: string
  subtitle: string
  summary: string
  email: string
  phone: string
  location: string
  availability: string
  profileImage: string
  resumeUrl: string
  stats: { label: string; value: string }[]
  skills: SkillCategory[]
  experience: WorkExperience[]
  education: Education[]
  projects: Project[]
  socials: SocialLink[]
}
