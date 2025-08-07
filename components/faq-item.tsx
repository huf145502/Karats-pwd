'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-gray-800">{question}</h3>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
