import logo from "@/assets/logo-upira.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Upira" className="h-16 w-auto" />
            </Link>
            <p className="font-body text-base text-muted-foreground">
              Feito para quem escolhe viver bem.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-heading text-base font-semibold text-foreground">Explorar</h3>
            <ul className="space-y-2 font-body text-base">
              <li><Link to="/viver" className="text-muted-foreground hover:text-primary transition-colors">Viver</Link></li>
              <li><Link to="/comer" className="text-muted-foreground hover:text-primary transition-colors">Comer</Link></li>
              <li><Link to="/criar" className="text-muted-foreground hover:text-primary transition-colors">Criar</Link></li>
              <li><Link to="/explorar" className="text-muted-foreground hover:text-primary transition-colors">Explorar</Link></li>
              <li><Link to="/cultivar" className="text-muted-foreground hover:text-primary transition-colors">Cultivar</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-heading text-base font-semibold text-foreground">Recursos</h3>
            <ul className="space-y-2 font-body text-base">
              <li><Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</Link></li>
              <li><Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
              <li><Link to="/quiz" className="text-muted-foreground hover:text-primary transition-colors">Quiz</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-heading text-base font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 font-body text-base">
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
