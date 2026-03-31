import { Card, CardContent } from "../../ui/card"
import TextInfo from "../../common/TextInfo"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Contact, Profile } from "@/types/profile.types"
import { useInitials } from "@/hooks/useInitials"

export default function HeaderSection({ data }: { data: Profile }) {
  const { getInitialsFromName } = useInitials()
  return (
    <Card className="shadow ring-0">
      <CardContent>
        <div className="flex flex-col items-center gap-4 p-4 lg:flex-row lg:justify-between">
          <div className="lg:flex-1/4">
            <Avatar className="flex size-40 items-center justify-center rounded-full bg-primary/25 ring-4 ring-accent">
              {data.avatarUrl ? (
                <AvatarImage src={data.avatarUrl} alt="Profile Image" />
              ) : (
                <AvatarFallback className="text-3xl font-bold uppercase">
                  {getInitialsFromName(data.name)}
                </AvatarFallback>
              )}
            </Avatar>
          </div>
          <div className="space-y-2 text-center lg:flex-3/4 lg:text-left">
            <h2 className="mb-0 text-4xl font-bold uppercase">{data.name}</h2>
            <p className="mb-0 border-b text-[16px] text-primary lg:border-0 lg:text-lg">
              {data.title}
            </p>
            <div className="mt-2 grid gap-2.5 lg:grid-cols-2">
              {data.contacts.map((contact: Contact, index: number) => (
                <div key={index}>
                  {contact.url ? (
                    <a
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TextInfo icon={contact.icon} title={contact.label} />
                    </a>
                  ) : (
                    <TextInfo icon={contact.icon} title={contact.label} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
