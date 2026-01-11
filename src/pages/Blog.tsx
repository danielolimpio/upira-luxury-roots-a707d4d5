import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Tag, BookOpen, HelpCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import despensaImage from "@/assets/category-comer.jpg";
import habitosImage from "@/assets/category-explorar.jpg";
import fogoImage from "@/assets/category-criar.jpg";
import aguaImage from "@/assets/sistema-captacao-agua.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Sistema de captação de água: beleza e funcionalidade",
      excerpt: "Como integrar soluções hídricas ao design da sua propriedade com elegância.",
      date: "15 Nov 2025",
      category: "Viver",
      slug: "/sistema-captacao-agua-beleza-funcionalidade",
      image: aguaImage,
    },
    {
      id: 2,
      title: "Cozinhar com fogo: guia prático para pratos gourmet",
      excerpt: "Do fogão à lenha à fogueira: técnicas refinadas para elevar sua culinária ao ar livre.",
      date: "14 Nov 2025",
      category: "Comer",
      slug: "/cozinhar-com-fogo-guia-pratico",
      image: fogoImage,
    },
    {
      id: 3,
      title: "5 hábitos de consumo que reduzem o estresse",
      excerpt: "Descubra como pequenas mudanças no seu dia a dia podem trazer mais tranquilidade.",
      date: "12 Nov 2025",
      category: "Explorar",
      slug: "/habitos-consumo-reduzem-estresse",
      image: habitosImage,
    },
    {
      id: 4,
      title: "Despensa off-grid: guia para 6 meses de autonomia",
      excerpt: "Como planejar e organizar uma despensa completa para viver com independência.",
      date: "10 Nov 2025",
      category: "Comer",
      slug: "/despensa-off-grid-6-meses",
      image: despensaImage,
    },
  ];

  const categories = [
    { name: "Viver", href: "/viver", count: 12 },
    { name: "Comer", href: "/comer", count: 8 },
    { name: "Criar", href: "/criar", count: 15 },
    { name: "Explorar", href: "/explorar", count: 10 },
    { name: "Cultivar", href: "/cultivar", count: 7 },
  ];

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Blog - Upira | Artigos sobre vida consciente e off-grid</title>
        <meta 
          name="description" 
          content="Explore nossos artigos sobre vida sustentável, consumo inteligente, culinária natural e práticas off-grid com luxo e propósito." 
        />
        <meta name="keywords" content="blog upira, vida off-grid, sustentabilidade, consumo consciente, culinária natural" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://upira.com.br/blog" />
        
        <meta property="og:title" content="Blog - Upira | Artigos sobre vida consciente" />
        <meta property="og:description" content="Explore nossos artigos sobre vida sustentável, consumo inteligente e práticas off-grid." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://upira.com.br/blog" />
        <meta property="og:image" content="https://upira.com.br/og-image.jpg" />
        <meta property="og:site_name" content="Upira" />
        <meta property="og:locale" content="pt_BR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Upira | Artigos sobre vida consciente" />
        <meta name="twitter:description" content="Explore nossos artigos sobre vida sustentável, consumo inteligente e práticas off-grid." />
        <meta name="twitter:image" content="https://upira.com.br/og-image.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog Upira",
            "description": "Artigos sobre vida consciente, consumo inteligente e estilo de vida off-grid com luxo.",
            "url": "https://upira.com.br/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Upira",
              "url": "https://upira.com.br"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-block">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Blog Upira
                </h1>
                <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Artigos profundos sobre vida consciente, consumo inteligente e práticas que transformam o cotidiano em experiência.
                </p>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Blog Posts */}
                <div className="lg:col-span-2 space-y-8">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden border-border bg-card shadow-upira-sm hover:shadow-upira-md transition-shadow">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-auto">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-6 flex flex-col justify-between">
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span className="font-body">{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Tag className="h-4 w-4" />
                                <span className="font-body">{post.category}</span>
                              </div>
                            </div>
                            
                            <h2 className="font-heading text-2xl font-semibold text-foreground hover:text-primary transition-colors">
                              <Link to={post.slug}>{post.title}</Link>
                            </h2>
                            
                            <p className="font-body text-base text-muted-foreground leading-relaxed">
                              {post.excerpt}
                            </p>
                          </div>
                          
                          <Button asChild variant="outline" className="mt-6 w-full">
                            <Link to={post.slug}>Ler artigo completo</Link>
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Sidebar */}
                <aside className="space-y-6">
                  {/* Categories */}
                  <Card className="border-border bg-card shadow-upira-sm">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Tag className="h-5 w-5 text-primary" />
                        Categorias
                      </h3>
                      <ul className="space-y-3">
                        {categories.map((category) => (
                          <li key={category.name}>
                            <Link
                              to={category.href}
                              className="flex items-center justify-between font-body text-base text-foreground hover:text-primary transition-colors group"
                            >
                              <span className="group-hover:underline">{category.name}</span>
                              <span className="text-sm text-muted-foreground">({category.count})</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Quiz Widget */}
                  <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 shadow-upira-sm">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-primary" />
                        Descubra seu estilo
                      </h3>
                      <p className="font-body text-base text-muted-foreground mb-4 leading-relaxed">
                        Faça nosso quiz e receba recomendações personalizadas de conteúdos e práticas.
                      </p>
                      <Button asChild className="w-full">
                        <Link to="/quiz">Fazer Quiz Gratuito</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Newsletter */}
                  <Card className="border-border bg-card shadow-upira-sm">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                        Newsletter
                      </h3>
                      <p className="font-body text-base text-muted-foreground mb-4 leading-relaxed">
                        Receba nossos melhores artigos diretamente no seu email.
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/contato">Inscrever-se</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </aside>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;
