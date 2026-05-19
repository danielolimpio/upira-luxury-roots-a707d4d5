import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

export const Spotlight = () => {
  const items = [articles[5], articles[0], articles[2]];

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 font-heading text-4xl font-bold text-foreground md:text-5xl">
          Upira em Destaque
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((post) => (
            <Link key={post.id} to={post.link} className="group block">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {post.category}
                </span>
              <h3 className="mt-2 font-heading text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-3 font-body text-sm text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
              <p className="mt-3 font-body text-xs text-muted-foreground">
                Daniel Olimpio · {post.date}
              </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
