"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-white/70 backdrop-blur-md border-white/20 shadow-xl">
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
          <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
          <div className="space-y-3">
            <Link href="/dashboard">
              <Button className="w-full bg-purple-600/90 hover:bg-purple-700/90 backdrop-blur-sm">
                <Home size={16} className="mr-2" />
                Go to Dashboard
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="w-full bg-white/50 backdrop-blur-sm border-white/30"
            >
              <ArrowLeft size={16} className="mr-2" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
