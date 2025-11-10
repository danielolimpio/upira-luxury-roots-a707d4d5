import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leaf } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Leaf className="h-16 w-16 text-primary" />
            </div>
            <h1 className="font-heading text-5xl font-bold text-foreground md:text-6xl">
              Sobre o Upira
            </h1>
            <p className="mt-4 font-body text-xl text-muted-foreground">
              Raiz com atitude
            </p>
          </div>

          <div className="space-y-6 font-body text-lg leading-relaxed text-foreground">
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

            <p className="text-center italic text-primary">
              Feito para quem escolhe viver bem.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
