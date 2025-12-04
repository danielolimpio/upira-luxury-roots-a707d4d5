import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Github, Globe, ChevronDown, ChevronUp } from "lucide-react";
import authorPhoto from "@/assets/author-daniel.jpg";

interface AuthorCardProps {
  variant?: "full" | "compact";
  showExpandButton?: boolean;
}

const authorData = {
  name: "Daniel Olimpio",
  role: "Desenvolvedor Web & Entusiasta de Espaços que Inspiram",
  shortBio: "Combino tecnologia, criatividade e uma sensibilidade apurada para construir soluções digitais que não só funcionam, mas também emocionam.",
  fullBio: `Com mais de 20 anos no mercado digital, atuo na interseção entre desenvolvimento web, design de interfaces e uma paixão genuína por arquitetura, decoração e natureza. Acredito que o mesmo cuidado com que se projeta um ambiente acolhedor deve guiar a criação de experiências digitais: funcionais, esteticamente equilibradas e profundamente humanas.

Minha expertise está em transformar ideias complexas em produtos digitais claros, escaláveis e visualmente impactantes. Trabalho do front-end ao back-end com foco em código limpo, arquitetura sólida e design responsivo — sempre guiado por dois pilares: a experiência do usuário e os objetivos do negócio.

Assim como admiro a harmonia entre luz, forma e funcionalidade em um bom projeto arquitetônico, busco essa mesma coesão em cada linha de código e em cada pixel que projeto. Para mim, desenvolver vai além da técnica: é criar lugares digitais onde as pessoas queiram ficar.`,
  skills: ["Full Stack Development", "UI/UX Design", "Brand Identity"],
  social: {
    facebook: "https://www.facebook.com/danielolimpio.com.br",
    twitter: "https://x.com/danielolimpio_",
    instagram: "https://www.instagram.com/danielolimpio_com",
    linkedin: "https://www.linkedin.com/in/danielolimpio-com/",
    github: "https://github.com/danielolimpio",
    website: "https://danielolimpio.com"
  }
};

export const AuthorCard = ({ variant = "compact", showExpandButton = true }: AuthorCardProps) => {
  const [expanded, setExpanded] = useState(false);

  if (variant === "full") {
    return (
      <Card className="border-border bg-muted/30 overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Photo */}
            <div className="shrink-0">
              <img
                src={authorPhoto}
                alt={authorData.name}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                {authorData.name}
              </h2>
              <p className="font-body text-lg text-primary mb-6">
                {authorData.role}
              </p>

              <div className="space-y-4 text-foreground/90 font-body text-lg leading-relaxed">
                <p>{authorData.shortBio}</p>
                
                {expanded && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    {authorData.fullBio.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>

              {showExpandButton && (
                <Button
                  variant="ghost"
                  onClick={() => setExpanded(!expanded)}
                  className="mt-6 text-primary hover:text-primary/80 font-body font-semibold"
                >
                  {expanded ? (
                    <>
                      Ver menos <ChevronUp className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Ver mais <ChevronDown className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}

              {/* Skills */}
              <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                {authorData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full font-body text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <a
                  href={authorData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 hover:bg-primary/20 text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={authorData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 hover:bg-primary/20 text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={authorData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 hover:bg-primary/20 text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={authorData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 hover:bg-primary/20 text-foreground/70 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={authorData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 hover:bg-primary/20 text-foreground/70 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={authorData.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 hover:bg-primary/20 text-foreground/70 hover:text-primary transition-colors"
                  aria-label="Website"
                >
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Compact variant for article footer
  return (
    <Card className="border-border bg-muted/30 overflow-hidden">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          {/* Photo */}
          <Link to="/sobre" className="shrink-0">
            <img
              src={authorPhoto}
              alt={authorData.name}
              className="w-24 h-24 rounded-full object-cover border-3 border-primary/20 shadow-md hover:border-primary/40 transition-colors"
            />
          </Link>

          {/* Content */}
          <div className="flex-1 text-center sm:text-left">
            <p className="font-body text-sm uppercase tracking-wider text-muted-foreground mb-1">
              Escrito por
            </p>
            <Link to="/sobre">
              <h3 className="font-heading text-xl font-bold text-foreground hover:text-primary transition-colors mb-2">
                {authorData.name}
              </h3>
            </Link>
            <p className="font-body text-sm text-primary mb-3">
              {authorData.role}
            </p>

            <p className="font-body text-base text-muted-foreground leading-relaxed">
              {authorData.shortBio}
            </p>

            <Link to="/sobre">
              <Button
                variant="ghost"
                className="mt-4 text-primary hover:text-primary/80 font-body font-semibold px-0"
              >
                Ver mais <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            {/* Social Links */}
            <div className="flex gap-3 mt-4 justify-center sm:justify-start">
              <a
                href={authorData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 hover:bg-primary/20 text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={authorData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 hover:bg-primary/20 text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={authorData.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-foreground/5 hover:bg-primary/20 text-foreground/70 hover:text-primary transition-colors"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthorCard;
