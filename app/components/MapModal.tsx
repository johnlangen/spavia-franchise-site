// app/components/MapModal.tsx
"use client";

import { X } from "lucide-react";

export default function MapModal({ isOpen, onClose, stateName }: { 
  isOpen: boolean; 
  onClose: () => void; 
  stateName: string | null; 
}) {
  if (!isOpen || !stateName) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white max-w-lg w-full p-6 rounded-lg shadow-xl relative">
        <button 
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-3">{stateName.toUpperCase()}</h2>
        <p className="mb-4 text-gray-700">
          Thank you for your interest in Spavia! We’re excited to share that we’re looking to grow in your state. 
          <br /><br />
          To learn more, simply complete the contact form by clicking the button below, and our team will be in touch with you shortly.
        </p>
        <a 
          href="/get-started"
          className="inline-block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
