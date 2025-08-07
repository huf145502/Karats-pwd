import Image from 'next/image';
import { brands } from '@/lib/data';
import BrandCard from '@/components/brand-card';

export default function BrandListPage() {
  return (
    <div className="bg-splash-light min-h-screen">
      <header className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm font-medium text-gray-600">vireclub</p>
          <h1 className="text-3xl font-bold text-gray-800">Morning Prajj!</h1>
        </div>
        <Image src="/images/vire-logo-footer.svg" alt="Vire Logo" width={40} height={40} />
      </header>

      <main className="px-6 space-y-4 pb-24">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
        <div className="flex items-center justify-center w-full p-4 border border-gray-300 rounded-lg">
          <p className="text-sm text-gray-600">Unlock more brands...</p>
        </div>
      </main>
    </div>
  );
}
