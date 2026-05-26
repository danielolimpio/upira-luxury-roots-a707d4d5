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
      headline="Cultivar Mente, Corpo e Espírito no Ritmo da Terra"
      seoTitle="Cultivar Bem-Estar e Slow Living no Campo | Upira"
      metaDescription="Slow living, rituais matinais, journaling, meditação ao ar livre e autocuidado rural. Cultive bem-estar genuíno longe dos clichês de autoajuda."
      keywords="slow living, autocuidado, rituais matinais, meditação ao ar livre, journaling, bem-estar rural, crescimento pessoal, vida no campo"
      description="Nutra sua mente, corpo e espírito — cresça com autenticidade e propósito."
      eyebrow="Categoria · Cultivar"
      heroImage={categoryImage}
      intro={{
        heading: "Crescer por dentro, no tempo da natureza",
        paragraphs: [
          "Conteúdos sobre slow living, rituais matinais, meditação ao ar livre e journaling — práticas simples que cultivam clareza mental, equilíbrio emocional e propósito no dia a dia rural.",
          "Aqui o autocuidado vai além de estética: é construir uma rotina que respeita seus ciclos, fortalece sua identidade e traz a sabedoria ancestral para a vida moderna. Crescimento real, sem clichês de autoajuda.",
        ],
      }}
      recentPosts={recentPosts}
      featuredPosts={featuredPosts}
      quizTitle="Qual ritual combina com você?"
      quizLink="/quiz"
      slug="cultivar"
    />
  );
};

export default Cultivar;
