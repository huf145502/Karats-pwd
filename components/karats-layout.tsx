import type React from "react"
import { TopNav } from "@/components/top-nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface KaratsLayoutProps {
  children: React.ReactNode
  title: string
  activeTab: "earned" | "spent" | "frozen"
}

export function KaratsLayout({ children, title, activeTab }: KaratsLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50 pt-24 pb-6">
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Filter Tabs */}
        <div className="flex space-x-1 mb-6 bg-white/30 backdrop-blur-sm rounded-lg p-1 shadow-sm">
          <Link href="/karats/earned" className="flex-1">
            <Button
              variant={activeTab === "earned" ? "default" : "ghost"}
              size="sm"
              className={`w-full transition-all duration-200 ${
                activeTab === "earned"
                  ? "bg-white/90 text-gray-900 shadow-sm"
                  : "text-gray-600 hover:bg-white/50 hover:text-gray-900"
              }`}
            >
              Earned
            </Button>
          </Link>
          <Link href="/karats/spent" className="flex-1">
            <Button
              variant={activeTab === "spent" ? "default" : "ghost"}
              size="sm"
              className={`w-full transition-all duration-200 ${
                activeTab === "spent"
                  ? "bg-white/90 text-gray-900 shadow-sm"
                  : "text-gray-600 hover:bg-white/50 hover:text-gray-900"
              }`}
            >
              Claimed
            </Button>
          </Link>
          <Link href="/karats/frozen" className="flex-1">
            <Button
              variant={activeTab === "frozen" ? "default" : "ghost"}
              size="sm"
              className={`w-full transition-all duration-200 ${
                activeTab === "frozen"
                  ? "bg-white/90 text-gray-900 shadow-sm"
                  : "text-gray-600 hover:bg-white/50 hover:text-gray-900"
              }`}
            >
              Freezing
            </Button>
          </Link>
        </div>

        {children}
      </div>
      <TopNav />
    </div>
  )
}
