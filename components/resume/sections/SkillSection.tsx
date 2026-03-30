"use client"

import { Skill } from "@/types/skill.types"
import React from "react"

export default function SkillSection({ skill }: { skill: Skill[] }) {
  return (
    <>
      {skill.map((skill) => (
        <div key={skill.title} className="space-y-2">
          <div className="mb-4 space-y-2">
            <div className="text-lg font-semibold">{skill.title}</div>
            {skill.skills && (
              <div className="flex items-center gap-2">
                {skill.skills.map((subSkill) => (
                  <div
                    className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                    key={subSkill.title}
                  >
                    {subSkill.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  )
}
