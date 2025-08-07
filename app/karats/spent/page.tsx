import { karatsLedger } from "@/lib/data"
import { KaratsLayout } from "@/components/karats-layout"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { KaratsLedgerItem } from "@/lib/types"
import TopNav from "@/components/navbar"

export default function KaratsSpentPage() {
  const spentTransactions = karatsLedger.filter(
    (t: KaratsLedgerItem) => t.type === "claimed"
  )

  return (
    <KaratsLayout title="Karats Spent" activeTab="spent">
      {spentTransactions.length === 0 ? (
        /* Empty State */
        <GlassmorphicCard gradient="from-white/50 to-white/30">
          <CardContent className="p-12 text-center">
            <div className="text-6xl mb-4">💎</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">No Karats Spent Yet</h2>
            <p className="text-gray-600 mb-6">Start redeeming rewards to see your spending history here.</p>
            <Link href="/dashboard">
              <Button className="bg-purple-600/90 hover:bg-purple-700/90 backdrop-blur-sm">Explore Rewards</Button>
            </Link>
          </CardContent>
        </GlassmorphicCard>
      ) : (
        /* Transactions List */
        <div className="space-y-3">
          {spentTransactions.map((transaction: KaratsLedgerItem) => (
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
                      • {transaction.brand}
                    </p>
                    <p className="text-sm text-gray-600">{transaction.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-red-600">{transaction.karats}</span>
                  </div>
                </div>
              </CardContent>
            </GlassmorphicCard>
          ))}
        </div>
      )}
    </KaratsLayout>
  )
}