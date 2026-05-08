import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

export const BlogGrid = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-14 flex flex-col items-start gap-3 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Editorial
          </span>
          <h2 className="mt-2 font-heading text-5xl font-bold text-foreground md:text-6xl">
            Conteúdo recente
          </h2>
        </div>
        <p className="font-body text-lg text-muted-foreground md:max-w-md md:text-right">
          Inspiração prática para viver com elegância e autonomia
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((post) => {
          const Icon = post.icon;
          const cardInner = (
            <Card
              className="group h-full overflow-hidden rounded-3xl border-border bg-card shadow-upira-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-upira-lg cursor-pointer"
            >
              <div className="relative aspect-[3/2] overflow-hidden rounded-t-3xl">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-primary-dark/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-primary shadow-upira-sm">
                  {post.category}
                </span>
              </div>
              <CardContent className="p-7">
                <div className="mb-3 flex items-center gap-2 font-body text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{post.date}</span>
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                  {post.title}
                </h3>
                <p className="font-body text-base leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          );

          return post.link ? (
            <Link key={post.id} to={post.link} className="block no-underline">
              {cardInner}
            </Link>
          ) : (
            <div key={post.id}>{cardInner}</div>
          );
        })}
      </div>
    </section>
  );
};
