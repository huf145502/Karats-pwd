'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import FaqItem from '@/components/faq-item';
import { ArrowLeft } from 'lucide-react';

const faqs = [
  {
    question: 'What is VIRE?',
    answer: 'VIRE is your key to exclusive rewards at the best cafés, salons, and venues around town! Instead of outdated loyalty cards and discounts, VIRE lets you scan a QR code to collect Karats—special points you can redeem for unique experiences and perks.',
  },
  {
    question: 'How do I earn Karats?',
    answer: 'Earning Karats is super simple. Just scan the VIRE QR code after you pay at any partner establishment. Your Karats will be added to your account automatically—no extra steps needed!',
  },
  {
    question: 'What can I do with Karats?',
    answer: 'You can treat yourself! Use Karats to unlock a range of exciting rewards, like chef’s table experiences, secret menu tastings, special invites, or other handpicked perks, depending on the place you visit.',
  },
  {
    question: 'How do I redeem rewards?',
    answer: 'Browse the rewards catalog in your VIRE app. When you have enough Karats, tap on a reward to redeem it. You’ll get a digital code or ticket—just show it to the staff to enjoy your reward!',
  },
  {
    question: 'What if I have more questions?',
    answer: 'We’re here to help! Tap on “Contact Us” in your app to call or email our team, or leave us a message through the Feedback section. We’ll get back to you as quickly as possible.',
  },
];

export default function FaqPage() {
  const router = useRouter();

  return (
    <div className="bg-splash-light min-h-screen">
      <header className="flex items-center p-6">
        <button onClick={() => router.back()}>
          <ArrowLeft />
        </button>
        <h1 className="flex-grow text-center font-bold text-lg">FAQs</h1>
      </header>

      <main className="px-6 space-y-6">
        <div className="relative w-full h-48">
          <Image
            src="/images/faq-banner.png"
            alt="FAQ Banner"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center">Your VIRE Questions, Answered</h2>
          <p className="text-center text-gray-600 mt-2">
            Find answers to common questions about VIRE, Karats, rewards, and more.
          </p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </main>
    </div>
  );
}
