import { create } from "zustand"
import { persist } from "zustand/middleware"

interface LanguageState {
  lang: string
  toggleLanguage: () => void
  setLanguage: (lang: string) => void
}

export const useLanguageStore = create<LanguageState>()((set, get) => ({
  lang: "id",
  toggleLanguage: () => {
    const newLang = get().lang === "id" ? "en" : "id"
    set({ lang: newLang })
    // Manual save to localStorage as plain string
    localStorage.setItem("app-language", newLang)
  },
  setLanguage: (lang) => {
    set({ lang })
    localStorage.setItem("app-language", lang)
  },
}))

// Initialize from localStorage
if (typeof window !== "undefined") {
  const savedLang = localStorage.getItem("app-language")
  if (savedLang && (savedLang === "id" || savedLang === "en")) {
    useLanguageStore.setState({ lang: savedLang })
  }
}
