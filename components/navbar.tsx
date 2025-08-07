'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Route } from 'next';
import {
  User,
  Gem,
  Ticket,
  LayoutGrid,
} from 'lucide-react';

const navItems: Array<{ href: Route; icon: any; label: string }> = [
  { href: '/profile', icon: User, label: 'Profile' },
  { href: '/karats', icon: Gem, label: 'Karats' },
  { href: '/tickets', icon: Ticket, label: 'Tickets' },
  { href: '/brands', icon: LayoutGrid, label: 'Dashboard' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto p-4">
      <div className="flex items-center justify-around h-16 bg-gray-800 rounded-full shadow-lg">
        {navItems.map(({ href, icon: Icon }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link key={href} href={href} className="flex flex-col items-center justify-center w-16 h-16">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full ${isActive ? 'bg-gray-600' : ''}`}>
                <Icon className={isActive ? 'text-white' : 'text-gray-400'} />
              </div>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
