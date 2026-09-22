import React, { useState } from 'react';
import { X, ExternalLink, MessageCircle, Check, Ruler, Truck, ShieldCheck, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenSizeGuide: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOpenSizeGuide,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[1] || product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState(1);

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Olá! Tenho interesse no seguinte pedido:\n` +
      `• Modelo: ${product.name}\n` +
      `• Cor: ${selectedColor}\n` +
      `• Tamanho: ${selectedSize}\n` +
      `• Quantidade: ${quantity} un.\n` +
      `• Valor Unitário: R$ ${product.price.toFixed(2).replace('.', ',')}\n\n` +
      `Por favor, me informe o frete e disponibilidade!`
    );
    return `https://wa.me/55119834823?text=${text}`;
  };

  const getMarketplaceStyle = (name: string) => {
    switch (name) {
      case 'Mercado Livre':
        return 'bg-[#FFE600] text-slate-950 hover:bg-[#F2DA00] border border-yellow-400 shadow-yellow-500/20';
      case 'Shopee':
        return 'bg-[#EE4D2D] text-white hover:bg-[#DE3C1C] shadow-orange-500/25';
      case 'Magazine Luiza':
        return 'bg-[#0086FF] text-white hover:bg-[#0074E0] shadow-blue-500/25';
      default:
        return 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-500/20';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-slate-900 transition-colors shadow-md border border-slate-200 cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Product Image */}
        <div className="md:w-1/2 relative bg-slate-100 flex items-center justify-center min-h-[300px] md:min-h-[480px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center max-h-[340px] md:max-h-full"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-white/95 text-xs px-3.5 py-1.5 rounded-full text-orange-700 font-extrabold shadow-sm border border-orange-200 uppercase tracking-wide">
            {product.category} · {product.fit}
          </div>
        </div>

        {/* Right Column: Contiguous Purchase Module */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto space-y-6 bg-white">
          <div className="space-y-4">
            
            {/* Title & Fabric */}
            <div>
              <div className="text-xs uppercase tracking-wider text-orange-600 font-extrabold mb-1">
                {product.fabric}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display leading-snug">
                {product.name}
              </h2>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-slate-900 tabular-nums">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.originalPrice && (
                <span className="text-sm font-semibold text-slate-400 line-through tabular-nums">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                Pronta Entrega
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Highlights */}
            <div className="space-y-2 pt-1 bg-amber-50/50 p-4 rounded-2xl border border-amber-100">
              {product.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Color selection */}
            <div className="pt-1">
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <span className="text-slate-800">
                  Cor Escolhida: <span className="text-orange-600">{selectedColor}</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border-2 transition-all cursor-pointer ${
                      selectedColor === c.name
                        ? 'border-orange-500 bg-orange-50 text-orange-950 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-slate-300"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <span className="text-slate-800">Tamanho:</span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenSizeGuide();
                  }}
                  className="text-orange-600 hover:text-orange-700 flex items-center gap-1 font-bold underline underline-offset-2 cursor-pointer"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Guia de Medidas</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-12 h-11 rounded-xl text-xs font-black font-mono transition-all border-2 cursor-pointer ${
                      selectedSize === s
                        ? 'border-orange-500 bg-orange-500 text-white shadow-md shadow-orange-500/20'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-orange-300'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity stepper */}
            <div className="flex items-center gap-4 pt-1">
              <span className="text-xs font-bold text-slate-800">Quantidade:</span>
              <div className="flex items-center border-2 border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-sm font-black text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  -
                </button>
                <span className="px-3 py-1.5 text-xs font-mono font-bold text-slate-900 tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-sm font-black text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-200 space-y-3">
            {/* Primary Marketplace Link */}
            <a
              href={product.featuredMarketplace.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-black text-xs shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] ${getMarketplaceStyle(
                product.featuredMarketplace.name
              )}`}
            >
              <span>{product.featuredMarketplace.badgeText || `Comprar no ${product.featuredMarketplace.name}`}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* WhatsApp Custom Order Link */}
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-xs transition-all shadow-md shadow-emerald-500/20 hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Pedir no WhatsApp (11) 9834-823</span>
            </a>

            <div className="flex items-center justify-between text-xs text-slate-500 font-medium pt-1">
              <span className="flex items-center gap-1 text-slate-700">
                <Truck className="w-3.5 h-3.5 text-orange-600" /> Envio rápido
              </span>
              <span className="flex items-center gap-1 text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Compra Segura
              </span>
              <span className="flex items-center gap-1 text-slate-700">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> Satisfação Garantida
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
