'use client';

import { getTicketById } from '@/lib/data';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Info, ArrowLeft, Download, CheckCircle, Clock } from 'lucide-react';
import { format } from 'date-fns';

export default function RedeemPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const ticket = getTicketById(params.id);

  if (!ticket) {
    notFound();
  }

  const date = new Date(ticket.date);
  const day = format(date, 'd');
  const month = format(date, 'MMM');

  return (
    <div className="bg-brand-manana text-white min-h-screen p-6 flex flex-col justify-between">
      <header className="flex items-center justify-between">
        <button onClick={() => router.back()}>
          <ArrowLeft />
        </button>
        <h1 className="font-bold text-lg">Live Ticket</h1>
        <Info />
      </header>

      <main className="flex flex-col items-center">
        <div className="relative w-full max-w-sm h-96 bg-gray-800 bg-opacity-50 rounded-2xl p-6 flex flex-col justify-between items-center text-center">
          <div className="flex justify-between w-full">
            <p className="font-semibold">MANANA CIRCLE</p>
            <div className="text-right">
              <p className="text-2xl font-bold">{day}</p>
              <p className="text-xs">{month.toUpperCase()}</p>
            </div>
          </div>
          <div className="relative w-48 h-48">
            <Image src={ticket.image} alt={ticket.name} fill style={{ objectFit: 'contain' }} />
          </div>
          <div>
            <h2 className="text-3xl font-bold uppercase">{ticket.name}</h2>
            <p className="text-sm mt-2">Saturn, stars, and stories under the sky.</p>
          </div>
          <p className="text-5xl font-bold tracking-widest">112653</p>
        </div>
      </main>

      <footer className="space-y-4">
        <button className="w-full flex items-center justify-center p-3 bg-white bg-opacity-20 rounded-lg">
          <Download size={20} className="mr-2" />
          Save to Gallery
        </button>
        <div className="text-xs text-center space-y-1">
          <div className="flex items-center justify-center">
            <CheckCircle size={16} className="mr-2" />
            <p>This Ticket is valid till 6th of July 2025</p>
          </div>
          <div className="flex items-center justify-center">
            <Clock size={16} className="mr-2" />
            <p>Show the 6-digit code to the cafe staff</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
