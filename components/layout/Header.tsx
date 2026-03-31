"use client"
import React from "react"
import { Button } from "../ui/button"
import { FileDown } from "lucide-react"
import { ModeToggle } from "../common/ModeToggle"
import ButtonToggleLanguage from "../common/ButtonToggleLanguage"

export default function Header() {
  return (
    <div className="inline-flex w-full items-center justify-between space-y-2">
      <h1
        className="mb-0 cursor-pointer text-xl font-bold uppercase transition-opacity hover:opacity-80"
        onClick={() => window.scrollTo({ top: 0 })}
      >
        Fery Irawan
      </h1>
      <div>
        <ul className="flex items-center gap-4 text-sm font-medium uppercase">
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
            <ButtonToggleLanguage />
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
      </div>
    </div>
  )
}
