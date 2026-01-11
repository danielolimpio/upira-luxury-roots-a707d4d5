import { Helmet } from "react-helmet-async";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página não encontrada | Upira</title>
        <meta name="description" content="A página que você está procurando não existe ou foi movida." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-lg space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-8xl font-bold text-primary">404</h1>
              <h2 className="font-heading text-3xl font-semibold text-foreground">
                Página não encontrada
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                A página que você está procurando não existe ou foi movida. 
                Que tal explorar nosso conteúdo sobre vida off-grid?
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Voltar ao Início
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Ver Blog
                </Link>
              </Button>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
