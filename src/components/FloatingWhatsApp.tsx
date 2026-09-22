import React from 'react';
import { MessageCircle } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/links';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento Rápido" className="fixed bottom-6 right-6 z-40 flex items-center">
      <a
        href={OFFICIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-2xl shadow-emerald-600/40 transition-all duration-300 hover:scale-105 active:scale-95 group border-2 border-white"
        aria-label="Falar no WhatsApp (11) 9834-823"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full" />
        </div>
        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-950/90 leading-none">
            Dúvidas ou Pedidos?
          </span>
          <span className="text-xs font-black text-white leading-tight mt-0.5">
            (11) 9834-823
          </span>
        </div>
      </a>
    </aside>
  );
};
