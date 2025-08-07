import Image from 'next/image';
import { Ticket } from '@/lib/types';
import { format } from 'date-fns';

export default function UsedTicketCard({ ticket }: { ticket: Ticket }) {
  const date = new Date(ticket.date);
  const day = format(date, 'd');
  const month = format(date, 'MMM');

  return (
    <div className="flex items-center p-2 bg-gray-800 rounded-lg text-white">
      <div className="relative w-12 h-12 mr-4">
        <Image src={ticket.image} alt={ticket.name} fill style={{ objectFit: 'contain' }} />
      </div>
      <div className="flex-grow">
        <p className="font-semibold">{ticket.name}</p>
        <p className={`text-xs ${ticket.status === 'expired' ? 'text-red-500' : 'text-gray-400'}`}>
          {ticket.status === 'expired' ? `Expired on ${format(date, 'dd/MM/yyyy')}` : 'Used'}
        </p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">{day}</p>
        <p className="text-xs">{month.toUpperCase()}</p>
      </div>
    </div>
  );
}
