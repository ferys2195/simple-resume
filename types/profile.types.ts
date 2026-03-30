import { LucideIcon } from "lucide-react"

type Profile = {
  name: string
  about: string
  title: string
  avatarUrl?: string
  link: Link[]
}

type Link = {
  icon: LucideIcon
  label: string
  url?: string
}

export type { Profile, Link }
