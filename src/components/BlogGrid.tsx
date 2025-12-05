import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

export const BlogGrid = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          Conteúdo recente
        </h2>
        <p className="mt-4 font-body text-lg text-muted-foreground">
          Inspiração prática para viver com elegância e autonomia
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((post) => {
          const Icon = post.icon;
          
          return post.link ? (
            <Link key={post.id} to={post.link} className="block no-underline">
              <Card 
                className="group overflow-hidden border-border bg-card shadow-upira-sm transition-all hover:shadow-upira-md cursor-pointer h-full"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-base text-muted-foreground font-body">
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <Card 
              key={post.id}
              className="group overflow-hidden border-border bg-card shadow-upira-sm transition-all hover:shadow-upira-md cursor-pointer h-full"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2 text-base text-muted-foreground font-body">
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
