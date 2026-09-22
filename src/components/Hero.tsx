import React from 'react';
import { ExternalLink, MessageCircle, MapPin, CheckCircle2, Sparkles, Heart } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/links';
import heroImg from '../assets/images/hero_tshirt_collection_1790116915659.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-orange-50/30 to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-orange-100">
      
      {/* Decorative colorful background circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text & CTA Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Friendly Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-xs font-bold text-orange-800 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Moda Adulto Masculina & Feminina</span>
              <span className="text-orange-400">·</span>
              <span className="text-orange-900 font-extrabold">Algodão Nobre</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.15]"
              style={{ textWrap: 'balance' }}
            >
              Camisetas Adulto que unem{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600">
                Conforto Extremo
              </span>{' '}
              e Estilo Impecável
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Algodão Egípcio nobre, 100% Algodão Penteado Fio 30.1 e acabamento resistente para homens e mulheres.
              Compre nos maiores marketplaces com garantia total ou fale com a gente direto no WhatsApp!
            </p>

            {/* Quick Benefits list with friendly colorful checks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 border border-orange-100 shadow-xs">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-xs font-bold text-slate-800">Algodão Premium</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 border border-orange-100 shadow-xs">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-xs font-bold text-slate-800">Gola que não deforma</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 border border-orange-100 shadow-xs">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-xs font-bold text-slate-800">Envio para todo Brasil</span>
              </div>
            </div>

            {/* Eye-catching Buttons for all Marketplaces */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>Escolha onde deseja comprar agora:</span>
              </div>

              {/* 3 Main Marketplaces buttons with vibrant eye-catching colors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Mercado Livre */}
                <a
                  href={OFFICIAL_LINKS.mercadolivre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between sm:justify-center gap-2 px-4 py-3.5 bg-[#FFE600] hover:bg-[#F2DA00] text-slate-950 font-black text-xs rounded-xl shadow-md shadow-yellow-500/20 border border-yellow-400 hover:scale-[1.03] active:scale-[0.98] transition-all whitespace-nowrap"
                >
                  <span className="truncate">Mercado Livre (Slim)</span>
                  <ExternalLink className="w-4 h-4 shrink-0 text-slate-950" />
                </a>

                {/* Shopee */}
                <a
                  href={OFFICIAL_LINKS.shopee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between sm:justify-center gap-2 px-4 py-3.5 bg-[#EE4D2D] hover:bg-[#DE3C1C] text-white font-black text-xs rounded-xl shadow-md shadow-orange-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all whitespace-nowrap"
                >
                  <span className="truncate">Shopee Oficial</span>
                  <ExternalLink className="w-4 h-4 shrink-0 text-white" />
                </a>

                {/* Magazine Luiza */}
                <a
                  href={OFFICIAL_LINKS.magalu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between sm:justify-center gap-2 px-4 py-3.5 bg-[#0086FF] hover:bg-[#0074E0] text-white font-black text-xs rounded-xl shadow-md shadow-blue-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all whitespace-nowrap"
                >
                  <span className="truncate">Magalu (Oversized)</span>
                  <ExternalLink className="w-4 h-4 shrink-0 text-white" />
                </a>
              </div>

              {/* Secondary Buttons: WhatsApp, Maps, Social */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
                
                {/* WhatsApp */}
                <a
                  href={OFFICIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3.5 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-emerald-500/20 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                  <span className="truncate">WhatsApp (11) 9834-823</span>
                </a>

                {/* Google Maps / Localização */}
                <a
                  href={OFFICIAL_LINKS.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3.5 py-3 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-slate-300 font-bold text-xs rounded-xl transition-all shadow-xs"
                >
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="truncate">Ateliê Silk (Maps)</span>
                </a>

                {/* Instagram */}
                <a
                  href={OFFICIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold text-xs rounded-xl transition-all shadow-xs"
                >
                  <span className="font-extrabold text-sm">@</span>
                  <span className="truncate">totalestampas</span>
                </a>

                {/* Facebook */}
                <a
                  href={OFFICIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-3 bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-xs rounded-xl transition-all shadow-xs"
                >
                  <span className="font-extrabold">f</span>
                  <span className="truncate">Camisetas Rápido</span>
                </a>
              </div>
            </div>

            {/* Friendly Trust markers */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Pronta Entrega no Brasil
              </span>
              <span className="flex items-center gap-1.5 text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                Pagamento Seguro
              </span>
              <span className="flex items-center gap-1.5 text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                Atacado & Varejo
              </span>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white bg-white shadow-2xl shadow-orange-500/15">
              <img
                src={heroImg}
                alt="Coleção de Camisetas Adulto Masculina e Feminina - Total Estampas e Ateliê Silk"
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-orange-100 shadow-lg text-left">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] uppercase font-bold text-orange-600 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Modelagens em Alta
                    </div>
                    <div className="text-sm font-extrabold text-slate-900">Slim Egípcio & Oversized Streetwear</div>
                  </div>
                  <a
                    href="#colecao"
                    className="text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-3.5 py-2 rounded-xl transition-all shadow-sm whitespace-nowrap"
                  >
                    Ver Modelos
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
