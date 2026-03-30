import { Experience } from "@/types/experience.types"

const experiences: Experience[] = [
  {
    title: "Software Engineer (Contract/Project Based)",
    company: "Disdukcapil Provinsi Kalimantan Tengah",
    period: {
      startDate: new Date(2025, 8), // January 2020
      endDate: new Date(2025, 10), // December 2023
    },
    description:
      "Build a web-based public information service platform to enhance government transparency and public access to information. The platform provides a user-friendly interface for citizens to access various public services and information related to civil registration and population data. The project involves developing backend features for content management, information dissemination, and user engagement, ensuring a seamless experience for both administrators and end-users.",
    responsibilities: [
      "Developed public information service platform for government transparency",
      "Implemented backend features for content and information management",
    ],
  },
  {
    title: "Software Engineer (Contract/Project Based)",
    company: "SDIT Imam Syafii Sampit",
    period: {
      startDate: new Date(2025, 2), // January 2020
      endDate: new Date(2025, 6), // December 2023
    },
    responsibilities: [
      "Developed school management system to manage student placement and academic administration",
      "Designed relational database structure for academic data management",
    ],
  },
]

export default experiences
