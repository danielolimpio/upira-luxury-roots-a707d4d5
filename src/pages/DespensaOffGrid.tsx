import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { 
  Package, 
  Clock, 
  Leaf, 
  Droplets, 
  Thermometer, 
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ChefHat,
  Apple,
  Wheat,
  Bean,
  Flame,
  FileText,
  BarChart3,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Home
} from "lucide-react";
import despensaImage from "@/assets/category-comer.jpg";

const DespensaOffGrid = () => {
  return (
    <>
      <Helmet>
        <title>Como montar uma despensa off-grid que dura 6 meses | Upira</title>
        <meta name="description" content="Estratégias práticas e elegantes para organizar sua despensa com autonomia e sofisticação." />
        <meta name="keywords" content="despensa off-grid, autonomia alimentar, armazenamento de alimentos, vida rural, sustentabilidade" />
        <link rel="canonical" href="https://upira.com/despensa-off-grid-6-meses" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Como montar uma despensa off-grid que dura 6 meses" />
        <meta property="og:description" content="Estratégias práticas e elegantes para organizar sua despensa com autonomia e sofisticação." />
        <meta property="og:type" content="article" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Como montar uma despensa off-grid que dura 6 meses",
            "description": "Estratégias práticas e elegantes para organizar sua despensa com autonomia e sofisticação.",
            "author": {
              "@type": "Organization",
              "name": "Upira"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Upira"
            },
            "datePublished": "2025-11-10"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={despensaImage}
            alt="Como montar uma despensa off-grid que dura 6 meses"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        {/* Hero Section */}
        <section className="relative -mt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <Package className="w-4 h-4" />
                <span className="text-sm font-medium">Guia Completo</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Como montar uma despensa off-grid que dura 6 meses
              </h1>
              
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                Estratégias práticas e elegantes para organizar sua despensa com autonomia e sofisticação
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground pt-4">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Leitura: 15 min
                </span>
                <span className="flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  Categoria: Comer
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-16">
          <article className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <section className="space-y-6 mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                <Home className="w-8 h-8 text-primary" />
                Autonomia começa onde o supermercado termina
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="font-body text-lg text-foreground leading-relaxed">
                  Imagine acordar num lugar distante—talvez uma cabana entre as árvores, uma casa na beira do rio ou até um apartamento urbano com alma rural—e saber que, mesmo sem acesso imediato a mercados, você tem tudo o que precisa para viver bem pelos próximos seis meses. <strong className="text-primary">Não é sobrevivência. É autonomia com intenção.</strong>
                </p>

                <p className="font-body text-lg text-foreground leading-relaxed">
                  Montar uma despensa off-grid que dura meio ano não é apenas uma tática de preparação; é uma declaração de independência alimentar, inteligência prática e estilo de vida consciente. E, mais do que isso, pode ser um ato de elegância: afinal, há beleza em organizar com propósito, em estocar com critério, em viver com menos dependência e mais controle.
                </p>

                <Card className="p-6 bg-primary/5 border-primary/20 my-8">
                  <p className="font-body text-lg text-foreground italic">
                    Neste guia completo, você vai aprender como montar uma despensa off-grid que dura 6 meses com equilíbrio entre praticidade, nutrição, sustentabilidade e até um toque de sofisticação. Vamos além das listas genéricas—oferecemos uma abordagem realista, testada e adaptável ao cotidiano brasileiro.
                  </p>
                </Card>

                <div className="bg-accent/30 border-l-4 border-primary p-6 rounded-r-lg my-8">
                  <p className="font-body text-foreground flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Quer descobrir quão preparado(a) você está para um estilo de vida off-grid? <a href="/quiz" className="text-primary hover:underline font-medium">Faça nosso teste exclusivo de estilo de vida autossuficiente</a> e receba um diagnóstico personalizado.
                    </span>
                  </p>
                </div>
              </div>
            </section>

            {/* Why Section */}
            <section className="space-y-6 mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-primary" />
                Por que montar uma despensa off-grid que dura 6 meses faz sentido hoje?
              </h2>
              
              <p className="font-body text-lg text-foreground leading-relaxed">
                Nos últimos anos, a ideia de autonomia alimentar deixou de ser exclusividade de sobrevivencialistas ou adeptos radicais da natureza. Ela se infiltrou no cotidiano de quem busca mais controle sobre o que consome, menos exposição a crises logísticas e uma relação mais íntima com a comida.
              </p>

              <p className="font-body text-lg text-foreground leading-relaxed">
                De acordo com dados da <a href="https://www.fao.org/home/en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                  Food and Agriculture Organization (FAO)
                  <ExternalLink className="w-4 h-4" />
                </a>, a segurança alimentar domiciliar depende em grande parte da capacidade das famílias de armazenar alimentos de forma segura e nutritiva. No Brasil, eventos climáticos extremos, interrupções de abastecimento e até escolhas pessoais de consumo consciente tornaram o planejamento de despensas uma estratégia inteligente—não apenas de emergência.
              </p>

              <Card className="p-6 bg-muted/50 my-8">
                <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  O diferencial desta abordagem
                </h3>
                <p className="font-body text-foreground">
                  Montar uma despensa off-grid que dura 6 meses não é acumular caixas de macarrão e enlatados esquecidos. É criar um <strong>sistema vivo, funcional e visualmente harmonioso</strong> que respeita sua rotina, seu paladar e seus valores—seja o de reduzir desperdícios, valorizar ingredientes naturais ou simplesmente viver com mais calma.
                </p>
              </Card>
            </section>

            {/* Planning Section */}
            <section className="space-y-6 mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                Planejando sua despensa: do conceito à realidade
              </h2>
              
              <p className="font-body text-lg text-foreground leading-relaxed">
                Antes de comprar o primeiro pacote de arroz, é fundamental definir três pilares:
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <Card className="p-6 hover:shadow-upira-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <ChefHat className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Seu perfil de consumo</h3>
                  <p className="font-body text-muted-foreground">
                    Quantas pessoas vivem na casa? Há restrições alimentares? Qual a frequência de refeições em casa?
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-upira-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Thermometer className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Seu ambiente</h3>
                  <p className="font-body text-muted-foreground">
                    Temperatura, umidade, exposição à luz e ventilação determinam o que pode ou não ser estocado.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-upira-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Seu estilo off-grid</h3>
                  <p className="font-body text-muted-foreground">
                    Você vive 100% isolado ou só quer autonomia parcial? Isso muda drasticamente seu volume de estocagem.
                  </p>
                </Card>
              </div>

              <h3 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-4">
                Passo 1: Calcule sua demanda mensal
              </h3>

              <p className="font-body text-lg text-foreground leading-relaxed">
                Comece com uma semana típica de consumo. Anote tudo o que é usado: grãos, óleos, temperos, enlatados, leguminosas, farinhas, etc. Multiplique por 4 para ter uma base mensal, depois por 6. Acrescente uma margem de segurança de 15% para imprevistos.
              </p>

              <div className="bg-accent/30 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="font-body text-foreground flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <strong>Dica prática:</strong> Use a regra 80/20. 80% do seu estoque deve ser composto por alimentos versáteis (arroz, feijão, aveia, óleo de coco, sal, açúcar mascavo), e 20% por itens de prazer ou especificidade (chocolates amargos, especiarias raras, grãos exóticos).
                  </span>
                </p>
              </div>

              <p className="font-body text-lg text-foreground leading-relaxed">
                Se você quer entender melhor como adaptar sua alimentação a um estilo mais sustentável e autossuficiente, leia nosso <a href="/explorar" className="text-primary hover:underline">guia sobre como reduzir o consumo conscientemente sem abrir mão da qualidade</a>.
              </p>
            </section>

            {/* 10 Pillars Section */}
            <section className="space-y-6 mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                <Package className="w-8 h-8 text-primary" />
                Os 10 pilares de uma despensa off-grid funcional e duradoura
              </h2>
              
              <p className="font-body text-lg text-foreground leading-relaxed">
                Montar uma despensa off-grid que dura 6 meses exige mais do que espaço: exige inteligência na seleção dos itens. Abaixo, os grupos essenciais, com ênfase em longa vida útil, alto valor nutricional e versatilidade culinária.
              </p>

              {/* Pillar 1 */}
              <Card className="p-8 my-8 hover:shadow-upira-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wheat className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-semibold mb-3">
                      1. Grãos e cereais secos <span className="text-muted-foreground text-lg">(vida útil: 1–3 anos)</span>
                    </h3>
                    <ul className="space-y-2 font-body text-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Arroz integral e branco</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Quinoa, aveia em flocos grossos, trigo sarraceno</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Milho em grão (para moer ou cozinhar)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Farinhas integrais (armazenadas em freezer ou em recipientes herméticos com oxigênio absorvedor)</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-4 bg-accent/20 rounded-lg">
                      <p className="font-body text-foreground text-sm italic">
                        💡 Armazene em baldes com tampa hermética ou em potes de vidro escuro. Adicione folhas de louro ou cravos-da-índia para afastar insetos.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Pillar 2 */}
              <Card className="p-8 my-8 hover:shadow-upira-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bean className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-semibold mb-3">
                      2. Leguminosas secas
                    </h3>
                    <ul className="space-y-2 font-body text-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Feijão carioca, preto, branco</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Lentilha, grão-de-bico, ervilha seca</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Soja integral (requer cozimento prolongado, mas é riquíssima em proteína)</span>
                      </li>
                    </ul>
                    <p className="mt-4 font-body text-foreground">
                      Esses alimentos são a base proteica de qualquer despensa off-grid. Basta uma noite de molho e estão prontos para o fogo.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Pillar 3 */}
              <Card className="p-8 my-8 hover:shadow-upira-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-semibold mb-3">
                      3. Óleos e gorduras estáveis
                    </h3>
                    <ul className="space-y-2 font-body text-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Óleo de coco (sólido à temperatura ambiente, estável por 2+ anos)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Azeite extravirgem (em garrafa escura, longe da luz)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Banha de porco artesanal ou manteiga ghee (ambas com longa vida útil sem refrigeração)</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                      <p className="font-body text-foreground text-sm">
                        ⚠️ Evite óleos vegetais refinados como soja ou milho: oxidam rápido e perdem valor nutricional.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Compact remaining pillars */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Apple className="w-5 h-5 text-primary" />
                    4. Conservas inteligentes
                  </h3>
                  <ul className="space-y-2 font-body text-foreground text-sm">
                    <li>• Tomates pelados em lata (sem aditivos)</li>
                    <li>• Atum, sardinha ou cavala em óleo ou água</li>
                    <li>• Palmito, milho, ervilhas (opte por versões em vidro)</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Package className="w-5 h-5 text-primary" />
                    5. Laticínios em pó ou desidratados
                  </h3>
                  <ul className="space-y-2 font-body text-foreground text-sm">
                    <li>• Leite em pó integral ou de coco</li>
                    <li>• Queijo parmesão ralado (congelado em porções)</li>
                    <li>• Iogurte starter (para fazer iogurte caseiro)</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    6. Açúcares e adoçantes naturais
                  </h3>
                  <ul className="space-y-2 font-body text-foreground text-sm">
                    <li>• Açúcar mascavo ou demerara</li>
                    <li>• Mel puro (não cristaliza, dura indefinidamente)</li>
                    <li>• Xarope de bordo ou rapadura em bloco</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-primary" />
                    7. Sal e temperos secos
                  </h3>
                  <ul className="space-y-2 font-body text-foreground text-sm">
                    <li>• Sal marinho grosso (sem iodo, se possível)</li>
                    <li>• Pimenta-do-reino em grãos (moída na hora)</li>
                    <li>• Cúrcuma, cominho, orégano, alecrim, alho em pó</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-primary" />
                    8. Alimentos fermentados e desidratados
                  </h3>
                  <ul className="space-y-2 font-body text-foreground text-sm">
                    <li>• Kombucha starter (se você tem condições)</li>
                    <li>• Frutas desidratadas sem açúcar</li>
                    <li>• Legumes desidratados para sopas</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    9. Suplementos nutricionais estratégicos
                  </h3>
                  <ul className="space-y-2 font-body text-foreground text-sm">
                    <li>• Vitamina C em pó</li>
                    <li>• Spirulina ou clorela (fontes de ferro e B12)</li>
                    <li>• Óleo de fígado de bacalhau (vitaminas A e D)</li>
                  </ul>
                </Card>
              </div>

              <p className="font-body text-foreground leading-relaxed">
                Segundo estudo publicado pelo <a href="https://www.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                  National Institutes of Health (NIH)
                  <ExternalLink className="w-4 h-4" />
                </a>, dietas baseadas apenas em alimentos secos podem carecer de certas vitaminas lipossolúveis. Suplementação estratégica é prudente.
              </p>

              <Card className="p-8 my-8 bg-primary/5 border-primary/20">
                <h3 className="font-heading text-2xl font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  10. Itens de conforto e prazer
                </h3>
                <p className="font-body text-foreground">
                  Não subestime o valor emocional de um bom chocolate 70%, café em grãos ou chá de hibisco. <strong>Eles sustentam o humor—e a motivação—durante períodos longos de isolamento.</strong>
                </p>
              </Card>
            </section>

            {/* Storage Section */}
            <section className="space-y-6 mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                <Package className="w-8 h-8 text-primary" />
                Armazenamento: A arte de preservar sem geladeira
              </h2>
              
              <p className="font-body text-lg text-foreground leading-relaxed">
                O segredo de uma despensa off-grid que dura 6 meses está, muitas vezes, não no que você compra, mas em <strong>como guarda</strong>.
              </p>

              <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                Use o método FIFO (First In, First Out)
              </h3>

              <p className="font-body text-lg text-foreground leading-relaxed">
                Rotule todos os potes com data de entrada. Os mais antigos ficam na frente. Isso evita que algo expire escondido no fundo da prateleira.
              </p>

              <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-primary" />
                Controle de umidade: seu maior inimigo
              </h3>

              <p className="font-body text-lg text-foreground leading-relaxed mb-4">
                Umidade atrai fungos, bolores e insetos. Use:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4 bg-muted/50">
                  <p className="font-body text-foreground">✓ Pacotes de silica gel reutilizáveis</p>
                </Card>
                <Card className="p-4 bg-muted/50">
                  <p className="font-body text-foreground">✓ Recipientes herméticos com vedação de silicone</p>
                </Card>
                <Card className="p-4 bg-muted/50">
                  <p className="font-body text-foreground">✓ Argila expandida no fundo dos potes</p>
                </Card>
              </div>

              <p className="font-body text-foreground leading-relaxed mt-6">
                Em regiões úmidas do Brasil (como a Amazônia ou o litoral nordeste), considere instalar um pequeno desumidificador solar ou usar carvão vegetal em sachês porosos.
              </p>

              <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                Escolha materiais que respeitam os alimentos
              </h3>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border p-3 text-left font-heading">Material</th>
                      <th className="border border-border p-3 text-left font-heading">Vantagens</th>
                      <th className="border border-border p-3 text-left font-heading">Melhor para</th>
                    </tr>
                  </thead>
                  <tbody className="font-body">
                    <tr>
                      <td className="border border-border p-3 font-semibold">Vidro âmbar ou verde</td>
                      <td className="border border-border p-3">Protege contra luz UV</td>
                      <td className="border border-border p-3">Óleos, temperos, farinhas</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-border p-3 font-semibold">Aço inoxidável</td>
                      <td className="border border-border p-3">Durável, não oxida</td>
                      <td className="border border-border p-3">Grãos, leguminosas</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-semibold">Cerâmica vidrada</td>
                      <td className="border border-border p-3">Estética rústica, funcional</td>
                      <td className="border border-border p-3">Sal, açúcar, temperos</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="font-body text-foreground leading-relaxed">
                Se você está reformando sua cozinha ou planejando um espaço off-grid, confira nosso artigo sobre <a href="/criar" className="text-primary hover:underline">como projetar uma cozinha autossuficiente com design minimalista</a>.
              </p>
            </section>

            {/* Organization Section */}
            <section className="space-y-6 mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-primary" />
                Organização visual: Quando a despensa também inspira
              </h2>
              
              <p className="font-body text-lg text-foreground leading-relaxed">
                Uma despensa bem organizada não é só funcional—é um convite para cozinhar. Aqui entram os princípios de design que transformam o armazenamento em experiência sensorial:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">Paleta de cores neutras</h3>
                  <p className="font-body text-muted-foreground">
                    Potes de vidro, rótulos em kraft, prateleiras de madeira clara
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">Padronização de recipientes</h3>
                  <p className="font-body text-muted-foreground">
                    Tudo no mesmo formato transmite ordem e tranquilidade visual
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">Rótulos manuscritos ou minimalistas</h3>
                  <p className="font-body text-muted-foreground">
                    Use uma fonte clean ou até caligrafia para dar personalidade
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">Iluminação adequada</h3>
                  <p className="font-body text-muted-foreground">
                    LED de baixo consumo destaca a organização e facilita o uso
                  </p>
                </Card>
              </div>

              <Card className="p-6 bg-accent/30 my-8">
                <p className="font-body text-foreground">
                  Essa estética não é vaidade. É <strong>psicologia ambiental</strong>: espaços organizados reduzem o estresse cognitivo. Um estudo da <a href="https://www.apa.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    American Psychological Association (APA)
                    <ExternalLink className="w-4 h-4" />
                  </a> mostra que ambientes caóticos impactam negativamente a tomada de decisões—incluindo escolhas alimentares.
                </p>
              </Card>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="font-body text-foreground flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>
                    Quer saber qual seu nível de inteligência prática para viver off-grid? <a href="/quiz" className="text-primary hover:underline font-medium">Teste sua resiliência doméstica agora</a>.
                  </span>
                </p>
              </div>
            </section>

            {/* Rotation Section */}
            <section className="space-y-6 mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                <ArrowRight className="w-8 h-8 text-primary" />
                Rotação constante: Mantenha sua despensa viva
              </h2>
              
              <p className="font-body text-lg text-foreground leading-relaxed">
                Uma despensa off-grid que dura 6 meses não é um depósito estático. É um <strong>ecossistema que precisa de movimento</strong>.
              </p>

              <h3 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                Estratégia de consumo inteligente:
              </h3>

              <div className="space-y-4">
                <Card className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-primary font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-body text-foreground">
                      Planeje refeições semanais com base no que está mais próximo do vencimento
                    </p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-primary font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-body text-foreground">
                      Mantenha um caderno de estoque (físico ou digital) com entradas e saídas
                    </p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-primary font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-body text-foreground">
                      Substitua por lotes: compre ou produza em ciclos. Ex: a cada 2 meses, reponha 1/3 do estoque
                    </p>
                  </div>
                </Card>
              </div>

              <p className="font-body text-foreground leading-relaxed mt-6">
                Se você produz alimentos (horta, frutas, ovos), integre-os ao sistema com um "estoque fresco" separado, de consumo rápido.
              </p>
            </section>

            {/* Common Mistakes */}
            <section className="space-y-6 mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-primary" />
                Erros comuns (e como evitá-los)
              </h2>

              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-destructive/50">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-destructive">
                    ❌ Superestimar o consumo de itens gourmet
                  </h3>
                  <p className="font-body text-foreground">
                    Sim, trufas e azeites especiais são deliciosos. Mas não sustentam por 6 meses. Priorize versatilidade.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-destructive/50">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-destructive">
                    ❌ Ignorar o espaço físico real
                  </h3>
                  <p className="font-body text-foreground">
                    Antes de estocar, meça suas prateleiras. Nada pior do que caixas empilhadas no chão.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-destructive/50">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-destructive">
                    ❌ Esquecer a água
                  </h3>
                  <p className="font-body text-foreground">
                    A despensa alimentar depende de água potável. Estoque 2 litros por pessoa/dia, ou tenha um sistema de captação/filtração.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-destructive/50">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-destructive">
                    ❌ Não testar receitas com os ingredientes estocados
                  </h3>
                  <p className="font-body text-foreground">
                    Não espere uma emergência para descobrir que não sabe preparar quinoa ou fermentar legumes.
                  </p>
                </Card>
              </div>

              <p className="font-body text-foreground leading-relaxed mt-6">
                Se você quer aprender a cozinhar com o que tem em casa, veja nosso <a href="/comer" className="text-primary hover:underline">guia prático sobre receitas off-grid com 5 ingredientes ou menos</a>.
              </p>
            </section>

            {/* Conclusion */}
            <section className="space-y-6 mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
                <Leaf className="w-8 h-8 text-primary" />
                Conclusão: Mais do que comida, é liberdade
              </h2>
              
              <p className="font-body text-lg text-foreground leading-relaxed">
                Montar uma despensa off-grid que dura 6 meses é, no fundo, um ato de cuidado—consigo mesmo, com quem você ama e com o planeta. É dizer "não" à cultura do imediato e "sim" à paciência estratégica. É entender que <strong>autonomia não é isolamento, mas escolha consciente</strong>.
              </p>

              <Card className="p-8 bg-primary/5 border-primary/20 my-8">
                <p className="font-body text-lg text-foreground italic">
                  E essa escolha pode ser bonita. Pode ter cheiro de alecrim seco, textura de cerâmica artesanal, cor de mel puro escorrendo devagar. Pode ser prática, elegante e profundamente humana.
                </p>
              </Card>

              <div className="bg-accent/30 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="font-body text-foreground flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>
                    Você está mais preparado(a) do que imagina. <a href="/quiz" className="text-primary hover:underline font-medium">Faça nosso teste de estilo de vida off-grid</a> e descubra seu nível real de autonomia—com dicas personalizadas para evoluir.
                  </span>
                </p>
              </div>

              <p className="font-body text-lg text-foreground leading-relaxed">
                Compartilhe este artigo com alguém que busca viver com mais intencionalidade. E se você já montou sua despensa, conte nos comentários: qual foi o item que mais surpreendeu você em termos de utilidade ou durabilidade?
              </p>
            </section>

            {/* FAQ */}
            <section className="space-y-6 mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                Perguntas Frequentes (FAQ)
              </h2>

              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    Quantos quilos de arroz e feijão preciso para 6 meses?
                  </h3>
                  <p className="font-body text-foreground">
                    Para uma pessoa, cerca de 45 kg de arroz e 30 kg de feijão são suficientes. Ajuste proporcionalmente para mais pessoas.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    Posso estocar alimentos sem embalagem original?
                  </h3>
                  <p className="font-body text-foreground">
                    Sim, e é recomendado. Transfira para recipientes herméticos para evitar contaminação e prolongar a vida útil.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    Como evitar besouros e traças na despensa?
                  </h3>
                  <p className="font-body text-foreground">
                    Use folhas de louro, cravos-da-índia, sachês de cravo ou pimenta malagueta dentro dos potes. Mantenha tudo selado e em local fresco.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    Preciso de congelador para uma despensa off-grid de 6 meses?
                  </h3>
                  <p className="font-body text-foreground">
                    Não. O foco é em alimentos secos, enlatados, desidratados e fermentados, que não requerem refrigeração.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    Vale a pena estocar café e chá?
                  </h3>
                  <p className="font-body text-foreground">
                    Sim, especialmente se forem parte da sua rotina. Café em grãos dura mais que moído; chás secos, até 2 anos se bem armazenados.
                  </p>
                </Card>
              </div>
            </section>

            {/* CTA Final */}
            <section className="my-16">
              <Card className="p-8 md:p-12 bg-gradient-primary text-white text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Pronto para começar sua jornada off-grid?
                </h2>
                <p className="font-body text-lg mb-8 text-white/90">
                  Faça nosso quiz exclusivo e descubra seu perfil de autonomia
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="font-semibold"
                  asChild
                >
                  <a href="/quiz">
                    Fazer o Quiz Agora
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </Card>
            </section>

          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DespensaOffGrid;
