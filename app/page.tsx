import { Button } from "@/components/ui/button"
import ResumeView from "@/components/resume/ResumeView"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fery Irawan - Resume Website",
  description: "Welcome to my personal website!",
}
export default function Page() {
  return <ResumeView />
}
