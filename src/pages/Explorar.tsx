import { CategoryPage } from "./CategoryPage";
import categoryImage from "@/assets/category-explorar.jpg";

const Explorar = () => {
  const recentPosts = [
    { id: 1, title: "5 hábitos de consumo que reduzem o estresse", date: "12 Jan 2025" },
    { id: 2, title: "Trilhas rurais: roteiros para reconectar", date: "9 Jan 2025" },
    { id: 3, title: "Turismo regenerativo: viaje com propósito", date: "6 Jan 2025" },
    { id: 4, title: "Minimalismo consciente: menos é mais", date: "4 Jan 2025" },
    { id: 5, title: "Digital detox no campo: guia prático", date: "2 Jan 2025" },
  ];

  const featuredPosts = [
    { id: 40, title: "Consumo inteligente: luxo sem desperdício", date: "11 Jan 2025" },
    { id: 41, title: "Viagens lentas: o caminho é o destino", date: "8 Jan 2025" },
    { id: 42, title: "Filosofia off-grid: liberdade com responsabilidade", date: "5 Jan 2025" },
  ];

  return (
    <CategoryPage
      title="Explorar"
      description="Descubra práticas inteligentes que trazem bem-estar genuíno sem sacrificar o conforto."
      heroImage={categoryImage}
      recentPosts={recentPosts}
      featuredPosts={featuredPosts}
      quizTitle="Seu consumo é inteligente?"
      quizLink="/quiz"
      slug="explorar"
    />
  );
};

export default Explorar;
