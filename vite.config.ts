import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

const Renderer = vitePrerender.PuppeteerRenderer;

const routes = [
  "/",
  "/viver",
  "/comer",
  "/criar",
  "/explorar",
  "/cultivar",
  "/sobre",
  "/contato",
  "/quiz",
  "/blog",
  "/despensa-off-grid-6-meses",
  "/habitos-consumo-reduzem-estresse",
  "/cozinhar-com-fogo-guia-pratico",
  "/sistema-captacao-agua-beleza-funcionalidade",
  "/paisagismo-funcional-jardins-que-trabalham",
  "/iluminacao-natural-arquitetura-conversa-com-sol",
  "/privacidade",
  "/termos",
  "/cookies"
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: routes,
      renderer: new Renderer({
        renderAfterTime: 3000,
        headless: true,
      }),
      postProcess(renderedRoute) {
        renderedRoute.route = renderedRoute.originalRoute;
        return renderedRoute;
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
