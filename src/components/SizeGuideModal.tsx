import React, { useState } from 'react';
import { X, Ruler, CheckCircle, Sparkles } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'slim' | 'oversized' | 'babylook'>('slim');

  const tables = {
    slim: [
      { size: 'P', chest: '48 cm', length: '68 cm', sleeve: '20 cm', suggested: '55 - 68 kg' },
      { size: 'M', chest: '51 cm', length: '71 cm', sleeve: '21 cm', suggested: '69 - 78 kg' },
      { size: 'G', chest: '54 cm', length: '73 cm', sleeve: '22 cm', suggested: '79 - 88 kg' },
      { size: 'GG', chest: '57 cm', length: '76 cm', sleeve: '23 cm', suggested: '89 - 100 kg' },
      { size: 'XG', chest: '61 cm', length: '79 cm', sleeve: '24 cm', suggested: '101 - 115 kg' },
    ],
    oversized: [
      { size: 'P', chest: '55 cm', length: '74 cm', sleeve: '24 cm', suggested: 'Caimento boxy solto' },
      { size: 'M', chest: '58 cm', length: '77 cm', sleeve: '25 cm', suggested: 'Caimento streetwear padrão' },
      { size: 'G', chest: '62 cm', length: '80 cm', sleeve: '26 cm', suggested: 'Ombros caídos amplos' },
      { size: 'GG', chest: '66 cm', length: '83 cm', sleeve: '27 cm', suggested: 'Maxi oversized estruturado' },
      { size: 'XG', chest: '70 cm', length: '86 cm', sleeve: '28 cm', suggested: 'Corte super amplo' },
    ],
    babylook: [
      { size: 'P', chest: '42 cm', length: '58 cm', sleeve: '14 cm', suggested: 'Manequim 36 - 38' },
      { size: 'M', chest: '45 cm', length: '60 cm', sleeve: '15 cm', suggested: 'Manequim 38 - 40' },
      { size: 'G', chest: '48 cm', length: '63 cm', sleeve: '16 cm', suggested: 'Manequim 42 - 44' },
      { size: 'GG', chest: '52 cm', length: '66 cm', sleeve: '17 cm', suggested: 'Manequim 44 - 46' },
    ],
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="p-2 rounded-xl bg-orange-100 text-orange-600">
            <Ruler className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 font-display">Tabela de Medidas Oficial</h3>
            <p className="text-xs text-orange-600 font-bold uppercase tracking-wide">
              Acerte de primeira na sua numeração
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          Dica amigável: pegue uma camiseta sua que veste bem, estique sobre uma mesa e compare a largura do peito e o comprimento!
        </p>

        {/* Tab Controls with friendly warm colors */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl mb-6 border border-slate-200">
          <button
            onClick={() => setActiveTab('slim')}
            className={`flex-1 py-2.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
              activeTab === 'slim'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Slim Algodão Egípcio
          </button>
          <button
            onClick={() => setActiveTab('oversized')}
            className={`flex-1 py-2.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
              activeTab === 'oversized'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Oversized Streetwear (30.1)
          </button>
          <button
            onClick={() => setActiveTab('babylook')}
            className={`flex-1 py-2.5 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
              activeTab === 'babylook'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Baby Look Feminina
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                <th className="py-3 px-4">Tamanho</th>
                <th className="py-3 px-4">Largura (Tórax)</th>
                <th className="py-3 px-4">Comprimento</th>
                <th className="py-3 px-4">Manga</th>
                <th className="py-3 px-4">Sugestão de Uso</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
              {tables[activeTab].map((row) => (
                <tr key={row.size} className="hover:bg-orange-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-black font-mono text-orange-600 text-base">
                    {row.size}
                  </td>
                  <td className="py-3.5 px-4 tabular-nums font-semibold">{row.chest}</td>
                  <td className="py-3.5 px-4 tabular-nums font-semibold">{row.length}</td>
                  <td className="py-3.5 px-4 tabular-nums font-semibold">{row.sleeve}</td>
                  <td className="py-3.5 px-4 text-slate-600">{row.suggested}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Helpful Tip */}
        <div className="mt-5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1.5">
          <div className="flex items-center gap-2 font-bold text-emerald-800">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Ficou em dúvida entre dois tamanhos?</span>
          </div>
          <p className="leading-relaxed">
            Caso prefira um caimento mais ajustado, escolha o menor. Se curtir um estilo mais solto e despojado, vá de tamanho maior. Você também pode nos mandar mensagem no WhatsApp para tirarmos suas medidas!
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            Entendi, fechar guia
          </button>
        </div>
      </div>
    </div>
  );
};
