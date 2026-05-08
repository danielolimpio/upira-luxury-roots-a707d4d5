import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

export const MostRecent = () => {
  const list = articles.slice(0, 3);
  const big = articles.slice(3, 5);

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-3">
        {/* Numbered list */}
        <div>
          <h2 className="mb-8 font-heading text-4xl font-bold text-foreground md:text-5xl">
            Mais Recentes
          </h2>
          <ul className="divide-y divide-border">
            {list.map((post, i) => (
              <li key={post.id} className="group py-5">
                <Link to={post.link} className="flex items-start gap-5">
                  <span className="font-heading text-6xl font-bold leading-none text-muted-foreground/40 transition-colors duration-300 group-hover:text-primary">
                    {i + 1}
                  </span>
                  <div className="pt-2">
                    <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {post.category}
                    </span>
                    <h3 className="mt-2 font-heading text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 2 thumbnails */}
        {big.map((post) => (
          <Link key={post.id} to={post.link} className="group block">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {post.category}
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-3 font-body text-sm text-muted-foreground">
                {post.excerpt}
              </p>
              <p className="mt-3 font-body text-xs text-muted-foreground">
                Daniel Olimpio · {post.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
