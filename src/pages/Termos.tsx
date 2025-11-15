import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText, Scale, AlertTriangle, CheckCircle, Shield, Mail } from "lucide-react";
import { Helmet } from "react-helmet";

const Termos = () => {
  return (
    <>
      <Helmet>
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
                Atualizado em 15 de novembro de 2025
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-upira max-w-none space-y-8">
              <section className="space-y-4">
                <p className="font-body text-lg text-foreground leading-relaxed">
                  Bem-vindo ao <strong>Upira</strong>. Ao acessar e utilizar nosso site <strong>upira.com.br</strong> ("Site"), você concorda em cumprir e estar vinculado aos seguintes Termos de Uso ("Termos"). Se você não concordar com estes Termos, não utilize nosso Site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  1. Aceitação dos Termos
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Ao acessar, navegar ou utilizar qualquer parte do Site, você reconhece que leu, compreendeu e concorda em estar legalmente vinculado a estes Termos de Uso, bem como à nossa <a href="/privacidade" className="text-primary hover:underline">Política de Privacidade</a> e <a href="/cookies" className="text-primary hover:underline">Política de Cookies</a>.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no Site. É sua responsabilidade revisar periodicamente estes Termos para estar ciente de quaisquer mudanças.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Scale className="h-6 w-6 text-primary" />
                  2. Uso do Site
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  2.1. Licença de Uso
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para acessar e usar o Site para fins pessoais e não comerciais, de acordo com estes Termos.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  2.2. Restrições de Uso
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Você concorda em NÃO:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li>Usar o Site para qualquer finalidade ilegal ou não autorizada</li>
                  <li>Violar quaisquer leis locais, estaduais, nacionais ou internacionais</li>
                  <li>Transmitir vírus, malware ou qualquer código malicioso</li>
                  <li>Tentar obter acesso não autorizado ao Site ou a sistemas relacionados</li>
                  <li>Interferir ou interromper a integridade ou desempenho do Site</li>
                  <li>Copiar, reproduzir, modificar, distribuir ou criar obras derivadas do conteúdo sem autorização expressa</li>
                  <li>Usar robôs, scrapers ou ferramentas automatizadas para coletar dados do Site</li>
                  <li>Publicar conteúdo difamatório, ofensivo, discriminatório ou ilegal</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  3. Propriedade Intelectual
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  3.1. Direitos Autorais
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Todo o conteúdo disponível no Site, incluindo, mas não se limitando a textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é de propriedade exclusiva da <strong>Upira</strong> ou de seus licenciadores e está protegido pelas leis de direitos autorais e propriedade intelectual do Brasil e internacionais.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  3.2. Marcas Registradas
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  As marcas, logotipos e marcas de serviço exibidos no Site ("Marcas") são de propriedade da Upira ou de terceiros. Você não está autorizado a usar essas Marcas sem nossa permissão prévia por escrito ou a do terceiro proprietário.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  3.3. Uso Permitido
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Você pode visualizar, baixar e imprimir conteúdo do Site apenas para uso pessoal e não comercial, desde que não remova ou altere avisos de direitos autorais, marcas registradas ou outros avisos de propriedade.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  4. Conteúdo do Usuário
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  4.1. Responsabilidade pelo Conteúdo
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Ao enviar, publicar ou transmitir qualquer conteúdo no Site (incluindo comentários, respostas de quiz, mensagens de contato), você garante que:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li>Você possui todos os direitos necessários sobre o conteúdo</li>
                  <li>O conteúdo não viola direitos de terceiros</li>
                  <li>O conteúdo não é ilegal, ofensivo ou prejudicial</li>
                  <li>O conteúdo está em conformidade com estes Termos</li>
                </ul>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  4.2. Licença de Conteúdo
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Ao enviar conteúdo, você nos concede uma licença mundial, não exclusiva, livre de royalties, transferível e sublicenciável para usar, reproduzir, modificar, adaptar, publicar, traduzir, distribuir e exibir esse conteúdo em qualquer mídia.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  4.3. Moderação
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de remover, editar ou recusar a publicação de qualquer conteúdo que viole estes Termos ou que consideremos inadequado, a nosso exclusivo critério.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  5. Links para Sites de Terceiros
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Nosso Site pode conter links para sites de terceiros que não são operados ou controlados por nós. Não temos controle sobre e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites de terceiros. Recomendamos que você revise os termos e políticas de qualquer site de terceiros que visitar.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Scale className="h-6 w-6 text-primary" />
                  6. Isenção de Garantias
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  O Site é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas, incluindo, mas não se limitando a:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li>Garantias de comercialização ou adequação a uma finalidade específica</li>
                  <li>Garantias de que o Site será ininterrupto, livre de erros ou seguro</li>
                  <li>Garantias sobre a precisão, confiabilidade ou integridade do conteúdo</li>
                </ul>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  Não garantimos que o Site atenderá às suas expectativas ou que quaisquer erros serão corrigidos.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  7. Limitação de Responsabilidade
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Na máxima extensão permitida por lei, a <strong>Upira</strong>, seus diretores, funcionários, parceiros e agentes não serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes de:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li>Uso ou incapacidade de usar o Site</li>
                  <li>Acesso não autorizado ou alteração de suas transmissões ou dados</li>
                  <li>Declarações ou conduta de terceiros no Site</li>
                  <li>Qualquer outro assunto relacionado ao Site</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  8. Indenização
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Você concorda em indenizar, defender e isentar a <strong>Upira</strong> e seus afiliados de todas as reivindicações, responsabilidades, danos, perdas, custos e despesas (incluindo honorários advocatícios) decorrentes de:
                </p>
                <ul className="list-disc list-inside space-y-2 font-body text-base text-muted-foreground pl-4">
                  <li>Sua violação destes Termos</li>
                  <li>Seu uso indevido do Site</li>
                  <li>Violação de direitos de terceiros</li>
                  <li>Qualquer conteúdo que você enviar ou transmitir através do Site</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  9. Publicidade e Monetização
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  O Site pode exibir anúncios de terceiros através do Google AdSense e outras plataformas. Não somos responsáveis pelo conteúdo desses anúncios ou pelas práticas dos anunciantes. Sua interação com anúncios é por sua conta e risco.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Scale className="h-6 w-6 text-primary" />
                  10. Rescisão
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Podemos suspender ou encerrar seu acesso ao Site, a qualquer momento e sem aviso prévio, se acreditarmos que você violou estes Termos ou por qualquer outro motivo, a nosso exclusivo critério.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  Após o término, você deve cessar imediatamente todo uso do Site. As disposições destes Termos que, por sua natureza, devam sobreviver ao término, continuarão em vigor.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Scale className="h-6 w-6 text-primary" />
                  11. Lei Aplicável e Jurisdição
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil, sem consideração a conflitos de disposições legais.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
                  Qualquer disputa decorrente ou relacionada a estes Termos ou ao uso do Site será submetida à jurisdição exclusiva dos tribunais de <strong>João Pessoa, Paraíba, Brasil</strong>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  12. Disposições Gerais
                </h2>
                
                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  12.1. Acordo Integral
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Estes Termos, juntamente com nossa Política de Privacidade e Política de Cookies, constituem o acordo integral entre você e a Upira em relação ao uso do Site.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  12.2. Renúncia e Separabilidade
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  A falha em exercer ou fazer cumprir qualquer direito ou disposição destes Termos não constituirá uma renúncia a esse direito ou disposição. Se qualquer disposição for considerada inválida ou inexequível, as demais disposições continuarão em pleno vigor e efeito.
                </p>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6">
                  12.3. Cessão
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Você não pode ceder ou transferir estes Termos ou seus direitos sob eles sem nosso consentimento prévio por escrito. Podemos ceder nossos direitos e obrigações sem restrições.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  13. Contato
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Se você tiver dúvidas ou comentários sobre estes Termos de Uso, entre em contato conosco:
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
                  Ao utilizar nosso Site, você declara ter lido e compreendido estes Termos de Uso e concorda em cumpri-los integralmente.<br />
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

export default Termos;
