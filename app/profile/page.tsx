'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ProfileMenuItem from '@/components/profile-menu-item';
import LogoutModal from '@/components/logout-modal';
import {
  HelpCircle,
  MessageSquare,
  Star,
  LogOut,
  Edit,
} from 'lucide-react';
import type { Route } from 'next';

const menuItems: Array<{ href: Route; icon: any; label: string }> = [
  { href: '/profile/faq', icon: HelpCircle, label: 'FAQs' },
  { href: '/profile/contact', icon: MessageSquare, label: 'Contact Us' },
  { href: '/profile/feedback', icon: Star, label: 'Feedback' },
];

export default function ProfilePage() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, you would handle the logout logic here
    setIsLogoutModalOpen(false);
    router.push('/');
  };

  return (
    <div className="bg-splash-light min-h-screen">
      <main className="p-6 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              src="/placeholder-user.jpg"
              alt="User profile picture"
              width={128}
              height={128}
              className="rounded-full"
            />
            <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md">
              <Link href="/profile/edit">
                <Edit size={20} />
              </Link>
            </button>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Ethan Carter</h1>
        </div>

        <div className="p-4 bg-gray-800 text-white rounded-lg">
          <p className="font-bold">Complete Your Profile</p>
          <p className="text-sm">4 OF 5 COMPLETE</p>
        </div>

        <div className="space-y-2">
          {menuItems.map((item) => (
            <ProfileMenuItem key={item.href} {...item} />
          ))}
          <ProfileMenuItem icon={LogOut} label="Log Out" onClick={() => setIsLogoutModalOpen(true)} />
        </div>
      </main>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
}
