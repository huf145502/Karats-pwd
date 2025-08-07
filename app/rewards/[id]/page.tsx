import { brands } from "@/lib/data";
import TopNav from "@/components/navbar";
import { KaratIcon } from "@/components/karat-icon";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Brand, Reward } from "@/lib/types";
import Image from "next/image";

interface RewardPageProps {
  params: {
    id: string;
  };
}

export default function RewardPage({ params }: RewardPageProps) {
  let reward: Reward | undefined;
  let brand: Brand | undefined;

  for (const b of brands) {
    const foundReward = b.rewards.find((r: Reward) => r.id === params.id);
    if (foundReward) {
      reward = foundReward;
      brand = b;
      break;
    }
  }

  if (!reward || !brand) {
    notFound();
  }

  const isLocked = brand.karats < reward.karats;

  return (
    <div className="min-h-screen bg-[#F5F1E8] pt-24 pb-6">
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href={`/brands/${brand.id}`}>
            <Button variant="ghost" size="sm" className="bg-white/50 backdrop-blur-sm hover:bg-white/70">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-medium text-gray-900">MAÑANA</span>
            <div className="w-6 h-6 bg-purple-600 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 border border-white rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Reward Card */}
        <div className="relative rounded-2xl bg-gradient-to-br from-purple-900 to-purple-800 p-6 border-2 border-dashed border-white/30 shadow-xl mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-white/90 font-medium text-lg tracking-wide">MAÑANA CIRCLE</span>
              <div className="w-4 h-4 bg-cyan-400 rounded-sm"></div>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="bg-gradient-to-r from-teal-400 via-green-400 to-orange-400 rounded-full p-0.5 shadow-inner">
            <div className="bg-gradient-to-r from-teal-400 via-green-400 to-orange-400 rounded-full h-8 flex items-center justify-end pr-4">
              <div className="flex items-center space-x-1">
                <KaratIcon size={16} className="text-amber-900" />
                <span className="text-amber-900 font-bold text-lg">{brand.karats}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reward Details Card */}
        {isLocked ? (
          <div className="relative rounded-2xl bg-gradient-to-br from-purple-900 to-purple-800 p-6 border-2 border-dashed border-white/30 shadow-xl">
            <div className="text-center">
              <p className="text-white/60 text-sm mb-2">Unlock reward</p>
              <h1 className="text-2xl font-bold text-white mb-4">{reward.name}</h1>

              <div className="flex items-center justify-center space-x-2 mb-6">
                <span className="text-white/80">Locked</span>
                <Lock size={16} className="text-white/80" />
              </div>

              {/* Telescope illustration with stars */}
              <div className="relative mb-6 h-16 flex items-center justify-center">
                <div className="text-white/20">
                  {/* Stars scattered around */}
                  <div className="absolute -top-4 left-8 text-sm">✦</div>
                  <div className="absolute -top-2 right-12 text-xs">✧</div>
                  <div className="absolute top-2 -right-4 text-sm">✦</div>
                  <div className="absolute top-6 left-4 text-xs">✧</div>
                  <div className="absolute top-8 right-8 text-sm">✦</div>
                  <div className="absolute -bottom-2 left-12 text-xs">✧</div>
                  <div className="absolute bottom-0 right-4 text-sm">✦</div>
                </div>
                {reward.image ? (
                  <Image src={reward.image} alt={reward.name} width={64} height={64} className="mx-auto" />
                ) : (
                  <div className="text-6xl">🎁</div>
                )}
              </div>

              <Button
                disabled
                className="w-full bg-white/10 text-white/50 border border-white/20 cursor-not-allowed"
                size="lg"
              >
                Need {reward.karats - brand.karats} more <KaratIcon size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="relative rounded-2xl bg-gradient-to-br from-purple-900 to-purple-800 p-6 border-2 border-dashed border-white/30 shadow-xl">
            <div className="text-center">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  <KaratIcon size={20} className="text-amber-400" />
                  <span className="text-white font-medium">{brand.karats}</span>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">06</div>
                  <div className="text-sm text-white/75">JUNE</div>
                </div>
              </div>

              <div className="my-8">
                <div className="h-20 flex items-center justify-center mb-4">
                  {reward.image ? (
                    <Image src={reward.image} alt={reward.name} width={80} height={80} className="mx-auto" />
                  ) : (
                    <div className="text-6xl">🎁</div>
                  )}
                </div>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span>✨</span>
                  <span>💫</span>
                  <span>⭐</span>
                  <span>✨</span>
                  <span>💫</span>
                </div>
              </div>

              <h1 className="text-2xl font-bold mb-2 text-white">{reward.name.toUpperCase()}</h1>
              <p className="text-sm text-white/80 mb-6">{reward.description}</p>

              <div className="border-t border-white/20 pt-4">
                <Button
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm"
                  size="lg"
                >
                  Redeem {reward.karats} <KaratIcon size={16} className="ml-2 text-amber-400" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <TopNav />
    </div>
  )
}