import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { getRelatedArticles, getCategoryLink } from "@/data/articles";

interface RelatedArticlesProps {
  currentLink: string;
  category: string;
}

export const RelatedArticles = ({ currentLink, category }: RelatedArticlesProps) => {
  const relatedArticles = getRelatedArticles(currentLink, category, 3);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-8 border-t border-border">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
          Artigos relacionados
        </h2>
        <Link 
          to={getCategoryLink(category)}
          className="hidden sm:flex items-center gap-2 text-primary hover:text-primary/80 font-body font-medium transition-colors"
        >
          Ver mais em {category}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {relatedArticles.map((article) => {
          const Icon = article.icon;
          
          return (
            <Link key={article.id} to={article.link} className="block no-underline group">
              <Card className="overflow-hidden border-border bg-card shadow-sm transition-all hover:shadow-md h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground font-body">
                    <Icon className="h-3 w-3 text-primary" />
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <Link 
        to={getCategoryLink(category)}
        className="flex sm:hidden items-center justify-center gap-2 mt-6 text-primary hover:text-primary/80 font-body font-medium transition-colors"
      >
        Ver mais em {category}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
};

export default RelatedArticles;
