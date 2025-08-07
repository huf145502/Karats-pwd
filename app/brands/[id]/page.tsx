'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import { getBrandById } from '@/lib/data';
import { notFound } from 'next/navigation';
import WalletCard from '@/components/wallet-card';
import InsiderCard from '@/components/insider-card';
import QuizCard from '@/components/quiz-card';
import RewardItem from '@/components/reward-item';

export default function BrandPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const brand = getBrandById(id);
  const [karats, setKarats] = useState(brand?.karats || 0);

  if (!brand) {
    notFound();
  }

  const handleQuizComplete = (score: number) => {
    setKarats(karats + score);
  };

  return (
    <div className="bg-splash-light min-h-screen font-sans">
      <header className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm font-medium text-gray-600 font-aerotis">{brand.type}</p>
          <h1 className="text-xl font-bold text-gray-800 font-lemon-milk">{brand.name}</h1>
        </div>
        <Image src={brand.logo} alt={`${brand.name} Logo`} width={40} height={40} />
      </header>

      <main className="px-6 space-y-3 pb-24">
        <WalletCard brand={{ ...brand, karats }} />
        <InsiderCard brand={brand} />
        
        <div className="flex items-center justify-center space-x-2">
          <div className="flex-grow h-px bg-gray-300"></div>
          <p className="text-xs text-gray-500 font-lemon-milk">VIRE X MANANA CIRCLE</p>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {brand.quiz && <QuizCard quiz={brand.quiz} onQuizComplete={handleQuizComplete} />}

        <div className="space-y-2">
          <h2 className="text-lg font-bold text-gray-800 font-lemon-milk">Rewards</h2>
          {brand.rewards.map((reward) => (
            <RewardItem key={reward.id} reward={reward} />
          ))}
        </div>
      </main>
    </div>
  );
}
