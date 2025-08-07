import Link from 'next/link';
import Image from 'next/image';
import { Ticket } from '@/lib/types';
import { format } from 'date-fns';

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  const date = new Date(ticket.date);
  const day = format(date, 'd');
  const month = format(date, 'MMM');

  const statusClasses = {
    active: 'bg-brand-manana text-white',
    used: 'bg-gray-800 text-white',
    expired: 'bg-gray-800 text-gray-500',
  };

  return (
    <Link href={`/tickets/${ticket.id}`}>
      <div 
        className={`relative w-full h-36 rounded-xl p-2 flex flex-col justify-between shadow-lg ${statusClasses[ticket.status]}`}
        style={{
          border: ticket.status === 'active' ? '1px dashed rgba(255, 255, 255, 0.9)' : 'none'
        }}
      >
        <div className="flex justify-between items-start">
          <div className="relative w-20 h-20">
            <Image src={ticket.image} alt={ticket.name} fill style={{ objectFit: 'contain' }} />
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{day}</p>
            <p className="text-xs">{month.toUpperCase()}</p>
          </div>
        </div>
        <p className="font-bold text-sm">{ticket.name}</p>
      </div>
    </Link>
  );
}
