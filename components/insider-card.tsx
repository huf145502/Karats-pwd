import Link from 'next/link';
import { Brand } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

export default function InsiderCard({ brand }: { brand: Brand }) {
  if (!brand.insider) {
    return null;
  }

  return (
    <Link href={`/brands/${brand.id}/insider`} className="block">
      <div className="flex items-center justify-between w-full p-4 bg-gray-900 rounded-2xl text-white shadow-lg bg-gradient-to-t from-orange-900 to-transparent">
        <div>
          <p className="font-bold text-lg font-lemon-milk">{brand.insider.title}</p>
          <p className="text-sm font-sans">{brand.insider.description}</p>
        </div>
        <ArrowRight />
      </div>
    </Link>
  );
}
