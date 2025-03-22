import type React from "react"
import type { Metadata } from "next"
import { Outfit, Fira_Code } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Primary font for headings and UI
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

// Monospace font for code and technical elements
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vũ Kim An | Backend Developer",
  description: "Portfolio of Vũ Kim An, a Backend Developer specializing in Node.js, NestJS, and more.",
  generator: 'v0.dev',
  icons: {
    icon: "/assets/mongo-db.png",
    shortcut:"/assets/mongo-db.png", 
    apple: "/assets/mongo-db.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${firaCode.variable}`}>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'