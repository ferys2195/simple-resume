import React from "react"
import { Card, CardContent } from "../../ui/card"
import { Mail, MapPin, Phone, User2Icon } from "lucide-react"
import TextInfo from "../../common/TextInfo"

export default function HeaderSection() {
  return (
    <Card className="shadow ring-0">
      <CardContent>
        <div className="flex items-center justify-between p-4">
          <div className="flex-1/4">
            <div className="flex size-40 items-center justify-center rounded-full bg-primary/25 ring-4 ring-accent">
              <User2Icon className="size-18 text-primary" />
            </div>
          </div>
          <div className="flex-3/4 space-y-2">
            <h2 className="text-4xl font-bold uppercase">Fery Irawan</h2>
            <p className="text-lg text-primary">
              Senior Web Developer (Backend Spesialist)
            </p>
            <div className="grid grid-cols-2 gap-2.5">
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
