'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Phone, Mail } from 'lucide-react';

export default function ContactUsPage() {
  const router = useRouter();

  return (
    <div className="bg-splash-light min-h-screen">
      <header className="flex items-center p-6">
        <button onClick={() => router.back()}>
          <ArrowLeft />
        </button>
        <h1 className="flex-grow text-center font-bold text-lg">Contact Us</h1>
      </header>

      <main className="px-6 space-y-6">
        <div className="relative w-full h-48">
          <Image
            src="/images/contact-banner.png"
            alt="Contact Banner"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center">We’d Love to hear from you</h2>
          <p className="text-center text-gray-600 mt-2">
            Work better for each other. Reach out to us with ideas, doubts, suggestion or just about anything else
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-white rounded-lg shadow">
            <Phone size={24} className="text-gray-800 mr-4" />
            <p className="font-semibold">+91 95007 12908</p>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow">
            <Mail size={24} className="text-gray-800 mr-4" />
            <p className="font-semibold">support@vire.com</p>
          </div>
        </div>
      </main>
    </div>
  );
}
