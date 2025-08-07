'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function FeedbackPage() {
  const router = useRouter();

  return (
    <div className="bg-splash-light min-h-screen">
      <header className="flex items-center p-6">
        <button onClick={() => router.back()}>
          <ArrowLeft />
        </button>
        <h1 className="flex-grow text-center font-bold text-lg">Feedback</h1>
      </header>

      <main className="px-6 space-y-6">
        <div className="relative w-full h-48">
          <Image
            src="/images/feedback-banner.png"
            alt="Feedback Banner"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center">Help Us Improve</h2>
          <p className="text-center text-gray-600 mt-2">
            Good, bad, ugly. Ideas, suggestions, criticism. We want to listen to it all. Help us get better with your feedback.
          </p>
        </div>
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-lg"
          placeholder="Your Message..."
        />
        <button className="w-full p-4 bg-gray-800 text-white rounded-full font-semibold">
          SEND FEEDBACK
        </button>
      </main>
    </div>
  );
}
