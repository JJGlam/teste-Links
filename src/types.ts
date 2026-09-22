export interface Product {
  id: string;
  name: string;
  category: 'masculino' | 'feminino' | 'unissex';
  fit: 'Slim Fit' | 'Oversized' | 'Baby Look' | 'Regular Classic';
  fabric: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  highlights: string[];
  colors: { name: string; hex: string }[];
  sizes: ('P' | 'M' | 'G' | 'GG' | 'XG')[];
  featuredMarketplace: {
    name: 'Mercado Livre' | 'Shopee' | 'Magazine Luiza' | 'WhatsApp';
    url: string;
    badgeText?: string;
  };
  secondaryMarketplace?: {
    name: 'Mercado Livre' | 'Shopee' | 'Magazine Luiza' | 'WhatsApp';
    url: string;
  };
}

export interface ChannelLink {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  type: 'mercadolivre' | 'shopee' | 'magalu' | 'whatsapp' | 'instagram' | 'facebook' | 'maps';
  badge?: string;
  accentColor: string;
  isExternal?: boolean;
}
