import logo from "@/assets/logo-upira.png";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

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
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contato@upira.com.br" className="hover:text-primary transition-colors">
                  contato@upira.com.br
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+5512982519116" className="hover:text-primary transition-colors">
                  (12) 98251-9116
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Av. Julia Freire, 1200 - João Pessoa - PB/Brasil</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-heading text-base font-semibold text-foreground">Explorar</h3>
            <ul className="space-y-2 font-body text-base">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</Link></li>
              <li><Link to="/quiz" className="text-muted-foreground hover:text-primary transition-colors">Quiz</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 font-heading text-base font-semibold text-foreground">Categorias</h3>
            <ul className="space-y-2 font-body text-base">
              <li><Link to="/viver" className="text-muted-foreground hover:text-primary transition-colors">Viver</Link></li>
              <li><Link to="/comer" className="text-muted-foreground hover:text-primary transition-colors">Comer</Link></li>
              <li><Link to="/criar" className="text-muted-foreground hover:text-primary transition-colors">Criar</Link></li>
              <li><Link to="/explorar" className="text-muted-foreground hover:text-primary transition-colors">Explorar</Link></li>
              <li><Link to="/cultivar" className="text-muted-foreground hover:text-primary transition-colors">Cultivar</Link></li>
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
            © Copyright {new Date().getFullYear()} | Upira.com.br | Todos os direitos reservados | Desenvolvido por{" "}
            <a 
              href="https://danielolimpio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              DanielOlimpio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
