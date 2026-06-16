import { profile } from "@/data/profile"
import experiences from "@/data/experience"
import skill from "@/data/skills"
import { format } from "date-fns"
import { id } from "date-fns/locale"

type TemplateData = {
  nama: string
  title: string
  about: string
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
  pengalaman: {
    posisi: string
    perusahaan: string
    periode: string
    deskripsi: string | null
    tanggungjawab: string[]
  }[]
  skills: {
    kategori: string
    items: { nama: string }[]
  }[]
}

function formatPeriode(
  startDate: Date | string,
  endDate: Date | string
): string {
  const start = new Date(startDate)
  const end = new Date(endDate)

  const startStr = format(start, "MMM yyyy", { locale: id })
  const endStr = format(end, "MMM yyyy", { locale: id })

  return `${startStr} - ${endStr}`
}

export function buildTemplateData(): TemplateData {
  const contacts = profile.contacts

  return {
    nama: profile.name,
    title: profile.title,
    about: profile.about,
    email: contacts.find((c) => c.label.includes("@"))?.label ?? "",
    phone: contacts.find((c) => c.label.startsWith("+"))?.label ?? "",
    location:
      contacts.find((c) => c.label.toLowerCase().includes("kalimantan"))
        ?.label ?? "",
    github:
      contacts.find((c) => c.label.toLowerCase().includes("github"))?.label ??
      "",
    linkedin:
      contacts.find((c) => c.label.toLowerCase().includes("linkedin"))?.label ??
      "",

    pengalaman: experiences.map((exp) => ({
      posisi: exp.title,
      perusahaan: exp.company,
      periode: formatPeriode(exp.period.startDate, exp.period.endDate),
      deskripsi: exp.description ?? null,
      tanggungjawab: exp.responsibilities,
    })),

    skills: skill.map((cat) => ({
      kategori: cat.title,
      items: cat.skills?.map((s) => ({ nama: s.title })) ?? [],
    })),
  }
}
