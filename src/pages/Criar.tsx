import { CategoryPage } from "./CategoryPage";
import categoryImage from "@/assets/category-criar.jpg";

const Criar = () => {
  const recentPosts = [
    { id: 1, title: "Sistema de captação de água: beleza e funcionalidade", date: "8 Jan 2025" },
    { id: 2, title: "Iluminação natural: arquitetura que conversa com o sol", date: "3 Jan 2025" },
    { id: 3, title: "Móveis rústicos com acabamento premium", date: "30 Dez 2024" },
    { id: 4, title: "Bioconstrução elegante: barro e madeira", date: "28 Dez 2024" },
    { id: 5, title: "DIY de luxo: projetos que impressionam", date: "25 Dez 2024" },
  ];

  const featuredPosts = [
    { id: 30, title: "Construa sua casa dos sonhos com as próprias mãos", date: "10 Jan 2025" },
    { id: 31, title: "Design biofílico: natureza dentro de casa", date: "5 Jan 2025" },
    { id: 32, title: "Oficina em casa: organize suas ferramentas com estilo", date: "2 Jan 2025" },
  ];

  return (
    <CategoryPage
      title="Criar"
      description="Construa, inove e personalize — transforme sua visão em realidade com suas próprias mãos."
      heroImage={categoryImage}
      recentPosts={recentPosts}
      featuredPosts={featuredPosts}
      quizTitle="Qual seu estilo de criação?"
      quizLink="/quiz"
      slug="criar"
    />
  );
};

export default Criar;
