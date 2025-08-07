import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { PWA } from "./pwa"
import ConditionalLayout from "@/components/conditional-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Karats - Loyalty Rewards",
  description: "Loyalty rewards system for partner cafes",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["loyalty", "rewards", "cafe", "coffee", "karats"],
  authors: [{ name: "Karats Team" }],
  icons: {
    icon: "/icon-512x512.png",
    shortcut: "/icon-192x192.png",
    apple: "/icon-192x192.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#6B46C1",
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Karats" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.className} bg-black`}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <PWA />
      </body>
    </html>
  )
}
