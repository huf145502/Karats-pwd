'use client';

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';

export default function SplashScreenManager({ onComplete }: { onComplete: () => void }) {
  const [splashVariant, setSplashVariant] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setSplashVariant('dark');
    }, 1500);

    const timer2 = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return <SplashScreen variant={splashVariant} />;
}
