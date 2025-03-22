"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type GradientButtonProps = {
  text: string
  icon: ReactNode
  iconPosition?: "left" | "right"
  variant?: "blue" | "purple" | "red" | "pink" | "orange" | "gradient"
  onClick?: () => void
  className?: string
  href?: string
}

export function GradientButton({
  text,
  icon,
  iconPosition = "left",
  variant = "blue",
  onClick,
  className,
  href,
}: GradientButtonProps) {
  const variantStyles = {
    blue: "from-blue-500 to-cyan-400",
    purple: "from-purple-500 to-pink-400",
    red: "from-red-600 to-red-500",
    pink: "from-pink-500 to-purple-400",
    orange: "from-orange-500 to-pink-500",
    gradient: "from-pink-500 via-red-500 to-orange-500",
  }

  const variantHoverStyles = {
    blue: "hover-gradient-blue",
    purple: "hover-gradient-purple",
    red: "hover-gradient-red",
    pink: "hover-gradient-pink",
    orange: "hover-gradient-orange",
    gradient: "hover-gradient-multi",
  }

  const iconTextStyles = {
    blue: "text-blue-500",
    purple: "text-purple-500",
    red: "text-red-600",
    pink: "text-pink-500",
    orange: "text-orange-500",
    gradient: "text-pink-500",
  }

  const ButtonContent = () => (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex h-12 items-center overflow-hidden rounded-full shadow-lg transition-all duration-300 relative group",
        className,
      )}
    >
      {/* Background gradient that covers the entire button */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r rounded-full transition-all duration-500",
          variantStyles[variant],
          variantHoverStyles[variant],
        )}
      />

      {/* Animated border effect */}
      <div className="absolute -inset-[1px] rounded-full z-0 bg-transparent overflow-hidden">
        <div
          className={cn(
            "absolute -inset-[3px] rounded-full animate-none group-hover:animate-spin-slow",
            "bg-[length:400%_400%] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            variant === "blue"
              ? "from-blue-300 via-blue-500 to-cyan-400"
              : variant === "purple"
                ? "from-purple-300 via-purple-500 to-pink-400"
                : variant === "red"
                  ? "from-red-300 via-red-600 to-red-500"
                  : variant === "pink"
                    ? "from-pink-300 via-pink-500 to-purple-400"
                    : variant === "orange"
                      ? "from-orange-300 via-orange-500 to-pink-500"
                      : "from-pink-300 via-red-500 to-orange-500",
          )}
        ></div>
      </div>

      {iconPosition === "left" ? (
        <>
          <div className="flex h-full w-12 items-center justify-center rounded-full relative z-10 bg-white/90">
            <div className={cn("text-center", iconTextStyles[variant])}>{icon}</div>
          </div>
          <div className="flex h-full items-center justify-center px-5 font-medium text-white relative z-10">
            {text}
          </div>
        </>
      ) : (
        <>
          <div className="flex h-full items-center justify-center px-5 font-medium text-white relative z-10">
            {text}
          </div>
          <div className="flex h-full w-12 items-center justify-center rounded-full relative z-10 bg-white/90">
            <div className={cn("text-center", iconTextStyles[variant])}>{icon}</div>
          </div>
        </>
      )}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        <ButtonContent />
      </a>
    )
  }

  return (
    <button onClick={onClick} className="focus:outline-none">
      <ButtonContent />
    </button>
  )
}

