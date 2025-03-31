import type React from "react"
import type { Metadata } from "next"
import { Outfit, Fira_Code } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/hooks/use-language"
import { ThemeProvider as ColorThemeProvider } from "@/hooks/use-theme"

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
  generator: "Next.Js",
  icons: {
    icon: "/assets/mongo-db.png",
    shortcut: "/assets/mongo-db.png",
    apple: "/assets/mongo-db.png",
  },
  metadataBase: new URL("https://www.kiman.id.vn"), // URL chính thức của bạn
  openGraph: {
    type: "website",
    url: "https://www.kiman.id.vn",
    title: "Vũ Kim An | Backend Developer",
    description: "Portfolio of Vũ Kim An, a Backend Developer specializing in Node.js, NestJS, and more.",
    images: [
      {
        url: "/assets/avatar.jpg", // Ảnh đại diện khi chia sẻ
        width: 1000,
        height: 1000,
        alt: "Vũ Kim An - Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter", // Thay bằng Twitter handle của bạn
    title: "Vũ Kim An | Backend Developer",
    description: "Portfolio of Vũ Kim An, a Backend Developer specializing in Node.js, NestJS, and more.",
    images: ["https://www.kiman.id.vn/assets/og-image.jpg"],
  },
  robots: "index, follow", // Yêu cầu Google index trang web
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${firaCode.variable}`}>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ColorThemeProvider>
            <LanguageProvider>{children}</LanguageProvider>
          </ColorThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'