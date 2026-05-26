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
      headline="Explorar com Propósito: Consumo Consciente e Slow Travel"
      seoTitle="Explorar com Propósito: Consumo Consciente e Slow Travel | Upira"
      metaDescription="Slow travel, turismo regenerativo, digital detox, trilhas rurais e consumo consciente. Explore o mundo — e a vida — com mais propósito e menos pressa."
      keywords="slow travel, turismo regenerativo, consumo consciente, digital detox, trilhas rurais Brasil, minimalismo, viagem com propósito"
      description="Descubra práticas inteligentes que trazem bem-estar genuíno sem sacrificar o conforto."
      eyebrow="Categoria · Explorar"
      heroImage={categoryImage}
      intro={{
        heading: "Menos pressa, mais sentido",
        paragraphs: [
          "Guias de slow travel, turismo regenerativo, trilhas em áreas rurais e roteiros para desacelerar com elegância. Aqui viajar é antes de tudo um exercício de presença — e de consumo mais inteligente.",
          "Reflexões e práticas sobre minimalismo, digital detox e filosofia off-grid para quem busca liberdade com responsabilidade. Explorar é também aprender a escolher melhor o que entra na sua vida.",
        ],
      }}
      recentPosts={recentPosts}
      featuredPosts={featuredPosts}
      quizTitle="Seu consumo é inteligente?"
      quizLink="/quiz"
      slug="explorar"
    />
  );
};

export default Explorar;
