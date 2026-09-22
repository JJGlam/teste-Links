import { Product } from '../types';
import { OFFICIAL_LINKS } from './links';

import imgSlimEgyptian from '../assets/images/product_slim_egyptian_1790116931968.jpg';
import imgOversizedCotton from '../assets/images/product_oversized_cotton_1790116946401.jpg';
import imgFemaleBabylook from '../assets/images/product_female_babylook_1790116958769.jpg';
import imgHeroColl from '../assets/images/hero_tshirt_collection_1790116915659.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'slim-haag-algodao-egipcio',
    name: 'Camiseta Slim Haag Algodão Egípcio Masculina',
    category: 'masculino',
    fit: 'Slim Fit',
    fabric: '100% Algodão Egípcio Giza de fibra longa nobre',
    price: 89.9,
    originalPrice: 119.9,
    image: imgSlimEgyptian,
    description: 'Toque sedoso incomparável, caimento alinhado aos braços e peitoral, alta resistência ao desbotamento e gola reforçada pespontada.',
    highlights: [
      'Algodão Egípcio nobre que não cria bolinhas',
      'Modelagem slim moderna e confortável',
      'Gola canelada com pesponto duplo',
      'Perfeita para uso casual refinado e dia a dia',
    ],
    colors: [
      { name: 'Preto Ônix', hex: '#111111' },
      { name: 'Branco Neve', hex: '#F8F9FA' },
      { name: 'Azul Marinho', hex: '#1A233A' },
      { name: 'Chumbo Mescla', hex: '#374151' },
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    featuredMarketplace: {
      name: 'Mercado Livre',
      url: OFFICIAL_LINKS.mercadolivre,
      badgeText: 'Comprar no Mercado Livre',
    },
    secondaryMarketplace: {
      name: 'WhatsApp',
      url: `https://wa.me/55119834823?text=Ol%C3%A1!%20Gostaria%20de%20comprar%20a%20Camiseta%20Slim%20Haag%20Algod%C3%A3o%20Eg%C3%ADpcio`,
    },
  },
  {
    id: 'oversized-masculina-30-1',
    name: 'Camiseta Oversized Algodão Fio 30.1 Penteado Lisa',
    category: 'masculino',
    fit: 'Oversized',
    fabric: '100% Algodão Penteado Fio 30.1 Gramatura 180g/m²',
    price: 69.9,
    originalPrice: 89.9,
    image: imgOversizedCotton,
    description: 'Modelagem streetwear com ombro caído, shape solto e estruturado sem marcar o corpo. O padrão favorito para compor looks urbanos.',
    highlights: [
      'Gramatura encorpada e toque macio',
      'Ombros deslocados no autêntico corte boxy',
      'Gola canelada 2x1 de 2,5 cm estruturada',
      'Pré-encolhida: não encolhe após a lavagem',
    ],
    colors: [
      { name: 'Cinza Stone', hex: '#4B5563' },
      { name: 'Preto Vintage', hex: '#1C1917' },
      { name: 'Areia Off-White', hex: '#E7E5E4' },
      { name: 'Verde Militar', hex: '#3F4E3E' },
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    featuredMarketplace: {
      name: 'Magazine Luiza',
      url: OFFICIAL_LINKS.magalu,
      badgeText: 'Comprar no Magalu',
    },
    secondaryMarketplace: {
      name: 'Shopee',
      url: OFFICIAL_LINKS.shopee,
    },
  },
  {
    id: 'babylook-feminina-soft',
    name: 'Camiseta Feminina Baby Look 100% Algodão Soft',
    category: 'feminino',
    fit: 'Baby Look',
    fabric: '100% Algodão Penteado Premium com toque aveludado',
    price: 59.9,
    originalPrice: 79.9,
    image: imgFemaleBabylook,
    description: 'Silhueta feminina cinturada com decote delicado e mangas ajustadas. Versatilidade para o trabalho, academia ou momentos casuais.',
    highlights: [
      'Corte modelado que valoriza o corpo feminino',
      'Tecido leve, respirável e sem transparência',
      'Acabamento com costura reforçada de ombro a ombro',
      'Secagem rápida e fácil de passar',
    ],
    colors: [
      { name: 'Branco Puro', hex: '#FFFFFF' },
      { name: 'Rosa Pastel', hex: '#FBCFE8' },
      { name: 'Preto Básico', hex: '#111111' },
      { name: 'Verde Sálvia', hex: '#84A98C' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    featuredMarketplace: {
      name: 'Shopee',
      url: OFFICIAL_LINKS.shopee,
      badgeText: 'Comprar na Shopee',
    },
    secondaryMarketplace: {
      name: 'WhatsApp',
      url: `https://wa.me/55119834823?text=Ol%C3%A1!%20Gostaria%20de%20comprar%20a%20Camiseta%20Feminina%20Baby%20Look%20Soft`,
    },
  },
  {
    id: 'tshirt-feminina-oversized-trend',
    name: 'T-Shirt Feminina Oversized Street Cotton',
    category: 'feminino',
    fit: 'Oversized',
    fabric: '100% Algodão Fio 30.1 Penteado Macio',
    price: 64.9,
    originalPrice: 84.9,
    image: imgHeroColl,
    description: 'A queridinha do visual aesthetic e minimalista. Perfeita para usar com shorts ciclista, alfaiataria, jeans reto ou com nós frontais.',
    highlights: [
      'Caimento amplo despojado sem perder o charme',
      'Zero pinicado, toque macio de pele de pêssego',
      'Costuras reforçadas para alta durabilidade',
      'Ideal para silk, bordado ou uso liso',
    ],
    colors: [
      { name: 'Off-White Natural', hex: '#F5F5F4' },
      { name: 'Preto Carvão', hex: '#18181B' },
      { name: 'Marrom Mocha', hex: '#583D2A' },
      { name: 'Terracota Suave', hex: '#B45309' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    featuredMarketplace: {
      name: 'Shopee',
      url: OFFICIAL_LINKS.shopee,
      badgeText: 'Comprar na Shopee',
    },
    secondaryMarketplace: {
      name: 'Mercado Livre',
      url: OFFICIAL_LINKS.mercadolivre,
    },
  },
  {
    id: 'camiseta-personalizada-silk-atacado',
    name: 'Camisetas Personalizadas Silk Screen / DTF (Atacado & Varejo)',
    category: 'unissex',
    fit: 'Regular Classic',
    fabric: 'Opções em 100% Algodão ou Poliviscose PV Anti-Pilling',
    price: 49.9,
    originalPrice: 65.0,
    image: imgHeroColl,
    description: 'Personalização profissional com silk screen tradicional ou impressão digital DTF de alta resolução no Ateliê Silk. Mínimo a partir de 1 peça.',
    highlights: [
      'Ateliê especializado com mais de 10 anos de experiência',
      'Estamparia em Silk Screen, DTF e bordados',
      'Preços diferenciados para empresas, eventos e revenda',
      'Amostra virtual gratuita antes da produção',
    ],
    colors: [
      { name: 'Todas as Cores da Cartela', hex: '#262626' },
      { name: 'Branco', hex: '#FFFFFF' },
      { name: 'Preto', hex: '#0A0A0A' },
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    featuredMarketplace: {
      name: 'WhatsApp',
      url: `https://wa.me/55119834823?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20Camisetas%20Personalizadas%20(Ateli%C3%AA%20Silk)`,
      badgeText: 'Cotar no WhatsApp (11) 9834-823',
    },
    secondaryMarketplace: {
      name: 'Mercado Livre',
      url: OFFICIAL_LINKS.mercadolivre,
    },
  },
];
