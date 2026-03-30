import { Profile } from "@/types/profile.types"
import { Mail, MapPin, Phone } from "lucide-react"

export const profile: Profile = {
  name: "Fery Irawan",
  title: "Frontend Web Developer (Backend Spesialist)",
  about:
    "Pengembang Web dengan pengalaman lebih dari 6 tahun yang berfokus pada pengembangan backend menggunakan ekosistem PHP dan Laravel. Memiliki rekam jejak yang kuat dalam membangun sistem informasi birokrasi, administrasi pemerintahan, dan layanan publik yang skalabel serta aman. Berpengalaman dalam mengelola seluruh siklus hidup pengembangan perangkat lunak (SDLC), mulai dari perancangan database hingga deployment server.",
  avatarUrl:
    "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
  link: [
    {
      icon: Mail,
      label: "ferys2195@gmail.com",
      url: "mailto:ferys2195@gmail.com",
    },
    {
      icon: Phone,
      label: "+62 812 3456 7890",
      url: "tel:+6281234567890",
    },
    {
      icon: MapPin,
      label: "Kalimantan Tengah, Indonesia",
    },
  ],
}
