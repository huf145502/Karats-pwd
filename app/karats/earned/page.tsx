import { karatsLedger } from "@/lib/data"
import { KaratsLayout } from "@/components/karats-layout"
import { KaratIcon } from "@/components/karat-icon"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { CardContent } from "@/components/ui/card"

export default function KaratsEarnedPage() {
  const earnedTransactions = karatsLedger.filter((t) => t.type === "earned")

  return (
    <KaratsLayout title="Karats Earned" activeTab="earned">
      {/* Coffee Card */}
      <GlassmorphicCard
        className="mb-6 border-2 border-dashed border-amber-300/50"
        gradient="from-amber-100/50 to-amber-50/30"
      >
        <CardContent className="p-4 text-center">
          <div className="text-4xl mb-2">☕</div>
          <h2 className="font-medium text-amber-900">Artisanal coffee</h2>
          <p className="text-sm text-amber-700">for your everyday</p>
          <div className="flex items-center justify-end mt-2">
            <KaratIcon size={16} className="text-amber-600 mr-1" />
            <span className="text-sm text-amber-900 font-medium">300</span>
          </div>
        </CardContent>
      </GlassmorphicCard>

      {/* Info Card */}
      <GlassmorphicCard className="mb-6 border border-blue-200/50" gradient="from-blue-50/50 to-blue-100/30">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">🧊</div>
            <div>
              <h3 className="font-medium text-blue-900">Drip. Drip. Karats</h3>
              <p className="text-sm text-blue-700">Melting —spend now or watch them disappear.</p>
            </div>
          </div>
        </CardContent>
      </GlassmorphicCard>

      {/* Transactions */}
      <div className="space-y-3">
        {earnedTransactions.map((transaction) => (
          <GlassmorphicCard key={transaction.id} gradient="from-white/50 to-white/30">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">
                    {new Date(transaction.date)
                      .toLocaleDateString("en-US", {
                        weekday: "long",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })
                      .replace(",", ", ")}{" "}
                    • {transaction.location}
                  </p>
                  <p className="text-sm text-gray-600">{transaction.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-green-600">+{transaction.amount}</span>
                </div>
              </div>
            </CardContent>
          </GlassmorphicCard>
        ))}
      </div>
    </KaratsLayout>
  )
}
