/**
 * Script de validação do sitemap
 * Verifica se todas as URLs do sitemap.xml têm arquivos index.html correspondentes no dist/
 * Executar após npm run build: node scripts/validate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const SITEMAP_PATH = path.join(DIST_DIR, 'sitemap.xml');

function extractUrlsFromSitemap(sitemapContent) {
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  const urls = [];
  let match;
  
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    urls.push(match[1]);
  }
  
  return urls;
}

function urlToFilePath(url) {
  const urlObj = new URL(url);
  let pathname = urlObj.pathname;
  
  // Remove trailing slash e adiciona /index.html
  if (pathname === '/') {
    return 'index.html';
  }
  
  // Remove trailing slash se existir
  if (pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }
  
  // Retorna o caminho para o index.html do diretório
  return pathname.slice(1) + '/index.html';
}

function validateSitemap() {
  console.log('🔍 Validando sitemap.xml contra arquivos em dist/...\n');
  
  // Verificar se o diretório dist existe
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Erro: Diretório dist/ não encontrado. Execute npm run build primeiro.');
    process.exit(1);
  }
  
  // Verificar se o sitemap existe
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ Erro: sitemap.xml não encontrado em dist/.');
    process.exit(1);
  }
  
  // Ler o sitemap
  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const urls = extractUrlsFromSitemap(sitemapContent);
  
  console.log(`📋 Encontradas ${urls.length} URLs no sitemap:\n`);
  
  let allValid = true;
  const results = [];
  
  for (const url of urls) {
    const filePath = urlToFilePath(url);
    const fullPath = path.join(DIST_DIR, filePath);
    const exists = fs.existsSync(fullPath);
    
    results.push({ url, filePath, exists });
    
    if (exists) {
      console.log(`✅ ${url}`);
      console.log(`   → ${filePath}`);
    } else {
      console.log(`❌ ${url}`);
      console.log(`   → ${filePath} (ARQUIVO NÃO ENCONTRADO)`);
      allValid = false;
    }
  }
  
  console.log('\n' + '='.repeat(60) + '\n');
  
  if (allValid) {
    console.log('✅ SUCESSO: Todas as URLs do sitemap têm arquivos correspondentes!');
    console.log(`   Total: ${urls.length} páginas validadas.`);
    process.exit(0);
  } else {
    const missing = results.filter(r => !r.exists);
    console.error(`❌ ERRO: ${missing.length} URLs do sitemap não têm arquivos correspondentes!`);
    console.error('\nURLs faltando:');
    missing.forEach(r => {
      console.error(`   - ${r.url}`);
    });
    console.error('\nO deploy será abortado para evitar problemas de indexação.');
    process.exit(1);
  }
}

validateSitemap();
