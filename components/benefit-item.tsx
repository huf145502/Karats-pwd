import { InsiderBenefit } from '@/lib/types';
import { Check } from 'lucide-react';

export default function BenefitItem({ benefit }: { benefit: InsiderBenefit }) {
  return (
    <div className="flex items-center justify-between p-4">
      <p>{benefit.description}</p>
      <Check size={20} />
    </div>
  );
}
