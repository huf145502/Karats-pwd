'use client';

import { useState } from 'react';
import OnboardingFlow from '@/components/onboarding-flow';
import SplashScreenManager from '@/components/splash-screen-manager';
import ClientOnly from '@/components/client-only';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main>
      <ClientOnly>
        {showSplash ? (
          <SplashScreenManager onComplete={() => setShowSplash(false)} />
        ) : (
          <OnboardingFlow />
        )}
      </ClientOnly>
    </main>
  );
}
