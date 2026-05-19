import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

export const Recommended = () => {
  const big = articles[1];
  const small = [articles[2], articles[4], articles[3], articles[5]];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="mb-10 font-heading text-4xl font-bold text-foreground md:text-5xl">
        Recomendados
      </h2>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Big */}
        <Link to={big.link} className="group block">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={big.image}
              alt={big.title}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="mt-5">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {big.category}
            </span>
            <h3 className="mt-3 font-heading text-3xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary md:text-4xl">
              {big.title}
            </h3>
            <p className="mt-3 font-body text-base text-muted-foreground line-clamp-3">
              {big.excerpt}
            </p>
          </div>
        </Link>

        {/* Small grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {small.map((post) => (
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
              <div className="mt-4">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {post.category}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 font-body text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <p className="mt-2 font-body text-xs text-muted-foreground">
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
