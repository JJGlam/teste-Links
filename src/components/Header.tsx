import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, Menu, X, Sparkles, Tag } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/links';

interface HeaderProps {
  onOpenSizeGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSizeGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Colorful Announcement Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white text-xs font-semibold py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-center">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
            <span>Envio Rápido para Todo o Brasil</span>
          </span>
          <span className="hidden sm:inline opacity-60">|</span>
          <span className="flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-yellow-200" />
            <span>Mercado Livre · Shopee · Magazine Luiza · WhatsApp Oficial</span>
          </span>
          <span className="hidden sm:inline opacity-60">|</span>
          <button
            onClick={onOpenSizeGuide}
            className="bg-white/20 hover:bg-white/30 text-white px-2.5 py-0.5 rounded-full transition-colors font-bold text-[11px] underline underline-offset-2 cursor-pointer"
          >
            Guia de Tamanhos
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand Logo with eye-catching friendly styling */}
          <a
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-black text-xl shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              T
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 font-display group-hover:text-orange-600 transition-colors uppercase">
                Total Estampas
              </span>
              <span className="text-[11px] font-semibold text-orange-600 -mt-1 tracking-wider uppercase">
                & Ateliê Silk
              </span>
            </div>
          </a>

          {/* Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#colecao" className="hover:text-orange-600 transition-colors">
              Coleção de Camisetas
            </a>
            <a href="#canais" className="hover:text-orange-600 transition-colors">
              Onde Comprar
            </a>
            <a href="#personalizadas" className="hover:text-orange-600 transition-colors">
              Personalizadas & Atacado
            </a>
            <a href="#atelie" className="hover:text-orange-600 transition-colors">
              Ateliê & Localização
            </a>
            <button
              onClick={onOpenSizeGuide}
              className="text-orange-600 hover:text-orange-700 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Tabela de Medidas</span>
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={OFFICIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all shadow-md shadow-emerald-600/25 hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="hidden sm:inline">WhatsApp (11) 9834-823</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            <a
              href="#colecao"
              className="hidden md:inline-flex items-center gap-1.5 bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 text-xs font-bold px-3.5 py-2.5 rounded-full transition-colors whitespace-nowrap"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Ver Modelos</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-5 space-y-3 shadow-lg">
            <a
              href="#colecao"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 hover:text-orange-600 py-1.5"
            >
              Coleção de Camisetas
            </a>
            <a
              href="#canais"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 hover:text-orange-600 py-1.5"
            >
              Onde Comprar (Lojas Oficiais)
            </a>
            <a
              href="#personalizadas"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 hover:text-orange-600 py-1.5"
            >
              Personalizadas & Atacado
            </a>
            <a
              href="#atelie"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 hover:text-orange-600 py-1.5"
            >
              Ateliê & Localização
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSizeGuide();
              }}
              className="block text-left text-sm font-bold text-orange-600 hover:text-orange-700 py-1.5"
            >
              Tabela de Medidas (Guia Completo)
            </button>
          </div>
        )}
      </header>
    </>
  );
};
