"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

// Define available color schemes
export type ColorScheme =
  | "blue" // Default blue theme
  | "purple"
  | "green"
  | "orange"
  | "pink"
  | "monochrome" // Black and white theme
  | "dark-contrast" // High contrast dark theme
  | "light-contrast" // High contrast light theme

type ThemeContextType = {
  colorScheme: ColorScheme
  setColorScheme: (scheme: ColorScheme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Color scheme configurations
const colorSchemes: Record<ColorScheme, Record<string, string>> = {
  blue: {
    // Default blue theme (already in CSS)
    "--primary-hue": "217",
    "--primary-saturation": "91%",
    "--primary-lightness": "60%",
    "--background-dark": "rgba(5, 10, 24, 1)",
    "--background-light": "rgba(13, 25, 48, 1)",
  },
  purple: {
    "--primary-hue": "270",
    "--primary-saturation": "76%",
    "--primary-lightness": "60%",
    "--background-dark": "rgba(10, 5, 24, 1)",
    "--background-light": "rgba(25, 13, 48, 1)",
  },
  green: {
    "--primary-hue": "142",
    "--primary-saturation": "76%",
    "--primary-lightness": "45%",
    "--background-dark": "rgba(5, 24, 10, 1)",
    "--background-light": "rgba(13, 48, 25, 1)",
  },
  orange: {
    "--primary-hue": "25",
    "--primary-saturation": "95%",
    "--primary-lightness": "55%",
    "--background-dark": "rgba(24, 10, 5, 1)",
    "--background-light": "rgba(48, 25, 13, 1)",
  },
  pink: {
    "--primary-hue": "330",
    "--primary-saturation": "85%",
    "--primary-lightness": "60%",
    "--background-dark": "rgba(24, 5, 15, 1)",
    "--background-light": "rgba(48, 13, 30, 1)",
  },
  monochrome: {
    "--primary-hue": "0",
    "--primary-saturation": "0%",
    "--primary-lightness": "70%",
    "--background-dark": "rgba(10, 10, 10, 1)",
    "--background-light": "rgba(25, 25, 25, 1)",
  },
  "dark-contrast": {
    "--primary-hue": "60",
    "--primary-saturation": "100%",
    "--primary-lightness": "50%",
    "--background-dark": "rgba(0, 0, 0, 1)",
    "--background-light": "rgba(10, 10, 10, 1)",
  },
  "light-contrast": {
    "--primary-hue": "220",
    "--primary-saturation": "100%",
    "--primary-lightness": "40%",
    "--background-dark": "rgba(240, 240, 240, 1)",
    "--background-light": "rgba(255, 255, 255, 1)",
  },
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>("blue")

  // Load color scheme preference from localStorage on mount
  useEffect(() => {
    const savedScheme = localStorage.getItem("colorScheme") as ColorScheme
    if (savedScheme && Object.keys(colorSchemes).includes(savedScheme)) {
      setColorSchemeState(savedScheme)
      applyColorScheme(savedScheme)
    }
  }, [])

  // Apply color scheme to document root
  const applyColorScheme = (scheme: ColorScheme) => {
    const root = document.documentElement
    const colors = colorSchemes[scheme]

    // Apply CSS variables
    Object.entries(colors).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })

    // Special case for light-contrast theme - add light class to body
    if (scheme === "light-contrast") {
      document.body.classList.add("light-theme")
    } else {
      document.body.classList.remove("light-theme")
    }
  }

  // Save color scheme preference to localStorage when changed
  const setColorScheme = (scheme: ColorScheme) => {
    setColorSchemeState(scheme)
    localStorage.setItem("colorScheme", scheme)
    applyColorScheme(scheme)
  }

  return <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

