import { CategoryPage } from "./CategoryPage";
import categoryImage from "@/assets/category-comer.jpg";

const Comer = () => {
  const recentPosts = [
    { id: 1, title: "Cozinhar com fogo: guia prático para pratos gourmet", date: "10 Jan 2025" },
    { id: 2, title: "Mandioca: 15 receitas sofisticadas", date: "8 Jan 2025" },
    { id: 3, title: "Fermentados naturais: sabor e saúde", date: "5 Jan 2025" },
    { id: 4, title: "Ervas silvestres na alta gastronomia", date: "3 Jan 2025" },
    { id: 5, title: "Fogão à lenha: romantismo e eficiência", date: "1 Jan 2025" },
  ];

  const featuredPosts = [
    { id: 20, title: "Do campo à mesa: alta gastronomia rural", date: "12 Jan 2025" },
    { id: 21, title: "Pães artesanais: fermento natural em casa", date: "9 Jan 2025" },
    { id: 22, title: "Conservas gourmet: preserve com estilo", date: "7 Jan 2025" },
  ];

  return (
    <CategoryPage
      title="Comer"
      headline="Cozinha Rural Gourmet: do Fogo à Mesa"
      seoTitle="Comer Bem no Campo: Receitas Gourmet, Fogo e Fermentação | Upira"
      metaDescription="Receitas rurais sofisticadas, cozinha no fogo a lenha, fermentação natural, pães artesanais e ingredientes ancestrais. Alta gastronomia com raiz."
      keywords="cozinha rural, receitas no fogo a lenha, fermentação natural, pães artesanais, gastronomia off-grid, comida de raiz, conservas caseiras"
      description="Da fogueira ao gourmet — cozinhe com ingredientes naturais e técnicas refinadas."
      eyebrow="Categoria · Comer"
      heroImage={categoryImage}
      intro={{
        heading: "Sabor de raiz, técnica de chef",
        paragraphs: [
          "Reunimos receitas, técnicas e histórias da cozinha rural contemporânea: cozimento no fogo a lenha, fermentação natural, pães de fermento selvagem e o uso criativo de ingredientes nativos como mandioca, ervas silvestres e tubérculos esquecidos.",
          "Aqui a gastronomia off-grid encontra o refinamento — receitas testadas, guias passo a passo e dicas de conservação para quem quer comer melhor, com mais sabor, mais saúde e menos dependência do supermercado.",
        ],
      }}
      recentPosts={recentPosts}
      featuredPosts={featuredPosts}
      quizTitle="Que tipo de fogo combina com seu estilo?"
      quizLink="/quiz"
      slug="comer"
    />
  );
};

export default Comer;
