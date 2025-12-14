import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  UserCheck, 
  Mail, 
  Globe, 
  Cookie, 
  Clock, 
  FileText, 
  Users, 
  AlertCircle,
  CheckCircle,
  ExternalLink,
  MapPin,
  Scale,
  Building,
  Baby,
  RefreshCw,
  Phone,
  Info,
  List,
  Share2,
  Fingerprint,
  BarChart3
} from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Privacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Upira</title>
        <meta 
          name="description" 
          content="Aviso de Privacidade completo da UPIRA. Saiba como coletamos, usamos e protegemos seus dados pessoais de acordo com as leis de proteção de dados aplicáveis." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://upira.com.br/privacidade" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-16">
          <article className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12 space-y-4">
              <Shield className="h-16 w-16 text-primary mx-auto" />
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Política de Privacidade
              </h1>
              <p className="font-body text-lg text-muted-foreground">
                Última atualização: 14 de dezembro de 2025
              </p>
            </div>

            {/* Intro Card */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 mb-10">
              <p className="font-body text-lg text-foreground leading-relaxed">
                Este Aviso de Privacidade para <strong>UPIRA</strong> ("nós", "nosso" ou "nosso"), descreve como e por que podemos acessar, coletar, armazenar, usar e/ou compartilhar ("processo") suas informações pessoais quando você usa nossos serviços ("Serviços"), inclusive quando você:
              </p>
              <ul className="mt-4 space-y-2 font-body text-base text-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Visite nosso site em <a href="https://upira.com.br" className="text-primary hover:underline font-medium">https://upira.com.br</a> ou qualquer outro site nosso que contenha um link para este Aviso de Privacidade.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Interaja conosco de outras maneiras relacionadas, incluindo ações de marketing ou eventos.</span>
                </li>
              </ul>
            </div>

            {/* Questions Card */}
            <div className="bg-muted/30 border border-border rounded-xl p-6 mb-10">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-body text-base text-foreground leading-relaxed">
                    <strong>Tem dúvidas ou preocupações?</strong> A leitura deste Aviso de Privacidade ajudará você a entender seus direitos e opções em relação à privacidade. Somos responsáveis por tomar decisões sobre como suas informações pessoais são processadas. Se você não concordar com nossas políticas e práticas, por favor, não utilize nossos Serviços. Caso ainda tenha dúvidas ou preocupações, entre em contato conosco pelo endereço: <a href="mailto:privacidade@upira.com.br" className="text-primary hover:underline font-medium">privacidade@upira.com.br</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Points Summary */}
            <section className="mb-12">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-primary/10 px-6 py-4 border-b border-border">
                  <h2 className="font-heading text-xl font-semibold text-foreground flex items-center gap-3">
                    <List className="h-5 w-5 text-primary" />
                    Resumo dos Pontos Principais
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Este resumo apresenta os pontos principais do nosso Aviso de Privacidade, mas você pode obter mais detalhes sobre qualquer um desses tópicos clicando no link após cada ponto principal ou usando nosso índice abaixo para encontrar a seção desejada.
                  </p>
                  
                  <div className="grid gap-4 mt-6">
                    <div className="bg-muted/20 rounded-lg p-4 border-l-4 border-primary">
                      <p className="font-body text-sm text-foreground"><strong>Que informações pessoais processamos?</strong> Quando você visita, usa ou navega em nossos Serviços, podemos processar informações pessoais dependendo de como você interage conosco e com os Serviços, das escolhas que você faz e dos produtos e recursos que você usa.</p>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-4 border-l-4 border-primary">
                      <p className="font-body text-sm text-foreground"><strong>Processamos informações pessoais sensíveis?</strong> Não processamos informações pessoais sensíveis.</p>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-4 border-l-4 border-primary">
                      <p className="font-body text-sm text-foreground"><strong>Coletamos informações de terceiros?</strong> Não coletamos nenhuma informação de terceiros.</p>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-4 border-l-4 border-primary">
                      <p className="font-body text-sm text-foreground"><strong>Como processamos suas informações?</strong> Processamos suas informações para fornecer, aprimorar e administrar nossos Serviços, comunicar-nos com você, para fins de segurança e prevenção de fraudes e para cumprir a lei. Também podemos processar suas informações para outros fins com o seu consentimento. Processamos suas informações somente quando temos uma base legal válida para fazê-lo.</p>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-4 border-l-4 border-primary">
                      <p className="font-body text-sm text-foreground"><strong>Em que situações e com quem compartilhamos informações pessoais?</strong> Podemos compartilhar informações em situações específicas e com partes específicas.</p>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-4 border-l-4 border-primary">
                      <p className="font-body text-sm text-foreground"><strong>Como protegemos suas informações?</strong> Temos medidas adequadas de segurança organizacionais, processos e procedimentos técnicos implementados para proteger suas informações pessoais. No entanto, nenhuma transmissão eletrônica pela internet ou tecnologia de armazenamento de informações pode ser garantida como 100% segura.</p>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-4 border-l-4 border-primary">
                      <p className="font-body text-sm text-foreground"><strong>Quais são os seus direitos?</strong> Dependendo da sua localização geográfica, a legislação de privacidade aplicável pode lhe conferir certos direitos em relação às suas informações pessoais.</p>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-4 border-l-4 border-primary">
                      <p className="font-body text-sm text-foreground"><strong>Como você exerce seus direitos?</strong> A maneira mais fácil de exercer seus direitos é através de submeter uma solicitação de acesso do titular dos dados ou entrando em contato conosco.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Table of Contents */}
            <section className="mb-12">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-primary/10 px-6 py-4 border-b border-border">
                  <h2 className="font-heading text-xl font-semibold text-foreground flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    Índice
                  </h2>
                </div>
                <div className="p-6">
                  <ol className="list-decimal list-inside space-y-2 font-body text-base text-primary">
                    <li><a href="#section1" className="hover:underline">Que informações coletamos?</a></li>
                    <li><a href="#section2" className="hover:underline">Como processamos suas informações?</a></li>
                    <li><a href="#section3" className="hover:underline">Em que bases legais nos apoiamos para processar suas informações pessoais?</a></li>
                    <li><a href="#section4" className="hover:underline">Quando e com quem compartilhamos suas informações pessoais?</a></li>
                    <li><a href="#section5" className="hover:underline">Qual é a nossa posição em relação a sites de terceiros?</a></li>
                    <li><a href="#section6" className="hover:underline">Utilizamos cookies e outras tecnologias de rastreamento?</a></li>
                    <li><a href="#section7" className="hover:underline">Por quanto tempo guardamos suas informações?</a></li>
                    <li><a href="#section8" className="hover:underline">Como mantemos suas informações seguras?</a></li>
                    <li><a href="#section9" className="hover:underline">Coletamos informações de menores de idade?</a></li>
                    <li><a href="#section10" className="hover:underline">Quais são seus direitos de privacidade?</a></li>
                    <li><a href="#section11" className="hover:underline">Controles para recursos de não rastrear</a></li>
                    <li><a href="#section12" className="hover:underline">Os residentes dos Estados Unidos têm direitos específicos de privacidade?</a></li>
                    <li><a href="#section13" className="hover:underline">Outras regiões possuem direitos de privacidade específicos?</a></li>
                    <li><a href="#section14" className="hover:underline">Atualizamos este aviso?</a></li>
                    <li><a href="#section15" className="hover:underline">Como você pode entrar em contato conosco sobre este aviso?</a></li>
                    <li><a href="#section16" className="hover:underline">Como você pode revisar, atualizar ou excluir os dados que coletamos de você?</a></li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Content Sections */}
            <div className="space-y-10">
              
              {/* Section 1 */}
              <section id="section1" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <Database className="h-6 w-6 text-primary" />
                      1. Que Informações Coletamos?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                        Informações pessoais que você nos divulga
                      </h3>
                      <div className="bg-muted/20 rounded-lg p-4 mb-4">
                        <p className="font-body text-sm text-primary font-medium flex items-center gap-2">
                          <Info className="h-4 w-4" />
                          Resumindo: Coletamos informações pessoais que você nos fornece.
                        </p>
                      </div>
                      <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
                        Coletamos informações pessoais que você nos fornece voluntariamente quando você:
                      </p>
                      <ul className="space-y-2 font-body text-base text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Participar de atividades nos Serviços; ou</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Entrar em contato conosco;</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Demonstrar interesse em obter informações sobre nós, nossos produtos e serviços.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                        Informações pessoais fornecidas por você
                      </h3>
                      <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
                        As informações pessoais que coletamos dependem do contexto de suas interações conosco e com os Serviços, das escolhas que você faz e dos produtos e recursos que você utiliza. As informações pessoais que coletamos podem incluir o seguinte:
                      </p>
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                        <p className="font-body text-base text-foreground flex items-center gap-2">
                          <Mail className="h-5 w-5 text-primary" />
                          <strong>Endereços de e-mail</strong>
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                        Informação sensível
                      </h3>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="font-body text-base text-foreground flex items-center gap-2">
                          <Shield className="h-5 w-5 text-green-600" />
                          <strong>Não processamos informações sensíveis.</strong>
                        </p>
                      </div>
                    </div>

                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                      <p className="font-body text-base text-foreground flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-amber-600" />
                        <span>Todas as informações pessoais que você nos fornecer devem ser verdadeiras, completas e precisas, e você deve nos notificar sobre quaisquer alterações nessas informações pessoais.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section2" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <Eye className="h-6 w-6 text-primary" />
                      2. Como Processamos Suas Informações?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="font-body text-sm text-primary font-medium flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Resumindo: Processamos suas informações para fornecer, aprimorar e administrar nossos Serviços, comunicar-nos com você, para fins de segurança e prevenção de fraudes, e para cumprir a lei.
                      </p>
                    </div>
                    
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Processamos as informações pessoais para os seguintes fins listados abaixo. Também podemos processar suas informações para outros fins somente com sua prévia autorização explícita/concordância.
                    </p>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Processamos suas informações pessoais por diversos motivos, dependendo de como você interage com nossos Serviços, incluindo:
                    </p>

                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <p className="font-body text-base text-foreground">
                        <strong>Para salvaguardar ou proteger os interesses vitais de um indivíduo.</strong> Podemos processar suas informações quando necessário para salvaguardar ou proteger os interesses vitais de um indivíduo, como, por exemplo, para prevenir danos.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section3" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <Scale className="h-6 w-6 text-primary" />
                      3. Em Que Bases Legais Nos Apoiamos Para Processar Suas Informações Pessoais?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="font-body text-sm text-primary font-medium flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Resumindo: Só processamos as suas informações pessoais quando acreditamos ser necessário e temos uma razão legal válida (ou seja, uma justificativa legal), fundamento jurídico) para fazê-lo de acordo com a legislação aplicável.
                      </p>
                    </div>

                    {/* EU/UK Section */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                          <Globe className="h-5 w-5 text-primary" />
                          Se você estiver localizado na UE ou no Reino Unido
                        </h3>
                      </div>
                      <div className="p-4 space-y-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          O Regulamento Geral de Proteção de Dados (RGPD) e o RGPD do Reino Unido exigem que expliquemos as bases legais válidas em que nos apoiamos para processar as suas informações pessoais. Assim, podemos nos basear nas seguintes bases legais:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 bg-muted/20 rounded-lg p-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-foreground">Consentimento.</strong>
                              <span className="text-muted-foreground"> Podemos processar suas informações se você nos tiver dado permissão para usar suas informações pessoais para uma finalidade específica. Você pode retirar seu consentimento a qualquer momento.</span>
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-muted/20 rounded-lg p-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-foreground">Obrigações Legais.</strong>
                              <span className="text-muted-foreground"> Podemos processar suas informações quando acreditarmos ser necessário para cumprir nossas obrigações legais, como cooperar com um órgão de aplicação da lei ou agência reguladora, exercer ou defender nossos direitos legais ou divulgar suas informações como prova em litígios nos quais estejamos envolvidos.</span>
                            </div>
                          </li>
                          <li className="flex items-start gap-3 bg-muted/20 rounded-lg p-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <strong className="text-foreground">Interesses vitais.</strong>
                              <span className="text-muted-foreground"> Podemos processar suas informações quando acreditarmos ser necessário para proteger seus interesses vitais ou os interesses vitais de terceiros, como em situações que envolvam ameaças potenciais à segurança de qualquer pessoa.</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Canada Section */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                          <Globe className="h-5 w-5 text-primary" />
                          Se você estiver localizado no Canadá
                        </h3>
                      </div>
                      <div className="p-4 space-y-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Podemos processar as suas informações se nos tiver dado permissão específica (ou seja, consentimento expresso) para usar suas informações pessoais para uma finalidade específica ou em situações em que sua permissão possa ser inferida (ou seja, consentimento implícito). Você pode retirar seu consentimento a qualquer momento.
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Em alguns casos excepcionais, podemos estar legalmente autorizados, de acordo com a legislação aplicável, a processar suas informações sem o seu consentimento, incluindo, por exemplo:
                        </p>
                        <ul className="space-y-2 font-body text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Se a coleta for claramente do interesse de um indivíduo e o consentimento não puder ser obtido em tempo hábil</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Para investigações, detecção e prevenção de fraudes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Para transações comerciais, desde que determinadas condições sejam atendidas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Se estiver contido em uma declaração de testemunha e a coleta for necessária para avaliar, processar ou liquidar uma reclamação de seguro</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Para identificar pessoas feridas, doentes ou falecidas e comunicar com os familiares</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Se tivermos motivos razoáveis para acreditar que um indivíduo foi, é ou pode ser vítima de abuso financeiro</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Se for razoável esperar que a coleta e o uso com consentimento comprometam a disponibilidade ou a precisão das informações</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Caso a divulgação seja necessária para cumprir uma intimação, mandado, ordem judicial ou normas do tribunal</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Se foi produzido por um indivíduo no exercício de suas funções, negócios ou profissão</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Se a coleção se destina exclusivamente a fins jornalísticos, artísticos ou literários</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>Se a informação for de domínio público e estiver especificada nos regulamentos</span>
                          </li>
                        </ul>
                        <p className="font-body text-sm text-muted-foreground mt-4">
                          Podemos divulgar informações anonimizadas para projetos de pesquisa ou estatística aprovados, sujeitos à supervisão ética e a compromissos de confidencialidade.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="section4" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <Share2 className="h-6 w-6 text-primary" />
                      4. Quando e Com Quem Compartilhamos Suas Informações Pessoais?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="font-body text-sm text-primary font-medium flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Resumindo: Podemos compartilhar informações em situações específicas descritas nesta seção e/ou com os seguintes terceiros.
                      </p>
                    </div>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Nós poderemos precisar compartilhar suas informações pessoais nas seguintes situações:
                    </p>

                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <p className="font-body text-base text-foreground">
                        <strong>Transferências de Negócios.</strong> Podemos compartilhar ou transferir suas informações em conexão com, ou durante negociações de, qualquer fusão, venda de ativos da empresa, financiamento ou aquisição de toda ou parte de nossa empresa por outra empresa.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="section5" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <ExternalLink className="h-6 w-6 text-primary" />
                      5. Qual é a Nossa Posição em Relação a Sites de Terceiros?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="font-body text-sm text-primary font-medium flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Resumindo: Não nos responsabilizamos pela segurança de quaisquer informações que você compartilhe com terceiros aos quais possamos fornecer links ou que anunciem em nossos Serviços, mas que não sejam afiliados a eles.
                      </p>
                    </div>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Os Serviços/Nossos Serviços podem conter links para sites, serviços online ou aplicativos móveis de terceiros e/ou anúncios de terceiros não afiliados a nós, que podem direcionar para outros sites, serviços ou aplicativos. Portanto, não oferecemos nenhuma garantia em relação a esses terceiros e não nos responsabilizamos por quaisquer perdas ou danos causados pelo uso de tais sites, serviços ou aplicativos de terceiros.
                    </p>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      A inclusão de um link para um site, serviço ou aplicativo de terceiros não implica em endosso de nossa parte. Não podemos garantir a segurança e a privacidade dos dados que você fornece a sites de terceiros. Quaisquer dados coletados por terceiros não são cobertos por este Aviso de Privacidade.
                    </p>

                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                      <p className="font-body text-base text-foreground flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Não nos responsabilizamos pelo conteúdo, pelas práticas de privacidade e segurança ou pelas políticas de terceiros, incluindo outros sites, serviços ou aplicativos que possam estar vinculados aos Serviços. Você deve revisar as políticas desses terceiros e contatá-los diretamente para esclarecer suas dúvidas.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="section6" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <Cookie className="h-6 w-6 text-primary" />
                      6. Utilizamos Cookies e Outras Tecnologias de Rastreamento?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="font-body text-sm text-primary font-medium flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Resumindo: Podemos usar cookies e outras tecnologias de rastreamento para coletar e armazenar suas informações.
                      </p>
                    </div>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Podemos usar cookies e tecnologias de rastreamento semelhantes (como web beacons e pixels) para coletar informações quando você interage com nossos Serviços. Algumas tecnologias de rastreamento online nos ajudam a manter a segurança de nossos Serviços, previne falhas, corrige erros, salva suas preferências e auxilia nas funções básicas do site.
                    </p>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Também permitimos que terceiros e prestadores de serviços usem tecnologias de rastreamento online em nossos Serviços para fins de análise e publicidade, incluindo para ajudar a gerenciar e exibir anúncios, personalizar anúncios de acordo com seus interesses ou enviar lembretes de carrinho de compras abandonado (dependendo de suas preferências de comunicação).
                    </p>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Na medida em que essas tecnologias de rastreamento online sejam consideradas uma "venda" / "compartilhamento" (o que inclui publicidade direcionada, conforme definido pelas leis aplicáveis) De acordo com as leis estaduais dos EUA aplicáveis, você pode optar por não participar dessas tecnologias de rastreamento online enviando uma solicitação conforme descrito abaixo na seção "Os residentes dos Estados Unidos têm direitos específicos de privacidade?".
                    </p>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Informações específicas sobre como utilizamos essas tecnologias e como você pode recusar determinados cookies estão descritas em nosso <Link to="/cookies" className="text-primary hover:underline font-medium">Aviso de Cookies</Link>.
                    </p>

                    {/* Google Analytics */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                          <BarChart3 className="h-5 w-5 text-primary" />
                          Google Analytics
                        </h3>
                      </div>
                      <div className="p-4 space-y-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Podemos compartilhar suas informações com o Google Analytics para rastrear e analisar a utilização dos Serviços. Os recursos de publicidade do Google Analytics que podemos usar incluem: Relatórios de dados demográficos e interesses do Google Analytics.
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Para desativar o rastreamento do Google Analytics em todos os Serviços, acesse <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a>. Você pode desativar os recursos de publicidade do Google Analytics nas Configurações de anúncios e nas Configurações de anúncios para aplicativos móveis.
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Outras opções de desativação incluem <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://optout.networkadvertising.org/</a> e <a href="http://www.networkadvertising.org/mobile-choice" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.networkadvertising.org/mobile-choice</a>.
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Para obter mais informações sobre as práticas de privacidade do Google, visite a página <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Privacidade e Termos do Google</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="section7" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <Clock className="h-6 w-6 text-primary" />
                      7. Por Quanto Tempo Guardamos Suas Informações?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="font-body text-sm text-primary font-medium flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Resumindo: Mantemos suas informações pelo tempo necessário para completar as finalidades descritas neste Aviso de Privacidade, a menos que exigido de outra forma por lei.
                      </p>
                    </div>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Conservaremos suas informações pessoais apenas pelo tempo necessário para os fins descritos neste Aviso de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei (como para fins fiscais, contábeis ou outros requisitos legais).
                    </p>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Quando não houver mais necessidade comercial legítima de processar suas informações pessoais, iremos excluí-las ou anonimizá-las informações ou, caso isso não seja possível (por exemplo, porque suas informações pessoais foram armazenadas em backups), armazenaremos suas informações pessoais com segurança e as isolaremos de qualquer processamento adicional até que a exclusão seja possível.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section id="section8" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <Lock className="h-6 w-6 text-primary" />
                      8. Como Mantemos Suas Informações Seguras?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="font-body text-sm text-primary font-medium flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Resumindo: Nosso objetivo é proteger suas informações pessoais por meio de um sistema de medidas de segurança técnica organizacionais.
                      </p>
                    </div>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Implementamos medidas técnicas apropriadas e razoáveis. Organizacionalmente implementamos medidas de segurança para proteger a segurança de todas as informações pessoais que processamos. No entanto, apesar de nossas medidas de segurança e esforços para proteger suas informações, nenhuma transmissão eletrônica pela internet ou tecnologia de armazenamento de informações pode ser garantida como 100% segura.
                    </p>

                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                      <p className="font-body text-base text-foreground flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Portanto, não podemos prometer ou garantir que hackers, cibercriminosos ou outros agentes maliciosos não consigam acessar ou usar suas informações não autorizadas. Terceiros não poderão burlar nossa segurança nem coletar, acessar, roubar ou modificar suas informações indevidamente. Embora façamos o possível para proteger suas informações pessoais, a transmissão de informações pessoais de e para nossos Serviços é de sua inteira responsabilidade. Você deve acessar os Serviços somente em um ambiente seguro.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section id="section9" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <Baby className="h-6 w-6 text-primary" />
                      9. Coletamos Informações de Menores de Idade?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="font-body text-sm text-primary font-medium flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Resumindo: Não coletamos dados de crianças menores de 18 anos de idade intencionalmente nem realizamos marketing direcionado a elas, ou a idade equivalente conforme especificado por lei em sua jurisdição.
                      </p>
                    </div>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Não coletamos, solicitamos dados ou direcionamos marketing a crianças menores de 18 anos de idade, de forma consciente, ou a idade equivalente conforme especificado por lei em sua jurisdição. Nem vendemos intencionalmente essas informações pessoais.
                    </p>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Ao usar os Serviços, você declara ter pelo menos 18 anos de idade ou a idade equivalente conforme especificado por lei em sua jurisdição ou que você é o pai ou responsável legal de um menor de idade e consente com o uso dos Serviços por esse menor.
                    </p>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Se tomarmos conhecimento de que informações pessoais de usuários menores de 18 anos foram obtidas, ou a idade equivalente conforme especificado por lei em sua jurisdição, desativaremos a conta e tomaremos as medidas cabíveis para excluí-los prontamente de nossos registros.
                    </p>

                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <p className="font-body text-base text-foreground">
                        Se você tomar conhecimento de quaisquer dados que possamos ter coletado de crianças menores de 18 anos ou a idade equivalente conforme especificado por lei em sua jurisdição, entre em contato conosco em <a href="mailto:privacidade@upira.com.br" className="text-primary hover:underline font-medium">privacidade@upira.com.br</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10 */}
              <section id="section10" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <UserCheck className="h-6 w-6 text-primary" />
                      10. Quais São Seus Direitos de Privacidade?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="font-body text-sm text-primary font-medium flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Resumidamente: Dependendo do seu estado de residência nos EUA ou em algumas regiões, como Espaço Econômico Europeu (EEE), Reino Unido (RU), Suíça e Canadá, Você possui direitos que lhe permitem maior acesso e controle sobre suas informações pessoais.
                      </p>
                    </div>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Em algumas regiões (como EEE, o Reino Unido, a Suíça e o Canadá), Você tem certos direitos de acordo com as leis de proteção de dados aplicáveis. Esses direitos podem incluir:
                    </p>

                    <ul className="space-y-2 font-body text-base text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>(i) solicitar acesso e obter uma cópia de suas informações pessoais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>(ii) solicitar a retificação ou o apagamento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>(iii) restringir o processamento de suas informações pessoais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>(iv) se aplicável, à portabilidade dos dados</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>(v) não ser submetido a decisões automatizadas</span>
                      </li>
                    </ul>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Caso uma decisão que produza efeitos legais ou similares seja tomada exclusivamente por meios automatizados, iremos informá-lo, explicar os principais fatores e oferecer uma maneira simples de solicitar uma revisão humana. Em determinadas circunstâncias, você também poderá ter o direito de se opor ao processamento de suas informações pessoais.
                    </p>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Analisaremos e atenderemos a qualquer solicitação de acordo com as leis de proteção de dados aplicáveis.
                    </p>

                    <div className="bg-muted/30 rounded-lg p-4">
                      <p className="font-body text-base text-muted-foreground leading-relaxed">
                        <strong>Se você estiver localizado no Espaço Econômico Europeu (EEE) ou no Reino Unido</strong> e acreditar que estamos processando suas informações pessoais de forma legal, você também tem o direito de apresentar uma reclamação à autoridade de proteção de dados do seu Estado-Membro ou à autoridade de proteção de dados do Reino Unido.
                      </p>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4">
                      <p className="font-body text-base text-muted-foreground leading-relaxed">
                        <strong>Se você estiver localizado na Suíça</strong>, poderá entrar em contato com o Comissário Federal de Proteção de Dados e Informação.
                      </p>
                    </div>

                    {/* Withdrawal of consent */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          Retirada do seu consentimento
                        </h3>
                      </div>
                      <div className="p-4 space-y-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Se estivermos dependendo do seu consentimento para processar suas informações pessoais, que pode ser consentimento expresso e/ou implícito, dependendo da legislação aplicável, Você tem o direito de retirar seu consentimento a qualquer momento. Você pode retirar seu consentimento a qualquer momento entrando em contato conosco através dos dados de contato fornecidos na seção "Como você pode entrar em contato conosco sobre este aviso?" abaixo.
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          No entanto, observe que isso não afetará a legalidade do processamento antes de sua retirada, nem, quando a legislação aplicável o permitir, isso afetará o processamento de suas informações pessoais realizado com base em fundamentos legais de processamento que não sejam o consentimento.
                        </p>
                      </div>
                    </div>

                    {/* Marketing opt-out */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          Cancelamento do recebimento de comunicações de marketing e promocionais
                        </h3>
                      </div>
                      <div className="p-4 space-y-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Você pode cancelar a assinatura de nossas comunicações de marketing e promocionais a qualquer momento clicando no link de cancelamento de inscrição nos e-mails que enviamos, ou entrando em contato conosco através dos dados fornecidos na seção "Como você pode entrar em contato conosco sobre este aviso?" abaixo. Você será então removido das listas de marketing. No entanto, ainda poderemos entrar em contato com você — por exemplo, para enviar mensagens relacionadas ao serviço que sejam necessárias para a administração e uso da sua conta, para responder a solicitações de serviço ou para outros fins não relacionados a marketing.
                        </p>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <p className="font-body text-base text-foreground">
                        Se você tiver dúvidas ou comentários sobre seus direitos de privacidade, pode nos enviar um e-mail para <a href="mailto:privacidade@upira.com.br" className="text-primary hover:underline font-medium">privacidade@upira.com.br</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11 */}
              <section id="section11" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <Eye className="h-6 w-6 text-primary" />
                      11. Controles Para Recursos de Não Rastrear
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      A maioria dos navegadores da web e alguns sistemas operacionais móveis e aplicativos móveis incluem um recurso "Não rastrear" (Do-Not-Track, "DNT") — recurso ou configuração que você pode ativar para sinalizar sua preferência de privacidade de não ter seus dados sobre suas atividades de navegação online monitorados e coletados.
                    </p>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Nesta fase, não existe um padrão tecnológico uniforme para reconhecer a implementação de sinais DNT que tenha sido finalizado. Sendo assim, atualmente não respondemos a sinais DNT (Do Not Track) do navegador ou a qualquer outro mecanismo que comunique automaticamente sua escolha de não ser rastreado online. Caso seja adotado um padrão para rastreamento online que devamos seguir no futuro, informaremos você sobre essa prática em uma versão revisada deste Aviso de Privacidade.
                    </p>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      A legislação da Califórnia exige que informemos como respondemos aos sinais "Não Rastrear" (DNT) dos navegadores da web. Isso ocorre porque atualmente não existe um padrão legal ou da indústria para reconhecê-los. Não respondemos a sinais DNT (Do Not Track) neste momento.
                    </p>

                    {/* Global Privacy Control */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          Controle Global de Privacidade
                        </h3>
                      </div>
                      <div className="p-4 space-y-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Reconhecemos e respeitamos os sinais do Controle Global de Privacidade (GPC). Se você usa um navegador ou extensão que oferece suporte ao GPC, trataremos isso como uma solicitação válida para optar por não permitir a venda ou o compartilhamento de suas informações pessoais para fins de publicidade direcionada, conforme as leis de privacidade estaduais aplicáveis, incluindo a Lei de Privacidade do Consumidor da Califórnia (CCPA).
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Quando detectarmos um sinal do GPC em seu navegador, aplicaremos automaticamente sua preferência de não participação, sem exigir que você tome qualquer ação adicional.
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Para obter mais informações sobre o GPC e como ativá-lo, visite <a href="https://globalprivacycontrol.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">globalprivacycontrol.org</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12 */}
              <section id="section12" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-primary" />
                      12. Os Residentes dos Estados Unidos Têm Direitos Específicos de Privacidade?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="font-body text-sm text-primary font-medium flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Resumindo: Se você reside em Califórnia, Colorado, Connecticut, Delaware, Flórida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, Nova Hampshire, Nova Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah ou Virgínia, você pode ter direitos específicos de privacidade.
                      </p>
                    </div>

                    {/* Categories Table */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          Categorias de informações pessoais que coletamos
                        </h3>
                      </div>
                      <div className="p-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
                          A tabela abaixo mostra as categorias de informações pessoais que coletamos nos últimos doze (12) meses:
                        </p>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-border bg-muted/20">
                                <th className="text-left p-3 font-semibold text-foreground">Categoria</th>
                                <th className="text-left p-3 font-semibold text-foreground">Exemplos</th>
                                <th className="text-center p-3 font-semibold text-foreground">Coletado</th>
                              </tr>
                            </thead>
                            <tbody className="font-body text-muted-foreground">
                              <tr className="border-b border-border">
                                <td className="p-3 font-medium">A. Identificadores</td>
                                <td className="p-3">Dados de contato, nome, pseudônimo, endereço postal, telefone, endereço de e-mail, nome da conta</td>
                                <td className="p-3 text-center"><span className="text-red-500 font-medium">NÃO</span></td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="p-3 font-medium">B. Informações pessoais (Lei da Califórnia)</td>
                                <td className="p-3">Nome, informações de contato, formação acadêmica, emprego, informações financeiras</td>
                                <td className="p-3 text-center"><span className="text-red-500 font-medium">NÃO</span></td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="p-3 font-medium">C. Características protegidas</td>
                                <td className="p-3">Sexo, idade, data de nascimento, raça, etnia, nacionalidade, estado civil</td>
                                <td className="p-3 text-center"><span className="text-red-500 font-medium">NÃO</span></td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="p-3 font-medium">D. Informações comerciais</td>
                                <td className="p-3">Informações sobre transações, histórico de compras, detalhes financeiros</td>
                                <td className="p-3 text-center"><span className="text-red-500 font-medium">NÃO</span></td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="p-3 font-medium">E. Informações biométricas</td>
                                <td className="p-3">Impressões digitais e impressões vocais</td>
                                <td className="p-3 text-center"><span className="text-red-500 font-medium">NÃO</span></td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="p-3 font-medium">F. Atividade na internet</td>
                                <td className="p-3">Histórico de navegação, pesquisa, interações com sites e anúncios</td>
                                <td className="p-3 text-center"><span className="text-red-500 font-medium">NÃO</span></td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="p-3 font-medium">G. Dados de geolocalização</td>
                                <td className="p-3">Localização do dispositivo</td>
                                <td className="p-3 text-center"><span className="text-red-500 font-medium">NÃO</span></td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="p-3 font-medium">H. Informações de áudio/visuais</td>
                                <td className="p-3">Imagens e gravações de áudio, vídeo ou chamadas</td>
                                <td className="p-3 text-center"><span className="text-red-500 font-medium">NÃO</span></td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="p-3 font-medium">I. Informações profissionais</td>
                                <td className="p-3">Informações de contato comercial, cargo, histórico profissional</td>
                                <td className="p-3 text-center"><span className="text-red-500 font-medium">NÃO</span></td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="p-3 font-medium">J. Informações sobre educação</td>
                                <td className="p-3">Informações de cadastro e registros de alunos</td>
                                <td className="p-3 text-center"><span className="text-red-500 font-medium">NÃO</span></td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="p-3 font-medium">K. Inferências</td>
                                <td className="p-3">Inferências sobre preferências e características de um indivíduo</td>
                                <td className="p-3 text-center"><span className="text-red-500 font-medium">NÃO</span></td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="p-3 font-medium">L. Informações pessoais sensíveis</td>
                                <td className="p-3">—</td>
                                <td className="p-3 text-center"><span className="text-red-500 font-medium">NÃO</span></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Também podemos coletar outras informações pessoais fora dessas categorias por meio de interações suas conosco pessoalmente, online, por telefone ou por correio, no contexto de:
                    </p>
                    <ul className="space-y-2 font-body text-base text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Receber ajuda através dos nossos canais de apoio ao cliente;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Participação em pesquisas ou concursos com clientes; e</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Facilitar a prestação dos nossos serviços e responder às suas solicitações.</span>
                      </li>
                    </ul>

                    {/* Your Rights */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          Seus direitos
                        </h3>
                      </div>
                      <div className="p-4 space-y-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Você possui direitos assegurados por certas leis de proteção de dados estaduais dos EUA. No entanto, esses direitos não são absolutos e, em alguns casos, podemos recusar sua solicitação, conforme permitido por lei. Esses direitos incluem:
                        </p>
                        <ul className="space-y-2 font-body text-base text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Direito de saber se estamos ou não processando seus dados pessoais</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Direito de acesso aos seus dados pessoais</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Direito de retificar imprecisões nos seus dados pessoais</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Direito de solicitar a eliminação dos seus dados pessoais</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Direito de obter uma cópia dos dados pessoais que você compartilhou conosco anteriormente</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Direito à não discriminação pelo exercício dos seus direitos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Direito de optar por não permitir o processamento dos seus dados pessoais caso sejam utilizados para publicidade direcionada, a venda de dados pessoais ou a definição de perfis ("perfilamento")</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* How to exercise rights */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          Como exercer seus direitos
                        </h3>
                      </div>
                      <div className="p-4 space-y-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Para exercer esses direitos, você pode entrar em contato conosco mediante o envio de uma solicitação de acesso do titular dos dados, enviando-nos um e-mail para <a href="mailto:contato@upira.com.br" className="text-primary hover:underline">contato@upira.com.br</a>, visitando <a href="https://upira.com.br/contato" className="text-primary hover:underline">https://upira.com.br/contato</a>, ou por referência aos detalhes de contato no final deste documento.
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          We will honor your opt-out preferences if you enact the Global Privacy Control (GPC) opt-out signal on your browser.
                        </p>
                      </div>
                    </div>

                    {/* Request Verification */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          Request Verification
                        </h3>
                      </div>
                      <div className="p-4 space-y-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and/or security or fraud-prevention purpose.
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such requests on your behalf.
                        </p>
                      </div>
                    </div>

                    {/* Appeals */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          Appeals
                        </h3>
                      </div>
                      <div className="p-4 space-y-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:privacidade@upira.com.br" className="text-primary hover:underline">privacidade@upira.com.br</a>. We will review your appeal and notify you in writing of any decision within forty-five (45) days of receipt of the appeal. If we uphold the denial, we will provide you with a written explanation of our decision and inform you of your right to contact your state attorney general or other state regulator.
                        </p>
                      </div>
                    </div>

                    {/* California Shine the Light */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          California "Shine the Light" Law
                        </h3>
                      </div>
                      <div className="p-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Seção 1798.83 do Código Civil da Califórnia, também conhecida como "Shine the Light". De acordo com a lei, nossos usuários residentes na Califórnia podem solicitar e obter de nós, uma vez por ano e gratuitamente, informações sobre as categorias de informações pessoais (se houver) que divulgamos a terceiros para fins de marketing direto, bem como os nomes e endereços de todos os terceiros com os quais compartilhamos informações pessoais no ano civil imediatamente anterior. Se você reside na Califórnia e deseja fazer essa solicitação, envie-a por escrito utilizando as informações de contato fornecidas na seção "Como você pode entrar em contato conosco sobre este aviso?".
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 13 */}
              <section id="section13" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <Globe className="h-6 w-6 text-primary" />
                      13. Outras Regiões Possuem Direitos de Privacidade Específicos?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="font-body text-sm text-primary font-medium flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Resumindo: Você pode ter direitos adicionais dependendo do país em que reside.
                      </p>
                    </div>

                    {/* Australia and New Zealand */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          Austrália e Nova Zelândia
                        </h3>
                      </div>
                      <div className="p-4 space-y-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Coletamos e processamos suas informações pessoais de acordo com as obrigações e condições estabelecidas pela Lei de Privacidade da Austrália de 1988 e Lei de Privacidade da Nova Zelândia de 2020 (Lei de Privacidade).
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Este Aviso de Privacidade atende aos requisitos de notificação definidos em ambas as Leis de Privacidade, em particular: quais informações pessoais coletamos de você, de quais fontes, para quais finalidades e outros destinatários de suas informações pessoais.
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Caso não deseje fornecer as informações pessoais necessárias para completar a finalidade aplicável, isso pode afetar nossa capacidade de fornecer nossos serviços, em particular:
                        </p>
                        <ul className="space-y-2 font-body text-base text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>oferecer os produtos ou serviços que você deseja</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>responder a ajudar com suas solicitações</span>
                          </li>
                        </ul>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          A qualquer momento, você tem o direito de solicitar acesso ou correção de suas informações pessoais.
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Se você acredita que estamos processando suas informações pessoais de forma ilegal, você tem o direito de apresentar uma reclamação sobre uma violação dos Princípios Australianos de Privacidade ao Gabinete do Comissário de Informação Australiano ou uma reclamação dos Princípios de Privacidade da Nova Zelândia ao Gabinete do Comissário de Privacidade da Nova Zelândia.
                        </p>
                      </div>
                    </div>

                    {/* South Africa */}
                    <div className="border border-border rounded-xl overflow-hidden">
                      <div className="bg-muted/30 px-4 py-3 border-b border-border">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          República da África do Sul
                        </h3>
                      </div>
                      <div className="p-4 space-y-4">
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          A qualquer momento, você tem o direito de solicitar acesso ou correção de suas informações pessoais. Você pode fazer essa solicitação entrando em contato conosco através dos dados de contato fornecidos na seção "Como você pode revisar, atualizar ou excluir os dados que coletamos de você?"
                        </p>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">
                          Caso esteja insatisfeito com a forma como tratamos qualquer reclamação relativa ao nosso processamento de informações pessoais, pode contatar a entidade reguladora, cujos dados de contato são os seguintes:
                        </p>
                        <div className="bg-muted/20 rounded-lg p-4">
                          <p className="font-body text-base text-foreground font-medium">Regulador de Informação (África do Sul)</p>
                          <p className="font-body text-sm text-muted-foreground mt-2">Para informações gerais: <a href="mailto:enquires@inforegulator.org.za" className="text-primary hover:underline">enquires@inforegulator.org.za</a></p>
                          <p className="font-body text-sm text-muted-foreground">Reclamações (preenche o formulário 5 da POPIA/PAIA): <a href="mailto:PAIAComplaints@inforegulator.org.za" className="text-primary hover:underline">PAIAComplaints@inforegulator.org.za</a> e <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-primary hover:underline">POPIAComplaints@inforegulator.org.za</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 14 */}
              <section id="section14" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <RefreshCw className="h-6 w-6 text-primary" />
                      14. Atualizamos Este Aviso?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <p className="font-body text-sm text-primary font-medium flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Resumindo: Sim, atualizaremos este aviso conforme necessário para cumprir as leis aplicáveis.
                      </p>
                    </div>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Podemos atualizar este Aviso de Privacidade periodicamente para indicar por meio do aviso "revisado" a data no topo deste Aviso de Privacidade. Caso haja alterações substanciais e essenciais ao Privacidade, poderemos notificá-lo publicando um aviso e/ou alterações em local visível ou enviando uma notificação diretamente a você.
                    </p>

                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Recomendamos que você revise este Aviso de Privacidade com frequência para se manter informado sobre como protegemos suas informações.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 15 */}
              <section id="section15" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <Phone className="h-6 w-6 text-primary" />
                      15. Como Você Pode Entrar em Contato Conosco Sobre Este Aviso?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Se você tiver dúvidas ou comentários sobre este aviso, entre em contato conosco. Envie-nos um e-mail para <a href="mailto:privacidade@upira.com.br" className="text-primary hover:underline font-medium">privacidade@upira.com.br</a> ou entre em contato conosco por correio no seguinte endereço:
                    </p>

                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <Building className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="space-y-2">
                          <p className="font-heading text-xl font-semibold text-foreground">UPIRA</p>
                          <p className="font-body text-base text-muted-foreground flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            Av. Julia Freire, 1200 - Expedicionários - João Pessoa - PB/Brasil
                          </p>
                          <p className="font-body text-base text-muted-foreground">
                            CEP: 58.041-000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 16 */}
              <section id="section16" className="scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="bg-primary/10 px-6 py-4 border-b border-border">
                    <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                      <Database className="h-6 w-6 text-primary" />
                      16. Como Você Pode Revisar, Atualizar ou Excluir os Dados que Coletamos de Você?
                    </h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Com base nas leis aplicáveis do seu país, você pode ter o direito de solicitar acesso às informações pessoais que coletamos de você, modificar essas informações ou excluí-las.
                    </p>

                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <p className="font-body text-base text-foreground">
                        Para solicitar a revisão, atualização ou exclusão de suas informações pessoais, visite: <Link to="/contato" className="text-primary hover:underline font-medium">https://upira.com.br/contato</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Final Card */}
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 mt-12 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="font-body text-base text-foreground leading-relaxed">
                Ao utilizar nosso Site, você concorda com os termos deste Aviso de Privacidade.
              </p>
              <p className="font-body text-lg font-semibold text-primary mt-4">
                Última atualização: 14 de dezembro de 2025
              </p>
            </section>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Privacidade;
