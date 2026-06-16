import { Profile } from "@/types/profile.types"
import { differenceInYears } from "date-fns"
import { Mail, MapPin, Phone, Globe } from "lucide-react"

const startExperienceDate = new Date(2022, 0)
const yearsOfExperience = differenceInYears(new Date(), startExperienceDate)

export const profile: Profile = {
  name: "Fery Irawan",
  title: "Full-Stack Developer",
  about: `Fullstack developer with ${yearsOfExperience}+ years building end-to-end web applications — from backend APIs and database design to responsive frontends. Experienced working independently on government and institutional projects. Currently exploring AI-powered product development with focus on RAG systems and LLM integration.`,
  avatarUrl: "/avatar.svg",
  contacts: [
    {
      icon: Mail,
      label: "ferys2195@gmail.com",
      url: "mailto:ferys2195@gmail.com",
    },
    {
      icon: Phone,
      label: "+62 822 3406 8387",
      url: "https://wa.me/6282234068387",
    },
    {
      icon: MapPin,
      label: "Kalimantan Tengah, Indonesia",
      url: "https://maps.app.goo.gl/ynHcdSgANF8db6Bg9",
    },
    {
      icon: Globe,
      label: "github.com/ferys2195",
      url: "https://github.com/ferys2195",
    },
    {
      icon: Globe,
      label: "linkedin.com/in/ferys2195",
      url: "https://linkedin.com/in/ferys2195",
    },
  ],
}
