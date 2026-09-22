import React from 'react';
import { ExternalLink, Eye, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
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

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'masculino':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'feminino':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      default:
        return 'bg-amber-100 text-amber-800 border-amber-200';
    }
  };

  return (
    <div className="flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
      
      {/* Product Image Area */}
      <div
        className="relative aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer"
        onClick={() => onSelect(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Hover preview overlay */}
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-white/95 text-slate-900 text-xs font-bold rounded-xl shadow-lg hover:bg-white hover:scale-105 transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-orange-600" />
            <span>Ver Detalhes & Medidas</span>
          </button>
        </div>

        {/* Friendly category badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className={`text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border shadow-xs ${getCategoryBadge(product.category)}`}>
            {product.category}
          </span>
          <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/90 text-slate-800 border border-slate-200 shadow-xs">
            {product.fit}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          
          {/* Fabric label */}
          <div className="text-xs text-orange-600 font-semibold tracking-wide">
            {product.fabric}
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onSelect(product)}
            className="text-base font-extrabold text-slate-900 leading-snug cursor-pointer hover:text-orange-600 transition-colors line-clamp-2"
          >
            {product.name}
          </h3>

          {/* Color swatches preview */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-xs font-semibold text-slate-500">Cores:</span>
            <div className="flex items-center gap-1.5">
              {product.colors.map((c, i) => (
                <span
                  key={i}
                  title={c.name}
                  className="w-4 h-4 rounded-full border-2 border-white shadow-xs"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-slate-500">
              ({product.colors.length} opções)
            </span>
          </div>

          {/* Sizes available */}
          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold pt-0.5">
            <span className="text-slate-500">Tamanhos:</span>
            {product.sizes.map((size) => (
              <span
                key={size}
                className="bg-slate-100 text-slate-700 font-mono font-bold px-1.5 py-0.5 rounded text-[11px]"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Primary Buy Actions */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-slate-900 tabular-nums">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              {product.originalPrice && (
                <span className="text-xs font-semibold text-slate-400 line-through tabular-nums">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-200">
              <Check className="w-3 h-3 text-emerald-600" /> Em estoque
            </span>
          </div>

          {/* Direct Buy Button for Marketplace */}
          <div className="space-y-2">
            <a
              href={product.featuredMarketplace.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-black text-xs transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap ${getMarketplaceStyle(
                product.featuredMarketplace.name
              )}`}
            >
              <span>{product.featuredMarketplace.badgeText || `Comprar no ${product.featuredMarketplace.name}`}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => onSelect(product)}
              className="w-full py-2 px-3 rounded-xl text-xs font-bold text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors text-center cursor-pointer"
            >
              Ver fotos, medidas e cores
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
