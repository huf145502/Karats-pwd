import Link from 'next/link';
import Image from 'next/image';
import { Brand } from '@/lib/types';
import { Gem } from 'lucide-react';

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link href={`/brands/${brand.id}`}>
      <div className="relative h-56 w-full rounded-3xl shadow-lg overflow-hidden">
        <div 
          className={`absolute inset-0 ${brand.walletColor} rounded-3xl border-4 border-white`}
          style={{
            borderStyle: 'dashed',
          }}
        />
        <div className="relative h-full p-4 flex flex-col justify-between text-white">
          <div className="flex items-start justify-between">
            <div className="relative w-28 h-14">
              <Image 
                src={brand.logo} 
                alt={`${brand.name} Logo`} 
                fill 
                style={{ objectFit: 'contain' }} 
              />
            </div>
            <div className="w-8 h-8 bg-cyan-300 rounded-md" />
          </div>
          <div className="relative h-20">
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-green-300 to-yellow-200 rounded-2xl p-2 flex items-center justify-end">
              <div className="flex items-center text-sm text-black">
                <Gem size={16} className="mr-2" />
                <span>{brand.karats}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
