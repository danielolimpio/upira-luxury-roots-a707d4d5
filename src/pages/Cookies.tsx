import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Cookie, 
  Settings, 
  Eye, 
  Target, 
  Shield, 
  Mail, 
  Globe, 
  MonitorSmartphone,
  BarChart3,
  ExternalLink,
  RefreshCw,
  HelpCircle,
  Smartphone,
  ListChecks,
  ChevronRight
} from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Cookies = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Política de Cookies - Upira</title>
        <meta 
          name="description" 
          content="Política de cookies do Upira. Saiba como usamos cookies e tecnologias similares para melhorar sua experiência." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://upira.com.br/cookies" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-16">
          <article className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12 space-y-4">
              <Cookie className="h-16 w-16 text-primary mx-auto" />
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Política de Cookies
              </h1>
              <p className="font-body text-lg text-muted-foreground">
                Última atualização: 14 de dezembro de 2025
              </p>
            </div>

            {/* Introduction Card */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 md:p-8 mb-10">
              <p className="font-body text-lg text-foreground leading-relaxed">
                Esta Política de Cookies explica como <strong>UPIRA</strong> ("Empresa", "nós", "nos" e "nossos") utiliza cookies e tecnologias semelhantes para reconhecê-lo quando você visita nosso site em{" "}
                <a href="https://upira.com.br" className="text-primary hover:underline font-medium">https://upira.com.br</a> (Site). Ele explica o que são essas tecnologias e por que as usamos, bem como seus direitos de controlar nosso uso delas.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                Em alguns casos, podemos usar cookies para coletar informações pessoais, ou essas informações podem se tornar pessoais se as combinarmos com outras informações.
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-upira max-w-none space-y-10">
              
              {/* O que são cookies */}
              <section id="o-que-sao-cookies" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Cookie className="h-6 w-6 text-primary" />
                  </div>
                  O que são cookies?
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Os cookies são pequenos arquivos de dados que são armazenados no seu computador ou dispositivo móvel quando você visita um site. Os cookies são amplamente utilizados pelos proprietários de sites para que seus sites funcionem ou funcionem de forma mais eficiente, além de fornecerem informações para relatórios.
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                    Cookies definidos pelo proprietário do site (neste caso, <strong className="text-foreground">UPIRA</strong>) são chamados de "cookies primários". Os cookies definidos por terceiros que não o proprietário do site são chamados de "cookies de terceiros". Os cookies de terceiros permitem que recursos ou funcionalidades de terceiros sejam fornecidos no site ou por meio dele (por exemplo, publicidade, conteúdo interativo e análises). Os terceiros que definem esses cookies podem reconhecer seu computador tanto quando ele visita o site em questão quanto quando visita outros sites.
                  </p>
                </div>
              </section>

              {/* Por que usamos cookies */}
              <section id="por-que-usamos" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  Por que usamos cookies?
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Usamos cookies próprios e de terceiros por diversos motivos. Alguns cookies são necessários por razões técnicas para que nosso site funcione, e nos referimos a eles como cookies "essenciais" ou "estritamente necessários". Outros cookies também nos permitem rastrear e direcionar os interesses de nossos usuários para aprimorar a experiência em nossas propriedades online. Terceiros utilizam cookies através do nosso site para fins de publicidade, análise e outros. Isso será descrito com mais detalhes abaixo.
                  </p>
                </div>
              </section>

              {/* Como posso controlar os cookies */}
              <section id="controlar-cookies" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  Como posso controlar os cookies?
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6 space-y-4">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Você tem o direito de decidir se aceita ou rejeita cookies. Você pode exercer seus direitos relacionados a cookies definindo suas preferências no Gerenciador de Consentimento de Cookies. O Gerenciador de Consentimento de Cookies permite que você selecione quais categorias de cookies aceita ou rejeita. Cookies essenciais não podem ser rejeitados, pois são estritamente necessários para fornecer os serviços.
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    O Gerenciador de Consentimento de Cookies pode ser encontrado no banner de notificação e em nosso site. Se você optar por rejeitar os cookies, ainda poderá usar nosso site, embora seu acesso a algumas funcionalidades e áreas do site possa ser restrito. Você também pode configurar ou alterar as opções do seu navegador para aceitar ou recusar cookies.
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Os tipos específicos de cookies próprios e de terceiros utilizados em nosso site e suas respectivas finalidades estão descritos na tabela abaixo (observe que os cookies específicos utilizados podem variar dependendo das Propriedades Online que você visitar).
                  </p>
                </div>
              </section>

              {/* Como posso controlar os cookies no meu navegador */}
              <section id="controlar-navegador" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MonitorSmartphone className="h-6 w-6 text-primary" />
                  </div>
                  Como posso controlar os cookies no meu navegador?
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6 space-y-4">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Como os métodos para recusar cookies através das configurações do seu navegador variam de navegador para navegador, recomendamos que você consulte o menu de ajuda do seu navegador para obter mais informações. A seguir, informações sobre como gerenciar cookies nos navegadores mais populares:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                    <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border/30">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span className="font-body text-sm text-foreground">Chrome</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border/30">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span className="font-body text-sm text-foreground">Internet Explorer</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border/30">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span className="font-body text-sm text-foreground">Firefox</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border/30">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span className="font-body text-sm text-foreground">Safari</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border/30">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span className="font-body text-sm text-foreground">Edge</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border/30">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span className="font-body text-sm text-foreground">Opera</span>
                    </div>
                  </div>
                  <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                    Além disso, a maioria das redes de publicidade oferece uma maneira de desativar a publicidade direcionada. Para obter mais informações, visite:
                  </p>
                  <div className="space-y-2 mt-3">
                    <a href="https://digitaladvertisingalliance.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline font-body text-base">
                      <ExternalLink className="h-4 w-4" />
                      Aliança de Publicidade Digital
                    </a>
                    <a href="https://youradchoices.ca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline font-body text-base">
                      <ExternalLink className="h-4 w-4" />
                      Aliança de Publicidade Digital do Canadá
                    </a>
                    <a href="https://edaa.eu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline font-body text-base">
                      <ExternalLink className="h-4 w-4" />
                      Aliança Europeia de Publicidade Digital Interativa
                    </a>
                  </div>
                </div>
              </section>

              {/* Web Beacons */}
              <section id="web-beacons" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  E quanto a outras tecnologias de rastreamento, como os web beacons?
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Os cookies não são a única forma de reconhecer ou rastrear visitantes de um site. Podemos usar outras tecnologias semelhantes de tempos em tempos, como web beacons (às vezes chamados de "pixels de rastreamento" ou "gifs transparentes"). Esses são pequenos arquivos gráficos que contêm um identificador exclusivo que nos permite reconhecer quando alguém visitou nosso site ou abriu um e-mail que os incluímos nos permite, por exemplo, monitorar os padrões de tráfego de usuários de uma página para outra dentro de um site, enviar ou interagir com cookies, entender se você chegou ao site por meio de um anúncio online exibido em um site de terceiros, melhorar o desempenho do site e medir o sucesso de campanhas de marketing por e-mail. Em muitos casos, essas tecnologias dependem de cookies para funcionar corretamente, portanto, recusar cookies prejudicará seu funcionamento.
                  </p>
                </div>
              </section>

              {/* Flash Cookies */}
              <section id="flash-cookies" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  Você usa cookies Flash ou objetos compartilhados locais?
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6 space-y-4">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Os sites também podem usar os chamados "Flash Cookies" (também conhecidos como Objetos Compartilhados Locais ou "LSOs") para, entre outras coisas, coletar e armazenar informações sobre o seu uso de nossos serviços, prevenção de fraudes e para outras operações do site.
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Se você não deseja que cookies Flash sejam armazenados em seu computador, pode ajustar as configurações do seu Flash Player para bloquear o armazenamento de cookies Flash usando as ferramentas contidas no Painel de Configurações de Armazenamento do Site. Você também pode controlar os cookies Flash acessando o Painel de Configurações de Armazenamento Global e seguindo as instruções (que podem incluir instruções que explicam, por exemplo, como excluir cookies Flash existentes (referidos como "Informações" no site da Macromedia), como impedir que objetos locais compartilhados (LSOs) do Flash sejam colocados em seu computador sem sua permissão e (para o Flash Player 8 e versões posteriores) como bloquear cookies Flash que não sejam enviados pelo operador da página que você está visitando no momento).
                  </p>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
                    <p className="font-body text-sm text-foreground leading-relaxed">
                      <strong>Atenção:</strong> Configurar o Flash Player para restringir ou limitar a aceitação de cookies Flash pode reduzir ou impedir a funcionalidade de alguns aplicativos Flash, incluindo, potencialmente, aplicativos Flash usados em conexão com nossos serviços ou conteúdo online.
                    </p>
                  </div>
                </div>
              </section>

              {/* Publicidade direcionada */}
              <section id="publicidade-direcionada" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  Você veicula publicidade direcionada?
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Terceiros podem instalar cookies no seu computador ou dispositivo móvel para exibir anúncios através do nosso site. Essas empresas podem usar informações sobre suas visitas a este e outros sites para fornecer anúncios relevantes sobre produtos e serviços que possam ser do seu interesse. Elas também podem usar tecnologia para medir a eficácia dos anúncios. Isso pode ser feito por meio de cookies ou web beacons, que coletam informações sobre suas visitas a este e outros sites para exibir anúncios relevantes sobre produtos e serviços que possam ser do seu interesse. As informações coletadas por meio desse processo não permitem que nós ou terceiros identifiquemos seu nome, dados de contato ou outras informações que o identifiquem diretamente, a menos que você opte por fornecê-las.
                  </p>
                </div>
              </section>

              {/* Atualizações */}
              <section id="atualizacoes" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  Com que frequência você atualizará esta Política de Cookies?
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Podemos atualizar esta Política de Cookies periodicamente para refletir, por exemplo, alterações nos cookies que utilizamos ou por outros motivos operacionais, legais ou regulamentares. Portanto, visite esta Política de Cookies regularmente para se manter informado sobre o nosso uso de cookies e tecnologias relacionadas.
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                    A data no topo desta Política de Cookies indica quando ela foi atualizada pela última vez.
                  </p>
                </div>
              </section>

              {/* Contato */}
              <section id="contato" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  Onde posso obter mais informações?
                </h2>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 space-y-4">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Se você tiver alguma dúvida sobre o nosso uso de cookies ou outras tecnologias, por favor, entre em contato conosco:
                  </p>
                  <div className="bg-background rounded-lg p-6 space-y-3">
                    <p className="font-heading text-xl font-semibold text-foreground">UPIRA</p>
                    <div className="space-y-2">
                      <p className="font-body text-base text-muted-foreground flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <strong>E-mail:</strong>{" "}
                        <a href="mailto:contato@upira.com.br" className="text-primary hover:underline">contato@upira.com.br</a>
                      </p>
                      <p className="font-body text-base text-muted-foreground flex items-start gap-2">
                        <Globe className="h-4 w-4 text-primary mt-1" />
                        <span>
                          <strong>Endereço:</strong> Av. Júlia Freire, 1200 - Expedicionários, João Pessoa - PB, 58041-000, Brasil
                        </span>
                      </p>
                      <p className="font-body text-base text-muted-foreground flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-primary" />
                        <strong>Telefone:</strong>{" "}
                        <a href="tel:+5512982519116" className="text-primary hover:underline">(+55) 12 98251-9116</a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Cookies;
