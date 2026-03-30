"use client"
import React from "react"
import HeaderSection from "./sections/HeaderSection"
import Section from "../common/Section"
import {
  BriefcaseBusiness,
  Building,
  User2Icon,
  UserRoundKey,
} from "lucide-react"
import experiences from "@/data/experience"
import { Timeline, TimelineHeader } from "../common/Timeline"
import ExperienceSection from "./sections/ExperienceSection"
import skill from "@/data/skills"
import SkillSection from "./sections/SkillSection"

export default function ResumeView() {
  return (
    <div className="mx-auto w-full space-y-8 py-4 lg:max-w-1/2">
      <HeaderSection />
      <Section title="Professional Profile" icon={User2Icon}>
        <p className="leading-relaxed">
          Pengembang Web dengan pengalaman lebih dari 6 tahun yang berfokus pada
          pengembangan backend menggunakan ekosistem PHP dan Laravel. Memiliki
          rekam jejak yang kuat dalam membangun sistem informasi birokrasi,
          administrasi pemerintahan, dan layanan publik yang skalabel serta
          aman. Berpengalaman dalam mengelola seluruh siklus hidup pengembangan
          perangkat lunak (SDLC), mulai dari perancangan database hingga
          deployment server.
        </p>
      </Section>
      <Section title="Experience" icon={BriefcaseBusiness}>
        <ExperienceSection data={experiences} />
      </Section>
      <Section title="Skills" icon={UserRoundKey}>
        <SkillSection skill={skill} />
      </Section>
      <Section title="Education" icon={Building}>
        <Timeline>
          <TimelineHeader
            company={"Universitas Darwan Ali Sampit"}
            title={"S1 Sistem Informasi"}
            startDate={new Date(2013, 8)} // September 2013
            endDate={
              new Date(2017, 10) // Oktober 2017
            }
          />
        </Timeline>
      </Section>
    </div>
  )
}
