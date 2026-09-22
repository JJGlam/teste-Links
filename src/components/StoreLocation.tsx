import React from 'react';
import { MapPin, ExternalLink, Clock, PhoneCall, ShieldCheck, Compass, Sparkles } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/links';

export const StoreLocation: React.FC = () => {
  return (
    <section id="atelie" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-extrabold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>Loja Física & Showroom</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
              Venha Conhecer o Ateliê Silk
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Gosta de tocar no tecido e provar as peças antes de comprar? Visite nosso espaço físico em Campinas/SP!
              Aqui você confere toda a linha de camisetas lisas, prova as modelagens Slim e Oversized e combina projetos de estamparia para sua empresa ou evento.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="p-2 rounded-xl bg-rose-100 text-rose-600 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900">Endereço no Google Maps</div>
                  <div className="text-slate-600 text-xs mt-0.5 font-medium">
                    Ateliê Silk - Camisetas Personalizadas (Campinas / SP)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-600 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900">Horário de Funcionamento</div>
                  <div className="text-slate-600 text-xs mt-0.5 font-medium">
                    Segunda a Sexta: 08:30 às 18:00 · Sábados: 09:00 às 13:00
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900">Contato Comercial</div>
                  <div className="text-slate-600 text-xs mt-0.5 font-medium">
                    (11) 9834-823 · Suporte a pedidos, atacado e retiradas
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={OFFICIAL_LINKS.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs shadow-md shadow-rose-600/20 hover:scale-105 transition-all whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-white" />
                <span>Abrir Rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href={OFFICIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-xs transition-all shadow-md shadow-emerald-500/20 whitespace-nowrap"
              >
                <span>Agendar Visita / Retirada</span>
              </a>
            </div>

          </div>

          {/* Right Map Preview Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 bg-white p-6 shadow-xl space-y-4">
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-rose-600 font-extrabold uppercase">
                    <Sparkles className="w-3 h-3" />
                    Google Maps Oficial
                  </div>
                  <h3 className="text-lg font-black text-slate-900">Ateliê Silk - Camisetas Personalizadas</h3>
                </div>
                <div className="flex items-center gap-1 text-amber-900 text-xs font-black bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                  ★ 4.9 no Google
                </div>
              </div>

              {/* Stylized Visual Map Card */}
              <div className="relative aspect-[16/9] w-full rounded-2xl bg-gradient-to-tr from-slate-100 via-rose-50/40 to-amber-50/50 border-2 border-dashed border-slate-300 overflow-hidden flex items-center justify-center p-6 text-center group">
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-rose-100 border-4 border-white text-rose-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-rose-600 fill-rose-600" />
                  </div>
                  <div className="text-base font-extrabold text-slate-900">Ateliê Silk (Campinas)</div>
                  <div className="text-xs text-slate-600 font-medium max-w-xs">
                    Silk screen, impressão DTF de altíssima definição e estoque de camisetas a pronta entrega.
                  </div>
                  <a
                    href={OFFICIAL_LINKS.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md transition-colors"
                  >
                    <span>Ver Localização no Mapa</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 font-medium pt-1">
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Estacionamento no local e fácil acesso
                </span>
                <span className="font-semibold text-slate-500">Retirada grátis sem frete</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
