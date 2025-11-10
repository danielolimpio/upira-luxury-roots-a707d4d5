import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

const Contato = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert("Mensagem enviada! Em breve entraremos em contato.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl space-y-8">
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                required
                className="border-border bg-card"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-body">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="border-border bg-card"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="font-body">Assunto</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Sobre o que você quer falar?"
                required
                className="border-border bg-card"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-body">Mensagem</Label>
              <Textarea
                id="message"
                placeholder="Escreva sua mensagem aqui..."
                rows={6}
                required
                className="border-border bg-card resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary-dark shadow-upira-md hover:shadow-upira-lg"
            >
              Enviar Mensagem
            </Button>
          </form>

          <div className="text-center font-body text-sm text-muted-foreground">
            <p>Ou envie um e-mail diretamente para:</p>
            <a
              href="mailto:contato@upira.com.br"
              className="font-medium text-primary hover:underline"
            >
              contato@upira.com.br
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
