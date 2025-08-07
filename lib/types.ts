export interface OnboardingScreenData {
  id: number;
  backgroundColor: string;
  illustration: string;
  title: string;
  description: string;
}

export interface Question {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export interface Quiz {
  id: string;
  questions: Question[];
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  karats: number;
  locked: boolean;
  date?: string;
  image?: string;
}

export interface InsiderEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  karats: number;
}

export interface InsiderBenefit {
  id: string;
  description: string;
}

export interface Brand {
  id: string;
  name: string;
  type: string;
  logo: string;
  walletColor: string;
  karats: number;
  insider?: {
    banner: string;
    title: string;
    description: string;
    nextEvent: InsiderEvent;
    upcomingEvents: InsiderEvent[];
    pastEvents: InsiderEvent[];
    benefits: InsiderBenefit[];
  };
  rewards: Reward[];
  quiz?: Quiz;
}

export interface Ticket {
  id: string;
  name: string;
  date: string;
  image: string;
  status: 'active' | 'used' | 'expired';
}

export interface KaratsLedgerItem {
  id: string;
  date: string;
  brand: string;
  description: string;
  karats: number;
  type: 'earned' | 'claimed' | 'freezing';
}
