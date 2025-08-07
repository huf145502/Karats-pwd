import { ChevronRight } from 'lucide-react';

interface ProfileEditItemProps {
  label: string;
  value: string;
}

export default function ProfileEditItem({ label, value }: ProfileEditItemProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
      <ChevronRight className="text-gray-400" />
    </div>
  );
}
