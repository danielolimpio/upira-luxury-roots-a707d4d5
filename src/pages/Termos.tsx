import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  CheckCircle, 
  Shield, 
  Mail,
  Globe,
  Users,
  Ban,
  Pencil,
  Key,
  Settings,
  Clock,
  RefreshCw,
  Gavel,
  MessageSquare,
  FileWarning,
  UserX,
  Database,
  Send,
  ListChecks,
  ChevronRight,
  Smartphone
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Termos = () => {
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
        <title>Termos de Uso - Upira</title>
        <meta 
          name="description" 
          content="Termos de uso do site Upira. Conheça as condições de utilização, direitos e responsabilidades." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://upira.com.br/termos" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-16">
          <article className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12 space-y-4">
              <FileText className="h-16 w-16 text-primary mx-auto" />
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Termos de Uso
              </h1>
              <p className="font-body text-lg text-muted-foreground">
                Última atualização: 14 de dezembro de 2025
              </p>
            </div>

            {/* Acceptance Card */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 md:p-8 mb-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                Aceitação dos Nossos Termos Legais
              </h2>
              <div className="space-y-4">
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Nós somos <strong className="text-foreground">UPIRA</strong> ("Empresa", "nós", "nosso").
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Operamos o site{" "}
                  <a href="https://upira.com.br" className="text-primary hover:underline font-medium">https://upira.com.br</a>, bem como quaisquer outros produtos e serviços relacionados que façam referência ou estejam vinculados a estes termos legais (os "Termos Legais") (coletivamente, os "Serviços").
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Você pode entrar em contato conosco por meio de um e-mail para{" "}
                  <a href="mailto:contato@upira.com.br" className="text-primary hover:underline">contato@upira.com.br</a> ou por correio para Av. Julia Freire, 1200 - Expedicionários - João Pessoa - PB/Brasil - CEP: 58.041-000.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Estes Termos Legais constituem um acordo juridicamente vinculativo celebrado entre você, seja pessoalmente ou em nome de uma entidade ("você"), e <strong className="text-foreground">UPIRA</strong>. Ao acessar os Serviços, você concorda que leu, entendeu e aceitou estar vinculado a todos estes Termos Legais.
                </p>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-4">
                  <p className="font-body text-sm text-foreground leading-relaxed font-medium">
                    CASO NÃO CONCORDE COM TODOS ESTES TERMOS LEGAIS, VOCÊ ESTÁ EXPRESSAMENTE PROIBIDO DE USAR OS SERVIÇOS E DEVE INTERROMPER O USO IMEDIATAMENTE.
                  </p>
                </div>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  Termos e condições suplementares ou documentos que possam ser publicados nos Serviços periodicamente são expressamente incorporados a este documento por referência. Reservamo-nos o direito, a nosso exclusivo critério, de fazer alterações ou modificações a estes Termos Legais a qualquer momento e por qualquer motivo, informando-o sobre quaisquer alterações atualizando a data de "Última atualização". A partir da data de publicação destes Termos Legais, você renuncia ao direito de receber notificação específica de cada alteração. É sua responsabilidade revisar periodicamente estes Termos Legais para se manter informado sobre as atualizações. Você estará sujeito às alterações contidas em quaisquer Termos Legais revisados e será considerado ciente e terá aceitado as alterações ao continuar utilizando os Serviços após a data de publicação dos Termos Legais revisados.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Recomendamos que imprima uma cópia destes Termos Legais para seus registros.
                </p>
              </div>
            </div>

            {/* Index Card */}
            <div className="bg-muted/30 border border-border/50 rounded-xl p-6 mb-10">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-primary" />
                Índice
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  { num: "1", title: "Nossos Serviços", id: "nossos-servicos" },
                  { num: "2", title: "Direitos de Propriedade Intelectual", id: "propriedade-intelectual" },
                  { num: "3", title: "Representações do Usuário", id: "representacoes" },
                  { num: "4", title: "Atividades Proibidas", id: "atividades-proibidas" },
                  { num: "5", title: "Contribuições Geradas pelo Usuário", id: "contribuicoes-usuario" },
                  { num: "6", title: "Contribuição/Licença", id: "contribuicao-licenca" },
                  { num: "7", title: "Gestão de Serviços", id: "gestao-servicos" },
                  { num: "8", title: "Vigência e Rescisão", id: "vigencia-rescisao" },
                  { num: "9", title: "Modificações e Interrupções", id: "modificacoes" },
                  { num: "10", title: "Lei Aplicável", id: "lei-aplicavel" },
                  { num: "11", title: "Resolução de Controvérsias", id: "resolucao-controversias" },
                  { num: "12", title: "Correções", id: "correcoes" },
                  { num: "13", title: "Isenção de Responsabilidade", id: "isencao-responsabilidade" },
                  { num: "14", title: "Limitações de Responsabilidade", id: "limitacoes" },
                  { num: "15", title: "Indenização", id: "indenizacao" },
                  { num: "16", title: "Dados do Usuário", id: "dados-usuario" },
                  { num: "17", title: "Comunicações Eletrônicas", id: "comunicacoes-eletronicas" },
                  { num: "18", title: "Diversos", id: "diversos" },
                  { num: "19", title: "Contate-nos", id: "contato" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10 transition-colors text-left group"
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-primary/20 text-primary text-xs font-semibold rounded">
                      {item.num}
                    </span>
                    <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-upira max-w-none space-y-10">
              
              {/* 1. Nossos Serviços */}
              <section id="nossos-servicos" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  1. Nossos Serviços
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    As informações fornecidas ao usar os Serviços não se destinam à distribuição ou uso por qualquer pessoa ou entidade em qualquer jurisdição ou país onde tal distribuição ou uso seja contrário à lei ou regulamentação, ou que nos sujeite a qualquer exigência de registro nessa jurisdição ou país. Consequentemente, as pessoas que optarem por acessar os Serviços de outros locais o fazem por iniciativa própria e são as únicas responsáveis pelo cumprimento das leis locais, se e na medida em que estas forem aplicáveis.
                  </p>
                </div>
              </section>

              {/* 2. Direitos de Propriedade Intelectual */}
              <section id="propriedade-intelectual" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Key className="h-6 w-6 text-primary" />
                  </div>
                  2. Direitos de Propriedade Intelectual
                </h2>
                
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6 space-y-6">
                  <div>
                    <h3 className="font-heading text-lg font-medium text-foreground mb-3">Nossa propriedade intelectual</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Somos proprietários ou licenciados de todos os direitos de propriedade intelectual dos nossos Serviços, incluindo todo o código-fonte, bancos de dados, funcionalidades, software, design do site, áudio, vídeo, texto, fotografias e elementos gráficos presentes nos Serviços (coletivamente, o "Conteúdo"), bem como as marcas comerciais, marcas de serviço e logotipos nele contidos (as "Marcas").
                    </p>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mt-3">
                      Nosso conteúdo e nossas marcas são protegidos por leis de direitos autorais e marcas registradas (e várias outras leis de propriedade intelectual e de concorrência desleal) e tratados ao redor do mundo.
                    </p>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mt-3">
                      O Conteúdo e as Marcas são fornecidos nos ou através dos Serviços "NO ESTADO EM QUE SE ENCONTRA" para o seu uso pessoal, não comercial ou para fins comerciais internos apenas.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-lg font-medium text-foreground mb-3">Seu uso de nossos Serviços</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Sujeito ao seu cumprimento destes Termos Legais, incluindo a seção "ATIVIDADES PROIBIDAS" abaixo, concedemos a você uma licença não exclusiva, intransferível e revogável para:
                    </p>
                    <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4 mt-3">
                      <li>acessar os Serviços; e</li>
                      <li>Baixar ou imprimir uma cópia de qualquer parte do Conteúdo ao qual você tenha obtido acesso de forma adequada,</li>
                    </ul>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mt-3">
                      exclusivamente para seu uso pessoal, não comercial ou para fins comerciais internos.
                    </p>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mt-3">
                      Exceto conforme estabelecido nesta seção ou em outras partes de nossos Termos Legais, nenhuma parte dos Serviços, Conteúdo ou Marcas pode ser copiada, reproduzida, agregada, republicada, carregada, publicada, exibida publicamente, codificada, traduzida, transmitida, distribuída, vendida, licenciada ou explorada de qualquer outra forma para qualquer finalidade comercial, sem nossa prévia autorização expressa por escrito.
                    </p>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mt-3">
                      Caso deseje utilizar os Serviços, o Conteúdo ou as Marcas de forma diferente da estabelecida nesta seção ou em qualquer outra parte dos nossos Termos Legais, envie sua solicitação para:{" "}
                      <a href="mailto:contato@upira.com.br" className="text-primary hover:underline">contato@upira.com.br</a>. Caso lhe concedamos permissão para publicar, reproduzir ou exibir publicamente qualquer parte dos nossos Serviços ou Conteúdo, você deverá nos identificar como proprietários ou licenciadores dos Serviços, Conteúdo ou Marcas e garantir que qualquer aviso de direitos autorais ou de propriedade intelectual apareça ou esteja visível ao publicar, reproduzir ou exibir nosso Conteúdo.
                    </p>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mt-3">
                      Reservamo-nos todos os direitos não expressamente concedidos a você em relação aos Serviços, Conteúdo e Marcas.
                    </p>
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
                      <p className="font-body text-sm text-foreground leading-relaxed">
                        <strong>Importante:</strong> Qualquer violação destes Direitos de Propriedade Intelectual constituirá uma violação material dos nossos Termos Legais e o seu direito de utilizar os nossos Serviços será imediatamente rescindido.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-medium text-foreground mb-3">Suas contribuições</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Por favor, revise esta seção e a seção "ATIVIDADES PROIBIDAS" atentamente antes de usar nossos Serviços para entender (a) os direitos que você nos concede e (b) as obrigações que você tem ao publicar ou carregar qualquer conteúdo por meio dos Serviços.
                    </p>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mt-3">
                      <strong className="text-foreground">Envio de informações:</strong> Envie-nos diretamente qualquer pergunta, comentário, sugestão, ideia, feedback ou outras informações sobre os Serviços ("Submissões"). Ao enviar este conteúdo, você concorda em nos ceder todos os direitos de propriedade intelectual relativos a ele. Você concorda que seremos proprietários deste conteúdo e teremos o direito de utilizá-lo e divulgá-lo irrestritamente para qualquer finalidade lícita, comercial ou não, sem qualquer obrigação de reconhecimento ou compensação para você.
                    </p>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mt-3">
                      <strong className="text-foreground">Você é responsável pelo conteúdo que publica ou carrega:</strong> Ao nos enviar suas contribuições por meio de qualquer parte dos Serviços, você:
                    </p>
                    <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4 mt-3">
                      <li>Confirma que você leu e concorda com nossa seção "ATIVIDADES PROIBIDAS" e não publicará, enviará, divulgará, carregará ou transmitirá por meio dos Serviços qualquer Envio que seja ilegal, assediador, odioso, prejudicial, difamatório, obsceno, intimidatório, abusivo, discriminatório, ameaçador para qualquer pessoa ou grupo, sexualmente explícito, falso, impreciso, enganoso ou que induza ao erro;</li>
                      <li>Na medida permitida pela legislação aplicável, renuncia a todos e quaisquer direitos morais relativos a qualquer Submissão desse tipo;</li>
                      <li>Garante que qualquer Submissão desse tipo seja original e/ou que você possui os direitos necessários e licenças para submeter tais Submissões e que você possui plena autoridade para nos conceder os direitos acima mencionados em relação às suas Submissões; e</li>
                      <li>Garante e declara que suas Submissões não constituem informações confidenciais.</li>
                    </ul>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mt-3">
                      Você é o único responsável por suas Submissões, e você concorda expressamente em nos reembolsar por todas e quaisquer perdas que possamos sofrer devido à sua violação de (a) esta seção, (b) quaisquer direitos de propriedade intelectual de terceiros ou (c) lei aplicável.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Representações do Usuário */}
              <section id="representacoes" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  3. Representações do Usuário
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Ao utilizar os Serviços, você declara e garante que: (1) você tem capacidade legal e concorda em cumprir estes Termos Legais; (2) você não é menor de idade na jurisdição em que reside; (3) você não acessará os Serviços por meios automatizados ou não humanos, seja por meio de um bot, script ou de outra forma; (4) você não usará os Serviços para qualquer finalidade ilegal ou não autorizada; e (5) seu uso dos Serviços não violará nenhuma lei ou regulamento aplicável.
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                    Caso você forneça informações falsas, imprecisas, desatualizadas ou incompletas, temos o direito de suspender ou encerrar sua conta e recusar qualquer uso atual ou futuro dos Serviços (ou qualquer parte deles).
                  </p>
                </div>
              </section>

              {/* 4. Atividades Proibidas */}
              <section id="atividades-proibidas" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Ban className="h-6 w-6 text-primary" />
                  </div>
                  4. Atividades Proibidas
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6 space-y-4">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Você não poderá acessar ou usar os Serviços para qualquer finalidade que não seja aquela para a qual os disponibilizamos. Os Serviços não podem ser usados em conexão com qualquer atividade comercial, exceto aquelas que sejam especificamente endossadas ou aprovadas por nós.
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Como usuário dos Serviços, você concorda em <strong className="text-foreground">NÃO:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                    <li>Extrair sistematicamente dados ou outros conteúdos dos Serviços para criar ou compilar, direta ou indiretamente, uma coleção, compilação, banco de dados ou diretório sem nossa autorização por escrito.</li>
                    <li>Enganar, fraudar ou induzir em erro a nós e a outros usuários, especialmente em qualquer tentativa de obter informações confidenciais da conta, como senhas de usuário.</li>
                    <li>Contornar, desativar ou interferir de qualquer outra forma com os recursos de segurança dos Serviços, incluindo recursos que impedem ou restringem o uso ou a cópia de qualquer Conteúdo ou que impõem limitações ao uso dos Serviços e/ou do Conteúdo neles contido.</li>
                    <li>Desmerecer, difamar ou prejudicar de qualquer outra forma, em nossa opinião, a nós e/ou aos Serviços.</li>
                    <li>Utilizar qualquer informação obtida através dos Serviços para assediar, abusar ou prejudicar outra pessoa.</li>
                    <li>Fazer uso indevido de nossos serviços de suporte ou enviar relatos falsos de abuso ou má conduta.</li>
                    <li>Utilizar os Serviços de forma incompatível com quaisquer leis ou regulamentos aplicáveis.</li>
                    <li>Envolver-se em enquadramento ou vinculação não autorizada aos Serviços.</li>
                    <li>Carregar ou transmitir (ou tentar carregar ou transmitir) vírus, cavalos de Troia ou outros materiais, incluindo o uso excessivo de letras maiúsculas e spam, que interfiram no uso e aproveitamento ininterrupto dos Serviços por qualquer pessoa.</li>
                    <li>Usar qualquer sistema automatizado, como scripts para enviar comentários ou mensagens, ou ferramentas de mineração de dados, robôs ou ferramentas similares de coleta e extração de dados.</li>
                    <li>Remover o aviso de direitos autorais ou outros avisos de direitos de propriedade de qualquer Conteúdo.</li>
                    <li>Tentativa de se passar por outro usuário ou pessoa, ou usar o nome de usuário de outro usuário.</li>
                    <li>Carregar ou transmitir qualquer material que funcione como um mecanismo passivo ou ativo de coleta ou transmissão de informações, incluindo web bugs, cookies ou outros dispositivos semelhantes.</li>
                    <li>Interferir, interromper ou sobrecarregar indevidamente os Serviços ou as redes ou serviços conectados aos Serviços.</li>
                    <li>Assediar, incomodar, intimidar ou ameaçar qualquer um de nossos funcionários ou agentes envolvidos na prestação de qualquer parte dos Serviços a você.</li>
                    <li>Tentativa de contornar quaisquer medidas dos Serviços destinadas a impedir ou restringir o acesso aos Serviços, ou a qualquer parte dos Serviços.</li>
                    <li>Copiar ou adaptar o software dos Serviços, incluindo Flash, PHP, HTML, JavaScript ou outros códigos.</li>
                    <li>Exceto nos casos permitidos pela legislação aplicável, é proibido decifrar, descompilar, desmontar ou realizar engenharia reversa de qualquer software que faça parte dos Serviços.</li>
                    <li>Usar, iniciar, desenvolver ou distribuir qualquer sistema automatizado, incluindo qualquer spider, robô, programa de trapaça, scraper ou leitor offline que acesse os Serviços.</li>
                    <li>Utilize um agente de compras para efetuar compras nos Serviços.</li>
                    <li>Fazer qualquer uso não autorizado dos Serviços, incluindo a coleta de nomes de usuário e/ou endereços de e-mail de usuários por meios eletrônicos ou outros para o envio de e-mails não solicitados.</li>
                    <li>Utilizar os Serviços como parte de qualquer esforço para competir conosco ou utilizar os Serviços e/ou o Conteúdo para qualquer fim que gere receita ou empreendimento comercial.</li>
                  </ul>
                </div>
              </section>

              {/* 5. Contribuições Geradas pelo Usuário */}
              <section id="contribuicoes-usuario" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Pencil className="h-6 w-6 text-primary" />
                  </div>
                  5. Contribuições Geradas pelo Usuário
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Os Serviços não oferecem aos usuários a opção de enviar ou publicar conteúdo. Podemos oferecer a você a oportunidade de criar, enviar, publicar, exibir, transmitir, executar, distribuir ou divulgar conteúdo e materiais para nós ou nos Serviços, incluindo, entre outros, texto, escritos, vídeo, áudio, fotografias, gráficos, comentários, sugestões ou informações pessoais ou outros materiais (coletivamente, "Contribuições"). As contribuições podem ser visualizadas por outros usuários dos Serviços e por meio de sites de terceiros. Ao criar ou disponibilizar quaisquer Contribuições, você declara e garante que cumpre com todos os termos estabelecidos neste documento.
                  </p>
                </div>
              </section>

              {/* 6. Contribuição/Licença */}
              <section id="contribuicao-licenca" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  6. Contribuição/Licença
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6 space-y-4">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Você e os Serviços concordam que podemos acessar, armazenar, processar e usar quaisquer informações e dados pessoais que você fornecer e suas escolhas (incluindo configurações).
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Ao enviar sugestões ou outros comentários sobre os Serviços, você concorda que podemos usar e compartilhar esses comentários para qualquer finalidade, sem qualquer compensação para você.
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Não reivindicamos qualquer direito de propriedade sobre suas Contribuições. Você mantém a propriedade integral de todas as suas Contribuições e de quaisquer direitos de propriedade intelectual ou outros direitos de propriedade associados a elas. Não nos responsabilizamos por quaisquer declarações ou representações contidas em suas Contribuições fornecidas por você em qualquer área dos Serviços. Você é o único responsável por suas Contribuições aos Serviços e concorda expressamente em nos exonerar de toda e qualquer responsabilidade e em se abster de qualquer ação legal contra nós em relação às suas Contribuições.
                  </p>
                </div>
              </section>

              {/* 7. Gestão de Serviços */}
              <section id="gestao-servicos" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  7. Gestão de Serviços
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Reservamo-nos o direito, mas não a obrigação, de: (1) monitorar os Serviços em busca de violações destes Termos Legais; (2) tomar as medidas legais cabíveis contra qualquer pessoa que, a nosso exclusivo critério, viole a lei ou estes Termos Legais, incluindo, sem limitação, denunciar tal usuário às autoridades policiais; (3) a nosso exclusivo critério e sem limitação, recusar, restringir o acesso, limitar a disponibilidade ou desativar (na medida em que for tecnologicamente viável) quaisquer de suas Contribuições ou qualquer parte delas; (4) a nosso exclusivo critério e sem aviso prévio ou responsabilidade, remover dos Serviços ou desativar todos os arquivos e conteúdos que sejam excessivamente grandes ou que, de alguma forma, sobrecarreguem nossos sistemas; e (5) gerenciar os Serviços de maneira a proteger nossos direitos e propriedade e facilitar o funcionamento adequado dos Serviços.
                  </p>
                </div>
              </section>

              {/* 8. Vigência e Rescisão */}
              <section id="vigencia-rescisao" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  8. Vigência e Rescisão
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6 space-y-4">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Estes Termos Legais permanecerão em pleno vigor enquanto você utilizar os Serviços.
                  </p>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="font-body text-sm text-foreground leading-relaxed">
                      SEM PREJUÍZO DE QUALQUER OUTRA DISPOSIÇÃO DESTES TERMOS LEGAIS, RESERVAMO-NOS O DIREITO DE, A NOSSO CRITÉRIO EXCLUSIVO E SEM AVISO PRÉVIO OU RESPONSABILIDADE, NEGAR O ACESSO E O USO DOS SERVIÇOS (INCLUINDO O BLOQUEIO DE DETERMINADOS ENDEREÇOS IP) A QUALQUER PESSOA, POR QUALQUER MOTIVO OU SEM MOTIVO ALGUM, INCLUINDO, SEM LIMITAÇÃO, POR VIOLAÇÃO DE QUALQUER DECLARAÇÃO, GARANTIA OU CLÁUSULA CONTIDA NESTES TERMOS LEGAIS OU DE QUALQUER LEI OU REGULAMENTO APLICÁVEL. PODEMOS ENCERRAR SEU USO OU PARTICIPAÇÃO NOS SERVIÇOS OU EXCLUIR SEUS DADOS E QUALQUER CONTEÚDO OU INFORMAÇÃO QUE VOCÊ TENHA PUBLICADO, A QUALQUER MOMENTO, SEM AVISO PRÉVIO, A NOSSO CRITÉRIO EXCLUSIVO.
                    </p>
                  </div>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Caso sua conta seja encerrada ou suspensa por qualquer motivo, você fica proibido de se registrar e criar uma nova conta em seu nome, com um nome falso ou emprestado, ou em nome de terceiros, mesmo que esteja agindo em nome desses terceiros. Além do encerramento ou suspensão da sua conta, reservamo-nos o direito de tomar as medidas legais cabíveis, incluindo, entre outras, ações cíveis, criminais e cautelares.
                  </p>
                </div>
              </section>

              {/* 9. Modificações e Interrupções */}
              <section id="modificacoes" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  9. Modificações e Interrupções
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6 space-y-4">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Reservamo-nos o direito de alterar, modificar ou remover o conteúdo dos Serviços a qualquer momento e por qualquer motivo, a nosso exclusivo critério, sem aviso prévio. No entanto, não temos a obrigação de atualizar qualquer informação em nossos Serviços. Não seremos responsáveis perante você ou terceiros por qualquer modificação, alteração de preço, suspensão ou descontinuidade dos Serviços.
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Não podemos garantir que os Serviços estarão disponíveis em todos os momentos. Podemos enfrentar problemas de hardware, software ou outros, ou precisar realizar manutenções relacionadas aos Serviços, resultando em interrupções, atrasos ou erros. Reservamo-nos o direito de alterar, revisar, atualizar, suspender, descontinuar ou modificar os Serviços de qualquer outra forma, a qualquer momento e por qualquer motivo, sem aviso prévio. Você concorda que não temos qualquer responsabilidade por quaisquer perdas, danos ou inconvenientes causados pela sua incapacidade de acessar ou usar os Serviços durante qualquer período de inatividade ou descontinuidade dos mesmos. Nada nestes Termos Legais será interpretado como uma obrigação nossa de manter e dar suporte aos Serviços ou de fornecer quaisquer correções, atualizações ou versões relacionadas a eles.
                  </p>
                </div>
              </section>

              {/* 10. Lei Aplicável */}
              <section id="lei-aplicavel" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Gavel className="h-6 w-6 text-primary" />
                  </div>
                  10. Lei Aplicável
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Estes Termos Legais serão regidos e definidos de acordo com as leis da <strong className="text-foreground">República Federativa do Brasil</strong>, e você consente irrevogavelmente que os tribunais de <strong className="text-foreground">João Pessoa, Paraíba, Brasil</strong> terão jurisdição exclusiva para resolver qualquer disputa que possa surgir em relação a estes Termos Legais.
                  </p>
                </div>
              </section>

              {/* 11. Resolução de Controvérsias */}
              <section id="resolucao-controversias" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  11. Resolução de Controvérsias
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6 space-y-6">
                  <div>
                    <h3 className="font-heading text-lg font-medium text-foreground mb-3">Negociações informais</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Para agilizar a resolução e controlar os custos de qualquer disputa, controvérsia ou reclamação relacionada a estes Termos Legais (cada uma "Disputa" e, coletivamente, as "Disputas") trazida por você ou por nós (individualmente, uma "Parte" e, coletivamente, as "Partes"), as Partes concordam em primeiro tentar negociar informalmente qualquer Disputa (exceto aquelas Disputas expressamente previstas abaixo) por pelo menos 30 (trinta) dias antes do início da arbitragem. Essas negociações informais começam mediante notificação por escrito de uma Parte à outra.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-lg font-medium text-foreground mb-3">Arbitragem vinculativa</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      Qualquer disputa decorrente ou relacionada a estes Termos Legais, incluindo qualquer questão relativa à sua existência, validade ou rescisão, será submetida e resolvida definitivamente por arbitragem, de acordo com as regras aplicáveis. O local de arbitragem será João Pessoa, Paraíba, Brasil. O idioma do processo será Português. A lei aplicável a estes Termos Legais será a lei substantiva da República Federativa do Brasil.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-medium text-foreground mb-3">Restrições</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      As Partes concordam que qualquer arbitragem será limitada à Disputa entre as Partes individualmente. Na máxima extensão permitida por lei, (a) nenhuma arbitragem será consolidada com qualquer outro processo; (b) não há direito ou autorização para que qualquer Disputa seja arbitrada em caráter coletivo ou em conjunto com outras partes utilizando procedimentos de ação coletiva; e (c) não há direito ou autoridade para que qualquer Disputa seja apresentada em uma suposta capacidade representativa em nome do público em geral ou de quaisquer outras pessoas.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-medium text-foreground mb-3">Exceções às negociações informais e à arbitragem</h3>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      As Partes concordam que as seguintes Disputas não estão sujeitas às disposições acima referentes à arbitragem vinculativa em negociações informais: (a) quaisquer Disputas que visem fazer valer ou proteger, ou que digam respeito à validade de, quaisquer direitos de propriedade intelectual de uma Parte; (b) qualquer Disputa relacionada a, ou decorrente de, alegações de roubo, pirataria, invasão de privacidade ou uso não autorizado; e (c) qualquer pedido de medida cautelar. Se esta disposição for considerada ilegal ou inexequível, nenhuma das Partes optará pela arbitragem de qualquer Disputa abrangida pela parte desta disposição considerada ilegal ou inexequível, e tal Disputa será decidida por um tribunal de jurisdição competente dentre os tribunais listados acima, e as Partes concordam em se submeter à jurisdição pessoal desse tribunal.
                    </p>
                  </div>
                </div>
              </section>

              {/* 12. Correções */}
              <section id="correcoes" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileWarning className="h-6 w-6 text-primary" />
                  </div>
                  12. Correções
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Pode haver informações nos Serviços que contenham erros tipográficos, imprecisões ou omissões, incluindo descrições, preços, disponibilidade e outras informações diversas. Reservamo-nos o direito de corrigir quaisquer erros, imprecisões ou omissões e de alterar ou atualizar as informações nos Serviços a qualquer momento, sem aviso prévio.
                  </p>
                </div>
              </section>

              {/* 13. Isenção de Responsabilidade */}
              <section id="isencao-responsabilidade" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  13. Isenção de Responsabilidade
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                    <p className="font-body text-sm text-foreground leading-relaxed">
                      OS SERVIÇOS SÃO FORNECIDOS "NO ESTADO EM QUE SE ENCONTRAM" E "CONFORME DISPONÍVEIS". VOCÊ CONCORDA QUE O USO DOS SERVIÇOS SERÁ POR SUA CONTA E RISCO. NA MÁXIMA EXTENSÃO PERMITIDA POR LEI, ISENTAMO-NOS DE TODAS AS GARANTIAS, EXPRESSAS OU IMPLÍCITAS, RELATIVAS AOS SERVIÇOS E AO SEU USO, INCLUINDO, SEM LIMITAÇÃO, AS GARANTIAS IMPLÍCITAS DE COMERCIALIZABILIDADE, ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA E NÃO VIOLAÇÃO. NÃO OFERECEMOS GARANTIAS OU DECLARAÇÕES SOBRE A PRECISÃO OU INTEGRIDADE DO CONTEÚDO DOS SERVIÇOS OU DO CONTEÚDO DE QUAISQUER SITES OU APLICATIVOS MÓVEIS VINCULADOS AOS SERVIÇOS E NÃO ASSUMIMOS QUALQUER RESPONSABILIDADE POR QUAISQUER (1) ERROS, EQUÍVOCOS OU IMPRECISÕES DE CONTEÚDO E MATERIAIS, (2) LESÕES PESSOAIS OU DANOS MATERIAIS, DE QUALQUER NATUREZA, RESULTANTES DO SEU ACESSO E USO DOS SERVIÇOS, (3) QUAISQUER ACESSO OU USO NÃO AUTORIZADO DE NOSSOS SERVIDORES SEGUROS E/OU DE TODAS AS INFORMAÇÕES PESSOAIS E/OU FINANCEIRAS ARMAZENADAS NELES, (4) QUALQUER INTERRUPÇÃO OU CESSAÇÃO DE TRANSMISSÃO DE OU PARA OS SERVIÇOS, (5) QUAISQUER BUGS, VÍRUS, CAVALOS DE TRÓIA OU SIMILARES QUE POSSAM SER TRANSMITIDOS PARA OU ATRAVÉS DOS SERVIÇOS POR TERCEIROS, E/OU (6) QUAISQUER ERROS OU OMISSÕES EM QUALQUER CONTEÚDO E MATERIAIS OU POR QUALQUER PERDA OU DANO DE QUALQUER TIPO INCORRIDO COMO RESULTADO DO USO DE QUALQUER CONTEÚDO PUBLICADO, TRANSMITIDO OU DE OUTRA FORMA DISPONIBILIZADO ATRAVÉS DOS SERVIÇOS.
                    </p>
                  </div>
                </div>
              </section>

              {/* 14. Limitações de Responsabilidade */}
              <section id="limitacoes" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  14. Limitações de Responsabilidade
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                    <p className="font-body text-sm text-foreground leading-relaxed">
                      EM NENHUMA HIPÓTESE NÓS OU NOSSOS DIRETORES, FUNCIONÁRIOS OU AGENTES SEREMOS RESPONSÁVEIS PERANTE VOCÊ OU QUALQUER TERCEIRO POR QUAISQUER DANOS DIRETOS, INDIRETOS, CONSEQUENCIAIS, EXEMPLARES, INCIDENTAIS, ESPECIAIS OU PUNITIVOS, INCLUINDO LUCROS CESSANTES, PERDA DE RECEITA, PERDA DE DADOS OU OUTROS DANOS DECORRENTES DO SEU USO DOS SERVIÇOS, MESMO QUE TENHAMOS SIDO AVISADOS DA POSSIBILIDADE DE TAIS DANOS.
                    </p>
                  </div>
                  <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                    Certas leis estaduais dos EUA e leis internacionais não permitem limitações em garantias implícitas ou a exclusão ou limitação de certos danos. Se essas leis se aplicarem a você, algumas ou todas as isenções ou limitações acima podem não se aplicar a você, e você pode ter direitos adicionais.
                  </p>
                </div>
              </section>

              {/* 15. Indenização */}
              <section id="indenizacao" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  15. Indenização
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Você concorda em nos defender, indenizar e isentar de responsabilidade, incluindo nossas subsidiárias, afiliadas e todos os nossos respectivos diretores, agentes, parceiros e funcionários, de quaisquer perdas, danos, responsabilidades, reclamações ou demandas, incluindo honorários advocatícios e despesas razoáveis, apresentadas por terceiros devido a ou decorrentes de: (1) uso dos Serviços; (2) violação destes Termos Legais; (3) qualquer violação de suas declarações e garantias estabelecidas nestes Termos Legais; (4) sua violação dos direitos de terceiros, incluindo, entre outros, direitos de propriedade intelectual; ou (5) qualquer ato prejudicial manifestado contra qualquer outro usuário dos Serviços com quem você se conectou por meio dos Serviços. Não obstante o exposto, reservamo-nos o direito, às suas custas, de assumir a defesa e o controle exclusivo de qualquer assunto pelo qual você seja obrigado a nos indenizar, e você concorda em cooperar, às suas custas, com nossa defesa de tais reivindicações. Faremos todos os esforços razoáveis para notificá-lo de qualquer reivindicação, ação ou processo sujeito a esta indenização assim que tomarmos conhecimento do mesmo.
                  </p>
                </div>
              </section>

              {/* 16. Dados do Usuário */}
              <section id="dados-usuario" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  16. Dados do Usuário
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Conservaremos determinados dados que você transmitir aos Serviços com o objetivo de gerenciar o desempenho dos mesmos, bem como dados relacionados ao seu uso dos Serviços. Embora realizemos backups de rotina regulares dos dados, você é o único responsável por todos os dados que transmitir ou que se relacionem a qualquer atividade que você tenha realizado usando os Serviços. Você concorda que não teremos qualquer responsabilidade perante você por qualquer perda ou corrupção de tais dados e, por meio deste, renuncia a qualquer direito de ação contra nós decorrente de tal perda ou corrupção de dados.
                  </p>
                </div>
              </section>

              {/* 17. Comunicações Eletrônicas */}
              <section id="comunicacoes-eletronicas" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  17. Comunicações Eletrônicas, Transações e Assinaturas
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6 space-y-4">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Ao visitar os Serviços, enviar-nos e-mails e preencher formulários online, você concorda em receber comunicações eletrônicas. Você consente em receber comunicações eletrônicas e concorda que todos os contratos, avisos, divulgações e outras comunicações que lhe fornecemos eletronicamente, por e-mail e nos Serviços, satisfazem qualquer exigência legal de que tal comunicação seja feita por escrito.
                  </p>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                    <p className="font-body text-sm text-foreground leading-relaxed">
                      VOCÊ CONCORDA COM O USO DE ASSINATURAS ELETRÔNICAS, CONTRATOS, PEDIDOS E OUTROS REGISTROS, BEM COMO COM A ENTREGA ELETRÔNICA DE AVISOS, POLÍTICAS E REGISTROS DE TRANSAÇÕES INICIADAS OU CONCLUÍDAS POR NÓS OU POR MEIO DOS SERVIÇOS.
                    </p>
                  </div>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Você renuncia a quaisquer direitos ou exigências previstos em quaisquer estatutos, regulamentos, normas, portarias ou outras leis em qualquer jurisdição que exijam uma assinatura original ou a entrega ou retenção de registros não eletrônicos, ou pagamentos ou concessão de créditos por qualquer meio que não seja eletrônico.
                  </p>
                </div>
              </section>

              {/* 18. Diversos */}
              <section id="diversos" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <ListChecks className="h-6 w-6 text-primary" />
                  </div>
                  18. Diversos
                </h2>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Estes Termos Legais e quaisquer políticas ou regras operacionais publicadas por nós nos Serviços ou referentes aos Serviços constituem o acordo integral entre você e nós. Nossa omissão em exercer ou exigir o cumprimento de qualquer direito ou disposição destes Termos Legais não constituirá uma renúncia a tal direito ou disposição. Estes Termos Legais vigoram até máxima extensão permitida por lei. Podemos ceder quaisquer ou todos os nossos direitos e obrigações a terceiros a qualquer momento. Não seremos responsáveis por qualquer perda, dano, atraso ou falha no cumprimento de nossas obrigações causados por qualquer motivo fora do nosso controle razoável. Se qualquer disposição ou parte de uma disposição destes Termos Legais for considerada ilegal, nula ou inexequível, essa disposição ou parte da disposição será considerada separável destes Termos Legais e não afetará a validade e aplicabilidade das demais disposições. Não há qualquer relação de joint venture, parceria, emprego ou agência entre nós como resultado destes Termos Legais ou do uso dos Serviços. Você concorda que estes Termos Legais não serão interpretados contra nós pelo simples fato de termos redigido-os. Você renuncia, por meio deste instrumento, a quaisquer defesas que possa ter baseado na forma eletrônica em que estes Termos Legais foram apresentados a você.
                  </p>
                </div>
              </section>

              {/* 19. Contato */}
              <section id="contato" className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  19. Contate-nos
                </h2>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 space-y-4">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Se você tiver alguma dúvida sobre estes Termos Legais, entre em contato conosco:
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
                          <strong>Endereço:</strong> Av. Julia Freire, 1200 - Expedicionários - João Pessoa - PB/Brasil - CEP: 58.041-000
                        </span>
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

export default Termos;
