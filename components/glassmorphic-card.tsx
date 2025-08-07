import type React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface GlassmorphicCardProps {
  children: React.ReactNode
  className?: string
  gradient?: string
}

export function GlassmorphicCard({
  children,
  className,
  gradient = "from-white/20 to-white/10",
}: GlassmorphicCardProps) {
  return (
    <Card className={cn("bg-gradient-to-br backdrop-blur-md border-white/20 shadow-xl", gradient, className)}>
      {children}
    </Card>
  )
}
