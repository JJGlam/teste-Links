import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChannelGrid } from './components/ChannelGrid';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { WhatsAppOrderBuilder } from './components/WhatsAppOrderBuilder';
import { StoreLocation } from './components/StoreLocation';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { Product } from './types';
import { Ruler, ShieldCheck, Sparkles, Star, ThumbsUp, RefreshCw, Heart } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'todos' | 'masculino' | 'feminino' | 'oversized' | 'slim'>('todos');

  // Filter products based on selected tab
  const filteredProducts = useMemo(() => {
    if (activeFilter === 'todos') return PRODUCTS;
    if (activeFilter === 'masculino') return PRODUCTS.filter((p) => p.category === 'masculino' || p.category === 'unissex');
    if (activeFilter === 'feminino') return PRODUCTS.filter((p) => p.category === 'feminino' || p.category === 'unissex');
    if (activeFilter === 'oversized') return PRODUCTS.filter((p) => p.fit === 'Oversized');
    if (activeFilter === 'slim') return PRODUCTS.filter((p) => p.fit === 'Slim Fit');
    return PRODUCTS;
  }, [activeFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Navigation Header */}
      <Header onOpenSizeGuide={() => setIsSizeGuideOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Official Channels Grid */}
        <ChannelGrid />

        {/* Featured Products Catalog Section */}
        <section id="colecao" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>Catálogo Adulto Masculino & Feminino</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
                Nossas Camisetas Mais Vendidas
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl font-medium">
                Selecione sua modelagem preferida. Compre com segurança na sua plataforma predileta ou fale direto com nossa equipe pelo WhatsApp!
              </p>
            </div>

            {/* Size guide trigger button */}
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white hover:bg-orange-50 text-orange-600 border-2 border-orange-200 hover:border-orange-300 text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <Ruler className="w-4 h-4 text-orange-600" />
              <span>Ver Tabela de Medidas (cm)</span>
            </button>
          </div>

          {/* Filter Tabs (Friendly Segmented Control) */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-200/80 rounded-2xl mb-8 overflow-x-auto scrollbar-none max-w-2xl border border-slate-300/60">
            <button
              onClick={() => setActiveFilter('todos')}
              className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'todos'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Todas as Peças ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('masculino')}
              className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'masculino'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Masculino
            </button>
            <button
              onClick={() => setActiveFilter('feminino')}
              className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'feminino'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Feminino
            </button>
            <button
              onClick={() => setActiveFilter('oversized')}
              className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'oversized'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Oversized Streetwear
            </button>
            <button
              onClick={() => setActiveFilter('slim')}
              className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'slim'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Slim Egípcio
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        </section>

        {/* Fabric & Quality Highlights with friendly warm cards */}
        <section className="py-16 bg-gradient-to-b from-orange-50/50 via-amber-50/30 to-slate-50 border-y border-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Padrão de Qualidade Superior</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display mt-2">
                Por que nossas camisetas vestem tão bem?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white border-2 border-amber-200/80 shadow-lg shadow-amber-500/5 space-y-4 hover:border-amber-400 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">Algodão Egípcio Nobre</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Fibras extra-longas selecionadas que conferem toque acetinado natural, zero bolinhas (anti-pilling) e resistência incomparável às lavagens diárias.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border-2 border-blue-200/80 shadow-lg shadow-blue-500/5 space-y-4 hover:border-blue-400 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">Fio 30.1 Penteado Encorpado</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Gramatura premium de 180g/m² com pré-encolhimento de fábrica. O corte oversized cai estruturado no corpo, sem marcar e sem ficar transparente.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border-2 border-emerald-200/80 shadow-lg shadow-emerald-500/5 space-y-4 hover:border-emerald-400 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">Gola Canelada com Pesponto</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Adeus às golas frouxas que deformam na primeira lavagem! Usamos ribana 2x1 com elastano nobre e costura dupla reforçada ombro a ombro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Custom Order Simulator */}
        <WhatsAppOrderBuilder />

        {/* Verified Customer Reviews Section with friendly warm cards */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-extrabold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
              <span>Clientes Satisfeitos</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display mt-2">
              Quem compra recomenda e volta a comprar
            </h2>
            <div className="flex items-center justify-center gap-1 text-amber-500 mt-2 text-sm">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-slate-900 font-black ml-2 text-base">4.9 / 5.0</span>
              <span className="text-slate-500 text-xs font-semibold">(mais de 3.500 clientes atendidos)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                  Mercado Livre
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-medium">
                "A camiseta slim de algodão egípcio é sensacional! O caimento no peito e braço fica perfeito sem apertar. Já comprei mais duas cores."
              </p>
              <div className="text-xs font-extrabold text-slate-900 flex items-center gap-2 pt-1 border-t border-slate-100">
                <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-[10px]">
                  RM
                </div>
                <span>Rodrigo M. · São Paulo/SP</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                  Magazine Luiza
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-medium">
                "O tecido da oversized 30.1 é muito pesado e macio, não tem nada a ver com aquelas camisetas finas que rasgam rápido. Chegou antes do prazo!"
              </p>
              <div className="text-xs font-extrabold text-slate-900 flex items-center gap-2 pt-1 border-t border-slate-100">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-[10px]">
                  LC
                </div>
                <span>Lucas C. · Belo Horizonte/MG</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full">
                  Shopee & Ateliê
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-medium">
                "Comprei a baby look e depois mandei estampar para a equipe da minha clínica. Atendimento impecável pelo WhatsApp e entrega super rápida."
              </p>
              <div className="text-xs font-extrabold text-slate-900 flex items-center gap-2 pt-1 border-t border-slate-100">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-[10px]">
                  JF
                </div>
                <span>Juliana F. · Campinas/SP</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-bold text-slate-600">
            <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <ThumbsUp className="w-4 h-4 text-emerald-600" />
              99.2% de Recomendações Positivas
            </span>
            <span className="flex items-center gap-1.5 text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
              Troca Fácil e Descomplicada
            </span>
            <span className="flex items-center gap-1.5 text-amber-800 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
              Garantia Contra Defeitos de Fabricação
            </span>
          </div>
        </section>

        {/* Physical Store & Google Maps Section */}
        <StoreLocation />
      </main>

      {/* Footer with all official links */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}
