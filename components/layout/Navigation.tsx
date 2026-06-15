import React, { useState } from "react"
import { ModeToggle } from "../common/ModeToggle"
import { Button } from "../ui/button"
import { FileDown, Menu, FileText, FileImage, FileCode } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import { Separator } from "../ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { exportToPDF, exportToPNG, downloadDocx } from "@/lib/export"

export default function Navigation() {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  const links = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Experience",
      href: "#experience",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Education",
      href: "#education",
    },
  ]

  return (
    <>
      <ul className="hidden items-center gap-4 text-sm font-medium uppercase lg:flex">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
        <li>
          <ModeToggle />
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size={"lg"}>
                <FileDown />
                Download CV
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={downloadDocx}
                className="cursor-pointer"
              >
                <FileCode className="mr-2 h-4 w-4" />
                Download DOCX
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={exportToPDF}
                className="cursor-pointer"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download PDF
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={exportToPNG}
                className="cursor-pointer"
              >
                <FileImage className="mr-2 h-4 w-4" />
                Download PNG
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>

      <div className="flex items-center justify-end gap-2 lg:hidden">
        <ModeToggle />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size={"lg"} variant={"outline"}>
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent className="duration-300 ease-in-out">
            <SheetHeader className="border-b">
              <SheetTitle className="m-0 text-xl font-bold">
                FERY IRAWAN
              </SheetTitle>
              <SheetDescription>Full Stack Laravel & React</SheetDescription>
            </SheetHeader>

            <div>
              <ul className="space-y-0.5 text-sm font-medium uppercase">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleClose}
                      className="inline-block w-full px-4 py-1.5 hover:bg-accent/50"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2.5 px-4">
              <Separator orientation="horizontal" className="mb-4" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-full" size={"lg"}>
                    <FileDown />
                    Download CV
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
                  <DropdownMenuItem
                    onClick={() => {
                      downloadDocx()
                      handleClose()
                    }}
                    className="cursor-pointer"
                  >
                    <FileCode className="mr-2 h-4 w-4" />
                    Download DOCX
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      exportToPDF()
                      handleClose()
                    }}
                    className="cursor-pointer"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Download PDF
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      exportToPNG()
                      handleClose()
                    }}
                    className="cursor-pointer"
                  >
                    <FileImage className="mr-2 h-4 w-4" />
                    Download PNG
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
