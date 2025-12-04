import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  Flame, 
  ChefHat, 
  TreePine, 
  Thermometer, 
  Shield, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink,
  Target,
  Heart,
  Sparkles,
  Droplets,
  Wind,
  Lightbulb,
  Star
} from "lucide-react";
import fogoImage from "@/assets/category-criar.jpg";
import { AuthorCard } from "@/components/AuthorCard";

const CozinharComFogo = () => {
  return (
    <>
      <Helmet>
        <title>Cozinhar com fogo: guia prático para pratos gourmet | Upira</title>
        <meta name="description" content="Do fogão à lenha à fogueira: técnicas refinadas para elevar sua culinária ao ar livre — sem abrir mão de sabor, sofisticação ou segurança." />
        <meta name="keywords" content="cozinhar com fogo, culinária ao ar livre, pratos gourmet, fogão à lenha, técnicas de cocção, fogueira, churrasco gourmet, lenha para cozinhar" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cozinhar com fogo: guia prático para pratos gourmet | Upira" />
        <meta property="og:description" content="Do fogão à lenha à fogueira: técnicas refinadas para elevar sua culinária ao ar livre — sem abrir mão de sabor, sofisticação ou segurança." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://upira.com.br/cozinhar-com-fogo-guia-pratico" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Cozinhar com fogo: guia prático para pratos gourmet",
            "description": "Do fogão à lenha à fogueira: técnicas refinadas para elevar sua culinária ao ar livre — sem abrir mão de sabor, sofisticação ou segurança.",
            "author": {
              "@type": "Organization",
              "name": "Upira"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Upira",
              "logo": {
                "@type": "ImageObject",
                "url": "https://upira.com.br/logo.png"
              }
            },
            "datePublished": "2025-11-14",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://upira.com.br/cozinhar-com-fogo-guia-pratico"
            }
          })}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={fogoImage}
            alt="Cozinhar com fogo: guia prático para pratos gourmet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Hero Section */}
        <section className="relative -mt-32 pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Flame className="h-6 w-6" />
                <span className="font-heading text-sm uppercase tracking-wider">Categoria: Comer</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Cozinhar com fogo: guia prático para pratos gourmet
              </h1>
              
              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Do fogão à lenha à fogueira: técnicas refinadas para elevar sua culinária ao ar livre — sem abrir mão de sabor, sofisticação ou segurança.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>14 Nov 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat className="h-4 w-4" />
                  <span>15 min de leitura</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <section className="space-y-6 mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                  <Sparkles className="h-8 w-8 text-primary" />
                  Quando o fogo vira ingrediente secreto
                </h2>
                
                <div className="space-y-4 font-body text-lg text-foreground/90 leading-relaxed">
                  <p>
                    Você já sentiu aquele cheiro inconfundível de comida preparada sobre brasas? Não é só nostalgia. É química, história e arte em ação. Enquanto a maioria das cozinhas modernas busca eliminar o fogo direto em nome da praticidade, um movimento silencioso resgata essa chama ancestral — não como saudade, mas como ferramenta culinária de alto desempenho.
                  </p>

                  <p>
                    Cozinhar com fogo não é apenas acampar ou improvisar. É dominar uma linguagem milenar que transforma ingredientes simples em pratos memoráveis. E sim, é possível fazer isso com elegância, controle e resultados dignos de um chef — mesmo sob o céu aberto.
                  </p>

                  <p>
                    Neste guia prático, você vai descobrir como cozinhar com fogo de forma intencional, segura e verdadeiramente gourmet. Vamos passar por técnicas de controle térmico, escolha de lenha, utensílios essenciais, receitas adaptáveis e até como integrar esse método no seu estilo de vida off-grid com luxo. Ao final, você não só saberá assar um filé perfeito sobre brasas — entenderá por que o fogo, mais do que calor, é presença.
                  </p>
                </div>

                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="space-y-3">
                        <p className="font-body text-base text-foreground">
                          Quer descobrir qual tipo de fogo combina com seu estilo culinário?
                        </p>
                        <Link to="/quiz">
                          <Button className="w-full sm:w-auto">
                            Faça nosso quiz gratuito
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Why Cook with Fire */}
              <section className="space-y-6 mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Por que cozinhar com fogo transforma a experiência gastronômica?
                </h2>
                
                <div className="space-y-4 font-body text-lg text-foreground/90 leading-relaxed">
                  <p>
                    A resposta vai além do sabor defumado (embora ele seja irresistível). Cozinhar com fogo exige presença. Você não pode programar um timer e sair da cozinha. O fogo pede atenção, leitura constante, adaptação. E é justamente essa interação que transforma uma refeição em ritual.
                  </p>

                  <p>
                    Estudos do Instituto Culinary Institute of America destacam que métodos de cocção com fogo aberto aumentam a complexidade aromática dos alimentos graças à pirólise — a quebra térmica de moléculas que gera compostos como o furfural e o guaiacol, responsáveis por notas tostadas, amadeiradas e até florais.
                  </p>

                  <p>
                    Além disso, há um componente psicológico: pesquisas da Universidade de Oxford indicam que cozinhar com fogo ativa regiões do cérebro ligadas à criatividade e ao bem-estar, por evocar memórias profundas de comunidade e acolhimento.
                  </p>
                </div>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <ExternalLink className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <a 
                        href="https://www.ciachef.edu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-body text-base text-foreground hover:text-primary transition-colors"
                      >
                        Link externo recomendado: The Science of Cooking with Fire – Culinary Institute of America
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Types of Fire */}
              <section className="space-y-6 mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                  <Flame className="h-8 w-8 text-primary" />
                  1. Entendendo os tipos de fogo para cozinhar
                </h2>
                
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  Fogo direto vs. fogo indireto: o básico que faz toda a diferença
                </h3>

                <div className="space-y-4 font-body text-lg text-foreground/90 leading-relaxed">
                  <p>
                    Muitos erros ao cozinhar com fogo vêm da confusão entre esses dois métodos. Entendê-los muda tudo:
                  </p>

                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <Flame className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Fogo direto:</strong> as brasas estão logo abaixo do alimento. Ideal para carnes finas, vegetais inteiros ou peixes firmes que cozinham rápido (até 15 minutos).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Wind className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Fogo indireto:</strong> as brasas ficam nas laterais; o calor circula. Perfeito para cortes grossos (como costela, lombo ou frango inteiro) que precisam de cocção lenta.</span>
                    </li>
                  </ul>
                </div>

                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="font-body text-base text-foreground">
                        <strong>Dica prática:</strong> organize sua fogueira ou churrasqueira em "zonas térmicas" — uma área com brasas intensas, outra com brasas médias e uma terceira limpa, para repouso ou emergência.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Table */}
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-4 py-3 text-left font-heading text-sm font-semibold text-foreground">Ingrediente</th>
                        <th className="px-4 py-3 text-left font-heading text-sm font-semibold text-foreground">Tipo de fogo</th>
                        <th className="px-4 py-3 text-left font-heading text-sm font-semibold text-foreground">Tempo médio</th>
                        <th className="px-4 py-3 text-left font-heading text-sm font-semibold text-foreground">Dica-chave</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-body text-sm text-foreground">Bife de picanha</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">Direto (alto)</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">6–10 min</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">Selar antes de abaixar o fogo</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-body text-sm text-foreground">Costela suína</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">Indireto (baixo)</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">3–5 horas</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">Use termômetro de carne</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-body text-sm text-foreground">Abobrinha inteira</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">Direto (médio)</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">12–15 min</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">Gire a cada 3 minutos</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-body text-sm text-foreground">Camarão grande</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">Direto (médio-alto)</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">4–6 min</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">Espete ou use grelha fina</td>
                      </tr>
                      <tr className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-body text-sm text-foreground">Pão de fermentação natural</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">Indireto (morno)</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">25–35 min</td>
                        <td className="px-4 py-3 font-body text-sm text-muted-foreground">Cubra com tampa ou panela de ferro</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Wood Selection */}
              <section className="space-y-6 mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                  <TreePine className="h-8 w-8 text-primary" />
                  2. A lenha certa faz toda a diferença
                </h2>
                
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  Nem toda madeira é igual — e isso afeta sabor, segurança e desempenho
                </h3>

                <div className="space-y-4 font-body text-lg text-foreground/90 leading-relaxed">
                  <p>
                    Muitos acreditam que "qualquer lenha serve", mas isso é mito perigoso. Madeiras resinosas (como pinho ou eucalipto) liberam fumaça tóxica e sabores amargos. Já frutíferas (maçã, cerejeira, oliveira) emprestam notas doces e sutis.
                  </p>

                  <p className="font-semibold text-foreground">
                    As melhores lenhas para cozinhar com fogo gourmet:
                  </p>

                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Carvalho:</strong> neutra, quente e duradoura. Ideal para carnes vermelhas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Cerejeira:</strong> defumação suave, perfeita para aves e peixes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Umburana:</strong> brasileira, aromática, usada na culinária nordestina para dar profundidade a pratos como o sarapatel.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Aroeira:</strong> clássica no churrasco, mas use com moderação — seu sabor é intenso.</span>
                    </li>
                  </ul>

                  <Card className="border-destructive/30 bg-destructive/5">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                        <p className="font-body text-base text-foreground">
                          <strong>Evite:</strong> compensados, móveis velhos, paletes não certificados. Podem conter vernizes, pregos ou químicos.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <Link to="/criar" className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                      <Star className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="font-body text-base text-foreground">
                        Leia também: Como escolher lenha sustentável para sua cozinha ao ar livre
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </section>

              {/* Essential Tools */}
              <section className="space-y-6 mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                  <ChefHat className="h-8 w-8 text-primary" />
                  3. Utensílios essenciais para cozinhar com fogo com sofisticação
                </h2>
                
                <div className="space-y-4 font-body text-lg text-foreground/90 leading-relaxed">
                  <p>
                    Esqueça a ideia de que cozinhar ao ar livre exige improvisação precária. Você pode — e deve — investir em ferramentas que combinam robustez e elegância.
                  </p>

                  <p className="font-semibold text-foreground">
                    Kit gourmet mínimo para fogo aberto:
                  </p>

                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Grelha ajustável:</strong> permite subir e descer a altura em relação às brasas (controle térmico preciso).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Pá de ferro fundido:</strong> para espalhar ou agrupar brasas sem levantar fumaça.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Termômetro de leitura instantânea:</strong> evita chutes no escuro. Carne perfeita = segurança alimentar.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Panela de ferro redonda com tampa:</strong> transforma fogo aberto em forno portátil.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Pincel de cerdas naturais:</strong> para aplicar óleos, marinadas ou molhos sem queimar as cerdas.</span>
                    </li>
                  </ul>
                </div>

                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Flame className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="font-body text-base text-foreground">
                        Use apenas utensílios de aço inoxidável, ferro fundido ou madeira dura — nada de plástico ou silicone comum, que derrete ou libera toxinas.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <Link to="/criar" className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                      <Star className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="font-body text-base text-foreground">
                        Leia também: 10 ferramentas premium para quem ama cozinhar ao ar livre
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </section>

              {/* Gourmet Techniques */}
              <section className="space-y-6 mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                  <Sparkles className="h-8 w-8 text-primary" />
                  4. Técnicas gourmet que funcionam ao ar livre
                </h2>
                
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  Selagem lenta com brasas controladas
                </h3>

                <div className="space-y-4 font-body text-lg text-foreground/90 leading-relaxed">
                  <p>
                    Em vez de jogar a carne direto na chama alta, experimente o método reverse sear:
                  </p>

                  <ol className="space-y-3 ml-6 list-decimal">
                    <li>Cozinhe o corte grosso em fogo indireto até atingir 50°C no centro.</li>
                    <li>Aumente o fogo com brasas frescas.</li>
                    <li>Selle rapidamente por 60 segundos de cada lado.</li>
                  </ol>

                  <p>
                    <strong>Resultado:</strong> interior rosado, crosta crocante e suculência preservada.
                  </p>
                </div>

                <h3 className="font-heading text-2xl font-semibold text-foreground mt-8">
                  Infusão de fumaça com ervas e cascas
                </h3>

                <div className="space-y-4 font-body text-lg text-foreground/90 leading-relaxed">
                  <p>
                    Coloque ramos de alecrim, folhas de louro ou cascas de laranja sobre as brasas quentes antes de grelhar. O vapor aromático envolve os alimentos, criando camadas de sabor sem sal ou gordura extra.
                  </p>
                </div>

                <h3 className="font-heading text-2xl font-semibold text-foreground mt-8">
                  Cozimento em "panela de barro sobre fogo"
                </h3>

                <div className="space-y-4 font-body text-lg text-foreground/90 leading-relaxed">
                  <p>
                    A cerâmica distribui o calor de forma uniforme. Use para ensopados, feijoadas ou pães. Basta colocar a panela sobre uma base de tijolos ou suporte metálico, com brasas ao redor — nunca em chama viva direta.
                  </p>
                </div>

                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="font-body text-base text-foreground">
                        <strong>Dica de chef:</strong> sempre pré-aqueça panelas de barro ou ferro lentamente. Choque térmico racha.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Safety */}
              <section className="space-y-6 mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  5. Segurança e respeito: os pilares invisíveis do fogo gourmet
                </h2>
                
                <div className="space-y-4 font-body text-lg text-foreground/90 leading-relaxed">
                  <p>
                    Cozinhar com fogo é um ato de poder — e responsabilidade. Um momento de distração pode virar tragédia.
                  </p>

                  <p className="font-semibold text-foreground">
                    Checklist de segurança essencial:
                  </p>

                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Cozinhe sempre em área aberta, longe de galhos, tendas ou gramas secas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Tenha um balde com água ou areia por perto — nunca use só extintor.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Apague todas as brasas com água até que não reste fumaça ou calor residual.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>Nunca deixe o fogo desacompanhado, mesmo que "pareça apagado".</span>
                    </li>
                  </ul>
                </div>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <ExternalLink className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <a 
                        href="https://www.ibama.gov.br" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-body text-base text-foreground hover:text-primary transition-colors"
                      >
                        Link externo: Recomendações de segurança em fogo aberto – IBAMA e Corpo de Bombeiros
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <Link to="/criar" className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                      <Star className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="font-body text-base text-foreground">
                        Leia também: Como montar uma cozinha off-grid segura e elegante
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </section>

              {/* Lifestyle Integration */}
              <section className="space-y-6 mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Integrando o fogo no seu estilo de vida com propósito
                </h2>
                
                <div className="space-y-4 font-body text-lg text-foreground/90 leading-relaxed">
                  <p>
                    Cozinhar com fogo não precisa ser só para fins de semana ou acampamentos. Muitos estão trazendo fogões à lenha modernos para varandas urbanas, ou usando rocket stoves compactos em jardins — aliando sustentabilidade, autonomia e prazer sensorial.
                  </p>

                  <p>
                    Esse hábito se conecta profundamente com valores como consumo inteligente, desaceleração e reconexão com o tempo natural. Não é só sobre o que você come — é sobre como você se relaciona com os elementos.
                  </p>
                </div>

                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="font-body text-base text-foreground">
                        Se você valoriza uma vida com mais significado e menos ruído, cozinhar com fogo pode ser sua nova meditação ativa.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* CTA Section */}
              <section className="space-y-6 mb-12">
                <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <CardContent className="p-8">
                    <div className="space-y-4 text-center">
                      <h3 className="font-heading text-2xl font-bold text-foreground">
                        Quer descobrir seu perfil de cozinheiro ao fogo?
                      </h3>
                      <p className="font-body text-base text-foreground/90">
                        Alguns preferem o controle do fogão à lenha; outros, a liberdade da fogueira selvagem. Seu estilo revela muito sobre como você lida com desafios, criatividade e prazer.
                      </p>
                      <Link to="/quiz">
                        <Button size="lg" className="mt-4">
                          Descubra seu estilo de cocção com fogo
                        </Button>
                      </Link>
                      <div className="space-y-2 text-left mt-6">
                        <p className="font-body text-sm text-muted-foreground">
                          Você receberá:
                        </p>
                        <ul className="space-y-2 ml-6">
                          <li className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Um perfil personalizado (ex.: "Guardião das Brasas" ou "Alquimista do Fogo");</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Receitas sob medida;</span>
                          </li>
                          <li className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>Lista de ferramentas ideais para seu espaço e orçamento.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Conclusion */}
              <section className="space-y-6 mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Conclusão: O fogo não cozinha — transforma
                </h2>
                
                <div className="space-y-4 font-body text-lg text-foreground/90 leading-relaxed">
                  <p>
                    Cozinhar com fogo nunca foi apenas uma técnica. É um ato de coragem, intuição e reverência. Em um mundo de botões e automações, escolher o fogo é escolher voltar a sentir o tempo, o calor, o cheiro da madeira queimando e o silêncio entre as brasas.
                  </p>

                  <p>
                    E, curiosamente, é nesse "desconforto controlado" que encontramos o verdadeiro luxo: a presença plena.
                  </p>

                  <p>
                    Que seu próximo jantar ao ar livre não seja só uma refeição — mas uma experiência que seus convidados lembrem por anos. Porque, no fim, cozinhar com fogo não é sobre domínio da chama. É sobre deixar que ela acenda algo em você também.
                  </p>

                  <p className="italic">
                    Compartilhe este guia com alguém que ainda acha que cozinhar ao ar livre é "só churrasco". Pode ser o empurrão que faltava para ele redescobrir o prazer mais antigo da humanidade.
                  </p>
                </div>

                <div className="space-y-3 pt-6">
                  <p className="font-heading text-lg font-semibold text-foreground">
                    Leia também:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>
                      <Link to="/cultivar" className="text-primary hover:underline font-body text-base">
                        Como criar uma identidade culinária alinhada com seu estilo de vida
                      </Link>
                    </li>
                    <li>
                      <Link to="/comer" className="text-primary hover:underline font-body text-base">
                        Receitas brasileiras ancestrais que merecem um lugar na sua mesa
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="space-y-6 mb-12 border-t border-border pt-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Perguntas Frequentes (FAQ)
                </h2>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      O que significa cozinhar com fogo?
                    </h3>
                    <p className="font-body text-base text-foreground/90 leading-relaxed">
                      É o ato de preparar alimentos usando calor direto ou indireto de brasas, lenha ou fogueira, em vez de fontes modernas como gás ou eletricidade. Envolve técnicas específicas de controle térmico e escolha de materiais.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      Posso cozinhar pratos gourmet em uma fogueira simples?
                    </h3>
                    <p className="font-body text-base text-foreground/90 leading-relaxed">
                      Sim. Com controle de brasas, bons utensílios e ingredientes de qualidade, é possível preparar desde tartare com crosta de fumaça até pão fermentado natural — tudo ao ar livre.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      Qual a diferença entre churrasco e cozinhar com fogo gourmet?
                    </h3>
                    <p className="font-body text-base text-foreground/90 leading-relaxed">
                      Churrasco foca em carnes assadas com sal grosso. Cozinhar com fogo gourmet abrange técnicas refinadas, controle de temperatura, uso de aromáticos e pratos variados — inclusive vegetarianos e sobremesas.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      É seguro cozinhar com fogo em áreas urbanas?
                    </h3>
                    <p className="font-body text-base text-foreground/90 leading-relaxed">
                      Depende da legislação local. Fogões à lenha certificados ou estufas de cocção fechadas (como rocket stoves) são opções mais seguras e frequentemente permitidas em varandas ou jardins.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      Onde posso testar minhas habilidades com fogo?
                    </h3>
                    <p className="font-body text-base text-foreground/90 leading-relaxed">
                      Comece com nosso{" "}
                      <Link to="/quiz" className="text-primary hover:underline">
                        quiz de perfil culinário ao fogo
                      </Link>{" "}
                      e receba um plano de aprendizado com níveis progressivos — do básico ao avançado.
                    </p>
                  </div>
                </div>
              </section>

              {/* Autor */}
              <section className="mt-12 pt-8 border-t border-border">
                <AuthorCard variant="compact" />
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default CozinharComFogo;
