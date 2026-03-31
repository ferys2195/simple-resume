// hooks/useLanguage.ts
import { useLanguageStore } from "@/stores/languageStore"
import { useEffect } from "react"

export function useLanguage(initialLanguage: string = "id") {
  const { lang, toggleLanguage, setLanguage } = useLanguageStore()

  // Optional: Set initial language jika berbeda dari default
  useEffect(() => {
    const currentLang = useLanguageStore.getState().lang
    if (
      currentLang !== initialLanguage &&
      !localStorage.getItem("app-language")
    ) {
      setLanguage(initialLanguage)
    }
  }, [initialLanguage, setLanguage])

  return {
    lang,
    toggleLanguage,
    setLanguage,
  }
}
