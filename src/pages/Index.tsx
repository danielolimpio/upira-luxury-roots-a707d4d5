import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { MostRecent } from "@/components/home/MostRecent";
import { Spotlight } from "@/components/home/Spotlight";
import { Recommended } from "@/components/home/Recommended";
import { TopDeals } from "@/components/home/TopDeals";
import { LetsExplore } from "@/components/home/LetsExplore";
import { TodaysPick } from "@/components/home/TodaysPick";

const Index = () => {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Upira - Raiz com atitude | Off-grid com luxo e elegância</title>
        <meta name="robots" content="index, follow" />
        <meta 
          name="description" 
          content="Off-grid com luxo: consumo inteligente, estilo de vida consciente e elegante. Viver bem, do seu jeito. Descubra autonomia, conforto e sofisticação sustentável." 
        />
        <meta name="keywords" content="off-grid, sustentabilidade, estilo de vida consciente, autonomia, bem-estar, consumo inteligente, vida rural, minimalismo, elegância sustentável" />
        <link rel="canonical" href="https://upira.com.br/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://upira.com.br/" />
        <meta property="og:site_name" content="Upira" />
        <meta property="og:title" content="Upira - Raiz com atitude | Off-grid com luxo" />
        <meta property="og:description" content="Off-grid com luxo: consumo inteligente, estilo de vida consciente e elegante. Viver bem, do seu jeito." />
        <meta property="og:image" content="https://upira.com.br/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://upira.com.br/" />
        <meta name="twitter:title" content="Upira - Raiz com atitude | Off-grid com luxo" />
        <meta name="twitter:description" content="Off-grid com luxo: consumo inteligente, estilo de vida consciente e elegante. Viver bem, do seu jeito." />
        <meta name="twitter:image" content="https://upira.com.br/og-image.jpg" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Upira",
            "url": "https://upira.com.br",
            "description": "Off-grid com luxo: consumo inteligente, estilo de vida consciente e elegante",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://upira.com.br/blog?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Upira",
              "url": "https://upira.com.br",
              "logo": {
                "@type": "ImageObject",
                "url": "https://upira.com.br/og-image.jpg"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroCarousel />
          <MostRecent />
          <Spotlight />
          <Recommended />
          <TopDeals />
          <LetsExplore />
          <TodaysPick />
          <div className="container mx-auto px-4 pb-16 md:pb-24">
            <div className="flex justify-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-upira-lg transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                Ver Todos os Artigos
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
