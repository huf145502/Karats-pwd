'use client';

import Modal from './modal';
import Image from 'next/image';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutModal({ isOpen, onClose, onConfirm }: LogoutModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center p-6">
        <div className="flex justify-center mb-4">
          <Image src="/images/vire-logo-footer.svg" alt="Vire Logo" width={40} height={40} />
        </div>
        <h2 className="text-xl font-bold">Log Out of Vire?</h2>
        <p className="text-sm text-gray-600 mt-2">
          Before you go, remember: new experiences and offers are always around the corner.
        </p>
        <div className="mt-6 space-y-2">
          <button
            onClick={onConfirm}
            className="w-full p-3 bg-red-500 text-white rounded-lg font-semibold"
          >
            YES, LOG OUT
          </button>
          <button
            onClick={onClose}
            className="w-full p-3 bg-gray-200 text-gray-800 rounded-lg font-semibold"
          >
            STAY IN VIRE
          </button>
        </div>
      </div>
    </Modal>
  );
}
