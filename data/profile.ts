import { Profile } from "@/types/profile.types"
import { differenceInYears } from "date-fns"
import { Mail, MapPin, Phone } from "lucide-react"

const startExperienceDate = new Date(2022, 0)
const yearsOfExperience = differenceInYears(new Date(), startExperienceDate)

export const profile: Profile = {
  name: "Fery Irawan",
  title: "Full-Stack Laravel & React Developer",
  about: `${yearsOfExperience}+ years of experience in building end-to-end web applications using Laravel and React, with practical deployment experience on VPS/Linux environments.`,
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
