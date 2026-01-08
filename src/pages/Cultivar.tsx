import { CategoryPage } from "./CategoryPage";
import categoryImage from "@/assets/category-cultivar.jpg";

const Cultivar = () => {
  const recentPosts = [
    { id: 1, title: "Rituais matinais: comece o dia com intenção", date: "14 Jan 2025" },
    { id: 2, title: "Journaling no campo: escreva sua história", date: "11 Jan 2025" },
    { id: 3, title: "Slow living: desacelere com elegância", date: "7 Jan 2025" },
    { id: 4, title: "Meditação ao ar livre: paz interior", date: "4 Jan 2025" },
    { id: 5, title: "Crescimento pessoal sem autoajuda clichê", date: "1 Jan 2025" },
  ];

  const featuredPosts = [
    { id: 50, title: "Autocuidado rural: luxo que vem de dentro", date: "13 Jan 2025" },
    { id: 51, title: "Conexão com a natureza: terapia silenciosa", date: "10 Jan 2025" },
    { id: 52, title: "Sabedoria ancestral para vida moderna", date: "6 Jan 2025" },
  ];

  return (
    <CategoryPage
      title="Cultivar"
      description="Nutra sua mente, corpo e espírito — cresça com autenticidade e propósito."
      heroImage={categoryImage}
      recentPosts={recentPosts}
      featuredPosts={featuredPosts}
      quizTitle="Qual ritual combina com você?"
      quizLink="/quiz"
      slug="cultivar"
    />
  );
};

export default Cultivar;
