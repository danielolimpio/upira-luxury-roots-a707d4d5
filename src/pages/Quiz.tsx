import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Sparkles, Flame, Hammer, Leaf } from "lucide-react";

const quizzes = [
  {
    id: 1,
    title: "Qual seu perfil off-grid?",
    description: "Descubra se você é Minimalista, Aventureiro, Criador ou Refinado.",
    icon: Sparkles,
    color: "text-primary",
  },
  {
    id: 2,
    title: "Seu consumo é inteligente?",
    description: "Avalie seus hábitos de consumo e descubra onde pode melhorar.",
    icon: Leaf,
    color: "text-green-600",
  },
  {
    id: 3,
    title: "Que tipo de fogo combina com seu estilo?",
    description: "Fogueira, fogão à lenha ou churrasqueira de cobre? Descubra agora!",
    icon: Flame,
    color: "text-orange-600",
  },
  {
    id: 4,
    title: "O que você levaria para sua cabana de luxo?",
    description: "Escolha seus itens essenciais e veja o que isso diz sobre você.",
    icon: Hammer,
    color: "text-brown-600",
  },
];

const Quiz = () => {
  return (
    <>
      <Helmet>
        <title>Quiz | Upira - Descubra seu estilo off-grid</title>
        <meta 
          name="description" 
          content="Faça nossos quizzes interativos e descubra seu perfil off-grid, hábitos de consumo e preferências de estilo de vida consciente." 
        />
        <meta name="keywords" content="quiz off-grid, teste de perfil, consumo consciente, estilo de vida, sustentabilidade" />
        <link rel="canonical" href="https://upira.com.br/quiz" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Quiz | Upira - Descubra seu estilo off-grid" />
        <meta property="og:description" content="Faça nossos quizzes interativos e descubra seu perfil off-grid." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://upira.com.br/quiz" />
        <meta property="og:image" content="https://upira.com.br/og-image.jpg" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Quiz Upira",
            "description": "Quizzes interativos para descobrir seu perfil off-grid e hábitos de consumo.",
            "url": "https://upira.com.br/quiz"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <HelpCircle className="h-16 w-16 text-primary" />
              </div>
              <h1 className="font-heading text-5xl font-bold text-foreground md:text-6xl">
                Quiz
              </h1>
              <p className="mt-4 font-body text-xl text-muted-foreground">
                Descubra mais sobre seu estilo e preferências. Todos os quizzes são rápidos e divertidos!
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {quizzes.map((quiz) => {
                const Icon = quiz.icon;
                return (
                  <Card
                    key={quiz.id}
                    className="group border-border bg-card shadow-upira-sm hover:shadow-upira-md transition-all cursor-pointer"
                  >
                    <CardHeader>
                      <div className="mb-4 flex justify-center">
                        <Icon className={`h-12 w-12 ${quiz.color}`} />
                      </div>
                      <CardTitle className="font-heading text-2xl text-center">
                        {quiz.title}
                      </CardTitle>
                      <CardDescription className="font-body text-center text-muted-foreground">
                        {quiz.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary-dark"
                        onClick={() => alert(`Quiz "${quiz.title}" em breve!`)}
                      >
                        Começar Quiz
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <p className="font-body text-sm text-muted-foreground">
                Novos quizzes são adicionados regularmente. Volte sempre para descobrir mais!
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Quiz;
