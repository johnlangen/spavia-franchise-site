"use client";

import { useState } from "react";

export default function MobileCTA() {
  const [open, setOpen] = useState(true);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      {open ? (
        <div className="bg-black/90 backdrop-blur p-3 flex items-center justify-between">
          <a
            href="/get-started"
            className="flex-1 text-center bg-[#C2A878] text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-[#b09466] transition"
          >
            Get Started
          </a>
          <button
            onClick={() => setOpen(false)}
            className="ml-3 text-white text-lg"
          >
            ▼
          </button>
        </div>
      ) : (
        <div className="bg-black/70 text-center p-2">
          <button
            onClick={() => setOpen(true)}
            className="text-white text-lg"
          >
            ▲ Open
          </button>
        </div>
      )}
    </div>
  );
}
