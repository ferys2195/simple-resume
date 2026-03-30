import { LucideIcon } from "lucide-react"

type Profile = {
  name: string
  about: string
  title: string
  avatarUrl?: string
  contacts: Contact[]
}

type Contact = {
  icon: LucideIcon
  label: string
  url?: string
}

export type { Profile, Contact }
