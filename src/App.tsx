import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Viver from "./pages/Viver";
import Comer from "./pages/Comer";
import Criar from "./pages/Criar";
import Explorar from "./pages/Explorar";
import Cultivar from "./pages/Cultivar";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Quiz from "./pages/Quiz";
import DespensaOffGrid from "./pages/DespensaOffGrid";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/viver" element={<Viver />} />
          <Route path="/comer" element={<Comer />} />
          <Route path="/criar" element={<Criar />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/cultivar" element={<Cultivar />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/despensa-off-grid-6-meses" element={<DespensaOffGrid />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
