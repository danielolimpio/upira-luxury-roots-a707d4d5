import { CategoryPage } from "./CategoryPage";
import categoryImage from "@/assets/category-viver.jpg";

const Viver = () => {
  const recentPosts = [
    { id: 1, title: "Como montar uma despensa off-grid que dura 6 meses", date: "15 Jan 2025" },
    { id: 2, title: "Paisagismo funcional: jardins que trabalham por você", date: "5 Jan 2025" },
    { id: 3, title: "Energia solar: beleza e economia", date: "1 Jan 2025" },
    { id: 4, title: "Minimalismo rural com elegância", date: "28 Dez 2024" },
    { id: 5, title: "Conforto térmico sem ar condicionado", date: "25 Dez 2024" },
  ];

  const featuredPosts = [
    { id: 10, title: "O luxo da autonomia: viver bem sem depender", date: "20 Jan 2025" },
    { id: 11, title: "Cabana dos sonhos: 10 projetos inspiradores", date: "18 Jan 2025" },
    { id: 12, title: "Off-grid não é sacrifício, é escolha", date: "15 Jan 2025" },
  ];

  return (
    <CategoryPage
      title="Viver"
      description="Autonomia, conforto e elegância — viva do seu jeito, com sofisticação."
      heroImage={categoryImage}
      recentPosts={recentPosts}
      featuredPosts={featuredPosts}
      quizTitle="Qual seu perfil off-grid?"
      quizLink="/quiz"
      slug="viver"
    />
  );
};

export default Viver;
