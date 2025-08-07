import { tickets } from '@/lib/data';
import TicketCard from '@/components/ticket-card';
import UsedTicketCard from '@/components/used-ticket-card';
import { MoreHorizontal } from 'lucide-react';

export default function TicketsPage() {
  const activeTickets = tickets.filter((ticket) => ticket.status === 'active');
  const usedTickets = tickets.filter((ticket) => ticket.status === 'used');
  const expiredTickets = tickets.filter((ticket) => ticket.status === 'expired');

  return (
    <div className="bg-splash-light min-h-screen">
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold font-mosvita text-splash-text-light">Your Tickets</h1>
        <MoreHorizontal className="text-splash-text-light"/>
      </header>

      <main className="px-6 space-y-4 pb-24">
        <div className="grid grid-cols-2 gap-4">
          {activeTickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold font-mosvita text-splash-text-light mt-8 mb-4">Ol' Tickets</h2>
          <div className="space-y-2">
            {usedTickets.map((ticket) => (
              <UsedTicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <div className="flex-grow h-px bg-gray-300"></div>
          <p className="text-xs text-gray-500 uppercase font-mosvita">Expired</p>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="space-y-2">
          {expiredTickets.map((ticket) => (
            <UsedTicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </main>
    </div>
  );
}
