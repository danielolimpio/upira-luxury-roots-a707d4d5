import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthorCard } from "@/components/AuthorCard";
import { Leaf } from "lucide-react";

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre o Upira | Raiz com Atitude - Vida Off-Grid com Luxo</title>
        <meta 
          name="description" 
          content="Conheça o Upira: inspiração prática para quem quer autonomia, conforto e elegância. Off-grid pode ser luxuoso. Raiz com atitude." 
        />
        <meta name="keywords" content="upira, sobre, off-grid, vida sustentável, autonomia, luxo sustentável, daniel olimpio" />
        <link rel="canonical" href="https://upira.com.br/sobre" />
        
        <meta property="og:title" content="Sobre o Upira | Raiz com Atitude" />
        <meta property="og:description" content="Conheça o Upira: inspiração prática para quem quer autonomia, conforto e elegância." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://upira.com.br/sobre" />
        <meta property="og:image" content="https://upira.com.br/og-image.jpg" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl space-y-16">
            {/* Sobre o Upira */}
            <section className="text-center">
              <div className="mb-6 flex justify-center">
                <Leaf className="h-16 w-16 text-primary" />
              </div>
              <h1 className="font-heading text-5xl font-bold text-foreground md:text-6xl">
                Sobre o Upira
              </h1>
              <p className="mt-4 font-body text-xl text-primary font-medium">
                Raiz com atitude
              </p>
            </section>

            <section className="space-y-6 font-body text-lg leading-relaxed text-foreground">
              <p>
                O <strong>Upira</strong> não é sobre fugir do mundo. É sobre escolher viver bem — do seu jeito.
              </p>

              <p>
                Aqui você não vai encontrar sermões sobre "salvar o planeta" ou receitas prontas para uma vida perfeita. 
                O que você encontra é <strong>inspiração prática</strong> para quem quer autonomia, conforto e elegância — 
                tudo ao mesmo tempo, sem culpa.
              </p>

              <p>
                Acreditamos que <strong>off-grid pode ser luxuoso</strong>. Que cozinhar com fogo pode ser gourmet. 
                Que construir com as próprias mãos pode ser sofisticado. Que consumir menos pode trazer mais bem-estar.
              </p>

              <p>
                Este blog é para quem tem <strong>raiz</strong> — mas não abre mão de <strong>atitude</strong>.
              </p>

              <p className="text-center italic text-primary text-xl">
                Feito para quem escolhe viver bem.
              </p>
            </section>

            {/* Divisor */}
            <div className="border-t border-border" />

            {/* Sobre o Autor */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-8">
                Quem está por trás do Upira
              </h2>
              <AuthorCard variant="full" showExpandButton={true} />
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Sobre;
