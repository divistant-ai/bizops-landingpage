"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const whatsappNumber = "622139702834";
  const defaultMessage = "Halo BizOps, saya ingin bertanya tentang platform ERP";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  if (isMinimized) {
    return null;
  }

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      {isHovered && (
        <div className="animate-fade-in-up rounded-2xl border border-green-200 bg-white px-4 py-3 shadow-2xl dark:border-green-800 dark:bg-slate-900">
          <p className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">
            Butuh Bantuan?
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Chat dengan tim kami via WhatsApp
          </p>
        </div>
      )}

      <div className="group relative">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all hover:scale-110 hover:bg-green-600 hover:shadow-green-500/50"
          aria-label="Chat via WhatsApp"
        >
          <span className="pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <MessageCircle className="relative h-8 w-8 transition-transform group-hover:rotate-12" />
        </a>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMinimized(true);
          }}
          className="absolute -top-5 -right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:bg-slate-100 hover:text-red-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:text-red-400"
          aria-label="Close WhatsApp button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
