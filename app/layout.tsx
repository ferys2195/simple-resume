import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Header from "@/components/layout/Header"
import PrintResume from "@/components/resume/print/PrintResume"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>
          <header className="sticky top-0 z-10 mx-auto w-full bg-background p-4 xl:max-w-3/5 2xl:max-w-1/2">
            <Header />
          </header>
          <main
            id="resume-export"
            className="mx-auto xl:max-w-3/5 2xl:max-w-1/2"
          >
            {children}
          </main>
          <PrintResume />
        </ThemeProvider>
      </body>
    </html>
  )
}
