import { Profile } from "@/types/profile.types"
import { Mail, MapPin, Phone } from "lucide-react"

export const profile: Profile = {
  name: "Fery Irawan",
  title: "Frontend Web Developer (Backend Spesialist)",
  about:
    "PHP / Laravel Developer with 6+ years of experience developing web applications and REST APIs for government institutions and organizations. Experienced in building scalable backend systems using Laravel and MySQL, with strong focus on administrative platforms and database-driven applications.",
  avatarUrl:
    "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
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
  ],
}
