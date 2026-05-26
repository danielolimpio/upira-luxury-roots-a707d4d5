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
      headline="Construir e Criar: Bioconstrução, DIY e Design Rural"
      seoTitle="Criar e Construir no Campo: Bioconstrução, DIY e Design | Upira"
      metaDescription="Projetos DIY, bioconstrução com barro e madeira, captação de água, móveis rústicos premium e design biofílico para a casa rural dos seus sonhos."
      keywords="bioconstrução, casa de barro, captação de água da chuva, móveis rústicos, DIY rural, design biofílico, arquitetura sustentável, construir casa de campo"
      description="Construa, inove e personalize — transforme sua visão em realidade com suas próprias mãos."
      eyebrow="Categoria · Criar"
      heroImage={categoryImage}
      intro={{
        heading: "Mãos na obra, alma no projeto",
        paragraphs: [
          "Tutoriais detalhados de bioconstrução, captação de água da chuva, móveis artesanais e arquitetura biofílica para quem quer construir uma casa rural com identidade. Cada projeto une funcionalidade, estética premium e respeito ao terreno.",
          "Inspire-se em ideias DIY de luxo, plantas inteligentes para casas autossuficientes e técnicas tradicionais reinterpretadas com acabamento contemporâneo. Criar é também afirmar um estilo de vida.",
        ],
      }}
      recentPosts={recentPosts}
      featuredPosts={featuredPosts}
      quizTitle="Qual seu estilo de criação?"
      quizLink="/quiz"
      slug="criar"
    />
  );
};

export default Criar;
