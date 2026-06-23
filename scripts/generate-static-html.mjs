/**
 * Script para gerar HTMLs estáticos com SEO único para cada rota
 * Executado após o build do Vite para garantir que o Screaming Frog veja meta tags únicas
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, '..', 'dist');

// Definição de SEO único para cada página
const pages = [
  {
    slug: 'viver',
    title: 'Viver Off-Grid com Luxo | Autonomia e Conforto - Upira',
    description: 'Descubra como viver off-grid com autonomia, conforto e elegância. Dicas práticas para uma vida sustentável sem abrir mão do luxo e sofisticação.',
    keywords: 'viver off-grid, autonomia, conforto sustentável, vida rural elegante, minimalismo luxuoso, casa off-grid',
    h1: 'Viver Off-Grid com Luxo e Autonomia',
    h2: 'Autonomia, conforto e elegância — viva do seu jeito, com sofisticação'
  },
  {
    slug: 'comer',
    title: 'Comer Natural e Gourmet | Culinária Off-Grid - Upira',
    description: 'Da fogueira ao gourmet: receitas naturais, técnicas de cozinha com fogo, fermentados artesanais e alta gastronomia rural. Sabor autêntico e sofisticado.',
    keywords: 'culinária off-grid, cozinhar com fogo, receitas naturais, gastronomia rural, fogão à lenha, fermentados caseiros',
    h1: 'Comer Natural e Gourmet',
    h2: 'Da fogueira ao gourmet — cozinhe com ingredientes naturais e técnicas refinadas'
  },
  {
    slug: 'criar',
    title: 'Criar e Construir Off-Grid | Projetos DIY - Upira',
    description: 'Construa e personalize seu espaço off-grid. Projetos DIY, arquitetura sustentável, móveis artesanais e soluções criativas para sua casa dos sonhos.',
    keywords: 'construir off-grid, projetos DIY, arquitetura sustentável, móveis artesanais, casa sustentável, decoração rural',
    h1: 'Criar e Construir Off-Grid',
    h2: 'Construa, transforme e personalize — do bruto ao refinado'
  },
  {
    slug: 'explorar',
    title: 'Explorar Natureza e Aventura | Ecoturismo - Upira',
    description: 'Explore destinos off-grid, trilhas incríveis e experiências de ecoturismo. Aventura com conforto e conexão autêntica com a natureza.',
    keywords: 'explorar natureza, ecoturismo, trilhas, aventura off-grid, destinos sustentáveis, viagem consciente',
    h1: 'Explorar Natureza e Aventura',
    h2: 'Descubra destinos e experiências que conectam você à natureza'
  },
  {
    slug: 'cultivar',
    title: 'Cultivar Mente e Espírito | Bem-Estar Natural - Upira',
    description: 'Nutra sua mente, corpo e espírito. Rituais de autocuidado, meditação ao ar livre, journaling e práticas para crescimento pessoal autêntico.',
    keywords: 'cultivar bem-estar, autocuidado natural, meditação, rituais matinais, crescimento pessoal, slow living',
    h1: 'Cultivar Mente e Espírito',
    h2: 'Nutra sua mente, corpo e espírito — cresça com autenticidade e propósito'
  },
  {
    slug: 'blog',
    title: 'Blog Upira | Artigos sobre Vida Off-Grid e Sustentabilidade',
    description: 'Todos os artigos do Upira sobre vida off-grid, sustentabilidade, culinária natural, construção DIY e bem-estar. Conteúdo para quem quer viver bem.',
    keywords: 'blog off-grid, artigos sustentabilidade, dicas vida rural, conteúdo off-grid, posts sustentáveis',
    h1: 'Blog Upira',
    h2: 'Todos os artigos sobre vida off-grid, sustentabilidade e bem-estar'
  },
  {
    slug: 'sobre',
    title: 'Sobre o Upira | Raiz com Atitude - Vida Off-Grid com Luxo',
    description: 'Conheça o Upira: inspiração prática para quem quer autonomia, conforto e elegância. Off-grid pode ser luxuoso. Raiz com atitude.',
    keywords: 'sobre upira, quem somos, missão upira, off-grid luxuoso, daniel olimpio, raiz com atitude',
    h1: 'Sobre o Upira',
    h2: 'Raiz com atitude — inspiração prática para viver bem'
  },
  {
    slug: 'contato',
    title: 'Contato Upira | Fale Conosco - Dúvidas e Parcerias',
    description: 'Entre em contato com o Upira. Envie suas dúvidas, sugestões ou propostas de parceria. Estamos prontos para ajudar você a viver melhor.',
    keywords: 'contato upira, fale conosco, dúvidas off-grid, parcerias, suporte upira, email contato',
    h1: 'Contato',
    h2: 'Fale conosco — estamos aqui para ajudar'
  },
  {
    slug: 'quiz',
    title: 'Quiz Off-Grid | Descubra seu Perfil Sustentável - Upira',
    description: 'Faça o quiz e descubra qual é o seu perfil off-grid. Teste interativo para conhecer seu estilo de vida sustentável ideal.',
    keywords: 'quiz off-grid, teste sustentabilidade, perfil off-grid, quiz lifestyle, descubra seu perfil',
    h1: 'Quiz Off-Grid',
    h2: 'Descubra qual é o seu perfil de vida sustentável'
  },
  {
    slug: 'privacidade',
    title: 'Política de Privacidade | Upira - Proteção de Dados',
    description: 'Política de privacidade do Upira. Saiba como coletamos, usamos e protegemos seus dados pessoais de acordo com a LGPD.',
    keywords: 'política privacidade, LGPD, proteção dados, privacidade upira, dados pessoais',
    h1: 'Política de Privacidade',
    h2: 'Como protegemos seus dados pessoais'
  },
  {
    slug: 'termos',
    title: 'Termos de Uso | Upira - Condições de Utilização',
    description: 'Termos de uso do site Upira. Conheça as regras e condições para utilização do nosso conteúdo e serviços.',
    keywords: 'termos de uso, condições utilização, regras site, termos upira, política uso',
    h1: 'Termos de Uso',
    h2: 'Condições para utilização do site Upira'
  },
  {
    slug: 'cookies',
    title: 'Política de Cookies | Upira - Uso de Cookies',
    description: 'Política de cookies do Upira. Entenda como utilizamos cookies para melhorar sua experiência de navegação.',
    keywords: 'política cookies, cookies site, rastreamento, preferências navegação, cookies upira',
    h1: 'Política de Cookies',
    h2: 'Como utilizamos cookies para melhorar sua experiência'
  },
  {
    slug: 'despensa-off-grid-6-meses',
    title: 'Despensa Off-Grid para 6 Meses | Guia Completo - Upira',
    description: 'Aprenda a montar uma despensa off-grid que dura 6 meses. Guia completo com lista de alimentos, armazenamento e organização para autonomia alimentar.',
    keywords: 'despensa off-grid, armazenamento alimentos, autonomia alimentar, estoque 6 meses, conservação alimentos',
    h1: 'Despensa Off-Grid para 6 Meses',
    h2: 'Guia completo para montar uma despensa que garante sua autonomia alimentar'
  },
  {
    slug: 'cozinhar-com-fogo-guia-pratico',
    title: 'Cozinhar com Fogo | Guia Prático Gourmet - Upira',
    description: 'Domine a arte de cozinhar com fogo. Técnicas profissionais, receitas gourmet e dicas para criar pratos incríveis na fogueira ou fogão à lenha.',
    keywords: 'cozinhar com fogo, fogão à lenha, receitas fogueira, técnicas fogo, culinária rústica gourmet',
    h1: 'Cozinhar com Fogo: Guia Prático',
    h2: 'Domine técnicas gourmet para cozinhar com fogo de forma sofisticada'
  },
  {
    slug: 'sistema-captacao-agua-beleza-funcionalidade',
    title: 'Sistema de Captação de Água | Beleza e Funcionalidade - Upira',
    description: 'Projete um sistema de captação de água da chuva que une beleza e funcionalidade. Guia técnico com design elegante para sua casa off-grid.',
    keywords: 'captação água chuva, sistema água off-grid, cisterna elegante, coleta água pluvial, sustentabilidade hídrica',
    h1: 'Sistema de Captação de Água',
    h2: 'Beleza e funcionalidade na captação de água da chuva'
  },
  {
    slug: 'paisagismo-funcional-jardins-que-trabalham',
    title: 'Paisagismo Funcional | Jardins que Trabalham por Você - Upira',
    description: 'Crie jardins funcionais que produzem alimentos, atraem polinizadores e embelezam seu espaço. Paisagismo inteligente para vida off-grid.',
    keywords: 'paisagismo funcional, jardim produtivo, horta ornamental, permacultura, jardim off-grid elegante',
    h1: 'Paisagismo Funcional',
    h2: 'Jardins que trabalham por você — beleza e produtividade'
  },
  {
    slug: 'iluminacao-natural-arquitetura-conversa-com-sol',
    title: 'Iluminação Natural | Arquitetura que Conversa com o Sol - Upira',
    description: 'Aproveite a luz natural na sua casa off-grid. Técnicas de arquitetura bioclimática para iluminação eficiente e ambientes acolhedores.',
    keywords: 'iluminação natural, arquitetura bioclimática, luz solar casa, janelas estratégicas, design solar passivo',
    h1: 'Iluminação Natural',
    h2: 'Arquitetura que conversa com o sol para ambientes luminosos'
  },
  {
    slug: 'habitos-consumo-reduzem-estresse',
    title: '5 Hábitos de Consumo que Reduzem o Estresse - Upira',
    description: 'Descubra 5 hábitos de consumo consciente que reduzem o estresse e melhoram sua qualidade de vida. Minimalismo prático para o dia a dia.',
    keywords: 'hábitos consumo consciente, reduzir estresse, minimalismo prático, consumo inteligente, bem-estar',
    h1: '5 Hábitos de Consumo que Reduzem o Estresse',
    h2: 'Consumo consciente para uma vida mais leve e feliz'
  }
];

// Template base do HTML
function generateHTML(page) {
  const url = page.slug === 'index' ? 'https://upira.com.br/' : `https://upira.com.br/${page.slug}`;
  
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Upira" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />

    <!-- PWA: instalação nativa -->
    <link rel="manifest" href="/manifest.webmanifest" />
    <meta name="theme-color" content="#1B5E20" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="Upira" />
    <meta name="application-name" content="Upira" />
    
    <!-- SEO Meta Tags Únicos -->
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="keywords" content="${page.keywords}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${url}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="Upira" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:image" content="https://upira.com.br/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="pt_BR" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${url}" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="https://upira.com.br/og-image.jpg" />
    
    <!-- Schema.org Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "${page.title}",
      "description": "${page.description}",
      "url": "${url}",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Upira",
        "url": "https://upira.com.br"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Upira",
        "url": "https://upira.com.br",
        "logo": {
          "@type": "ImageObject",
          "url": "https://upira.com.br/og-image.jpg"
        }
      }
    }
    </script>
    
    <!-- Premium Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lora:wght@400;500;600&display=swap" rel="stylesheet">
  </head>

  <body>
    <div id="root"></div>
    
    <!-- Conteúdo SEO para crawlers que não executam JavaScript -->
    <noscript>
      <div style="padding: 40px; max-width: 800px; margin: 0 auto; font-family: Georgia, serif;">
        <header>
          <a href="/">
            <img src="/og-image.jpg" alt="Upira Logo" width="200" />
          </a>
        </header>
        <main>
          <h1>${page.h1}</h1>
          <p><strong>${page.h2}</strong></p>
          <p>${page.description}</p>
        </main>
        <nav>
          <h2>Navegação Principal</h2>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/viver">Viver</a></li>
            <li><a href="/comer">Comer</a></li>
            <li><a href="/criar">Criar</a></li>
            <li><a href="/explorar">Explorar</a></li>
            <li><a href="/cultivar">Cultivar</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
        <footer>
          <p>© 2025 Upira. Todos os direitos reservados.</p>
          <ul>
            <li><a href="/privacidade">Política de Privacidade</a></li>
            <li><a href="/termos">Termos de Uso</a></li>
            <li><a href="/cookies">Política de Cookies</a></li>
          </ul>
        </footer>
      </div>
    </noscript>
    
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
}

// Função principal
async function generateStaticHTML() {
  console.log('🚀 Gerando HTMLs estáticos para SEO...\n');
  
  // Verificar se o diretório dist existe
  if (!fs.existsSync(distPath)) {
    console.error('❌ Diretório dist não encontrado. Execute o build primeiro.');
    process.exit(1);
  }
  
  // Ler o index.html gerado pelo Vite para pegar os assets corretos
  const indexPath = path.join(distPath, 'index.html');
  const indexContent = fs.readFileSync(indexPath, 'utf-8');
  
  // Extrair os links de assets do index.html original
  const cssMatch = indexContent.match(/<link[^>]+href="(\/assets\/[^"]+\.css)"[^>]*>/g) || [];
  const jsMatch = indexContent.match(/<script[^>]+src="(\/assets\/[^"]+\.js)"[^>]*>/g) || [];
  
  const cssLinks = cssMatch.join('\n    ');
  const jsScripts = jsMatch.join('\n    ');
  
  // Gerar HTML para cada página
  for (const page of pages) {
    const htmlContent = generateHTML(page)
      // Substituir o script de desenvolvimento pelo de produção
      .replace(
        '<script type="module" src="/src/main.tsx"></script>',
        jsScripts || '<script type="module" src="/src/main.tsx"></script>'
      )
      // Adicionar CSS após as fontes
      .replace(
        '</head>',
        `    ${cssLinks}\n  </head>`
      );
    
    const filePath = path.join(distPath, `${page.slug}.html`);
    fs.writeFileSync(filePath, htmlContent, 'utf-8');
    console.log(`✅ Gerado: ${page.slug}.html`);
  }
  
  console.log(`\n🎉 ${pages.length} arquivos HTML estáticos gerados com sucesso!`);
}

// Executar
generateStaticHTML().catch(console.error);
