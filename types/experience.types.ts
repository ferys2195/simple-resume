type Experience = {
  title: string
  company: string
  period: Period
  description?: string
  responsibilities: string[]
  techStack?: TechStack[]
}

type Period = {
  startDate: Date | string
  endDate: Date | string
}

type TechStack = {
  name: string
}

export type { Experience, Period, TechStack }
