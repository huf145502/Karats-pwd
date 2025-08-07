'use client';

import { useState } from 'react';
import { brands } from '@/lib/data';
import Image from 'next/image';
import { Gem } from 'lucide-react';

export default function KaratsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length);
  };

  return (
    <div className="relative h-48 w-full rounded-xl bg-gray-200 overflow-hidden">
      {brands.map((brand, index) => (
        <div
          key={brand.id}
          className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image 
            src={brand.insider?.banner || '/placeholder.jpg'} 
            alt="Brand Banner" 
            fill 
            style={{ objectFit: 'cover' }} 
          />
          <div className="absolute bottom-4 right-4 flex items-center bg-white bg-opacity-20 backdrop-blur-md p-2 rounded-lg">
            <Gem size={16} className="mr-2" />
            <span className="font-bold">{brand.karats}</span>
          </div>
        </div>
      ))}
      <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 p-1 rounded-full">
        {'<'}
      </button>
      <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 p-1 rounded-full">
        {'>'}
      </button>
    </div>
  );
}
