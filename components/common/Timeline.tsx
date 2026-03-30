"use client"

import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import React from "react"

function formateDate(date: Date | string) {
  if (typeof date === "string") {
    return date.toString()
  }
  return format(date, "MMM yyyy", { locale: id })
}

function Timeline({ children }: React.ComponentProps<"div">) {
  return (
    <div className="relative border-l border-l-secondary pl-6">
      <div className="absolute top-2 -left-1.5 size-2.5 rounded-full bg-primary" />
      <div className="space-y-6">{children}</div>
    </div>
  )
}

function TimelineHeader({
  company,
  title,
  startDate,
  endDate,
}: {
  company: string
  title: string
  startDate: Date
  endDate?: Date | string
}) {
  return (
    <div className="flex justify-between">
      <div>
        <div className="text-lg font-semibold">{title}</div>
        <div className="font-medium text-primary">{company}</div>
      </div>
      <div>
        <div className="rounded bg-muted px-2 py-1 text-sm font-medium text-primary">
          {formateDate(startDate)} -{" "}
          {(endDate && formateDate(endDate)) || "Sekarang"}
        </div>
      </div>
    </div>
  )
}

function TimelineContent({
  title,
  className,
  children,
}: {
  title?: string
  className?: React.ComponentProps<"div">["className"]
  children: React.ComponentProps<"div">["children"]
}) {
  return (
    <div
      className={cn("mt-4 block space-y-2.5 text-muted-foreground", className)}
    >
      {title && <div>{title}</div>}
      {children}
    </div>
  )
}

function TimelineList({ className, ...props }: React.ComponentProps<"ul">) {
  return <ul className={cn("list-disc pl-5", className)} {...props} />
}
function TimelineItem({ className, ...props }: React.ComponentProps<"li">) {
  return <li className={className} {...props} />
}

export { Timeline, TimelineHeader, TimelineContent, TimelineList, TimelineItem }
