import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Home, Lightbulb, Eye, Leaf, TrendingDown, Heart, Sparkles, Wind, Shield, MapPin, Trees, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthorCard } from "@/components/AuthorCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ShareButtons } from "@/components/ShareButtons";

const IluminacaoNatural = () => {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Iluminação Natural: Arquitetura que Conversa com o Sol | Upira</title>
        <meta name="description" content="Estratégias de design para maximizar luz natural com sofisticação e economia. Descubra como transformar sua casa em um espaço luminoso e energeticamente eficiente." />
        <meta name="keywords" content="iluminação natural, arquitetura bioclimática, luz solar, eficiência energética, design sustentável, bem-estar, arquitetura residencial" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://upira.com.br/iluminacao-natural-arquitetura-conversa-com-sol" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Iluminação Natural: Arquitetura que Conversa com o Sol | Upira" />
        <meta property="og:description" content="Estratégias de design para maximizar luz natural com sofisticação e economia." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://upira.com.br/iluminacao-natural-arquitetura-conversa-com-sol" />
        <meta property="og:image" content="https://upira.com.br/og-image.jpg" />
        <meta property="og:site_name" content="Upira" />
        <meta property="og:locale" content="pt_BR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Iluminação Natural: Arquitetura que Conversa com o Sol | Upira" />
        <meta name="twitter:description" content="Estratégias de design para maximizar luz natural com sofisticação e economia." />
        <meta name="twitter:image" content="https://upira.com.br/og-image.jpg" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Iluminação Natural: Arquitetura que Conversa com o Sol",
            "description": "Estratégias de design para maximizar luz natural com sofisticação e economia.",
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
            "datePublished": "2025-01-03",
            "dateModified": "2025-01-03"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Image */}
        <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80"
            alt="Iluminação natural em arquitetura moderna"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/40 to-transparent" />
        </div>

        <article className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            items={[
              { label: "Criar", href: "/criar" },
              { label: "Iluminação natural: arquitetura que conversa com o sol" }
            ]} 
          />

          {/* Title */}
          <header className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 text-base text-muted-foreground mb-4 font-body">
              <Lightbulb className="h-5 w-5 text-primary" />
              <span>Criar</span>
              <span>•</span>
              <span>3 Jan 2025</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Iluminação natural: arquitetura que conversa com o sol
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              Estratégias de design para maximizar luz natural com sofisticação e economia.
            </p>
          </header>

          {/* Share Buttons */}
          <ShareButtons 
            title="Iluminação natural: arquitetura que conversa com o sol"
            description="Estratégias de design para maximizar luz natural com sofisticação e economia."
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Há algo profundamente reconfortante em acordar com a luz dourada da manhã entrando suavemente pela janela, banhando a sala com uma claridade viva, sem o zumbido de lâmpadas ou o frio de luzes artificiais. E, no entanto, muitas casas — mesmo as mais modernas — parecem projetadas como se o sol fosse um convidado indesejado. Cômodos escuros, dependência excessiva de eletricidade durante o dia e ambientes que nunca parecem "respirar" são sinais de um desenho que ignora um dos recursos mais generosos e gratuitos que temos: a luz do sol.
            </p>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              A boa notícia é que isso tem solução — e nome: iluminação natural. Mais do que uma técnica de projeto, é uma filosofia arquitetônica que entende o sol não como um obstáculo a ser bloqueado, mas como um parceiro criativo. Neste artigo, você vai descobrir como transformar sua casa em um espaço luminoso, energicamente eficiente e emocionalmente acolhedor, usando estratégias comprovadas pela arquitetura bioclimática e adaptadas à realidade brasileira.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Sun className="h-8 w-8 text-primary" />
              O que é iluminação natural na prática?
            </h2>
            
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Iluminação natural é o uso intencional da luz solar para iluminar ambientes internos de forma controlada, confortável e funcional. Não se trata apenas de colocar janelas maiores — embora isso ajude —, mas de entender a trajetória do sol ao longo do dia e das estações, e então moldar paredes, aberturas, superfícies e até mobiliário para captar, difundir e redirecionar essa luz com inteligência.
            </p>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Projetos bem resolvidos conseguem manter os ambientes claros o dia inteiro sem ofuscar, aquecer demais ou causar danos aos móveis. O resultado? Economia na conta de luz, bem-estar psicológico comprovado e uma estética que valoriza texturas, cores e formas de maneira orgânica.
            </p>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Quer levar essa ideia para sua reforma? Leia nosso <Link to="/sistema-captacao-agua-beleza-funcionalidade" className="text-primary hover:text-primary/80 underline font-semibold transition-colors">guia completo sobre arquitetura bioclimática aqui</Link>.
            </p>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-primary" />
              Por que a iluminação natural é tão valiosa?
            </h2>
            
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Além da beleza evidente, há razões técnicas e humanas poderosas para priorizar a luz solar:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <TrendingDown className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        Economia de energia
                      </h3>
                      <p className="font-body text-base text-muted-foreground leading-relaxed">
                        Redução de até 70% no consumo de energia elétrica para iluminação, segundo estudos do Programa Nacional de Conservação de Energia Elétrica (Procel).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        Bem-estar psicológico
                      </h3>
                      <p className="font-body text-base text-muted-foreground leading-relaxed">
                        Melhora do ritmo circadiano, pois a exposição à luz natural regula os hormônios do sono e do humor.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        Produtividade aumentada
                      </h3>
                      <p className="font-body text-base text-muted-foreground leading-relaxed">
                        Aumento da produtividade e concentração, especialmente em home offices e estudos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Home className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        Valorização imobiliária
                      </h3>
                      <p className="font-body text-base text-muted-foreground leading-relaxed">
                        Imóveis bem iluminados são percebidos como mais amplos, limpos e agradáveis.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Em um país como o Brasil, com mais de 2.000 horas anuais de sol na maior parte do território, ignorar esse potencial é como deixar água da chuva escorrer pelo ralo enquanto se paga por água encanada.
            </p>
          </section>

          {/* Strategies Section */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-primary" />
              Estratégias essenciais para maximizar a iluminação natural
            </h2>
            
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-8">
              Criar uma casa que "conversa com o sol" exige leitura cuidadosa do terreno, orientação solar e clima local. Veja as principais estratégias usadas por arquitetos brasileiros de referência.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              1. Posicione as janelas com intencionalidade
            </h3>
            
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-4">
              A orientação das aberturas é o primeiro passo. No Hemisfério Sul:
            </p>

            <ul className="space-y-3 mb-6 ml-6">
              <li className="font-body text-lg text-foreground/90 leading-relaxed flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Norte:</strong> recebe sol forte o dia todo — ideal para varandas e áreas sociais, mas exige proteção (beirais, brises).</span>
              </li>
              <li className="font-body text-lg text-foreground/90 leading-relaxed flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Sul:</strong> luz difusa e constante, sem calor excessivo — perfeita para escritórios, ateliês e cozinhas.</span>
              </li>
              <li className="font-body text-lg text-foreground/90 leading-relaxed flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Leste:</strong> sol suave pela manhã — boa para quartos.</span>
              </li>
              <li className="font-body text-lg text-foreground/90 leading-relaxed flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Oeste:</strong> sol quente à tarde — evite grandes janelas sem sombreamento.</span>
              </li>
            </ul>

            <Card className="border-primary/20 bg-primary/5 shadow-upira-sm mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="font-body text-base text-foreground/90 leading-relaxed">
                    <strong>Dica prática:</strong> use o aplicativo Sun Surveyor ou o Google SketchUp com plugin de sombra para simular a incidência solar no seu terreno.
                  </p>
                </div>
              </CardContent>
            </Card>

            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              2. Aposte em pé-direito duplo com clerestórios
            </h3>
            
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Janelas altas próximas ao teto — os chamados clerestórios — permitem que a luz entre profundamente no ambiente, mesmo em casas estreitas. Como a luz vem de cima, ela se espalha de forma mais uniforme, sem criar sombras duras.
            </p>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Além disso, o ar quente sobe e pode ser expelido por essas aberturas, ajudando na ventilação cruzada. Um exemplo clássico pode ser visto nas obras do arquiteto Paulo Mendes da Rocha, que usava clerestórios com maestria em edifícios públicos brasileiros.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              3. Use superfícies reflexivas com sabedoria
            </h3>
            
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Paredes brancas ou em tons claros não são só uma escolha estética — são aliadas funcionais. Elas refletem a luz natural, ampliando sua distribuição. Mas cuidado: superfícies muito brilhantes podem causar ofuscamento. Prefira acabamentos mate ou acetinados.
            </p>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Espelhos também ajudam, mas devem ser posicionados estrategicamente — por exemplo, frente a uma janela — para "dobrar" a entrada de luz sem criar distorções visuais.
            </p>

            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              4. Integre áreas internas e externas
            </h3>
            
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Portas de vidro deslizantes, jardins de inverno e varandas integradas não só expandem visualmente o espaço, como trazem luz indireta de múltiplas direções. Um pátio interno com pedras claras e vegetação refletora pode iluminar até três ambientes ao mesmo tempo.
            </p>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Inspire-se com soluções compactas: veja <Link to="/paisagismo-funcional-jardins-que-trabalham" className="text-primary hover:text-primary/80 underline font-semibold transition-colors">12 exemplos de casas pequenas com iluminação natural inteligente</Link>.
            </p>
          </section>

          {/* Materials Section */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              Materiais e elementos arquitetônicos que potencializam a luz
            </h2>
            
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              A iluminação natural se beneficia de pequenos detalhes de projeto que, somados, criam grandes impactos:
            </p>

            <div className="space-y-4 mb-6">
              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <Wind className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-foreground mb-2">Brises horizontais ou verticais</h4>
                      <p className="font-body text-base text-muted-foreground leading-relaxed">
                        Controlam a entrada de sol direto, permitindo luz mas bloqueando calor. São comuns em fachadas modernistas brasileiras, como as de Oscar Niemeyer.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <Home className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-foreground mb-2">Telhados com lanternins</h4>
                      <p className="font-body text-base text-muted-foreground leading-relaxed">
                        Estruturas elevadas no telhado com vidro ou policarbonato que trazem luz zenital — ideal para halls de entrada ou cozinhas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-foreground mb-2">Pisos claros e porosos</h4>
                      <p className="font-body text-base text-muted-foreground leading-relaxed">
                        Materiais como cimento queimado claro, madeira clara ou porcelanato acetinado refletem luz sem criar brilho excessivo.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <Eye className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-foreground mb-2">Cobogós cerâmicos</h4>
                      <p className="font-body text-base text-muted-foreground leading-relaxed">
                        Além de trazer privacidade e ventilação, criam jogos de luz e sombra dinâmicos ao longo do dia.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Esses elementos não só respondem ao clima, mas também carregam identidade cultural — muitos deles têm raízes na arquitetura colonial e moderna do Brasil.
            </p>
          </section>

          {/* Precautions Section */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-primary" />
              Cuidados para evitar o excesso de calor e ofuscamento
            </h2>
            
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Luz natural não significa exposição direta o tempo todo. O desafio é captar sem sofrer. Para isso:
            </p>

            <ul className="space-y-3 mb-6 ml-6">
              <li className="font-body text-lg text-foreground/90 leading-relaxed flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>Use vidros com controle solar (baixa transmitância térmica) em fachadas oeste e norte.</span>
              </li>
              <li className="font-body text-lg text-foreground/90 leading-relaxed flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>Instale cortinas tecidas, persianas de madeira ou toldos retráteis que permitem ajuste fino da luminosidade.</span>
              </li>
              <li className="font-body text-lg text-foreground/90 leading-relaxed flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>Plante árvores de folha caduca no norte: dão sombra no verão e deixam passar o sol no inverno.</span>
              </li>
              <li className="font-body text-lg text-foreground/90 leading-relaxed flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>Evite superfícies escuras no piso externo próximo a grandes janelas — elas absorvem calor e irradiam para dentro.</span>
              </li>
            </ul>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              A Associação Brasileira de Normas Técnicas (ABNT), na <a href="https://www.abnt.org.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline font-semibold transition-colors">norma NBR 15.220</a>, orienta sobre desempenho térmico em edificações, incluindo estratégias passivas de iluminação e ventilação.
            </p>
          </section>

          {/* Apartments Section */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Home className="h-8 w-8 text-primary" />
              Iluminação natural em apartamentos: é possível?
            </h2>
            
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Sim — e com grande impacto. Mesmo em espaços limitados, pequenas intervenções fazem diferença:
            </p>

            <ul className="space-y-3 mb-6 ml-6">
              <li className="font-body text-lg text-foreground/90 leading-relaxed flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>Substitua divisórias opacas por vidros foscos ou estruturas vazadas (como ripados de madeira).</span>
              </li>
              <li className="font-body text-lg text-foreground/90 leading-relaxed flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>Escolha móveis baixos na frente de janelas para não bloquear a luz.</span>
              </li>
              <li className="font-body text-lg text-foreground/90 leading-relaxed flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>Use cores claras na parede oposta à janela para refletir a luz.</span>
              </li>
              <li className="font-body text-lg text-foreground/90 leading-relaxed flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span>Evite cortinas pesadas; prefira voil, linho cru ou persianas horizontais ajustáveis.</span>
              </li>
            </ul>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Um apartamento bem iluminado naturalmente pode reduzir o uso de lâmpadas em até 10 horas por dia — uma economia significativa a longo prazo.
            </p>
          </section>

          {/* Wellness Section */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Heart className="h-8 w-8 text-primary" />
              O papel da iluminação natural no bem-estar humano
            </h2>
            
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Estudos do <a href="https://www.iau.usp.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline font-semibold transition-colors">Instituto de Arquitetura e Urbanismo da USP</a> mostram que ambientes com boa iluminação natural reduzem níveis de cortisol (hormônio do estresse) e aumentam a produção de serotonina. Pacientes em hospitais com quartos ensolarados, por exemplo, se recuperam mais rápido.
            </p>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Em casa, isso se traduz em:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <Sun className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="font-body text-base text-foreground/90">Melhor humor pela manhã</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="font-body text-base text-foreground/90">Menos fadiga visual ao ler ou trabalhar</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="font-body text-base text-foreground/90">Sensação de amplitude e limpeza</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <Leaf className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="font-body text-base text-foreground/90">Conexão sutil com os ritmos naturais do dia</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              A iluminação natural não é um luxo — é uma necessidade humana básica, tão importante quanto ventilação ou privacidade.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Conclusão: arquitetura que escuta o sol
            </h2>
            
            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Projetar com iluminação natural é um ato de escuta. É observar onde o sol nasce no seu quintal, como a luz entra no seu quarto às 16h de fevereiro, e então desenhar paredes, tetos e aberturas que dialoguem com esses movimentos. Não se trata de imitar modelos internacionais, mas de criar soluções que respeitem o clima, a cultura e o modo de vida brasileiro.
            </p>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Quando a arquitetura conversa com o sol, a casa deixa de ser um simples abrigo para se tornar um organismo vivo — que respira, aquece, ilumina e acalma. E o melhor: tudo isso com zero emissão de carbono e custo operacional quase nulo.
            </p>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Se este artigo iluminou suas ideias, compartilhe com quem está planejando uma reforma ou nova construção. E explore mais conteúdos do nosso <Link to="/blog" className="text-primary hover:text-primary/80 underline font-semibold transition-colors">blog sobre design sustentável e eficiência energética</Link> em residências.
            </p>

            <p className="font-body text-lg text-foreground/90 leading-relaxed mb-6">
              Quer aprofundar? Leia nosso <Link to="/sistema-captacao-agua-beleza-funcionalidade" className="text-primary hover:text-primary/80 underline font-semibold transition-colors">guia completo sobre ventilação cruzada e conforto térmico natural aqui</Link>.
            </p>
          </section>

          {/* CTA */}
          <div className="my-12">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 shadow-upira-md">
              <CardContent className="p-8 text-center">
                <Sun className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  Descubra seu perfil de autonomia
                </h3>
                <p className="font-body text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Responda ao nosso quiz e receba dicas personalizadas para criar um lar mais sustentável e luminoso.
                </p>
                <Link to="/quiz">
                  <Button size="lg" className="font-semibold">
                    Fazer o Quiz Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              Perguntas Frequentes (FAQ)
            </h2>
            
            <div className="space-y-6">
              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    O que é iluminação natural na arquitetura?
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    É o uso estratégico da luz solar para iluminar ambientes internos de forma confortável, controlada e funcional, reduzindo a dependência de luz artificial durante o dia.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Quais são os benefícios da iluminação natural?
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Redução de consumo de energia, melhora do bem-estar psicológico, aumento da produtividade, valorização do imóvel e maior percepção de espaço e limpeza.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Como melhorar a iluminação natural em casa sem reforma?
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Use cores claras nas paredes, evite móveis altos diante de janelas, instale espelhos estrategicamente e troque cortinas pesadas por tecidos leves e translúcidos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Qual a melhor orientação solar para janelas no Brasil?
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Janelas voltadas para o sul oferecem luz difusa e constante, ideais para ambientes de uso prolongado. As voltadas para o norte exigem proteção solar, mas são ótimas para áreas sociais.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    A iluminação natural aumenta o calor dentro de casa?
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Pode aumentar se não houver controle adequado. O uso de brises, vidros com baixo ganho térmico e sombreamento vegetal resolve esse problema sem bloquear a luz.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-upira-sm">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Existem normas técnicas sobre iluminação natural no Brasil?
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Sim. A ABNT NBR 15.220 aborda desempenho térmico e lumínico em edificações, e o RTQ-R (Regulamento Técnico da Qualidade para Edificações Residenciais) inclui critérios de eficiência luminosa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* References */}
          <section className="mb-12">
            <Card className="border-border bg-muted/30">
              <CardContent className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Referências confiáveis
                </h3>
                <ul className="space-y-2">
                  <li className="font-body text-base text-muted-foreground">
                    <a href="https://www.procelinfo.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline transition-colors">
                      Procel Edifica
                    </a>
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    <a href="https://www.abnt.org.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline transition-colors">
                      ABNT - Associação Brasileira de Normas Técnicas
                    </a>
                  </li>
                  <li className="font-body text-base text-muted-foreground">
                    <a href="https://www.iau.usp.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline transition-colors">
                      Instituto de Arquitetura e Urbanismo – USP
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Artigos Relacionados */}
          <RelatedArticles 
            currentLink="/iluminacao-natural-arquitetura-conversa-com-sol" 
            category="Criar" 
          />

          {/* Autor */}
          <section className="mt-16 pt-8 border-t border-border">
            <AuthorCard variant="compact" />
          </section>

        </article>

        <Footer />
      </div>
    </>
  );
};

export default IluminacaoNatural;
