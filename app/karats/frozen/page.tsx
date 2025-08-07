import { KaratsLayout } from "@/components/karats-layout"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function KaratsFrozenPage() {
  return (
    <KaratsLayout title="Karats Frozen" activeTab="frozen">
      {/* Empty State */}
      <GlassmorphicCard gradient="from-white/50 to-white/30">
        <CardContent className="p-12 text-center">
          <div className="text-6xl mb-4">🧊</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">No Frozen Karats</h2>
          <p className="text-gray-600 mb-6">Your karats are safe and sound! Keep earning to build your rewards.</p>
          <Link href="/dashboard">
            <Button className="bg-purple-600/90 hover:bg-purple-700/90 backdrop-blur-sm">Start Earning</Button>
          </Link>
        </CardContent>
      </GlassmorphicCard>
    </KaratsLayout>
  )
}
