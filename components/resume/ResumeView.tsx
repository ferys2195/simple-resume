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
import { profile } from "@/data/profile"

export default function ResumeView() {
  return (
    <div className="w-full space-y-8 p-4">
      <HeaderSection data={profile} />
      <Section title="About Me" icon={User2Icon} id="about">
        <p className="leading-relaxed">{profile.about}</p>
      </Section>
      <Section title="Experience" icon={BriefcaseBusiness} id="experience">
        <ExperienceSection data={experiences} />
      </Section>
      <Section title="Skills" icon={UserRoundKey} id="skills">
        <SkillSection skill={skill} />
      </Section>
      <Section title="Education" icon={Building} id="education">
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
