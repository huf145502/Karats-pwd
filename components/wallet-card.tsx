import { Brand } from '@/lib/types';
import { Gem } from 'lucide-react';

export default function WalletCard({ brand }: { brand: Brand }) {
  return (
    <div className="relative h-52 w-full rounded-2xl bg-gray-800 p-4 flex flex-col justify-between text-white shadow-lg overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg">Almost There!</h2>
        <p className="text-sm font-semibold">{brand.name} CIRCLE</p>
      </div>
      <div>
        <p className="text-sm">Unlock your next reward.</p>
        <div className="mt-2 h-2 w-full rounded-full bg-black bg-opacity-40">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-green-300 to-yellow-200"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-green-200 to-yellow-100 rounded-b-2xl flex items-center justify-end px-4">
        <div className="flex items-center text-sm text-black">
          <Gem size={16} className="mr-2" />
          <span>{brand.karats}</span>
        </div>
      </div>
    </div>
  );
}
