"use client"
import React from "react"
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineItem,
  TimelineList,
} from "../../common/Timeline"
import { Experience } from "@/types/experience.types"

interface ExperienceSectionProps {
  data: Experience[]
}
export default function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <div className="mt-6">
      {data.map((experience: Experience, index: number) => (
        <Timeline key={index}>
          <TimelineHeader
            company={experience.company}
            title={experience.title}
            startDate={new Date(experience.period.startDate)}
            endDate={
              experience.period.endDate === "Sekarang"
                ? "Sekarang"
                : new Date(experience.period.endDate)
            }
          />
          <TimelineContent title={experience?.description ?? ""}>
            <TimelineList className="mb-6">
              {experience.responsibilities.map(
                (responsibility: string, idx: number) => (
                  <TimelineItem key={idx}>{responsibility}</TimelineItem>
                )
              )}
            </TimelineList>
          </TimelineContent>
        </Timeline>
      ))}
    </div>
  )
}
