import { Profile } from "@/types/profile.types"
import { differenceInYears } from "date-fns"
import { Mail, MapPin, Phone, Globe } from "lucide-react"

const startExperienceDate = new Date(2022, 0)
const yearsOfExperience = differenceInYears(new Date(), startExperienceDate)

export const profile: Profile = {
  name: "Fery Irawan",
  title: "Full-Stack Laravel & React Developer",
  about: `${yearsOfExperience}+ years of experience as a Frontend-focused developer with strong Backend capabilities, specializing in React.js for interactive user interfaces and Laravel for RESTful API development and system integration. Experienced in building end-to-end web applications and deploying them on VPS/Linux environments.`,
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
