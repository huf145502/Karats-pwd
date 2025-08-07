import { OnboardingScreenData, Brand, Ticket, KaratsLedgerItem } from './types';

export const onboardingScreens: OnboardingScreenData[] = [
  {
    id: 1,
    backgroundColor: 'bg-onboarding-1',
    illustration: '/images/onboarding-1.png',
    title: 'Places that Love you Back',
    description: 'Everyday places hold unexpected moments. Vire helps you get more out of your favourite local spots.',
  },
  {
    id: 2,
    backgroundColor: 'bg-onboarding-2',
    illustration: '/images/onboarding-2.png',
    title: 'Explore. Earn. Unlock',
    description: 'Earn Karats when you visit local cafés, boutiques, galleries, and more — because loyalty goes both ways.',
  },
  {
    id: 3,
    backgroundColor: 'bg-onboarding-3',
    illustration: '/images/onboarding-3.png',
    title: 'The System Grows With You',
    description: 'What you unlock is up to you. Vire is built to adapt — to your pace, your interests, your life.',
  },
];

export const mananaBrand: Brand = {
  id: 'manana',
  name: 'MANANA',
  type: 'Cafe',
  logo: '/images/manana-logo.png',
  walletColor: 'bg-brand-manana',
  karats: 125,
  insider: {
    banner: '/images/insider-banner.png',
    title: 'BLEND BY MANANA',
    description: 'Some conversations deserve slower tables. Blend is a space for those who sip and stay.',
    nextEvent: {
      id: 'event-1',
      title: 'Morning Roast: The Creator Circle',
      description: 'A caffeine-laced networking session for coffee nerds. Explore Micro coffee brewing methods',
      date: 'Saturday, July 20 · 10:30 AM',
      karats: 500,
    },
    upcomingEvents: [
      {
        id: 'event-2',
        title: 'Sunset Sips: Wine & Design',
        description: '',
        date: 'Saturday, July 27 · 7:00 PM',
        karats: 300,
      },
      {
        id: 'event-3',
        title: 'Late Night Bites: Music & Mixology',
        description: '',
        date: 'Friday, August 2 · 8:00 PM',
        karats: 650,
      },
    ],
    pastEvents: [
      {
        id: 'event-4',
        title: 'Brunch & Business: The Startup Scene',
        description: '',
        date: 'Saturday, June 15 · 11:00 AM',
        karats: 650,
      },
      {
        id: 'event-5',
        title: 'Happy Hour: Art & Aperitifs',
        description: '',
        date: 'Friday, May 24 · 6:00 PM',
        karats: 340,
      },
    ],
    benefits: [
      {
        id: 'benefit-1',
        description: 'Priority access to curated meetups',
      },
      {
        id: 'benefit-2',
        description: 'Invite-only tasting menus',
      },
      {
        id: 'benefit-3',
        description: "Group chat with the club's regulars",
      },
      {
        id: 'benefit-4',
        description: 'Blend Member tag across café check-ins',
      },
    ],
  },
  rewards: [
    {
      id: 'reward-1',
      name: 'Telescope nights',
      description: 'Any coffee, on us.',
      karats: 500,
      locked: false,
      date: '2024-07-20',
      image: '/images/reward-telescope.png',
    },
    {
      id: 'reward-2',
      name: '2hr power Table',
      description: 'Choose any pastry from our daily selection.',
      karats: 300,
      locked: false,
      date: '2024-07-25',
      image: '/images/reward-table.png',
    },
    {
      id: 'reward-3',
      name: 'Weekend Priority Queue Skip',
      description: 'Get 50% off your total bill.',
      karats: 1000,
      locked: true,
      date: '2024-07-29',
      image: '/images/reward-queue-skip.png',
    },
    {
      id: 'reward-4',
      name: 'Instagram Story feature',
      description: 'A special edition Manana tote bag.',
      karats: 1500,
      locked: true,
      image: '/images/reward-instagram.png',
    },
  ],
  quiz: {
    id: 'manana-quiz-1',
    questions: [
      { id: 'q1', question: "Is 'Bessie Beach' the local's nickname for Elliot's Beach?", answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'Yes' },
      { id: 'q2', question: 'Is Express Avenue the oldest mall in Chennai?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No' },
      { id: 'q3', question: "Is 'murukku sandwich' a popular street food in Sowcarpet?", answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'Yes' },
      { id: 'q4', question: 'Is Marina Beach the longest urban beach in India?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'Yes' },
      { id: 'q5', question: 'Is "thalai" a common slang for head in Tamil?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'Yes' },
      { id: 'q6', question: 'Was Chennai formerly known as Bombay?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No' },
      { id: 'q7', question: 'Is "Machi" a term used to refer to a friend?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'Yes' },
      { id: 'q8', question: 'Is Pongal a festival celebrated with colorful kites?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No' },
      { id: 'q9', question: 'Is the Napier Bridge famous for its chessboard design?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'Yes' },
      { id: 'q10', question: 'Is filter coffee a signature beverage of Chennai?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'Yes' },
      { id: 'q11', question: 'Is "sarakku" a term for food?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No' },
      { id: 'q12', question: 'Is the movie "2.0" starring Rajinikanth one of the most expensive Indian films ever made?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'Yes' },
      { id: 'q13', question: 'Is the word "poda" a polite way to say "go"?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No' },
      { id: 'q14', question: 'Is "Besant Nagar" a popular spot for street food?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'Yes' },
      { id: 'q15', question: 'Is Carnatic music a form of rock music?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No' },
      { id: 'q16', question: 'Is "gult" a term for people from Andhra/Telangana?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'Yes' },
      { id: 'q17', question: 'Is the Chennai Super Kings (CSK) an IPL team?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'Yes' },
      { id: 'q18', question: 'Is "Vada Chennai" a famous rom-com movie?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No' },
      { id: 'q19', question: 'Is Pondy Bazaar known for its electronics market?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'No' },
      { id: 'q20', question: 'Does the Chennai Metro connect to the airport?', answers: ['Yes', 'No', 'Maybe'], correctAnswer: 'Yes' },
    ],
  },
};

const cafeSorocoBrand: Brand = {
  id: 'soroco',
  name: 'Cafe Soroco',
  type: 'Cafe',
  logo: '/images/st-ali-logo.png',
  walletColor: 'bg-brand-soroco',
  karats: 300,
  rewards: [
    {
      id: 'reward-1',
      name: 'Free Coffee',
      description: 'Any coffee, on us.',
      karats: 600,
      locked: false,
    },
    {
      id: 'reward-5',
      name: 'Bag of Coffee Beans',
      description: 'A bag of our signature roast.',
      karats: 1200,
      locked: true,
    },
  ],
};

const cafeNoirBrand: Brand = {
  id: 'noir',
  name: 'Cafe Noir',
  type: 'Cafe',
  logo: '/images/nomad-logo.png',
  walletColor: 'bg-brand-noir',
  karats: 300,
  rewards: [
    {
      id: 'reward-2',
      name: 'Free Pastry',
      description: 'Choose any pastry from our daily selection.',
      karats: 400,
      locked: false,
    },
    {
      id: 'reward-6',
      name: 'Loaf of Sourdough',
      description: 'A loaf of our freshly baked sourdough.',
      karats: 800,
      locked: true,
    },
  ],
};

export const brands: Brand[] = [mananaBrand, cafeSorocoBrand, cafeNoirBrand];

export function getBrandById(id: string | undefined): Brand | undefined {
  return brands.find((brand) => brand.id === id);
}

export const tickets: Ticket[] = [
  {
    id: 'ticket-1',
    name: 'Telescopic Nights',
    date: '2024-08-06',
    image: '/images/ticket-telescope.svg',
    status: 'active',
  },
  {
    id: 'ticket-2',
    name: 'Telescopic Nights',
    date: '2024-08-12',
    image: '/images/ticket-telescope-2.svg',
    status: 'active',
  },
  {
    id: 'ticket-3',
    name: 'Polaroid Memory',
    date: '2024-08-16',
    image: '/images/ticket-polaroid.svg',
    status: 'active',
  },
  {
    id: 'ticket-4',
    name: 'Telescopic Night',
    date: '2023-12-12',
    image: '/images/ticket-telescope-used.svg',
    status: 'used',
  },
  {
    id: 'ticket-5',
    name: 'Secret Dessert Testing',
    date: '2023-12-12',
    image: '/images/ticket-dessert-expired.svg',
    status: 'expired',
  },
];

export function getTicketById(id: string | undefined): Ticket | undefined {
  return tickets.find((ticket) => ticket.id === id);
}

export const karatsLedger: KaratsLedgerItem[] = [
  {
    id: '1',
    date: 'Today, 10:15 AM',
    brand: 'SOROCCO',
    description: 'Coffee Purchase',
    karats: 11,
    type: 'earned',
  },
  {
    id: '2',
    date: '2 Days ago, 10:15 AM',
    brand: 'SOROCCO',
    description: 'Lunch with friends',
    karats: 21,
    type: 'earned',
  },
  {
    id: '3',
    date: '2 Days ago, 8:10 PM',
    brand: 'MANANA',
    description: 'Secret Dessert Menu',
    karats: -65,
    type: 'claimed',
  },
  {
    id: '4',
    date: '4 Days ago, 2:45 PM',
    brand: 'SOROCCO',
    description: 'Priority Queue Skip',
    karats: -40,
    type: 'claimed',
  },
  {
    id: '5',
    date: '2024-07-20',
    brand: 'MANANA',
    description: 'Telescope nights',
    karats: 20,
    type: 'freezing',
  },
];
