import React from "react"
import { Card, CardContent } from "../../ui/card"
import { Mail, MapPin, Phone, User2Icon } from "lucide-react"
import TextInfo from "../../common/TextInfo"

export default function HeaderSection() {
  return (
    <Card className="shadow ring-0">
      <CardContent>
        <div className="flex flex-col items-center gap-2.5 p-4 lg:flex-row lg:justify-between">
          <div className="lg:flex-1/4">
            <div className="flex size-40 items-center justify-center rounded-full bg-primary/25 ring-4 ring-accent">
              <User2Icon className="size-18 text-primary" />
            </div>
          </div>
          <div className="space-y-2 text-center lg:flex-3/4 lg:text-left">
            <h2 className="mb-0 text-4xl font-bold uppercase">Fery Irawan</h2>
            <p className="mb-0 border-b text-[16px] text-primary lg:border-0 lg:text-lg">
              Frontend Web Developer (Backend Spesialist)
            </p>
            <div className="mt-2 grid gap-2.5 lg:grid-cols-2">
              <TextInfo title="ferys2195@gmail.com" icon={Mail} />
              <TextInfo title="+62 812 3456 7890" icon={Phone} />
              <TextInfo title="Kalimantan Tengah, Indonesia" icon={MapPin} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
