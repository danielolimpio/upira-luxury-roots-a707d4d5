import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Droplets, 
  Home, 
  TreePine, 
  Wallet, 
  TrendingUp, 
  Heart,
  Shield,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Leaf,
  Sparkles,
  Target,
  AlertTriangle,
  Lightbulb,
  Filter,
  Container,
  Waves,
  Circle
} from "lucide-react";
import heroImage from "@/assets/sistema-captacao-agua.jpg";
import { AuthorCard } from "@/components/AuthorCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ShareButtons } from "@/components/ShareButtons";

const SistemaCaptacaoAgua = () => {
  return (
    <>
      <Helmet>
        <title>Sistema de captação de água: beleza e funcionalidade | Upira</title>
        <meta 
          name="description" 
          content="Como integrar soluções hídricas ao design da sua propriedade com elegância." 
        />
        <meta 
          name="keywords" 
          content="captação de água, sistema de captação, água da chuva, sustentabilidade, design residencial, arquitetura sustentável, economia de água" 
        />
        <link rel="canonical" href="https://upira.com.br/sistema-captacao-agua-beleza-funcionalidade" />
        
        <meta property="og:title" content="Sistema de captação de água: beleza e funcionalidade" />
        <meta property="og:description" content="Como integrar soluções hídricas ao design da sua propriedade com elegância." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://upira.com.br/sistema-captacao-agua-beleza-funcionalidade" />
        <meta property="og:image" content="https://upira.com.br/sistema-captacao-agua.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sistema de captação de água: beleza e funcionalidade" />
        <meta name="twitter:description" content="Como integrar soluções hídricas ao design da sua propriedade com elegância." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Sistema de captação de água: beleza e funcionalidade",
            "description": "Como integrar soluções hídricas ao design da sua propriedade com elegância.",
            "image": "https://upira.com.br/sistema-captacao-agua.jpg",
            "datePublished": "2025-11-15",
            "dateModified": "2025-11-15",
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
              alt="Sistema de captação de água em telhado com chuva caindo"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-transparent" />
            <div className="container relative mx-auto flex h-full items-end px-4 pb-16">
              <div className="max-w-4xl">
                <div className="mb-4 flex items-center gap-2 text-accent-light">
                  <Droplets className="h-5 w-5" />
                  <span className="font-body text-sm uppercase tracking-wider">Criar • 15 Nov 2025</span>
                </div>
                <h1 className="font-heading text-4xl font-bold text-white md:text-6xl lg:text-7xl mb-6">
                  Sistema de captação de água: beleza e funcionalidade
                </h1>
                <p className="font-body text-xl text-accent-light md:text-2xl max-w-3xl">
                  Como integrar soluções hídricas ao design da sua propriedade com elegância
                </p>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <article className="container mx-auto px-4 py-16 max-w-4xl">
            
            {/* Breadcrumbs */}
            <Breadcrumbs 
              items={[
                { label: "Criar", href: "/criar" },
                { label: "Sistema de captação de água: beleza e funcionalidade" }
              ]} 
            />

            {/* Share Buttons */}
            <ShareButtons 
              title="Sistema de captação de água: beleza e funcionalidade"
              description="Como integrar soluções hídricas ao design da sua propriedade com elegância."
            />

            {/* Introdução */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl leading-relaxed text-foreground font-body mb-6">
                Imagine acordar numa manhã de outono, com o sol filtrado pelas árvores do quintal, e ouvir o som suave da água escorrendo por uma pedra natural, não como um vazamento, mas como parte de um projeto pensado com cuidado. A água não é apenas um recurso necessário — é um elemento de paz, de estética, de conexão com a natureza. E, ainda que muitos vejam a captação de água como algo técnico, escondido atrás de caixas d'água ou tubulações, ela pode — e deve — ser parte da alma do seu espaço.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                O que muitos não percebem é que um sistema de captação de água: beleza e funcionalidade não é um luxo de residências de alto padrão. É uma escolha inteligente, sustentável e profundamente humana. E quando integrada ao design da sua propriedade com elegância, ela transforma o cotidiano: reduz custos, aumenta a valorização do imóvel e devolve à sua casa uma relação consciente com o ciclo da vida — o ciclo da água.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Este artigo não é sobre tanques de plástico ou bombas barulhentas. É sobre como transformar a captação de água em uma experiência sensorial, estética e funcional — sem abrir mão de eficiência. Vamos explorar como você pode fazer isso, mesmo em espaços modestos, com orçamento limitado e sem sacrificar a estética. E o melhor: sem parecer que você "instalou um sistema". Parece que sempre foi assim.
              </p>
            </div>

            {/* CTA Quiz */}
            <Card className="mb-16 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Target className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                      Quer descobrir qual tipo de sistema combina com seu espaço?
                    </h3>
                    <p className="font-body text-base text-muted-foreground mb-4">
                      Faça nosso quiz gratuito sobre sistemas de captação de água e receba um plano personalizado com sugestões práticas.
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

            {/* Section 1 */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-primary" />
                Por que a captação de água ainda é vista como algo "técnico" e não "estético"?
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Nos últimos 20 anos, a água deixou de ser um bem abundante e passou a ser um recurso estratégico. Mas, paradoxalmente, nossa cultura ainda trata a captação como algo que deve ser escondido. Caixas d'água encobertas por muros, calhas disfarçadas de esgoto, reservatórios enterrados como se fossem segredos — tudo isso reflete uma desconexão entre a necessidade e a forma.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                A verdade é que a água tem um ritmo, uma música, uma presença. Ela pode ser um elemento de design tão poderoso quanto uma parede de vidro, um jardim vertical ou uma escada de madeira. O problema é que, por muito tempo, arquitetos e engenheiros trabalharam em silos: um pensava em estrutura, outro em hidráulica, e ninguém pensou em como unir essas coisas de forma que fizesse sentido para quem vive ali.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Mas isso está mudando.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Cidades como São Paulo, Belo Horizonte e Florianópolis já têm políticas públicas incentivando a captação de água da chuva — e não apenas por questões ambientais, mas por economia e resiliência urbana. Segundo a Agência Nacional de Águas (ANA), cerca de 70% da água consumida em residências brasileiras poderia ser substituída por água da chuva, se bem captada e armazenada. E, mais importante: essa água pode ser integrada ao design sem parecer "engenharia".
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Lightbulb className="h-8 w-8 text-primary" />
                Como integrar soluções hídricas ao design da sua propriedade com elegância?
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-6 italic border-l-4 border-primary pl-6">
                A chave está na integração, não na exposição
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                A elegância não está em mostrar o sistema. Está em fazê-lo sentir-se natural.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Pense em um rio. Ele não grita: "Olhem, sou um rio!". Ele flui. Ele se esconde entre pedras, desliza sob raízes, brilha ao sol e desaparece em curvas. É assim que um sistema de captação de água deve ser: invisível na sua necessidade, mas presente na sua poesia.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-8">
                Aqui estão os pilares que transformam uma instalação técnica em uma experiência de design:
              </p>

              {/* Pilar 1 */}
              <div className="mb-12">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Circle className="h-6 w-6 text-accent fill-accent" />
                  1. A calha como elemento arquitetônico
                </h3>
                
                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  As calhas tradicionais são feitas de PVC, pintadas de branco, e instaladas como se fossem um erro de construção. Mas e se elas fossem parte da linguagem da casa?
                </p>

                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Considere calhas em aço corten — que envelhece com graça, adquirindo uma tonalidade avermelhada ao longo do tempo. Ou calhas em cobre, que, com o oxidação, ganham um tom verde-azulado, como o patinado de uma escultura. Elas não são escondidas — são celebradas.
                </p>

                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Na residência do arquiteto Paulo Mendes da Rocha, em São Paulo, as calhas são prolongadas até o chão, formando pequenos canais de pedra que direcionam a água para um jardim de ervas aromáticas. Não há caixa d'água aparente. Não há tubos. A água simplesmente caminha.
                </p>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Dica prática:</p>
                        <p className="font-body text-muted-foreground">
                          Se sua casa tem telhado inclinado, invista em calhas de material nobre (aço, cobre, zinco-titânio) e integre-as visualmente à linha do beiral. Evite cores brancas ou plásticas. Escolha materiais que envelheçam com dignidade.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pilar 2 */}
              <div className="mb-12">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Circle className="h-6 w-6 text-accent fill-accent" />
                  2. Reservatórios discretos: quando o armazenamento vira arte
                </h3>
                
                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Caixas d'água de plástico são práticas, mas visualmente agressivas. E se você pudesse escondê-las — ou melhor: transformá-las?
                </p>

                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Em um projeto em Curitiba, um casal optou por um reservatório enterrado de concreto aparente, com tampa de madeira de lei e uma pequena escultura de pedra sobre ela — uma fonte silenciosa que, quando chove, libera gotas em um pequeno espelho d'água. A água é captada, armazenada e, ao mesmo tempo, exibida como um elemento de contemplação.
                </p>

                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Outra opção: tanques de polietileno reciclado, revestidos com tijolos aparentes ou muros de pedra. Eles se tornam bancos, nichos ou até bases para plantas. Em um sítio em Minas Gerais, o tanque foi envolvido por trepadeiras e transformado em uma "parede viva" que filtra a luz e esconde a estrutura.
                </p>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Dica prática:</p>
                        <p className="font-body text-muted-foreground">
                          Use o espaço sob a escada, o vão entre paredes ou o topo de um muro para esconder reservatórios. Revestimentos naturais (pedra, madeira, terra) disfarçam qualquer volume. E, se tiver espaço, transforme o tanque em um ponto focal: com luzes de LED submersas, ou uma pequena queda d'água que o alimenta.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pilar 3 */}
              <div className="mb-12">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Circle className="h-6 w-6 text-accent fill-accent" />
                  3. Água como caminho: canais, riachos e bordas de jardim
                </h3>
                
                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  A água não precisa cair diretamente em um tanque. Ela pode ser guiada.
                </p>

                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Imagine um caminho de pedras, com pequenas ranhuras entre elas, por onde a água da chuva escorre suavemente, como um rio de verão. Ela alimenta plantas nativas, evita alagamentos e cria um efeito sensorial: o som, a umidade, a sensação de estar em um lugar vivo.
                </p>

                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Em um projeto em Porto Alegre, o arquiteto criou um "caminho de água" que liga a entrada da casa ao jardim traseiro. Quando chove, a água flui por entre pedras de basalto, alimentando um pequeno lençol de água que, por sua vez, irriga o jardim por capilaridade. Não há bombas. Não há tubos visíveis. Apenas a natureza fazendo seu trabalho — e você, caminhando por ela.
                </p>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Dica prática:</p>
                        <p className="font-body text-muted-foreground">
                          Use a topografia do terreno. Se há declive, aproveite. Crie canais rasos (10 a 15 cm de profundidade) com pedras irregulares. Plante grama ornamental ou samambaias nas bordas. A água será direcionada, filtrada e absorvida — sem necessidade de sistemas complexos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pilar 4 */}
              <div className="mb-12">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Circle className="h-6 w-6 text-accent fill-accent" />
                  4. Fontes que não são fontes: a magia da reutilização
                </h3>
                
                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Você não precisa de uma fonte de mármore para ter água em movimento. Às vezes, basta uma tigela de cerâmica, um tubo de cobre fino e um pequeno motor silencioso.
                </p>

                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Em uma casa em Salvador, a proprietária usou um antigo tanque de leite de metal, limpo e polido, como base para uma fonte de recirculação. A água é captada da chuva, armazenada em um reservatório subterrâneo e bombeada de volta — não para enfeitar, mas para resfriar o ar e atrair aves. O som é sutil, como um sussurro.
                </p>

                <p className="text-lg leading-relaxed text-foreground font-body mb-4">
                  Essa é a essência da elegância: usar o que já existe, transformar o útil em belo, e fazer isso sem exageros.
                </p>

                <Card className="border-accent/30 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Dica prática:</p>
                        <p className="font-body text-muted-foreground">
                          Recicle objetos antigos: tonéis, pias, vasos de cerâmica. Use bombas de baixo consumo (12V, alimentadas por painel solar) e mantenha a água em movimento. Isso evita mosquitos e cria uma atmosfera de tranquilidade.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 3 - Modelos */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Container className="h-8 w-8 text-primary" />
                Sistemas de captação de água: Os 5 modelos que funcionam no Brasil
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-8">
                Aqui estão cinco modelos reais, testados em diferentes climas e regiões do Brasil, que combinam eficiência e estética:
              </p>

              <div className="space-y-8">
                {/* Modelo 1 */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <TreePine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                          1. Sistema de telhado verde + captação de chuva
                        </h3>
                        <p className="font-body text-muted-foreground mb-3">
                          Ideal para casas com telhado plano ou inclinado. A vegetação absorve até 70% da água da chuva, reduzindo o escoamento e resfriando o ambiente. O excesso é direcionado para um reservatório enterrado.
                        </p>
                        <p className="font-body text-sm text-muted-foreground">
                          → Funciona perfeitamente em Brasília, São Paulo e Curitiba.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Modelo 2 */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Leaf className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                          2. Calhas de cobre + jardim de infiltração
                        </h3>
                        <p className="font-body text-muted-foreground mb-3">
                          Calhas em cobre direcionam a água para um jardim de plantas nativas (como ipês, pata-de-vaca e cana-do-brejo). O solo é preparado com camadas de areia, cascalho e terra vegetal para filtrar e armazenar a água.
                        </p>
                        <p className="font-body text-sm text-muted-foreground">
                          → Perfeito para climas secos e semiáridos, como o interior de Minas e Goiás.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Modelo 3 */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Waves className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                          3. Tanque enterrado com tampa de madeira e fonte silenciosa
                        </h3>
                        <p className="font-body text-muted-foreground mb-3">
                          Um tanque de polietileno de 5.000L enterrado, com tampa de madeira de lei e uma pequena queda d'água que recircula. A água é usada para irrigação e limpeza.
                        </p>
                        <p className="font-body text-sm text-muted-foreground">
                          → Ideal para casas de campo, sítios e residências com jardim.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Modelo 4 */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Filter className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                          4. Sistema de "gotejamento inteligente" com coleta em vasos de barro
                        </h3>
                        <p className="font-body text-muted-foreground mb-3">
                          Vasos de barro enterrados no jardim, conectados por tubos finos à calha. A água escorre lentamente, por capilaridade, diretamente para as raízes das plantas.
                        </p>
                        <p className="font-body text-sm text-muted-foreground">
                          → Econômico, silencioso e 100% natural. Perfeito para pequenos espaços urbanos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Modelo 5 */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                          5. Pátio de pedra com drenagem invisível
                        </h3>
                        <p className="font-body text-muted-foreground mb-3">
                          Um pátio feito de pedras irregulares, com espaços entre elas que permitem a infiltração. Sob a superfície, uma camada de cascalho e geotêxtil direciona a água para um reservatório.
                        </p>
                        <p className="font-body text-sm text-muted-foreground">
                          → Transforma áreas de circulação em zonas de captação. Ideal para casas modernas em cidades como Rio de Janeiro e Florianópolis.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4 - Benefícios */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                O que você ganha ao integrar água ao design da sua casa?
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-8">
                Não é só sobre economia. É sobre qualidade de vida.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary">
                      <th className="text-left p-4 font-heading text-foreground">Benefício</th>
                      <th className="text-left p-4 font-heading text-foreground">Impacto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 font-body font-semibold text-foreground">Redução de conta de água</td>
                      <td className="p-4 font-body text-muted-foreground">Até 40% na irrigação e limpeza (dados da ANA)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-body font-semibold text-foreground">Valorização do imóvel</td>
                      <td className="p-4 font-body text-muted-foreground">Propriedades com sistemas sustentáveis têm até 15% de valorização (Sindicato da Habitação – SP)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-body font-semibold text-foreground">Resiliência climática</td>
                      <td className="p-4 font-body text-muted-foreground">Menos risco de alagamentos, menos dependência de redes públicas</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-body font-semibold text-foreground">Bem-estar psicológico</td>
                      <td className="p-4 font-body text-muted-foreground">Estudos da Universidade de São Paulo mostram que sons de água reduzem estresse em 30%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-body font-semibold text-foreground">Conexão com a natureza</td>
                      <td className="p-4 font-body text-muted-foreground">A água viva atrai pássaros, borboletas e promove biodiversidade no seu quintal</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg leading-relaxed text-foreground font-body mt-8 italic">
                Esses não são benefícios secundários. São transformadores.
              </p>
            </section>

            {/* Section 5 - Erros Comuns */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-primary" />
                Erros comuns que estragam a elegância (e como evitá-los)
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-8">
                Mesmo com boas intenções, muitos projetos falham por detalhes.
              </p>

              <div className="space-y-6">
                {/* Erro 1 */}
                <Card className="border-destructive/30 bg-destructive/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">
                          Erro 1: Usar tubos de PVC coloridos como "elemento decorativo"
                        </p>
                        <p className="font-body text-muted-foreground">
                          PVC branco ou azul não combina com madeira, pedra ou terra. Ele grita.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-t border-border pt-4">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Solução:</p>
                        <p className="font-body text-muted-foreground">
                          Enterrar ou revestir com materiais naturais. Ou melhor: evitar tubos visíveis.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Erro 2 */}
                <Card className="border-destructive/30 bg-destructive/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">
                          Erro 2: Instalar uma fonte sem fluxo contínuo
                        </p>
                        <p className="font-body text-muted-foreground">
                          Água parada atrai mosquitos. Fontes sem circulação viram criadouros.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-t border-border pt-4">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Solução:</p>
                        <p className="font-body text-muted-foreground">
                          Sempre use recirculação com bombas de baixa potência, ou mantenha a água em movimento natural (queda, canal, riacho).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Erro 3 */}
                <Card className="border-destructive/30 bg-destructive/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">
                          Erro 3: Esquecer a manutenção
                        </p>
                        <p className="font-body text-muted-foreground">
                          Um sistema bonito, mas sujo, perde toda a sua magia.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-t border-border pt-4">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Solução:</p>
                        <p className="font-body text-muted-foreground">
                          Inclua na sua rotina: limpeza de calhas 2x por ano, verificação de filtros e limpeza de reservatórios a cada 6 meses.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Erro 4 */}
                <Card className="border-destructive/30 bg-destructive/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">
                          Erro 4: Priorizar o visual acima da funcionalidade
                        </p>
                        <p className="font-body text-muted-foreground">
                          Uma fonte de mármore que não capta água? É só decoração.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-t border-border pt-4">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-body font-semibold text-foreground mb-2">Solução:</p>
                        <p className="font-body text-muted-foreground">
                          Todo elemento estético deve ter função. Se não tem, não é elegância — é excesso.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 6 - Passo a passo */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-primary" />
                Como começar? Um passo a passo simples
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-8">
                Você não precisa de um sítio para começar. Mesmo em apartamentos, é possível integrar soluções hídricas com elegância.
              </p>

              <div className="space-y-6">
                <Card className="border-primary/30 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                          Identifique o ponto de captação
                        </h3>
                        <p className="font-body text-muted-foreground mb-2">
                          → Balcão da varanda? Telhado do condomínio? Ralo da sacada?
                        </p>
                        <p className="font-body text-muted-foreground">
                          → Use um recipiente de 200L com filtro de tela (pode ser de pano de prato) sob o ralo.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                          Escolha o uso da água
                        </h3>
                        <p className="font-body text-muted-foreground mb-2">
                          → Regar plantas? Limpeza de pisos? Descarga?
                        </p>
                        <p className="font-body text-muted-foreground">
                          → Água da chuva não é potável, mas é perfeita para essas funções.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                          Integre visualmente
                        </h3>
                        <p className="font-body text-muted-foreground mb-2">
                          → Coloque o tanque em um canto com vasos de plantas, ou use uma tampa de madeira com um pequeno objeto de cerâmica sobre ele.
                        </p>
                        <p className="font-body text-muted-foreground">
                          → Adicione uma pequena fonte de recirculação (R$ 80 em lojas de jardinagem).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/30 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                          Conecte-se à comunidade
                        </h3>
                        <p className="font-body text-muted-foreground mb-2">
                          → Muitos condomínios já permitem sistemas de captação. Peça ao síndico para incluir no regulamento.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 7 - Futuro */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-primary" />
                O futuro da arquitetura é a água — e ela não precisa ser invisível
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                A arquitetura do século XXI não é mais sobre volumes, concreto e vidro. É sobre ciclos. Sobre energia. Sobre nutrientes. Sobre água.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Ela não é um recurso a ser consumido. É um elo.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Quando você integra um sistema de captação de água: beleza e funcionalidade, você não está apenas economizando. Você está reescrevendo a relação da sua casa com o planeta. Você está criando um espaço que respira. Que escuta. Que se transforma com as estações.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                E isso, acima de tudo, é elegância.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body italic">
                Porque a verdadeira beleza não está no que é novo, mas no que é consciente.
              </p>
            </section>

            {/* Conclusão */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                Conclusão: A água que você capta hoje, é a paz que você planta para amanhã
              </h2>
              
              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Você não precisa de um projeto caro. Não precisa de uma casa grande. Nem de um jardim imenso.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Basta começar.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Uma calha limpa. Um tanque escondido. Uma pedra que guia a água. Um pequeno jardim que a acolhe.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Esses são os elementos da elegância real.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Eles não aparecem em revistas de arquitetura por causa do custo. Aparecem por causa da intenção.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Se você leu até aqui, já tem mais consciência do que 90% das pessoas que vivem em casas com sistemas de captação — mas sem saber que eles poderiam ser mais.
              </p>

              <p className="text-lg leading-relaxed text-foreground font-body mb-6">
                Agora, faça algo com isso.
              </p>

              <div className="space-y-4 mb-8">
                <p className="font-body text-lg text-foreground">
                  → Comece hoje: Limpe sua calha. Coloque um filtro simples. E observe como a água flui.
                </p>
                <p className="font-body text-lg text-foreground">
                  → Explore mais: Leia nosso <Link to="/criar" className="text-primary hover:underline">guia completo sobre sistemas sustentáveis</Link>.
                </p>
                <p className="font-body text-lg text-foreground">
                  → Compartilhe: Se esse texto fez sentido para você, envie para alguém que ama sua casa — e quer vê-la viver de verdade.
                </p>
              </div>

              <p className="text-xl leading-relaxed text-foreground font-body font-semibold italic text-center mb-4">
                Porque a água não é um recurso. É uma memória.
              </p>
              <p className="text-xl leading-relaxed text-foreground font-body font-semibold italic text-center">
                E você merece viver em um lugar que a celebra.
              </p>
            </section>

            {/* Links relacionados */}
            <section className="mb-16">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Leia também:
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Link to="/criar" className="block group">
                  <Card className="border-border hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <p className="font-body text-foreground group-hover:text-primary transition-colors">
                        → Criar: Projetos sustentáveis com design
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/viver" className="block group">
                  <Card className="border-border hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <p className="font-body text-foreground group-hover:text-primary transition-colors">
                        → Viver: Autonomia com elegância
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Perguntas Frequentes (FAQ)
              </h2>
              
              <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      1. Posso instalar um sistema de captação de água em apartamento?
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Sim. Mesmo em apartamentos, é possível captar água da chuva por meio de baldes sob ralos de varanda ou calhas coletoras. A água pode ser usada para limpeza e rega de plantas. Não é potável, mas é extremamente útil.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      2. Qual é o custo médio de um sistema de captação residencial?
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Varia de R$ 800 a R$ 15.000, dependendo da escala. Um sistema básico (calha + tanque de 2.000L + filtro) sai por cerca de R$ 2.500. Sistemas integrados com paisagismo e recirculação podem chegar a R$ 8.000 — mas com retorno em 2 a 3 anos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      3. A água da chuva é segura para regar plantas e limpar pisos?
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Sim. Desde que o telhado não seja de material tóxico (como amianto ou pinturas antigas com chumbo). Filtros simples de tela e areia garantem segurança. A ANA recomenda seu uso para essas finalidades.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      4. Preciso de autorização da prefeitura para instalar?
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Em geral, não. Mas em cidades como São Paulo e Rio de Janeiro, há programas de incentivo que exigem cadastro. Consulte o site da sua prefeitura ou a ANA para orientações locais.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      5. Como evitar mosquitos no sistema de captação?
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Use sempre filtros, mantenha a água em movimento (com bombas de recirculação), cubra tanques com telas finas e evite acúmulo de água parada. A água em movimento não é atrativa para o Aedes aegypti.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA Final */}
            <Card className="border-primary bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8 text-center">
                <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Pronto para transformar sua relação com a água?
                </h3>
                <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Descubra mais sobre como criar uma casa sustentável, elegante e verdadeiramente conectada com a natureza.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/quiz">
                    <Button size="lg" className="group">
                      Fazer o quiz
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/criar">
                    <Button size="lg" variant="outline">
                      Explorar mais projetos
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Artigos Relacionados */}
            <RelatedArticles 
              currentLink="/sistema-captacao-agua-beleza-funcionalidade" 
              category="Criar" 
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

export default SistemaCaptacaoAgua;
