"use client"

import React from "react"
import { profile } from "@/data/profile"
import experiences from "@/data/experience"
import skill from "@/data/skills"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import { Experience } from "@/types/experience.types"
import { Skill } from "@/types/skill.types"

function formateDate(date: Date | string) {
  if (typeof date === "string") {
    return date.toString()
  }
  return format(date, "MMM yyyy", { locale: id })
}

export default function PrintResume() {
  const data = profile

  return (
    <div className="print-resume">
      {/* Header */}
      <div className="print-header">
        <h1 className="print-name">{data.name}</h1>
        <p className="print-title">PHP / Laravel Developer</p>
        <div className="print-contacts">
          <span>Kalimantan Tengah, Indonesia</span>
          <span>+62 822 3406 8387</span>
          <span>ferys2195@gmail.com</span>
          <span>github.com/farys2195</span>
          <span>linkedin.com/in/farys2195</span>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="print-section">
        <h2 className="print-section-title">Professional Summary</h2>
        <p className="print-text">{data.about}</p>
      </section>

      {/* Technical Skills */}
      <section className="print-section">
        <h2 className="print-section-title">Technical Skills</h2>
        <div className="print-skills">
          {(skill as Skill[]).map((group) => (
            <div key={group.title} className="print-skills-group">
              <span className="print-skills-label">{group.title} : </span>
              <span className="print-skills-list">
                {group.skills?.map((s, i) => (
                  <span key={s.title}>
                    {s.title}
                    {i < (group.skills?.length ?? 0) - 1 ? ", " : ""}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="print-section">
        <h2 className="print-section-title">Professional Experience</h2>
        {experiences.map((exp: Experience, i: number) => (
          <div key={i} className="print-experience-item">
            <div className="print-experience-header">
              <span className="print-experience-title">{exp.title}</span>
              <span className="print-experience-date">
                {formateDate(exp.period.startDate)} -{" "}
                {exp.period.endDate === "Sekarang"
                  ? "Present"
                  : formateDate(exp.period.endDate)}
              </span>
            </div>
            <div className="print-experience-company">{exp.company}</div>
            <ul className="print-experience-list">
              {exp.responsibilities.map((resp, j) => (
                <li key={j}>{resp}</li>
              ))}
            </ul>
            {exp.description && (
              <div className="print-experience-techstack">
                <span className="print-techstack-label">Tech stack : </span>
                <span>Laravel, MySQL, Inertia, React.js, Tailwind CSS</span>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="print-section">
        <h2 className="print-section-title">Education</h2>
        <div className="print-experience-item">
          <div className="print-experience-header">
            <span className="print-experience-title">S1 Sistem Informasi</span>
            <span className="print-experience-date">Sep 2013 - Okt 2017</span>
          </div>
          <div className="print-experience-company">
            Universitas Darwan Ali Sampit
          </div>
        </div>
      </section>
    </div>
  )
}
