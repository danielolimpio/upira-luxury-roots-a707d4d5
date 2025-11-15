import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cookie, Settings, Eye, Target, Shield, Mail } from "lucide-react";
import { Helmet } from "react-helmet";

const Cookies = () => {
  return (
    <>
      <Helmet>
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
                Atualizada em 15 de novembro de 2025
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-upira max-w-none space-y-8">
              <section className="space-y-4">
                <p className="font-body text-lg text-foreground leading-relaxed">
                  Esta Política de Cookies explica como a <strong>Upira</strong> utiliza cookies e tecnologias similares no site <strong>upira.com.br</strong> ("Site"). Ao continuar navegando no Site, você concorda com o uso de cookies conforme descrito nesta política.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Cookie className="h-6 w-6 text-primary" />
                  1. O que são Cookies?
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet ou smartphone) quando você visita um site. Eles permitem que o site reconheça seu dispositivo e lembre de informações sobre sua visita, como suas preferências de idioma, configurações e atividades de navegação.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  Os cookies desempenham um papel essencial na melhoria da sua experiência online, tornando a navegação mais rápida, personalizada e eficiente.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Settings className="h-6 w-6 text-primary" />
                  2. Tipos de Cookies que Utilizamos
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  2.1. Cookies Essenciais (Necessários)
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Esses cookies são fundamentais para o funcionamento do Site e não podem ser desativados. Eles permitem que você navegue pelo Site e use recursos essenciais, como áreas seguras e carrinho de compras (quando aplicável).
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4 mt-2">
                  <li><strong>Finalidade:</strong> Garantir a funcionalidade básica do Site</li>
                  <li><strong>Exemplos:</strong> Cookies de sessão, cookies de segurança</li>
                  <li><strong>Duração:</strong> Sessão ou até 12 meses</li>
                </ul>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  2.2. Cookies de Desempenho e Análise
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Esses cookies coletam informações sobre como os visitantes usam o Site, como páginas mais visitadas, tempo de permanência e links clicados. Os dados são agregados e anônimos, ajudando-nos a melhorar o desempenho do Site.
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4 mt-2">
                  <li><strong>Finalidade:</strong> Analisar o tráfego e comportamento dos usuários</li>
                  <li><strong>Exemplos:</strong> Google Analytics</li>
                  <li><strong>Duração:</strong> Até 24 meses</li>
                </ul>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  2.3. Cookies de Funcionalidade
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Esses cookies permitem que o Site se lembre de escolhas que você faz (como seu nome de usuário, idioma ou região) e forneçam recursos aprimorados e mais personalizados.
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4 mt-2">
                  <li><strong>Finalidade:</strong> Lembrar suas preferências e personalizações</li>
                  <li><strong>Exemplos:</strong> Preferências de exibição, idioma</li>
                  <li><strong>Duração:</strong> Até 12 meses</li>
                </ul>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  2.4. Cookies de Publicidade e Marketing
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Esses cookies são usados para exibir anúncios relevantes para você e seus interesses. Eles também limitam o número de vezes que você vê um anúncio e nos ajudam a medir a eficácia das campanhas publicitárias.
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4 mt-2">
                  <li><strong>Finalidade:</strong> Exibir anúncios personalizados e medir desempenho</li>
                  <li><strong>Exemplos:</strong> Google AdSense, DoubleClick</li>
                  <li><strong>Duração:</strong> Até 24 meses</li>
                </ul>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  <strong>Nota:</strong> Utilizamos o Google AdSense para monetizar nosso Site. O Google pode usar cookies para coletar informações sobre suas visitas ao nosso Site e a outros sites, a fim de fornecer anúncios sobre produtos e serviços de seu interesse. Para mais informações sobre como o Google usa dados, visite a <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de Privacidade do Google</a>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  3. Cookies de Terceiros
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Alguns cookies no nosso Site são colocados por terceiros, como:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li><strong>Google Analytics:</strong> Para analisar o uso do Site e gerar relatórios sobre atividades dos visitantes.</li>
                  <li><strong>Google AdSense:</strong> Para exibir anúncios personalizados com base em seus interesses e histórico de navegação.</li>
                  <li><strong>Redes sociais:</strong> Cookies de plataformas como Facebook, Instagram e Twitter para facilitar o compartilhamento de conteúdo.</li>
                </ul>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  Esses cookies são controlados pelos respectivos terceiros e estão sujeitos às suas próprias políticas de privacidade. Não temos controle sobre como eles coletam ou usam informações.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Eye className="h-6 w-6 text-primary" />
                  4. Como Usamos os Cookies
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Utilizamos cookies para:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li><strong>Melhorar a funcionalidade:</strong> Garantir que o Site funcione corretamente e fornecer recursos personalizados.</li>
                  <li><strong>Analisar o desempenho:</strong> Entender como os visitantes interagem com o Site para melhorar conteúdo e navegação.</li>
                  <li><strong>Personalizar a experiência:</strong> Lembrar suas preferências e exibir conteúdo relevante.</li>
                  <li><strong>Exibir anúncios:</strong> Mostrar anúncios que sejam relevantes para seus interesses através do Google AdSense.</li>
                  <li><strong>Medir eficácia:</strong> Avaliar o desempenho de campanhas de marketing e anúncios.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Settings className="h-6 w-6 text-primary" />
                  5. Como Gerenciar e Desativar Cookies
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Você tem o direito de aceitar ou recusar cookies. A maioria dos navegadores aceita cookies automaticamente, mas você pode modificar as configurações do seu navegador para recusar cookies, se preferir.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  5.1. Configurações do Navegador
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Você pode gerenciar cookies através das configurações do seu navegador:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li><strong>Google Chrome:</strong> Configurações → Privacidade e segurança → Cookies e outros dados de sites</li>
                  <li><strong>Mozilla Firefox:</strong> Opções → Privacidade e segurança → Cookies e dados de sites</li>
                  <li><strong>Safari:</strong> Preferências → Privacidade → Cookies e dados de sites</li>
                  <li><strong>Microsoft Edge:</strong> Configurações → Cookies e permissões de site</li>
                </ul>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  5.2. Ferramentas de Opt-Out
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Para desativar cookies de publicidade personalizados:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li><strong>Google Ads:</strong> Acesse <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a> para personalizar suas preferências de anúncios.</li>
                  <li><strong>Your Online Choices:</strong> Visite <a href="http://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.youronlinechoices.com</a> para gerenciar cookies de publicidade comportamental.</li>
                  <li><strong>Network Advertising Initiative:</strong> Acesse <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NAI Opt-Out</a> para desativar cookies de marketing.</li>
                </ul>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  5.3. Consequências de Desativar Cookies
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Ao desativar cookies, você pode:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li>Perder acesso a certos recursos e funcionalidades do Site</li>
                  <li>Ter uma experiência de navegação menos personalizada</li>
                  <li>Precisar reinserir informações de login ou preferências a cada visita</li>
                  <li>Ver anúncios menos relevantes (mas ainda verá anúncios)</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  6. Outras Tecnologias de Rastreamento
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Além de cookies, podemos usar outras tecnologias para coletar informações, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li><strong>Web beacons (pixels):</strong> Pequenas imagens transparentes que nos ajudam a entender como você interage com e-mails e páginas.</li>
                  <li><strong>Local storage:</strong> Tecnologia que armazena dados localmente no seu navegador para melhorar o desempenho.</li>
                  <li><strong>Session storage:</strong> Dados temporários armazenados durante sua sessão de navegação.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Eye className="h-6 w-6 text-primary" />
                  7. Cookies e Privacidade
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  O uso de cookies está em conformidade com nossa <a href="/privacidade" className="text-primary hover:underline">Política de Privacidade</a> e com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  Os dados coletados através de cookies são tratados de forma segura e confidencial. Não compartilhamos informações pessoais com terceiros sem seu consentimento, exceto quando exigido por lei.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Settings className="h-6 w-6 text-primary" />
                  8. Atualizações desta Política
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou na legislação aplicável. A versão mais recente estará sempre disponível nesta página, com a data da última atualização claramente indicada.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  Recomendamos que você revise esta política regularmente para se manter informado sobre como usamos cookies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  9. Contato
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Se você tiver dúvidas ou preocupações sobre o uso de cookies no nosso Site, entre em contato conosco:
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
                  Ao continuar navegando no nosso Site, você concorda com o uso de cookies conforme descrito nesta Política de Cookies.<br />
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

export default Cookies;
