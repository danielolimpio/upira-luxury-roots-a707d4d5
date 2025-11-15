import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/logo-upira.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Viver", href: "/viver" },
  { name: "Comer", href: "/comer" },
  { name: "Criar", href: "/criar" },
  { name: "Explorar", href: "/explorar" },
  { name: "Cultivar", href: "/cultivar" },
  { name: "Sobre", href: "/sobre" },
  { name: "Quiz", href: "/quiz" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Upira" className="h-14 w-auto" />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-8 mx-auto">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="font-body text-base font-medium text-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="font-body text-xl font-medium text-foreground transition-colors hover:text-primary"
                  activeClassName="text-primary"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};
