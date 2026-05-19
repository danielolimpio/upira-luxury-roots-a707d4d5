import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

export const TopDeals = () => {
  const main = articles[3];
  const row = [articles[0], articles[2], articles[5]];

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 font-heading text-4xl font-bold text-foreground md:text-5xl">
          Em Alta
        </h2>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Link to={main.link} className="group block">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={main.image}
                alt={main.title}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Link>
          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {main.category}
            </span>
            <Link to={main.link}>
              <h3 className="mt-3 font-heading text-3xl font-bold leading-tight text-foreground transition-colors hover:text-primary md:text-5xl">
                {main.title}
              </h3>
            </Link>
            <p className="mt-5 font-body text-base text-muted-foreground md:text-lg">
              {main.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                D
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">Daniel Olimpio</p>
                <p className="font-body text-xs text-muted-foreground">{main.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {row.map((post) => (
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
                <h4 className="mt-2 font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h4>
                <p className="mt-2 font-body text-sm text-muted-foreground line-clamp-3">
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
