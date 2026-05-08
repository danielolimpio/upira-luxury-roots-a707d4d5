import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogGrid } from "@/components/BlogGrid";
import { CategorySidebar } from "@/components/CategorySidebar";

interface CategoryPageProps {
  title: string;
  description: string;
  heroImage: string;
  recentPosts: Array<{ id: number; title: string; date: string }>;
  featuredPosts: Array<{ id: number; title: string; date: string }>;
  quizTitle: string;
  quizLink: string;
  slug?: string;
}

export const CategoryPage = ({
  title,
  description,
  heroImage,
  recentPosts,
  featuredPosts,
  quizTitle,
  quizLink,
  slug,
}: CategoryPageProps) => {
  const pageUrl = `https://upira.com.br/${slug || title.toLowerCase()}`;
  
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>{title} | Upira - Raiz com atitude</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={description} />
        <meta name="keywords" content={`${title.toLowerCase()}, upira, off-grid, sustentabilidade, vida consciente`} />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${title} | Upira`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://upira.com.br/og-image.jpg" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Upira`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://upira.com.br/og-image.jpg" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": title,
            "description": description,
            "url": pageUrl,
            "isPartOf": {
              "@type": "WebSite",
              "name": "Upira",
              "url": "https://upira.com.br"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-6">
          <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden rounded-3xl shadow-upira-lg">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/70 via-primary-dark/30 to-transparent" />
            </div>

            <div className="relative flex h-full items-end p-8 md:p-12">
              <div className="max-w-3xl space-y-4">
                <span className="inline-block rounded-full bg-primary/90 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary-foreground">
                  Categoria
                </span>
                <h1 className="font-heading text-5xl font-bold leading-[1.05] text-white md:text-7xl">
                  {title}
                </h1>
                <p className="font-body text-lg text-white/90 md:text-2xl">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section with Sidebar */}
        <main className="container mx-auto px-4 py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <BlogGrid />
            </div>
            
            <CategorySidebar
              recentPosts={recentPosts}
              featuredPosts={featuredPosts}
              quizTitle={quizTitle}
              quizLink={quizLink}
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};
