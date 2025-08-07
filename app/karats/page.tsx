'use client';

import { useState } from 'react';
import { karatsLedger } from '@/lib/data';
import KaratsLedgerItem from '@/components/karats-ledger-item';
import KaratsCarousel from '@/components/karats-carousel';
import { Info, Gem } from 'lucide-react';

type KaratType = 'earned' | 'claimed' | 'freezing';

export default function KaratsPage() {
  const [activeTab, setActiveTab] = useState<KaratType>('earned');

  const filteredLedger = karatsLedger.filter((item) => item.type === activeTab);
  const totalKarats = karatsLedger.reduce((acc, item) => item.type === 'earned' ? acc + item.karats : acc, 0);

  return (
    <div className="bg-splash-light min-h-screen">
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold font-mosvita text-splash-text-light">Your Karats</h1>
        <Info className="text-splash-text-light" />
      </header>

      <main className="px-6 space-y-4 pb-24">
        <KaratsCarousel />

        <div className="flex bg-gray-200 rounded-lg p-1">
          <button 
            onClick={() => setActiveTab('earned')}
            className={`w-full py-2 rounded-lg ${activeTab === 'earned' ? 'bg-white shadow' : ''}`}
          >
            Earned
          </button>
          <button 
            onClick={() => setActiveTab('claimed')}
            className={`w-full py-2 rounded-lg ${activeTab === 'claimed' ? 'bg-white shadow' : ''}`}
          >
            Claimed
          </button>
          <button 
            onClick={() => setActiveTab('freezing')}
            className={`w-full py-2 rounded-lg ${activeTab === 'freezing' ? 'bg-white shadow' : ''}`}
          >
            Freezing
          </button>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm">Total Karats</p>
          <div className="flex items-center">
            <Gem size={16} className="mr-2" />
            <p className="font-bold">{totalKarats}</p>
          </div>
        </div>

        <div>
          {filteredLedger.map((item) => (
            <KaratsLedgerItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
