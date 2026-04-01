import { Experience } from "@/types/experience.types"

const experiences: Experience[] = [
  {
    title: "Full-Stack Developer (Contract/Project Based)",
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
    title: "Full-Stack Developer (Contract/Project Based)",
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
  {
    title: "Backend Developer (Contract/Project Based)",
    company: "Disdukcapil Provinsi Kalimantan Tengah",
    period: {
      startDate: new Date(2023, 3), // January 2020
      endDate: new Date(2023, 5), // December 2023
    },
    responsibilities: [
      "Built REST API services to support government administrative applications",
      "Developed backend services for data exchange between internal systems",
    ],
  },
  {
    title: "Backend Developer (Contract/Project Based)",
    company: "Mal Pelayanan Publik Kabupaten Kotawaringin Timur",
    period: {
      startDate: new Date(2022, 8), // January 2020
      endDate: new Date(2022, 11), // December 2023
    },
    responsibilities: [
      "Developed REST API for visitor queue management system",
      "Built backend services to handle public service request queues",
    ],
  },
  {
    title: "Full-Stack Developer (Contract/Project Based)",
    company: "DPMPTSP Kabupaten Kotawaringin Timur",
    period: {
      startDate: new Date(2022, 0), // January 2020
      endDate: new Date(2022, 4), // December 2023
    },
    responsibilities: [
      "Rebuilt government service website using Laravel framewor",
      "Implemented administrative modules for licensing and service management",
    ],
  },
]

export default experiences
