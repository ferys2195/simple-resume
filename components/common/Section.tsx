"use client"

import { LucideIcon } from "lucide-react"
import React from "react"
import { Separator } from "../ui/separator"

interface Props extends React.HTMLAttributes<HTMLElement> {
  title: string
  description?: string
  icon?: LucideIcon
  children?: React.ReactNode
}
export default function Section({
  title,
  icon: Icon,
  children,
  ...rest
}: Props) {
  return (
    <section
      className="scroll-mt-24 space-y-2 rounded-xl bg-card p-10 shadow"
      {...rest}
    >
      <div className="flex items-center gap-2.5">
        {Icon && <Icon className="inline-block size-6 text-primary" />}
        <div>
          <h3 className="text-xl font-bold uppercase">{title}</h3>
        </div>
      </div>
      <Separator />
      <div>{children}</div>
    </section>
  )
}
