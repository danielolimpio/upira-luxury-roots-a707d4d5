import { Leaf } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-heading text-2xl font-bold text-primary">Upira</span>
            </div>
            <p className="font-body text-sm text-muted-foreground">
              Feito para quem escolhe viver bem.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold text-foreground">Explorar</h3>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="/viver" className="text-muted-foreground hover:text-primary transition-colors">Viver</a></li>
              <li><a href="/comer" className="text-muted-foreground hover:text-primary transition-colors">Comer</a></li>
              <li><a href="/criar" className="text-muted-foreground hover:text-primary transition-colors">Criar</a></li>
              <li><a href="/explorar" className="text-muted-foreground hover:text-primary transition-colors">Explorar</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold text-foreground">Recursos</h3>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="/contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              <li><a href="/newsletter" className="text-muted-foreground hover:text-primary transition-colors">Newsletter</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="/termos" className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Upira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
