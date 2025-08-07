'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ProfileEditItem from '@/components/profile-edit-item';
import { ArrowLeft, Camera } from 'lucide-react';

export default function ProfileEditPage() {
  const router = useRouter();

  const profileData = {
    name: 'Ethan Carter',
    phone: '+91 8592882354',
    email: 'hafizyoosuf710@gmail.com',
    gender: 'Male',
    birthday: 'DD/MM/YYYY',
  };

  return (
    <div className="bg-splash-light min-h-screen">
      <header className="flex items-center p-6">
        <button onClick={() => router.back()}>
          <ArrowLeft />
        </button>
        <h1 className="flex-grow text-center font-bold text-lg">Edit Profile</h1>
      </header>

      <main className="px-6 space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/placeholder-user.jpg"
              alt="User profile picture"
              width={94}
              height={94}
              className="rounded-full"
            />
            <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md">
              <Camera size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <ProfileEditItem label="NAME" value={profileData.name} />
          <ProfileEditItem label="PHONE" value={profileData.phone} />
          <ProfileEditItem label="EMAIL" value={profileData.email} />
          <ProfileEditItem label="GENDER" value={profileData.gender} />
          <ProfileEditItem label="BIRTHDAY" value={profileData.birthday} />
        </div>

        <button className="w-full p-4 bg-gray-800 text-white rounded-full font-semibold">
          SAVE MY INFO
        </button>
      </main>
    </div>
  );
}
