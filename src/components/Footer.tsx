import React from 'react';
import { ExternalLink, MessageCircle, MapPin, PhoneCall, Heart } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/links';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-black text-sm">
                T
              </div>
              <span className="text-base font-extrabold text-white font-display uppercase tracking-tight block">
                Total Estampas & Ateliê Silk
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Especialistas em camisetas adultas masculinas e femininas. Algodão Egípcio nobre, corte oversized 30.1 penteado e estamparia personalizada para todo o Brasil.
            </p>
            <div className="space-y-2 text-slate-300 font-semibold">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <a href={`tel:${OFFICIAL_LINKS.phoneRaw}`} className="hover:text-white transition-colors">
                  Telefone: (11) 9834-823
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <a
                  href={OFFICIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: (11) 9834-823
                </a>
              </div>
            </div>
          </div>

          {/* Marketplaces Links with brand colors */}
          <div className="space-y-3">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider">
              Lojas Oficiais
            </div>
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href={OFFICIAL_LINKS.mercadolivre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFE600] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Mercado Livre (Camiseta Slim Haag)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.shopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EE4D2D] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Shopee (Loja Oficial de Camisetas)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.magalu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0086FF] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Magazine Luiza (Camiseta Oversized)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais & Canais */}
          <div className="space-y-3">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider">
              Redes & Comunidade
            </div>
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href={OFFICIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Instagram @totalestampas</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Facebook (Camisetas Rápido)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Canal WhatsApp de Atendimento</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Ateliê & Localização */}
          <div className="space-y-3">
            <div className="text-xs font-extrabold text-white uppercase tracking-wider">
              Loja Física
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Ateliê Silk - Camisetas Personalizadas
              <br />
              Campinas - SP · Brasil
            </p>
            <a
              href={OFFICIAL_LINKS.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Ver Rotas no Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs font-medium">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Total Estampas & Ateliê Silk (Camisetas Rápido).</span>
            <span className="hidden sm:inline">Feito com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-semibold">Compra 100% Segura</span>
            <span aria-hidden="true">·</span>
            <span>Envio para Todo o Brasil</span>
            <span aria-hidden="true">·</span>
            <span>Atacado e Varejo</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
