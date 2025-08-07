import Image from 'next/image';
import { Reward } from '@/lib/types';
import { ArrowRight, Lock } from 'lucide-react';

export default function RewardCard({ reward }: { reward: Reward }) {
  return (
    <div 
      className={`relative w-full p-4 rounded-2xl text-white overflow-hidden ${reward.locked ? 'bg-gray-700' : 'bg-brand-manana'}`}
      style={{
        borderStyle: 'dashed',
        borderWidth: '2px',
        borderColor: 'white',
      }}
    >
      <div className="flex justify-between">
        <div>
          {reward.date && <p className="text-xs">Scheduled on {reward.date}</p>}
          <h3 className="font-bold">{reward.name}</h3>
          <button className="text-xs mt-2 flex items-center">
            {reward.locked ? <Lock size={16} className="mr-1" /> : 'View'}
            {!reward.locked && <ArrowRight size={16} className="ml-1" />}
          </button>
        </div>
        {reward.image && (
          <div className="relative w-16 h-16">
            <Image src={reward.image} alt={reward.name} fill style={{ objectFit: 'contain' }} />
          </div>
        )}
      </div>
    </div>
  );
}
