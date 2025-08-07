'use client';

import { useState } from 'react';
import { onboardingScreens } from '@/lib/data';
import OnboardingScreen from './onboarding-screen';

export default function OnboardingFlow() {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentScreenIndex < onboardingScreens.length - 1) {
      setCurrentScreenIndex(currentScreenIndex + 1);
    } else if (direction === 'prev' && currentScreenIndex > 0) {
      setCurrentScreenIndex(currentScreenIndex - 1);
    }
  };

  return (
    <OnboardingScreen
      screen={onboardingScreens[currentScreenIndex]}
      totalScreens={onboardingScreens.length}
      onNavigate={handleNavigation}
    />
  );
}
