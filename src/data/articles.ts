import { Flame, Droplet, Trees, Coffee, Lightbulb, LucideIcon } from "lucide-react";

export interface Article {
  id: number;
  title: string;
  category: string;
  icon: LucideIcon;
  date: string;
  excerpt: string;
  image: string;
  link: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Como montar uma despensa off-grid que dura 6 meses",
    category: "Viver",
    icon: Coffee,
    date: "15 Jan 2025",
    excerpt: "Estratégias práticas e elegantes para organizar sua despensa com autonomia e sofisticação.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop&q=80",
    link: "/despensa-off-grid-6-meses",
  },
  {
    id: 2,
    title: "5 hábitos de consumo que reduzem o estresse",
    category: "Explorar",
    icon: Lightbulb,
    date: "12 Jan 2025",
    excerpt: "Descubra práticas que trazem bem-estar genuíno sem sacrificar o conforto.",
    image: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?w=800&auto=format&fit=crop&q=80",
    link: "/habitos-consumo-reduzem-estresse",
  },
  {
    id: 3,
    title: "Cozinhar com fogo: guia prático para pratos gourmet",
    category: "Comer",
    icon: Flame,
    date: "10 Jan 2025",
    excerpt: "Do fogão à lenha à fogueira: técnicas refinadas para elevar sua culinária ao ar livre.",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&auto=format&fit=crop&q=80",
    link: "/cozinhar-com-fogo-guia-pratico",
  },
  {
    id: 4,
    title: "Sistema de captação de água: beleza e funcionalidade",
    category: "Criar",
    icon: Droplet,
    date: "15 Nov 2025",
    excerpt: "Como integrar soluções hídricas ao design da sua propriedade com elegância.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=80",
    link: "/sistema-captacao-agua-beleza-funcionalidade",
  },
  {
    id: 5,
    title: "Paisagismo funcional: jardins que trabalham por você",
    category: "Cultivar",
    icon: Trees,
    date: "02 Dez 2025",
    excerpt: "Plantas que embelezam, alimentam e protegem - o luxo da natureza inteligente.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&auto=format&fit=crop&q=80",
    link: "/paisagismo-funcional-jardins-que-trabalham",
  },
  {
    id: 6,
    title: "Iluminação natural: arquitetura que conversa com o sol",
    category: "Criar",
    icon: Lightbulb,
    date: "3 Jan 2025",
    excerpt: "Estratégias de design para maximizar luz natural com sofisticação e economia.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
    link: "/iluminacao-natural-arquitetura-conversa-com-sol",
  },
];

export const getRelatedArticles = (currentLink: string, category: string, limit: number = 3): Article[] => {
  // First, get articles from the same category (excluding current)
  const sameCategoryArticles = articles.filter(
    (article) => article.category === category && article.link !== currentLink
  );
  
  // If we have enough articles from the same category, return them
  if (sameCategoryArticles.length >= limit) {
    return sameCategoryArticles.slice(0, limit);
  }
  
  // Otherwise, add articles from other categories
  const otherArticles = articles.filter(
    (article) => article.category !== category && article.link !== currentLink
  );
  
  return [...sameCategoryArticles, ...otherArticles].slice(0, limit);
};

export const getCategoryLink = (category: string): string => {
  const categoryLinks: Record<string, string> = {
    "Viver": "/viver",
    "Comer": "/comer",
    "Criar": "/criar",
    "Explorar": "/explorar",
    "Cultivar": "/cultivar",
  };
  return categoryLinks[category] || "/blog";
};
