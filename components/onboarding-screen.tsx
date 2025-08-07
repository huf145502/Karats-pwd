'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { OnboardingScreenData } from '@/lib/types';
import Image from 'next/image';
import { User, Mail } from 'lucide-react';
import { KaratIcon } from '@/components/karat-icon';

interface OnboardingScreenProps {
  screen: OnboardingScreenData;
  totalScreens: number;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export default function OnboardingScreen({ screen, totalScreens, onNavigate }: OnboardingScreenProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (name === 'prajj' && phone === '9359992008') {
      router.push('/brands');
    } else {
      // Handle incorrect login
      alert('Invalid credentials');
    }
  };

  return (
    <div className={`flex flex-col items-center justify-between h-screen w-full ${screen.backgroundColor} text-onboarding-text`}>
      <div className="relative w-full h-1/3">
        <Image
          src={screen.illustration}
          alt={screen.title}
          fill
          style={{ objectFit: 'contain' }}
          className="p-8"
        />
      </div>

      <div className="flex flex-col items-center w-full px-4 space-y-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 pl-12 bg-transparent border-2 border-gray-400 rounded-lg placeholder-onboarding-text"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <User size={20} />
          </div>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 pl-12 bg-transparent border-2 border-gray-400 rounded-lg placeholder-onboarding-text"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <Mail size={20} />
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="flex items-center justify-center w-full py-4 space-x-2 bg-black rounded-lg bg-opacity-20"
        >
          <span>UNLOCK KARATS</span>
          <KaratIcon size={20} />
        </button>
        <p className="text-xs">VIRE x MANANA</p>
      </div>

      <div className="w-full px-6 py-8">
        <h2 className="text-3xl font-bold">{screen.title}</h2>
        <p className="mt-2 text-sm">{screen.description}</p>
        <div className="flex items-center justify-between mt-8">
          {/* Indicator */}
          <div className="flex space-x-2">
            {Array.from({ length: totalScreens }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${screen.id === index + 1 ? 'bg-white' : 'bg-gray-500'}`}
              ></div>
            ))}
          </div>
          {/* Navigation Buttons */}
          <div className="flex space-x-4">
            {screen.id < totalScreens && (
              <button onClick={() => onNavigate('next')} className="text-xs">
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
