"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-white/70 backdrop-blur-md border-white/20 shadow-xl">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong!</h1>
          <p className="text-gray-600 mb-6">An unexpected error occurred. Please try again.</p>
          <div className="space-y-3">
            <Button onClick={reset} className="w-full bg-red-600/90 hover:bg-red-700/90 backdrop-blur-sm">
              <RefreshCw size={16} className="mr-2" />
              Try Again
            </Button>
            <Link href="/dashboard">
              <Button variant="outline" className="w-full bg-white/50 backdrop-blur-sm border-white/30">
                <Home size={16} className="mr-2" />
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
