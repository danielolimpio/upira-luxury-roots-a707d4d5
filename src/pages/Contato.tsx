import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

// Declare Leaflet types for TypeScript
declare global {
  interface Window {
    L: any;
  }
}

const Contato = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    // Load Leaflet JS and initialize map
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;
    
    script.onload = () => {
      if (mapRef.current && window.L) {
        const map = window.L.map(mapRef.current).setView([-7.1189, -34.8619], 15);
        
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        const customIcon = window.L.divIcon({
          html: '<div style="background-color: hsl(var(--primary)); width: 30px; height: 30px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);"></div>',
          className: 'custom-marker',
          iconSize: [30, 30],
          iconAnchor: [15, 30]
        });

        window.L.marker([-7.1189, -34.8619], { icon: customIcon })
          .addTo(map)
          .bindPopup('<div style="font-family: system-ui; padding: 8px;"><strong>Upira</strong><br/>Av. Julia Freire, 1200<br/>Expedicionários<br/>João Pessoa - PB<br/>CEP: 58.041-000</div>');
      }
    };
    
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada! Em breve entraremos em contato.");
  };

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Contato | Upira - Fale Conosco</title>
        <meta name="robots" content="index, follow" />
        <meta 
          name="description" 
          content="Entre em contato com a equipe Upira. Envie sua mensagem, dúvidas ou sugestões. Estamos em João Pessoa - PB." 
        />
        <meta name="keywords" content="contato upira, fale conosco, email, endereço, joão pessoa" />
        <link rel="canonical" href="https://upira.com.br/contato" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contato | Upira" />
        <meta property="og:description" content="Entre em contato com a equipe Upira. Envie sua mensagem, dúvidas ou sugestões." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://upira.com.br/contato" />
        <meta property="og:image" content="https://upira.com.br/og-image.jpg" />
        
        {/* Schema.org ContactPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contato Upira",
            "description": "Entre em contato com a equipe Upira",
            "url": "https://upira.com.br/contato",
            "mainEntity": {
              "@type": "Organization",
              "name": "Upira",
              "email": "contato@upira.com.br",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Julia Freire, 1200 - Expedicionários",
                "addressLocality": "João Pessoa",
                "addressRegion": "PB",
                "postalCode": "58041-000",
                "addressCountry": "BR"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Mail className="h-16 w-16 text-primary" />
              </div>
              <h1 className="font-heading text-5xl font-bold text-foreground md:text-6xl">
                Contato
              </h1>
              <p className="mt-4 font-body text-xl text-muted-foreground">
                Entre em contato conosco. Adoramos ouvir de você!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-body">Nome</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome completo"
                        required
                        className="border-border bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="border-border bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-body">Assunto</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Sobre o que você quer falar?"
                        required
                        className="border-border bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-body">Mensagem</Label>
                      <Textarea
                        id="message"
                        placeholder="Escreva sua mensagem aqui..."
                        rows={6}
                        required
                        className="border-border bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      Outras formas de contato
                    </h2>
                    <p className="font-body text-muted-foreground mb-6">
                      Se preferir, você também pode nos contatar diretamente pelo email:
                    </p>
                    
                    <a
                      href="mailto:contato@upira.com.br"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="font-body">contato@upira.com.br</span>
                    </a>

                    <div className="pt-6 border-t border-border">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Nosso Endereço
                      </h3>
                      <address className="font-body text-muted-foreground not-italic leading-relaxed">
                        Av. Julia Freire, 1200<br />
                        Expedicionários<br />
                        João Pessoa - PB<br />
                        CEP: 58.041-000<br />
                        Brasil
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <Card className="overflow-hidden border-border shadow-upira-md">
              <CardContent className="p-0">
                <div ref={mapRef} className="w-full h-[400px] md:h-[500px]" />
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contato;
