// components/ButtonToggleLanguage.tsx
import React from "react"
import { Button } from "../ui/button"
import { useLanguage } from "@/hooks/useLanguage"

export default function ButtonToggleLanguage() {
  const { lang, toggleLanguage } = useLanguage()

  return (
    <Button
      size={"icon"}
      variant={"outline"}
      className="cursor-pointer"
      onClick={toggleLanguage}
    >
      {lang.toUpperCase()}
    </Button>
  )
}
