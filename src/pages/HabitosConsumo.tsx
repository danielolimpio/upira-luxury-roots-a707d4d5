import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  ShoppingBag, 
  CreditCard, 
  Heart, 
  Sparkles, 
  TrendingDown,
  CheckCircle2,
  Calendar,
  AlertCircle,
  ExternalLink,
  ArrowRight,
  Smartphone,
  Home,
  Smile,
  Users,
  Target,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import habitosImage from "@/assets/category-explorar.jpg";
import { AuthorCard } from "@/components/AuthorCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ShareButtons } from "@/components/ShareButtons";

const HabitosConsumo = () => {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>5 hábitos de consumo que reduzem o estresse | Upira</title>
        <meta 
          name="description" 
          content="Descubra práticas que trazem bem-estar genuíno sem sacrificar o conforto — e ainda ajudam você a viver com mais clareza, propósito e tranquilidade no dia a dia." 
        />
        <meta 
          name="keywords" 
          content="hábitos de consumo, redução de estresse, bem-estar, consumo consciente, minimalismo, sustentabilidade, qualidade de vida, ansiedade financeira, experiências, slow living" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://upira.com.br/habitos-consumo-reduzem-estresse" />
        
        {/* Open Graph */}
        <meta property="og:title" content="5 hábitos de consumo que reduzem o estresse | Upira" />
        <meta property="og:description" content="Descubra práticas que trazem bem-estar genuíno sem sacrificar o conforto — e ainda ajudam você a viver com mais clareza, propósito e tranquilidade no dia a dia." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://upira.com.br/habitos-consumo-reduzem-estresse" />
        <meta property="og:image" content="https://upira.com.br/og-image.jpg" />
        <meta property="og:site_name" content="Upira" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="article:published_time" content="2025-11-12T00:00:00Z" />
        <meta property="article:author" content="Upira" />
        <meta property="article:section" content="Explorar" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="5 hábitos de consumo que reduzem o estresse | Upira" />
        <meta name="twitter:description" content="Descubra práticas que trazem bem-estar genuíno sem sacrificar o conforto." />
        <meta name="twitter:image" content="https://upira.com.br/og-image.jpg" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "5 hábitos de consumo que reduzem o estresse",
            "description": "Descubra práticas que trazem bem-estar genuíno sem sacrificar o conforto — e ainda ajudam você a viver com mais clareza, propósito e tranquilidade no dia a dia.",
            "author": {
              "@type": "Organization",
              "name": "Upira"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Upira"
            },
            "datePublished": "2025-11-12",
            "dateModified": "2025-11-12",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://upira.com.br/habitos-consumo-reduzem-estresse"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={habitosImage}
            alt="5 hábitos de consumo que reduzem o estresse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <main className="container mx-auto px-4 py-12 md:py-16 -mt-32 relative">
          {/* Hero Section */}
          <article className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <div className="mb-8">
              <Breadcrumbs 
                items={[
                  { label: "Explorar", href: "/explorar" },
                  { label: "5 hábitos de consumo que reduzem o estresse" }
                ]} 
              />
            </div>

            <header className="mb-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                <Lightbulb className="h-6 w-6" />
                <span className="font-body text-base uppercase tracking-wide">Explorar</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                5 hábitos de consumo que reduzem o estresse
              </h1>
              
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-6">
                Descubra práticas que trazem bem-estar genuíno sem sacrificar o conforto — e ainda ajudam você a viver com mais clareza, propósito e tranquilidade no dia a dia.
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground font-body">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  12 Jan 2025
                </span>
                <span>•</span>
                <span>12 min de leitura</span>
              </div>
            </header>

            {/* Share Buttons */}
            <ShareButtons 
              title="5 hábitos de consumo que reduzem o estresse"
              description="Descubra práticas que trazem bem-estar genuíno sem sacrificar o conforto."
            />

            {/* Introdução */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                <TrendingDown className="h-8 w-8 text-primary" />
                Quando consumir vira peso — e não alívio
              </h2>
              
              <div className="space-y-6 font-body text-lg text-foreground leading-relaxed">
                <p>
                  Você já parou para pensar que muitas das coisas que você compra — desde roupas até assinaturas digitais — não te trazem alívio, mas, ao contrário, alimentam um ciclo silencioso de ansiedade? Num mundo onde o consumo é vendido como solução para quase tudo, é fácil confundir conforto com acúmulo. Mas a verdade é outra: hábitos de consumo conscientes têm um poder surpreendente de reduzir o estresse, desde que estejam alinhados com quem você é — e não com o que o algoritmo acha que você deveria querer.
                </p>

                <p>
                  Mais do que economizar dinheiro (embora isso ajude), adotar hábitos de consumo que reduzem o estresse significa recuperar tempo, foco e energia emocional. Significa abrir espaço para o que realmente importa — e fechar as torneiras invisíveis por onde escapa sua paz interior.
                </p>

                <p>
                  Neste artigo, você vai descobrir cinco práticas práticas, realistas e profundamente humanas que transformam sua relação com o consumo — sem abrir mão do conforto, do prazer ou da modernidade. Ao final, você terá clareza sobre o que manter, o que deixar ir e como usar suas escolhas diárias como ferramenta de bem-estar.
                </p>
              </div>

              <Card className="mt-8 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-body text-base text-foreground mb-3">
                        Quer saber como seu estilo de vida afeta seu nível de estresse?
                      </p>
                      <Link to="/quiz">
                        <Button className="w-full sm:w-auto">
                          Faça nosso quiz gratuito
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Por que o consumo inconsciente aumenta o estresse */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertCircle className="h-8 w-8 text-primary" />
                Por que o consumo inconsciente aumenta o estresse?
              </h2>
              
              <div className="space-y-6 font-body text-lg text-foreground leading-relaxed">
                <p>
                  Antes de entrarmos nos hábitos em si, é essencial entender o mecanismo por trás do problema. O estresse relacionado ao consumo não vem só do gasto em si, mas da sobrecarga cognitiva gerada por decisões mal resolvidas, compromissos financeiros difusos e ambientes caóticos.
                </p>

                <p>
                  Estudos da{" "}
                  <a 
                    href="https://www.apa.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    American Psychological Association (APA)
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  {" "}mostram que a pressão financeira é uma das principais fontes de ansiedade crônica — e muitas vezes essa pressão é autoimposta por hábitos de compra impulsivos ou repetitivos que não trazem satisfação duradoura. Pior: objetos e serviços mal escolhidos criam "ruído" no dia a dia — lembranças de dívidas, desordem física, culpa por desperdício.
                </p>

                <p>
                  A boa notícia? Você pode reverter isso — não com austeridade extrema, mas com intencionalidade. Os hábitos a seguir foram desenvolvidos com base em pesquisas sobre psicologia do consumo, bem-estar emocional e design comportamental. Eles são simples, mas transformadores.
                </p>
              </div>
            </section>

            {/* Hábito 1 */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                <ShoppingBag className="h-8 w-8 text-primary" />
                1. Faça compras com propósito, não por impulso
              </h2>
              
              <div className="space-y-6 font-body text-lg text-foreground leading-relaxed">
                <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  O que significa "comprar com propósito"?
                </h3>
                
                <p>
                  Comprar com propósito é decidir <em>por que</em> você está adquirindo algo antes de decidir <em>o quê</em>. Parece óbvio, mas quantas vezes você já chegou em casa com uma sacola cheia de itens que pareciam essenciais na loja — e que agora estão esquecidos em uma gaveta?
                </p>

                <p>
                  Esse hábito de consumo reduz o estresse porque elimina a <strong>dissonância cognitiva</strong> — aquele desconforto mental que surge quando suas ações não condizem com seus valores reais.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Como colocar em prática:
                </h3>

                <ul className="space-y-4 ml-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Pergunte-se antes de cada compra: "Isso resolve um problema real meu?", "Vou usar isso pelo menos 30 vezes?" ou "Isso me aproxima da vida que quero viver?"
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Espere 48 horas antes de comprar itens não essenciais. A urgência quase sempre passa.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Crie uma lista de critérios pessoais: durabilidade, multifuncionalidade, alinhamento com seus valores (ex.: sustentabilidade, design minimalista, apoio a pequenos produtores).
                    </span>
                  </li>
                </ul>

                <Card className="mt-8 border-primary/20 bg-card">
                  <CardContent className="p-6">
                    <p className="font-body text-base text-muted-foreground italic">
                      Esse simples ritual transforma o consumo de uma reação automática em uma escolha consciente — e cada escolha consciente é um passo rumo à calma.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Hábito 2 */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CreditCard className="h-8 w-8 text-primary" />
                2. Reduza assinaturas e compromissos automáticos
              </h2>
              
              <div className="space-y-6 font-body text-lg text-foreground leading-relaxed">
                <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  O "custo invisível" das assinaturas digitais
                </h3>
                
                <p>
                  Você sabia que o brasileiro médio gasta cerca de R$ 150 por mês com serviços digitais — muitos dos quais nem usa? Streaming, apps de bem-estar, plataformas de cursos… tudo isso entra silenciosamente no orçamento, mas sai barulhentamente da sua paz mental.
                </p>

                <p>
                  Assinaturas não utilizadas criam o que especialistas chamam de <strong>"dívida de atenção"</strong>: você se sente obrigado a consumir o serviço para justificar o gasto, mesmo quando está exausto ou sem tempo. Isso gera frustração, culpa e — sim — mais estresse.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Estratégia prática: a revisão mensal de "vazamentos"
                </h3>

                <p>Reserve 20 minutos no primeiro domingo de cada mês para:</p>

                <ul className="space-y-4 ml-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Listar todas as assinaturas ativas (use o extrato do cartão como guia).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Avaliar o uso real nos últimos 30 dias.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Cancelar tudo que não foi usado ou que não trouxe valor claro.
                    </span>
                  </li>
                </ul>

                <p>
                  Não se trata de viver sem confortos digitais, mas de manter apenas os que realmente servem. Um app de meditação que você usa diariamente? Vale cada centavo. Um segundo streaming que só assiste uma vez por mês? Talvez não.
                </p>

                <Card className="mt-8 border-primary/20 bg-card">
                  <CardContent className="p-6">
                    <p className="font-body text-base text-muted-foreground">
                      Estudo da{" "}
                      <a 
                        href="https://hbr.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Harvard Business Review
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      {" "}mostra que menos opções aumentam a satisfação — porque reduzem a ansiedade da escolha contínua.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Hábito 3 */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                3. Invista em qualidade, não em quantidade
              </h2>
              
              <div className="space-y-6 font-body text-lg text-foreground leading-relaxed">
                <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Menos coisas, mais significado
                </h3>
                
                <p>
                  Esse princípio, inspirado no movimento <em>capsule wardrobe</em> e na filosofia <em>slow living</em>, é um dos hábitos de consumo que reduzem o estresse mais eficazes — especialmente em ambientes domésticos.
                </p>

                <p>
                  Quando você escolhe um sofá durável em vez de três cadeiras baratas, ou um par de tênis premium em vez de cinco pares genéricos, você não só economiza a longo prazo, mas reduz drasticamente o ruído visual e emocional do excesso.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Benefícios comprovados:
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="border border-border p-4 text-left font-heading text-foreground">Benefício</th>
                        <th className="border border-border p-4 text-left font-heading text-foreground">Impacto no bem-estar</th>
                      </tr>
                    </thead>
                    <tbody className="font-body">
                      <tr>
                        <td className="border border-border p-4 text-foreground">Menos limpeza e manutenção</td>
                        <td className="border border-border p-4 text-muted-foreground">Tempo recuperado = estresse reduzido</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="border border-border p-4 text-foreground">Maior satisfação com o que se tem</td>
                        <td className="border border-border p-4 text-muted-foreground">Efeito de posse valorizada</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4 text-foreground">Alinhamento com valores pessoais</td>
                        <td className="border border-border p-4 text-muted-foreground">Sustentabilidade e design atemporal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Card className="mt-8 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Home className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body text-base text-foreground font-semibold mb-2">
                          Dica prática:
                        </p>
                        <p className="font-body text-base text-muted-foreground">
                          Adote a regra "um entra, um sai". Sempre que comprar algo novo não essencial, doe ou recicle um item equivalente.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p className="mt-6">
                  Leia também:{" "}
                  <Link to="/criar" className="text-primary hover:underline font-semibold">
                    Como criar um lar minimalista sem perder personalidade
                  </Link>
                </p>
              </div>
            </section>

            {/* Hábito 4 */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-primary" />
                4. Priorize experiências sobre objetos
              </h2>
              
              <div className="space-y-6 font-body text-lg text-foreground leading-relaxed">
                <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Por que um jantar com amigos alivia mais que um novo celular?
                </h3>
                
                <p>
                  Pesquisas consistentes da Universidade de Cornell e do{" "}
                  <a 
                    href="https://www.nih.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    National Institutes of Health (NIH)
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  {" "}mostram que gastos com experiências geram mais felicidade duradoura do que gastos com bens materiais. Isso acontece porque:
                </p>

                <ul className="space-y-4 ml-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Experiências criam memórias, não bagunça.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Elas fortalecem conexões sociais — um dos maiores fatores protetores contra o estresse.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      São únicas e imutáveis, ao contrário de objetos que rapidamente perdem o brilho.
                    </span>
                  </li>
                </ul>

                <p>
                  Isso não significa que você deva parar de comprar coisas. Significa rebalancear suas prioridades.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Como aplicar no dia a dia:
                </h3>

                <ul className="space-y-4 ml-6">
                  <li className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Redirecione parte do orçamento de consumo para pequenas experiências: uma trilha no parque, um workshop de cerâmica, um piquenique com vinho bom.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Presenteie com ingressos, aulas ou vales-experiência em vez de itens físicos.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Smile className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Registre esses momentos com fotos ou diários — a antecipação e a lembrança são fontes contínuas de bem-estar.
                    </span>
                  </li>
                </ul>

                <Card className="mt-8 border-primary/20 bg-card">
                  <CardContent className="p-6">
                    <p className="font-body text-base text-muted-foreground">
                      Link externo útil:{" "}
                      <a 
                        href="https://psych.cornell.edu/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Why Experiences Make Us Happier – Cornell University Research
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Hábito 5 */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Smartphone className="h-8 w-8 text-primary" />
                5. Desconecte-se da cultura da "promoção constante"
              </h2>
              
              <div className="space-y-6 font-body text-lg text-foreground leading-relaxed">
                <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  O vício em novidade como fonte de ansiedade
                </h3>
                
                <p>
                  Vivemos numa era de "novidade infinita": lançamentos diários, coleções cápsula, drops exclusivos, cupons relâmpago. Tudo isso é projetado para criar urgência artificial — e manter você em estado de alerta constante.
                </p>

                <p>
                  O problema? Seu cérebro interpreta essa urgência como ameaça. Resultado: cortisol elevado, sono prejudicado e aquela sensação de que você está sempre "atrasado" ou "perdendo algo".
                </p>

                <p>
                  Adotar hábitos de consumo que reduzem o estresse exige um desapego radical da lógica das promoções.
                </p>

                <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Estratégias eficazes:
                </h3>

                <ul className="space-y-4 ml-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Desative notificações de lojas e apps de cupom.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Limite o tempo nas redes sociais, especialmente perfis de influenciadores focados em consumo.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Substitua o hábito de "dar uma olhadinha nas ofertas" por uma atividade que traga presença: caminhar, cozinhar, ouvir música sem rolar o feed.
                    </span>
                  </li>
                </ul>

                <Card className="mt-8 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-6">
                    <p className="font-body text-base text-foreground italic">
                      Lembre-se: ninguém jamais se arrependeu de não ter comprado naquela promoção de 24h. Mas muitos se arrependem do que compraram por impulso.
                    </p>
                  </CardContent>
                </Card>

                <p className="mt-6">
                  Leia também:{" "}
                  <Link to="/explorar" className="text-primary hover:underline font-semibold">
                    Como sair do ciclo de comparação nas redes sociais
                  </Link>
                </p>
              </div>
            </section>

            {/* Pequenas mudanças */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                Pequenas mudanças, grande impacto no bem-estar
              </h2>
              
              <div className="space-y-6 font-body text-lg text-foreground leading-relaxed">
                <p>
                  Esses cinco hábitos não exigem perfeição. Você não precisa virar minimalista radical ou abolir o cartão de crédito. O que importa é a direção, não a velocidade.
                </p>

                <p>
                  Cada escolha mais intencional — seja cancelar uma assinatura esquecida, seja esperar dois dias antes de comprar um tênis — é um ato de autocuidado. Porque, no fundo, consumo consciente é autoconhecimento em ação.
                </p>

                <p>
                  E o melhor: quanto mais você pratica, mais natural se torna. Com o tempo, você passa a sentir um desconforto físico diante de compras impulsivas — e uma sensação de calma quando escolhe com clareza.
                </p>
              </div>
            </section>

            {/* CTA Quiz */}
            <section className="mb-16">
              <Card className="border-primary bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-8 md:p-12 text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Quer descobrir qual dos seus hábitos gera mais estresse?
                  </h2>
                  <p className="font-body text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Muitas pessoas não percebem que certos padrões de consumo — mesmo aparentemente inofensivos — estão sabotando sua energia mental. Por isso, criamos um quiz rápido e gratuito que analisa seu estilo de consumo e revela:
                  </p>
                  <ul className="text-left max-w-xl mx-auto space-y-3 mb-8">
                    <li className="flex items-start gap-3 font-body text-base text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Seus principais gatilhos de estresse relacionados a compras</span>
                    </li>
                    <li className="flex items-start gap-3 font-body text-base text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Qual hábito traria o maior alívio imediato</span>
                    </li>
                    <li className="flex items-start gap-3 font-body text-base text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Recomendações personalizadas com base no seu perfil</span>
                    </li>
                  </ul>
                  <Link to="/quiz">
                    <Button size="lg" className="text-lg px-8">
                      Descubra seus hábitos de consumo agora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </section>

            {/* Conclusão */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Conclusão: Consumir bem é viver com mais leveza
              </h2>
              
              <div className="space-y-6 font-body text-lg text-foreground leading-relaxed">
                <p>
                  Reduzir o estresse não exige que você viva com menos — mas que viva com mais significado. Os hábitos de consumo que reduzem o estresse não são sobre privação, mas sobre priorização. Sobre escolher, todos os dias, entre o que alimenta sua alma e o que apenas ocupa espaço.
                </p>

                <p>
                  Quando você consome com intenção, cada compra se torna uma declaração de valores. Cada "não" se torna um "sim" para algo mais importante: tempo, clareza, liberdade.
                </p>

                <p>
                  E, no fim das contas, nada reduz mais o estresse do que saber — de verdade — que você está no controle da sua vida.
                </p>

                <Card className="mt-8 border-primary/20 bg-card">
                  <CardContent className="p-6">
                    <p className="font-body text-base text-muted-foreground italic">
                      Compartilhe este artigo com alguém que anda se sentindo sobrecarregado pelo consumo. Às vezes, o maior presente é ajudar outra pessoa a recuperar um pouco de paz.
                    </p>
                  </CardContent>
                </Card>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Leia também:
                  </h3>
                  <ul className="space-y-2 font-body text-base">
                    <li>
                      <Link to="/explorar" className="text-primary hover:underline">
                        Como sua inteligência emocional influencia suas finanças
                      </Link>
                    </li>
                    <li>
                      <Link to="/viver" className="text-primary hover:underline">
                        Guia prático para um orçamento sem culpa
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                Perguntas Frequentes (FAQ)
              </h2>
              
              <div className="space-y-6">
                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                      <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      O que são hábitos de consumo que reduzem o estresse?
                    </h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed ml-9">
                      São práticas conscientes de compra e uso de recursos que diminuem a sobrecarga mental, financeira e emocional — como evitar compras por impulso, reduzir assinaturas desnecessárias e priorizar experiências em vez de objetos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                      <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      É possível reduzir o estresse sem parar de consumir?
                    </h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed ml-9">
                      Sim. O objetivo não é eliminar o consumo, mas torná-lo mais alinhado com seus valores reais. Consumir menos, mas melhor, é uma forma poderosa de ganhar clareza e tranquilidade.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                      <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      Quanto tempo leva para sentir os efeitos desses hábitos?
                    </h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed ml-9">
                      Muitas pessoas relatam alívio em até duas semanas — especialmente após cancelar assinaturas inúteis ou adotar a regra das 48 horas para compras. Mudanças duradouras surgem com a consistência, não com a perfeição.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                      <CreditCard className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      Esses hábitos funcionam para quem tem orçamento apertado?
                    </h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed ml-9">
                      Funcionam ainda mais. Quem tem menos margem financeira se beneficia drasticamente ao eliminar gastos invisíveis e focar em soluções que trazem valor real — como alimentos frescos em vez de congelados, ou transporte coletivo eficiente em vez de aplicativos caros.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                      <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      Onde posso testar meus próprios hábitos de consumo?
                    </h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed ml-9">
                      Você pode fazer nosso{" "}
                      <Link to="/quiz" className="text-primary hover:underline font-semibold">
                        quiz gratuito sobre hábitos de consumo e bem-estar
                      </Link>
                      {" "}e receber um diagnóstico personalizado com dicas práticas para reduzir o estresse financeiro e emocional.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA Final */}
            <section className="mb-16">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-8 text-center">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Pronto para transformar seus hábitos de consumo?
                  </h3>
                  <p className="font-body text-base text-muted-foreground mb-6">
                    Faça nosso teste gratuito e descubra seu nível de autonomia e bem-estar
                  </p>
                  <Link to="/quiz">
                    <Button size="lg">
                      Fazer o teste agora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </section>

            {/* Artigos Relacionados */}
            <RelatedArticles 
              currentLink="/habitos-consumo-reduzem-estresse" 
              category="Explorar" 
            />

            {/* Autor */}
            <section className="mt-16 pt-8 border-t border-border">
              <AuthorCard variant="compact" />
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HabitosConsumo;
