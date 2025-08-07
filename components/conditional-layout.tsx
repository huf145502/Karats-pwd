'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNavbar = pathname !== '/';

  return (
    <>
      <div className={`mx-auto max-w-sm ${showNavbar ? 'pb-24' : ''}`}>
        {children}
      </div>
      {showNavbar && <Navbar />}
    </>
  );
}
