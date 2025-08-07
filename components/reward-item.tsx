import { Reward } from '@/lib/types';
import { ArrowRight, Lock } from 'lucide-react';
import Image from 'next/image';

export default function RewardItem({ reward }: { reward: Reward }) {
  const cardColor = reward.locked ? 'bg-gray-700' : 'bg-brand-manana';
  const textColor = reward.locked ? 'text-gray-400' : 'text-gray-200';
  const buttonColor = reward.locked ? 'bg-gray-600' : 'bg-white/20';
  const buttonTextColor = reward.locked ? 'text-gray-300' : 'text-white';

  return (
    <div className={`w-full p-2 rounded-2xl ${cardColor}`}>
      <div className="relative w-full p-3 border-2 border-dashed border-white rounded-xl">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {reward.date && <p className={`text-xs ${textColor}`}>Scheduled on {reward.date}</p>}
            <h3 className="font-bold text-white mt-1">{reward.name}</h3>
            <button className={`text-xs mt-4 px-3 py-1 rounded-full flex items-center ${buttonColor} ${buttonTextColor}`}>
              {reward.locked ? (
                <>
                  <Lock size={14} className="mr-1.5" />
                  Locked
                </>
              ) : (
                <>
                  View
                  <ArrowRight size={14} className="ml-1.5" />
                </>
              )}
            </button>
          </div>
          {reward.image && (
            <div className="relative w-20 h-20 ml-4">
              <Image src={reward.image} alt={reward.name} fill style={{ objectFit: 'contain' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
