import { Experience } from "@/types/experience.types"

const experiences: Experience[] = [
  {
    title: "Full-Stack Developer (Freelancer)",
    company: "Self-Employed · Remote",
    period: {
      startDate: new Date(2018, 1), // February 2018
      endDate: new Date(), // Present
    },
    description:
      "Delivered 10+ production web applications for government agencies and educational institutions in West Kalimantan. Worked as sole developer across the full project lifecycle — from requirements gathering and architecture to deployment and handoff.",
    responsibilities: [
      "Delivered 10+ production web apps for government and education clients using Next.js, React, and Laravel",
      "Built role-based dashboards and internal management systems with React, Tailwind CSS, and shadcn/ui",
      "Integrated REST APIs and implemented authentication systems across multiple client projects in production environments",
      "Managed end-to-end delivery as sole developer — from scoping, architecture, to deployment",
    ],
  },
]

export default experiences
