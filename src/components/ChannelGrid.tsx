import React from 'react';
import { ExternalLink, MessageCircle, MapPin, ShieldCheck, Truck, Percent, PhoneCall, Sparkles } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/links';

export const ChannelGrid: React.FC = () => {
  return (
    <section id="canais" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Onde Comprar com Total Segurança</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
            Escolha seu canal ou loja de preferência
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Estamos presentes nos maiores e mais seguros marketplaces do Brasil, além de atendimento direto e loja física em Campinas/SP!
          </p>
        </div>

        {/* 3 Main Marketplace Cards with eye-catching styles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Mercado Livre Card */}
          <div className="flex flex-col justify-between p-6 rounded-3xl bg-amber-50/50 border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFE600] border-2 border-yellow-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-sm">
                    ML
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors">
                      Mercado Livre
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">Camiseta Slim Haag Egípcio</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold bg-amber-200/80 text-amber-900 px-2.5 py-1 rounded-full">
                  Full
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Compre no Mercado Livre com proteção total ao consumidor, parcelamento sem juros e entrega rápida FULL para todo o Brasil.
              </p>

              <div className="space-y-2 text-xs font-semibold text-slate-700 bg-white/80 p-3 rounded-xl border border-amber-100">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-amber-600" />
                  <span>Envio FULL mais rápido do Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Programa Compra Garantida</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={OFFICIAL_LINKS.mercadolivre}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#FFE600] hover:bg-[#F2DA00] text-slate-950 font-black text-xs transition-all shadow-md shadow-yellow-500/20 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap border border-yellow-400"
              >
                <span>Acessar no Mercado Livre</span>
                <ExternalLink className="w-4 h-4 text-slate-950" />
              </a>
            </div>
          </div>

          {/* Shopee Card */}
          <div className="flex flex-col justify-between p-6 rounded-3xl bg-orange-50/50 border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/10 transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#EE4D2D] text-white flex items-center justify-center font-black text-xl shadow-sm">
                    S
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-orange-700 transition-colors">
                      Shopee Brasil
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">Loja Oficial de Camisetas</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold bg-orange-200/80 text-orange-900 px-2.5 py-1 rounded-full">
                  Cupons
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Aproveite os cupons de frete grátis da Shopee, promoções relâmpago, moedas de desconto e avaliação 5 estrelas.
              </p>

              <div className="space-y-2 text-xs font-semibold text-slate-700 bg-white/80 p-3 rounded-xl border border-orange-100">
                <div className="flex items-center gap-2">
                  <Percent className="w-4 h-4 text-[#EE4D2D]" />
                  <span>Aceita cupons e moedas da Shopee</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Garantia Shopee e rastreio passo a passo</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={OFFICIAL_LINKS.shopee}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#EE4D2D] hover:bg-[#DE3C1C] text-white font-black text-xs transition-all shadow-md shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <span>Acessar Loja na Shopee</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Magazine Luiza Card */}
          <div className="flex flex-col justify-between p-6 rounded-3xl bg-blue-50/50 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0086FF] text-white flex items-center justify-center font-black text-xl shadow-sm">
                    M
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                      Magazine Luiza
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">Camiseta Oversized Fio 30.1</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold bg-blue-200/80 text-blue-900 px-2.5 py-1 rounded-full">
                  Magalu
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Compre nossa autêntica Camiseta Oversized 100% algodão 30.1 com toda a tradição, pontualidade e credibilidade do Magalu.
              </p>

              <div className="space-y-2 text-xs font-semibold text-slate-700 bg-white/80 p-3 rounded-xl border border-blue-100">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#0086FF]" />
                  <span>Entrega rápida Magalu Entregas</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Compra segura e confiabilidade garantida</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={OFFICIAL_LINKS.magalu}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#0086FF] hover:bg-[#0074E0] text-white font-black text-xs transition-all shadow-md shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <span>Acessar no Magazine Luiza</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Secondary Row: Direct Contact & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* WhatsApp Direct */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border-2 border-emerald-200 hover:border-emerald-400 transition-all flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-xl bg-emerald-600 text-white">
                  <MessageCircle className="w-4 h-4 fill-white" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">WhatsApp Direto</span>
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">Atendimento Imediato</h4>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Fale conosco pelo <strong>(11) 9834-823</strong> para pedidos no atacado, dúvidas de tamanho ou cores.
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href={OFFICIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs text-center transition-all shadow-sm shadow-emerald-500/20"
              >
                Iniciar Conversa
              </a>
              <a
                href={`tel:${OFFICIAL_LINKS.phoneRaw}`}
                className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs text-center border border-slate-200 flex items-center justify-center gap-1.5 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ligar: (11) 9834-823</span>
              </a>
            </div>
          </div>

          {/* Ateliê Silk & Google Maps */}
          <div className="p-5 rounded-2xl bg-rose-50/60 border-2 border-rose-200 hover:border-rose-400 transition-all flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-xl bg-rose-600 text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-rose-800">Loja Física</span>
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">Ateliê Silk no Maps</h4>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Visite nosso ateliê físico em Campinas/SP para provar as camisetas e retirar seus pedidos.
              </p>
            </div>
            <a
              href={OFFICIAL_LINKS.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-rose-50 text-rose-700 font-bold text-xs text-center border-2 border-rose-300 flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>Abrir no Google Maps</span>
            </a>
          </div>

          {/* Instagram */}
          <div className="p-5 rounded-2xl bg-pink-50/60 border-2 border-pink-200 hover:border-pink-400 transition-all flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white font-bold">
                  @
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-pink-800">Instagram</span>
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">@totalestampas</h4>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Fotos dos clientes, combinações de looks, novidades e bastidores da nossa estamparia.
              </p>
            </div>
            <a
              href={OFFICIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-all shadow-xs"
            >
              <span>Seguir no Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Facebook */}
          <div className="p-5 rounded-2xl bg-blue-50/60 border-2 border-blue-200 hover:border-blue-400 transition-all flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-xl bg-[#1877F2] text-white font-bold">
                  f
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-800">Facebook</span>
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">Camisetas Rápido</h4>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Página oficial no Facebook com avaliações, lançamentos e atendimento a clientes.
              </p>
            </div>
            <a
              href={OFFICIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Acessar Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
