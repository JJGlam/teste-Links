import React, { useState } from 'react';
import { MessageCircle, Sparkles, Send, PhoneCall, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/links';

export const WhatsAppOrderBuilder: React.FC = () => {
  const [model, setModel] = useState('Camiseta Slim Algodão Egípcio');
  const [gender, setGender] = useState('Masculino');
  const [size, setSize] = useState('M');
  const [color, setColor] = useState('Preto');
  const [quantity, setQuantity] = useState(2);
  const [notes, setNotes] = useState('');

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Olá Total Estampas / Ateliê Silk! Gostaria de fazer um pedido / orçamento:\n\n` +
      `👕 Modelo: ${model}\n` +
      `👤 Público: ${gender}\n` +
      `📏 Tamanho: ${size}\n` +
      `🎨 Cor: ${color}\n` +
      `🔢 Quantidade: ${quantity} unidades\n` +
      (notes ? `📝 Observações: ${notes}\n` : '') +
      `\nAguardo confirmação de valor e prazo de envio pelo WhatsApp!`
    );
    return `https://wa.me/55119834823?text=${text}`;
  };

  return (
    <section id="personalizadas" className="py-16 bg-gradient-to-b from-slate-50 via-emerald-50/30 to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Atendimento Amigável & Personalizações</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display leading-tight">
              Monte seu Pedido ou Orçamento no WhatsApp
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Precisa de peças lisas, personalizadas com a sua estampa, uniformes para empresas ou kits de atacado?
              Escolha suas preferências e envie uma mensagem direta e pré-formatada para o nosso WhatsApp oficial <strong>(11) 9834-823</strong>.
            </p>

            <div className="p-5 rounded-2xl bg-white border-2 border-emerald-100 shadow-sm space-y-3 text-xs text-slate-700">
              <div className="font-extrabold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Atendimento Humano e Especializado</span>
              </div>
              <p className="text-slate-600 font-medium leading-relaxed">
                Respondemos com fotos reais dos tecidos, cálculo de frete rápido para seu CEP e tabela de atacado com descontos progressivos!
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`tel:${OFFICIAL_LINKS.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ligue: (11) 9834-823</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Card with friendly bright styles */}
          <div className="lg:col-span-7 bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-black text-slate-900">Simulador de Pedido Rápido</h3>
                <p className="text-xs font-semibold text-slate-500">Gere sua mensagem em segundos</p>
              </div>
              <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                (11) 9834-823
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              {/* Modelo */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Modelo da Camiseta:</label>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-semibold focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                >
                  <option value="Camiseta Slim Haag Algodão Egípcio">Camiseta Slim Haag Algodão Egípcio</option>
                  <option value="Camiseta Oversized Fio 30.1 Penteado">Camiseta Oversized Fio 30.1 Penteado</option>
                  <option value="Camiseta Baby Look Feminina Soft">Camiseta Baby Look Feminina Soft</option>
                  <option value="T-Shirt Feminina Oversized Street">T-Shirt Feminina Oversized Street</option>
                  <option value="Camiseta Personalizada com Silk / DTF">Camiseta Personalizada (Silk / DTF)</option>
                  <option value="Kit Atacado (10 ou mais peças)">Kit Atacado (10+ peças)</option>
                </select>
              </div>

              {/* Público */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Público / Caimento:</label>
                <div className="flex gap-2">
                  {['Masculino', 'Feminino', 'Unissex'].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={`flex-1 py-2.5 px-2 rounded-xl text-center font-bold transition-all cursor-pointer ${
                        gender === g
                          ? 'bg-orange-500 text-white shadow-sm shadow-orange-500/20'
                          : 'bg-slate-50 text-slate-600 hover:text-slate-900 border-2 border-slate-200'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tamanho */}
              <div>
                <label className="block font-bold text-slate-700 mb-1.5">Tamanho:</label>
                <div className="flex gap-1.5">
                  {['P', 'M', 'G', 'GG', 'XG'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={`flex-1 py-2.5 rounded-xl font-mono font-black transition-all cursor-pointer ${
                        size === s
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'bg-slate-50 text-slate-600 hover:text-slate-900 border-2 border-slate-200'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cor e Quantidade */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Cor:</label>
                  <select
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-semibold focus:outline-none focus:border-orange-500 focus:bg-white"
                  >
                    <option value="Preto">Preto</option>
                    <option value="Branco">Branco</option>
                    <option value="Off-White">Off-White</option>
                    <option value="Cinza Stone">Cinza Stone</option>
                    <option value="Azul Marinho">Azul Marinho</option>
                    <option value="Verde Militar">Verde Militar</option>
                    <option value="Outra / Sortidas">Outra / Sortidas</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">Quantidade:</label>
                  <div className="flex items-center bg-slate-50 border-2 border-slate-200 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-slate-600 hover:text-slate-900 font-black cursor-pointer"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-mono font-bold text-slate-900 tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-slate-600 hover:text-slate-900 font-black cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Observações / Estampa */}
              <div className="sm:col-span-2">
                <label className="block font-bold text-slate-700 mb-1.5">
                  Observações / Detalhes da estampa ou seu CEP para frete:
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Quero com logo da minha empresa na frente / Meu CEP é 13000-000"
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                />
              </div>

            </div>

            {/* Generated Message Preview & Submit */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 font-medium text-center sm:text-left flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Envio direto para o WhatsApp comercial: <strong>(11) 9834-823</strong></span>
              </div>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-xs shadow-lg shadow-emerald-500/25 transition-transform hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enviar Pedido pelo WhatsApp</span>
                <Send className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
