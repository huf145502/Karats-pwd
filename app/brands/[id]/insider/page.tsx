import Image from 'next/image';
import { getBrandById } from '@/lib/data';
import { notFound } from 'next/navigation';
import EventCard from '@/components/event-card';
import BenefitItem from '@/components/benefit-item';
import { Info } from 'lucide-react';

export default function InsiderPage({ params }: { params: { id: string } }) {
  const brand = getBrandById(params.id);

  if (!brand || !brand.insider) {
    notFound();
  }
  
  const insider = brand.insider;

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <header className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm font-medium text-gray-400 font-aerotis">{brand.type}</p>
          <h1 className="text-xl font-bold text-white font-lemon-milk">{brand.name}</h1>
        </div>
        <Image src={brand.logo} alt={`${brand.name} Logo`} width={40} height={40} />
      </header>

      <div
        className="h-32 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${insider.banner})` }}
      />

      <main className="p-6 space-y-6 pb-24">
        <div>
          <h2 className="text-6xl font-bold font-lemon-milk leading-none">{insider.title}</h2>
          <p className="mt-4 text-sm">{insider.description}</p>
        </div>

        <div className="p-4 bg-gray-900 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{insider.nextEvent.title}</h3>
            <Info size={20} />
          </div>
          <p className="mt-2 text-xs text-gray-400">{insider.nextEvent.description}</p>
          <p className="mt-2 text-xs text-gray-400">{insider.nextEvent.date}</p>
          <button className="w-full mt-4 p-2 bg-yellow-200 text-black rounded-lg text-sm font-semibold">
            Reserve for {insider.nextEvent.karats} Karats ; Fully Redeemable
          </button>
        </div>

        <div>
          <h3 className="text-xl font-bold">Upcoming Events</h3>
          <div className="mt-4 space-y-2">
            {insider.upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">Past Events</h3>
          <div className="mt-4 space-y-2">
            {insider.pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">Member Benefits</h3>
          <div className="mt-4 space-y-2">
            {insider.benefits.map((benefit) => (
              <BenefitItem key={benefit.id} benefit={benefit} />
            ))}
          </div>
        </div>

        <footer className="text-center text-xs text-gray-500 py-6">
          <p>© 2025 VIRE Club</p>
          <p>Privacy Policy · Terms & Conditions · About VIRE · Contact Us</p>
        </footer>
      </main>
    </div>
  );
}
