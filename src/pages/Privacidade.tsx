import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Eye, Lock, Database, UserCheck, Mail } from "lucide-react";
import { Helmet } from "react-helmet";

const Privacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Upira</title>
        <meta 
          name="description" 
          content="Política de privacidade completa do Upira. Saiba como coletamos, usamos e protegemos seus dados pessoais." 
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
                Atualizada em 15 de novembro de 2025
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-upira max-w-none space-y-8">
              <section className="space-y-4">
                <p className="font-body text-lg text-foreground leading-relaxed">
                  A <strong>Upira</strong> ("nós", "nosso" ou "nossa") está comprometida em proteger a privacidade e os dados pessoais dos usuários do nosso site <strong>upira.com.br</strong> ("Site"). Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e compartilhamos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e demais legislações aplicáveis.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Database className="h-6 w-6 text-primary" />
                  1. Informações que Coletamos
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  1.1. Dados Pessoais Fornecidos por Você
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Coletamos informações que você nos fornece diretamente quando utiliza nossos serviços, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li><strong>Nome completo</strong></li>
                  <li><strong>Endereço de e-mail</strong></li>
                  <li><strong>Número de telefone</strong></li>
                  <li><strong>Mensagens enviadas através de formulários de contato</strong></li>
                  <li><strong>Respostas a questionários e quizzes</strong></li>
                  <li><strong>Preferências de conteúdo e interesses</strong></li>
                </ul>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  1.2. Dados Coletados Automaticamente
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Quando você acessa nosso Site, coletamos automaticamente certas informações, como:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li><strong>Endereço IP</strong></li>
                  <li><strong>Tipo de navegador e dispositivo</strong></li>
                  <li><strong>Sistema operacional</strong></li>
                  <li><strong>Páginas visitadas e tempo de navegação</strong></li>
                  <li><strong>Data e hora de acesso</strong></li>
                  <li><strong>Referências de sites de origem</strong></li>
                  <li><strong>Cookies e tecnologias similares</strong></li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Eye className="h-6 w-6 text-primary" />
                  2. Como Usamos Suas Informações
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Utilizamos os dados coletados para as seguintes finalidades:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li><strong>Prestação de serviços:</strong> Responder suas dúvidas, fornecer conteúdo personalizado e processar solicitações.</li>
                  <li><strong>Comunicação:</strong> Enviar newsletters, atualizações de conteúdo, notificações importantes e materiais promocionais (com seu consentimento).</li>
                  <li><strong>Melhoria do Site:</strong> Analisar o comportamento dos usuários para aprimorar a experiência de navegação, desenvolver novos recursos e otimizar conteúdos.</li>
                  <li><strong>Segurança:</strong> Proteger contra fraudes, acessos não autorizados e atividades maliciosas.</li>
                  <li><strong>Conformidade legal:</strong> Cumprir obrigações legais e regulatórias aplicáveis.</li>
                  <li><strong>Marketing e publicidade:</strong> Exibir anúncios relevantes através do Google AdSense e outras plataformas.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-primary" />
                  3. Base Legal para o Tratamento de Dados
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Tratamos seus dados pessoais com base nas seguintes bases legais previstas na LGPD:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li><strong>Consentimento:</strong> Quando você nos fornece permissão expressa para usar seus dados (ex.: inscrição em newsletter).</li>
                  <li><strong>Execução de contrato:</strong> Para prestar os serviços solicitados por você.</li>
                  <li><strong>Legítimo interesse:</strong> Para melhorar nossos serviços, realizar análises estatísticas e garantir a segurança do Site.</li>
                  <li><strong>Cumprimento de obrigação legal:</strong> Quando necessário para atender requisitos legais ou regulatórios.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Lock className="h-6 w-6 text-primary" />
                  4. Compartilhamento de Dados
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais, exceto nas seguintes situações:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li><strong>Prestadores de serviços:</strong> Empresas que nos auxiliam na operação do Site (hospedagem, análise de dados, marketing) e que estão obrigadas a proteger suas informações.</li>
                  <li><strong>Google AdSense:</strong> Para exibição de anúncios personalizados. O Google pode coletar dados através de cookies. Consulte a <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de Privacidade do Google</a>.</li>
                  <li><strong>Obrigações legais:</strong> Quando exigido por lei, ordem judicial ou autoridade competente.</li>
                  <li><strong>Proteção de direitos:</strong> Para proteger nossos direitos, propriedade ou segurança, bem como de nossos usuários.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  5. Cookies e Tecnologias Similares
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência no Site. Cookies são pequenos arquivos de texto armazenados no seu dispositivo que nos ajudam a:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li>Reconhecer suas preferências e configurações</li>
                  <li>Analisar o tráfego e uso do Site</li>
                  <li>Exibir anúncios relevantes</li>
                  <li>Melhorar a funcionalidade e desempenho</li>
                </ul>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  Você pode gerenciar ou desativar cookies através das configurações do seu navegador. Para mais informações, consulte nossa <a href="/cookies" className="text-primary hover:underline">Política de Cookies</a>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Lock className="h-6 w-6 text-primary" />
                  6. Segurança dos Dados
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li>Criptografia de dados em trânsito (SSL/TLS)</li>
                  <li>Controles de acesso restrito</li>
                  <li>Monitoramento de segurança contínuo</li>
                  <li>Treinamento de equipe sobre proteção de dados</li>
                </ul>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  No entanto, nenhum método de transmissão pela Internet é 100% seguro. Recomendamos que você tome suas próprias precauções ao compartilhar informações online.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Database className="h-6 w-6 text-primary" />
                  7. Retenção de Dados
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, salvo quando:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li>Exigido por lei para retenção por período maior</li>
                  <li>Necessário para defesa de direitos em processos judiciais</li>
                  <li>Você solicitar a exclusão dos dados (respeitando limitações legais)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-primary" />
                  8. Seus Direitos como Titular de Dados
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  De acordo com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li><strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los.</li>
                  <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                  <li><strong>Anonimização, bloqueio ou eliminação:</strong> Pedir a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade.</li>
                  <li><strong>Portabilidade:</strong> Solicitar a transferência de seus dados para outro fornecedor de serviço.</li>
                  <li><strong>Eliminação:</strong> Pedir a exclusão de dados tratados com seu consentimento.</li>
                  <li><strong>Revogação de consentimento:</strong> Revogar seu consentimento a qualquer momento.</li>
                  <li><strong>Oposição:</strong> Opor-se ao tratamento de dados em determinadas situações.</li>
                </ul>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail <a href="mailto:contato@upira.com.br" className="text-primary hover:underline">contato@upira.com.br</a>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  9. Transferência Internacional de Dados
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Alguns de nossos prestadores de serviços podem estar localizados fora do Brasil. Nesses casos, garantimos que a transferência de dados seja realizada em conformidade com a LGPD e que sejam adotadas medidas adequadas de proteção, como cláusulas contratuais padrão.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-primary" />
                  10. Menores de Idade
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Nosso Site não é direcionado a menores de 18 anos. Não coletamos intencionalmente dados pessoais de crianças ou adolescentes sem o consentimento dos pais ou responsáveis. Se tomarmos conhecimento de que coletamos dados de menores sem autorização apropriada, tomaremos medidas para excluir essas informações.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  11. Alterações nesta Política
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. A versão mais recente estará sempre disponível em nosso Site, com a data da última atualização claramente indicada. Recomendamos que você revise esta página regularmente.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  12. Contato
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Se você tiver dúvidas, comentários ou solicitações relacionadas a esta Política de Privacidade ou ao tratamento de seus dados pessoais, entre em contato conosco:
                </p>
                <div className="bg-muted/30 p-6 rounded-lg mt-4 space-y-2">
                  <p className="font-body text-base text-foreground"><strong>Upira</strong></p>
                  <p className="font-body text-base text-muted-foreground">
                    <strong>E-mail:</strong> <a href="mailto:contato@upira.com.br" className="text-primary hover:underline">contato@upira.com.br</a>
                  </p>
                  <p className="font-body text-base text-muted-foreground">
                    <strong>Telefone:</strong> <a href="tel:+5512982519116" className="text-primary hover:underline">(12) 98251-9116</a>
                  </p>
                  <p className="font-body text-base text-muted-foreground">
                    <strong>Endereço:</strong> Av. Julia Freire, 1200 - João Pessoa - PB/Brasil
                  </p>
                </div>
              </section>

              <section className="bg-primary/5 p-6 rounded-lg mt-8">
                <p className="font-body text-base text-foreground text-center leading-relaxed">
                  Ao utilizar nosso Site, você concorda com os termos desta Política de Privacidade.<br />
                  <strong>Última atualização: 15 de novembro de 2025</strong>
                </p>
              </section>
            </div>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Privacidade;
