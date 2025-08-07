import { KaratsLedgerItem as KaratsLedgerItemType } from '@/lib/types';

export default function KaratsLedgerItem({ item }: { item: KaratsLedgerItemType }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div>
        <p className="font-medium">{item.brand}</p>
        <p className="text-sm text-gray-500">{item.date}</p>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
      <p className={`font-bold ${item.karats > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {item.karats > 0 ? `+${item.karats}` : item.karats}
      </p>
    </div>
  );
}
