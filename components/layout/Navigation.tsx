import React from "react"
import { ModeToggle } from "../common/ModeToggle"
import { Button } from "../ui/button"
import { FileDown, Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import { Separator } from "../ui/separator"

export default function Navigation() {
  return (
    <>
      <ul className="hidden items-center gap-4 text-sm font-medium uppercase lg:flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <ModeToggle />
        </li>
        <li>
          <Button size={"lg"}>
            <FileDown />
            Download CV
          </Button>
        </li>
      </ul>
      <div className="flex items-center justify-end gap-2 lg:hidden">
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button data-slot="button" size={"lg"} variant={"outline"}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="border-b">
              <SheetTitle className="m-0 text-xl font-bold">
                FERY IRAWAN
              </SheetTitle>
              <SheetDescription>Full Stack Laravel & React</SheetDescription>
            </SheetHeader>
            <div className="px-6">
              <ul className="mb-5 space-y-2.5 text-sm font-medium uppercase">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#education">Education</a>
                </li>
              </ul>
              <Separator orientation="horizontal" className="my-5" />
              <Button className="w-full" size={"lg"}>
                <FileDown />
                Download CV
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
