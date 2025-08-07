import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import type { Route } from 'next';

interface ProfileMenuItemProps {
  href?: Route;
  icon: LucideIcon;
  label: string;
  isToggle?: boolean;
  onClick?: () => void;
}

export default function ProfileMenuItem({ href, icon: Icon, label, isToggle, onClick }: ProfileMenuItemProps) {
  const content = (
    <div className="flex items-center p-2 rounded-lg hover:bg-gray-100" onClick={onClick}>
      <div className="bg-white p-2 rounded-lg mr-4">
        <Icon size={24} className="text-gray-800" />
      </div>
      <p className="flex-grow font-semibold text-gray-800">{label}</p>
      {isToggle ? (
        <div className="w-10 h-6 bg-gray-300 rounded-full p-1 flex items-center">
          <div className="w-4 h-4 bg-white rounded-full shadow-md" />
        </div>
      ) : null}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
