"use client"
import { LucideIcon } from "lucide-react"
import React from "react"

interface Props {
  title: string
  icon: LucideIcon
}
export default function TextInfo({ title, icon: Icon }: Props) {
  return (
    <div className="flex items-center space-x-2">
      <Icon className="size-4 text-primary" />
      <span className="text-sm">{title}</span>
    </div>
  )
}
