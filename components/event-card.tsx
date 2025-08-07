import { InsiderEvent } from '@/lib/types';
import { Gem } from 'lucide-react';

export default function EventCard({ event, isPast }: { event: InsiderEvent; isPast?: boolean }) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg ${isPast ? 'bg-gray-700' : ''}`}>
      <div>
        <p className="font-bold">{event.title}</p>
        <p className="text-xs text-gray-400">{event.date}</p>
      </div>
      <div className="flex items-center">
        <Gem size={16} className="mr-2" />
        <span>{event.karats}</span>
      </div>
    </div>
  );
}
