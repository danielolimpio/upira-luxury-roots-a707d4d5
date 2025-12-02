import { Flame, Droplet, Trees, Coffee, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const blogPosts = [
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
  },
];

export const BlogGrid = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          Conteúdo recente
        </h2>
        <p className="mt-4 font-body text-lg text-muted-foreground">
          Inspiração prática para viver com elegância e autonomia
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => {
          const Icon = post.icon;
          
          return post.link ? (
            <Link key={post.id} to={post.link} className="block no-underline">
              <Card 
                className="group overflow-hidden border-border bg-card shadow-upira-sm transition-all hover:shadow-upira-md cursor-pointer h-full"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-base text-muted-foreground font-body">
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <Card 
              key={post.id}
              className="group overflow-hidden border-border bg-card shadow-upira-sm transition-all hover:shadow-upira-md cursor-pointer h-full"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2 text-base text-muted-foreground font-body">
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
