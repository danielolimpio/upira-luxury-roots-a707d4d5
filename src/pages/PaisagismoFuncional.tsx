import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Sprout, 
  TreePine, 
  Home, 
  Target,
  ArrowRight,
  Sparkles,
  Lightbulb,
  Heart,
  Shield,
  Droplets,
  Sun,
  Wind,
  Bug,
  Apple,
  CheckCircle2,
  XCircle,
  Circle
} from "lucide-react";
import heroImage from "@/assets/category-cultivar.jpg";
import { AuthorCard } from "@/components/AuthorCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ShareButtons } from "@/components/ShareButtons";

const PaisagismoFuncional = () => {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Paisagismo funcional: jardins que trabalham por você | Upira</title>
        <meta 
          name="description" 
          content="Plantas que embelezam, alimentam e protegem - o luxo da natureza inteligente." 
        />
        <meta 
          name="keywords" 
          content="paisagismo funcional, jardim produtivo, horta urbana, plantas multifuncionais, permacultura, jardim sustentável, plantas repelentes, jardim comestível" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://upira.com.br/paisagismo-funcional-jardins-que-trabalham" />
        
        <meta property="og:title" content="Paisagismo funcional: jardins que trabalham por você" />
        <meta property="og:description" content="Plantas que embelezam, alimentam e protegem - o luxo da natureza inteligente." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://upira.com.br/paisagismo-funcional-jardins-que-trabalham" />
        <meta property="og:image" content="https://upira.com.br/og-image.jpg" />
        <meta property="og:site_name" content="Upira" />
        <meta property="og:locale" content="pt_BR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paisagismo funcional: jardins que trabalham por você" />
        <meta name="twitter:description" content="Plantas que embelezam, alimentam e protegem - o luxo da natureza inteligente." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Paisagismo funcional: jardins que trabalham por você",
            "description": "Plantas que embelezam, alimentam e protegem - o luxo da natureza inteligente.",
            "image": "https://upira.com.br/og-image.jpg",
            "datePublished": "2025-12-02",
            "dateModified": "2025-12-02",
            "author": {
              "@type": "Organization",
              "name": "Upira"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
            <img 
              src={heroImage}
              alt="Jardim funcional com plantas comestíveis e flores"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-transparent" />
            <div className="container relative mx-auto flex h-full items-end px-4 pb-16">
              <div className="max-w-4xl">
                <div className="mb-4 flex items-center gap-2 text-accent-light">
                  <Leaf className="h-5 w-5" />
                  <span className="font-body text-sm uppercase tracking-wider">Cultivar • 02 Dez 2025</span>
                </div>
                <h1 className="font-heading text-4xl font-bold text-white md:text-6xl lg:text-7xl mb-6">
                  Paisagismo funcional: jardins que trabalham por você
                </h1>
                <p className="font-body text-xl text-accent-light md:text-2xl max-w-3xl">
                  Plantas que embelezam, alimentam e protegem - o luxo da natureza inteligente
                </p>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <article className="container mx-auto px-4 py-16 max-w-4xl">
            
            {/* Breadcrumbs */}
            <Breadcrumbs 
              items={[
                { label: "Cultivar", href: "/cultivar" },
                { label: "Paisagismo funcional: jardins que trabalham por você" }
              ]} 
            />

            {/* Share Buttons */}
            <ShareButtons 
              title="Paisagismo funcional: jardins que trabalham por você"
              description="Plantas que embelezam, alimentam e protegem - o luxo da natureza inteligente."
            />

            {/* Introdução */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl leading-relaxed text-foreground font-body mb-6">
                Imagine acordar todas as manhãs com um jardim que não apenas encanta os olhos, mas também oferece ervas frescas para o seu chá, repele insetos indesejados, atrai polinizadores e ainda regula a temperatura da sua casa. Parece um sonho? Na verdade, é o conceito central do paisagismo funcional: um design de jardim pensado não só para a estética, mas para a utilidade.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Em um momento em que sustentabilidade, autossuficiência e qualidade de vida entram cada vez mais na agenda doméstica, transformar seu quintal em um espaço produtivo e inteligente deixou de ser um luxo para se tornar uma escolha sensata — e profundamente recompensadora.
              </p>
            </div>

            {/* O que é paisagismo funcional */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-primary" />
                O que é paisagismo funcional?
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                O paisagismo funcional vai além da decoração. Ele integra plantas com propósitos específicos — alimentação, proteção ambiental, economia de energia, purificação do ar — em um ecossistema harmonioso que atende às necessidades humanas e ecológicas. Diferentemente dos jardins ornamentais tradicionais, que priorizam a forma sobre a função, essa abordagem trata o espaço exterior como uma extensão viva da casa, capaz de gerar valor diário para quem o habita.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Esse conceito não é novo. Culturas ancestrais já plantavam consórcios de culturas complementares, como o famoso "milpa" mesoamericano (milho, feijão e abóbora). Hoje, arquitetos paisagistas, permacultores e urbanistas retomam essas práticas com base científica, adaptando-as ao contexto urbano e às demandas contemporâneas.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Quer aprender a aplicar esses princípios na sua casa? Confira nosso <a href="https://www.embrapa.br/tema-agricultura-urbana" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">guia completo sobre permacultura urbana</a>.
              </p>
            </section>

            {/* CTA Quiz */}
            <Card className="mb-16 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Target className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                      Quer descobrir qual tipo de jardim combina com seu estilo?
                    </h3>
                    <p className="font-body text-base text-muted-foreground mb-4">
                      Faça nosso quiz gratuito e receba um plano personalizado com sugestões de plantas multifuncionais para o seu espaço.
                    </p>
                    <Link to="/quiz">
                      <Button className="group">
                        Fazer o quiz
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Por que seu jardim deveria trabalhar */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Lightbulb className="h-8 w-8 text-primary" />
                Por que seu jardim deveria "trabalhar"?
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                A resposta é simples: eficiência. Um quintal funcional reduz custos, melhora seu bem-estar e contribui para o equilíbrio ambiental. Considere estes benefícios:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Apple className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Alimentação fresca</p>
                        <p className="font-body text-muted-foreground">
                          Livre de agrotóxicos, direto do seu jardim para sua mesa.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Proteção natural</p>
                        <p className="font-body text-muted-foreground">
                          Contra pragas, graças a plantas repelentes estratégicas.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Home className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Isolamento térmico</p>
                        <p className="font-body text-muted-foreground">
                          Cobertura vegetal estratégica reduz temperatura interna.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Biodiversidade</p>
                        <p className="font-body text-muted-foreground">
                          Atrai abelhas, borboletas e pássaros para seu espaço.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Segundo dados da <a href="https://www.embrapa.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Empresa Brasileira de Pesquisa Agropecuária (Embrapa)</a>, sistemas agroflorestais urbanos podem reduzir em até 30% o consumo de água e energia em residências, além de melhorar significativamente a qualidade do ar local.
              </p>
            </section>

            {/* Como criar passo a passo */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <TreePine className="h-8 w-8 text-primary" />
                Como criar um jardim funcional passo a passo
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-8">
                Transformar seu espaço ao ar livre em um ecossistema produtivo exige planejamento, mas não complexidade. Seguindo alguns princípios-chave, é possível obter resultados impressionantes, mesmo em áreas pequenas.
              </p>

              {/* Passo 1 */}
              <div className="mb-12">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Circle className="h-6 w-6 text-accent fill-accent" />
                  1. Avalie seu microclima
                </h3>
                
                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Antes de plantar qualquer coisa, observe:
                </p>

                <ul className="list-none space-y-3 mb-6 ml-8">
                  <li className="flex items-start gap-3">
                    <Sun className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-foreground font-body">Quanto sol cada canto do seu quintal recebe?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Wind className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-foreground font-body">Onde o vento predomina?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TreePine className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-foreground font-body">Há sombra natural de árvores ou edifícios?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sprout className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-foreground font-body">O solo é arenoso, argiloso ou já foi enriquecido?</span>
                  </li>
                </ul>

                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Essas variáveis definirão quais espécies prosperarão com menos esforço — um princípio básico do paisagismo funcional: trabalhar com a natureza, não contra ela.
                </p>
              </div>

              {/* Passo 2 */}
              <div className="mb-12">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Circle className="h-6 w-6 text-accent fill-accent" />
                  2. Defina suas prioridades
                </h3>
                
                <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                  Você quer colher legumes? Reduzir o calor no verão? Afastar mosquitos? Cada objetivo direciona o tipo de vegetação ideal. Por exemplo:
                </p>

                <div className="bg-accent/5 border border-accent/30 rounded-lg p-6 mb-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-body font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Apple className="h-5 w-5 text-primary" />
                        Para alimentação:
                      </p>
                      <p className="text-foreground/80 font-body ml-7">Couve, alface, manjericão, tomate cereja</p>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Bug className="h-5 w-5 text-primary" />
                        Para repelir insetos:
                      </p>
                      <p className="text-foreground/80 font-body ml-7">Citronela, hortelã-pimenta, lavanda, alecrim</p>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground mb-2 flex items-center gap-2">
                        <TreePine className="h-5 w-5 text-primary" />
                        Para sombreamento:
                      </p>
                      <p className="text-foreground/80 font-body ml-7">Árvores frutíferas como jabuticabeira, pitangueira ou ipê</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Veja <a href="https://www.embrapa.br/hortalicas" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">20 plantas ideais para jardins urbanos produtivos</a> neste guia da Embrapa.
                </p>
              </div>

              {/* Passo 3 */}
              <div className="mb-12">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Circle className="h-6 w-6 text-accent fill-accent" />
                  3. Escolha plantas multifuncionais
                </h3>
                
                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Aqui está o cerne do paisagismo funcional: priorizar espécies que cumprem mais de uma função. A capim-limão, por exemplo, serve de tempero, repelente natural e ainda tem propriedades calmantes. O gengibre ajuda a controlar a erosão do solo, é medicinal e comestível. Essa estratégia maximiza o retorno de cada metro quadrado plantado.
                </p>
              </div>

              {/* Passo 4 */}
              <div className="mb-12">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Circle className="h-6 w-6 text-accent fill-accent" />
                  4. Use camadas verticais
                </h3>
                
                <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                  Jardins funcionais imitam florestas naturais, com estratos bem definidos:
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg">
                    <div className="flex-1">
                      <p className="font-body font-semibold text-foreground mb-1">Cobertura do solo</p>
                      <p className="text-sm text-muted-foreground">Ex.: trevo, orégano rasteiro</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg">
                    <div className="flex-1">
                      <p className="font-body font-semibold text-foreground mb-1">Plantas herbáceas</p>
                      <p className="text-sm text-muted-foreground">Ex.: alface, cebolinha</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg">
                    <div className="flex-1">
                      <p className="font-body font-semibold text-foreground mb-1">Arbustos</p>
                      <p className="text-sm text-muted-foreground">Ex.: hibisco comestível, pitanga</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg">
                    <div className="flex-1">
                      <p className="font-body font-semibold text-foreground mb-1">Árvores</p>
                      <p className="text-sm text-muted-foreground">Ex.: goiabeira, limoeiro</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Essa estratificação aumenta a produtividade, protege o solo e cria microambientes favoráveis.
                </p>
              </div>

              {/* Passo 5 */}
              <div className="mb-12">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Circle className="h-6 w-6 text-accent fill-accent" />
                  5. Integre sistemas de captação e reúso
                </h3>
                
                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Água é recurso precioso. Instalar um <Link to="/sistema-captacao-agua-beleza-funcionalidade" className="text-primary hover:text-primary/80 underline">sistema simples de captação de água da chuva</Link> ou reutilizar a água de lavagem de legumes (sem sabão!) para regar o jardim amplia a sustentabilidade do seu projeto. A Sabesp oferece orientações técnicas gratuitas para sistemas domésticos de reúso em São Paulo — um modelo que pode ser adaptado em outras regiões.
                </p>
              </div>
            </section>

            {/* Plantas que embelezam */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Sprout className="h-8 w-8 text-primary" />
                Plantas que embelezam, alimentam e protegem
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-8">
                O verdadeiro luxo do paisagismo funcional está na sinergia entre beleza e utilidade. Abaixo, uma seleção de espécies brasileiras que cumprem múltiplas funções com maestria:
              </p>

              <div className="space-y-4 mb-8">
                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Manjericão</p>
                        <p className="font-body text-muted-foreground">
                          Aromático, repelente de mosquitos, ótimo em molhos e chás.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Alecrim</p>
                        <p className="font-body text-muted-foreground">
                          Resiste à seca, repele formigas, é medicinal e perfuma o ambiente.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Hibisco (Hibiscus sabdariffa)</p>
                        <p className="font-body text-muted-foreground">
                          Flor comestível, rica em vitamina C, bela visualmente e atrai beija-flores.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Erva-cidreira</p>
                        <p className="font-body text-muted-foreground">
                          Calmante, aromática e eficaz contra pulgões.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Bananeira</p>
                        <p className="font-body text-muted-foreground">
                          Dá frutos, cria sombra densa, protege contra ventos fortes e serve como "banco" natural para compostagem de folhas.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                Essas plantas não só reduzem sua dependência de produtos químicos e supermercado, como também criam um jardim dinâmico, que muda com as estações e responde às suas necessidades.
              </p>
            </section>

            {/* Erros comuns */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <XCircle className="h-8 w-8 text-primary" />
                Erros comuns (e como evitá-los)
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-8">
                Mesmo com boas intenções, é fácil tropeçar nos primeiros passos. Veja os deslizes mais frequentes:
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Plantar demais, tudo de uma vez
                  </h3>
                  <p className="text-lg text-muted-foreground font-body">
                    Comece com 3 a 5 espécies. Observe como se desenvolvem antes de expandir.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Ignorar a rotação de culturas
                  </h3>
                  <p className="text-lg text-muted-foreground font-body">
                    Plantar sempre o mesmo legume no mesmo local esgota o solo. Use o sistema de sucessão ou consórcio.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Usar substratos pobres
                  </h3>
                  <p className="text-lg text-muted-foreground font-body">
                    Invista em composto orgânico caseiro ou adquira substratos enriquecidos. A <a href="https://www.embrapa.br/solos" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Embrapa Solos</a> disponibiliza guias práticos sobre fertilidade urbana.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Esquecer da manutenção
                  </h3>
                  <p className="text-lg text-muted-foreground font-body">
                    Um jardim funcional exige cuidado, mas não necessariamente muito tempo. Com planejamento, 20 minutos por semana bastam.
                  </p>
                </div>
              </div>
            </section>

            {/* Impacto na qualidade de vida */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                O impacto do paisagismo funcional na qualidade de vida
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Mais do que uma tendência estética, o paisagismo funcional é uma filosofia de vida. Estudos da <a href="https://www.usp.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Universidade de São Paulo (USP)</a> mostram que o contato diário com plantas comestíveis e aromáticas reduz níveis de estresse, melhora o humor e estimula hábitos alimentares mais saudáveis — especialmente em crianças.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Além disso, cultivar seu próprio alimento fortalece o vínculo com os ciclos da natureza, promovendo uma consciência ecológica que vai muito além do quintal. Em tempos de crise climática e insegurança alimentar, essa é uma forma concreta de resiliência doméstica.
              </p>
            </section>

            {/* Como começar hoje */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-primary" />
                Como começar hoje — mesmo com pouco espaço
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Morar em apartamento não é empecilho. O paisagismo funcional se adapta a varandas, sacadas e até janelas bem iluminadas. Basta usar:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground font-body">Jardineiras verticais com ervas aromáticas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground font-body">Canteiros elevados em áreas comuns (com autorização do condomínio).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground font-body">Sistemas de hidroponia caseira para folhas verdes.</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Uma banheira antiga, um palete reaproveitado ou até garrafas PET podem se transformar em vasos produtivos. A criatividade é sua aliada.
              </p>
            </section>

            {/* Conclusão */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Conclusão: o jardim como aliado inteligente
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                O paisagismo funcional não é sobre perfeição, mas sobre propósito. É reconhecer que cada planta pode ser mais do que decoração — pode ser alimento, medicina, sombra, proteção. Num mundo onde o consumo excessivo e o distanciamento da natureza geram ansiedade e desconexão, reaprender a conviver com o verde de forma intencional é um ato de cura.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Seu jardim não precisa ser grande. Precisa ser útil. E quando ele começa a "trabalhar por você", oferecendo sabor, beleza e equilíbrio, você percebe que não está apenas cultivando plantas — está cultivando uma nova forma de viver.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Gostou deste artigo? Compartilhe com quem sonha com um quintal mais vivo. E não deixe de explorar outros conteúdos do nosso <Link to="/blog" className="text-primary hover:text-primary/80 underline">blog sobre sustentabilidade urbana</Link> e hortas domésticas.
              </p>
            </section>

            {/* CTA Final */}
            <Card className="mb-16 border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8 text-center">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Pronto para transformar seu espaço?
                </h3>
                <p className="font-body text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Explore mais conteúdos sobre vida sustentável e descubra como criar seu próprio oásis funcional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/cultivar">
                    <Button variant="default" size="lg" className="group">
                      Ver mais sobre Cultivar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/quiz">
                    <Button variant="outline" size="lg">
                      Fazer o Quiz
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Perguntas Frequentes (FAQ)
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    O que é paisagismo funcional?
                  </h3>
                  <p className="text-lg text-muted-foreground font-body">
                    É uma abordagem de design de jardins que combina estética com utilidade prática, integrando plantas que alimentam, protegem, regulam o clima e promovem biodiversidade.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Posso ter um jardim funcional em apartamento?
                  </h3>
                  <p className="text-lg text-muted-foreground font-body">
                    Sim! Com vasos, jardineiras verticais e espécies adequadas à meia-sombra ou sol pleno (conforme a orientação da sacada), é possível criar um mini-ecossistema produtivo.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Quais plantas são ideais para iniciantes no paisagismo funcional?
                  </h3>
                  <p className="text-lg text-muted-foreground font-body">
                    Manjericão, hortelã, alecrim, couve-manteiga e cebolinha são fáceis de cultivar, resistentes e multifuncionais.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    O paisagismo funcional exige muito tempo de manutenção?
                  </h3>
                  <p className="text-lg text-muted-foreground font-body">
                    Não. Com planejamento adequado — como escolha de espécies perenes e uso de cobertura morta — a manutenção pode ser reduzida a menos de 30 minutos por semana.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Há incentivos governamentais para jardins funcionais no Brasil?
                  </h3>
                  <p className="text-lg text-muted-foreground font-body">
                    Algumas cidades, como Curitiba e Belo Horizonte, oferecem programas de apoio a hortas comunitárias e telhados verdes. Consulte a prefeitura da sua cidade ou o site do <a href="https://www.gov.br/mma" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Ministério do Meio Ambiente</a>.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Como o paisagismo funcional ajuda no combate às ilhas de calor urbanas?
                  </h3>
                  <p className="text-lg text-muted-foreground font-body">
                    A vegetação densa e variada absorve radiação solar, libera umidade pelo processo de evapotranspiração e reduz a temperatura local, mitigando o efeito de ilhas de calor.
                  </p>
                </div>
              </div>
            </section>

            {/* Fontes */}
            <section className="mt-16 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground font-body">
                <strong>Fontes de referência:</strong> <a href="https://www.embrapa.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Embrapa</a>, <a href="https://www.usp.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">USP – Núcleo de Estudos em Permacultura</a>, <a href="https://www.gov.br/mma" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Ministério do Meio Ambiente</a>.
              </p>
            </section>

            {/* Artigos Relacionados */}
            <RelatedArticles 
              currentLink="/paisagismo-funcional-jardins-que-trabalham" 
              category="Cultivar" 
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

export default PaisagismoFuncional;
