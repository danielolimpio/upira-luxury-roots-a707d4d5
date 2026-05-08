import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

export const TodaysPick = () => {
  const left = [articles[0], articles[4]];
  const center = articles[1];
  const right = [articles[3], articles[2], articles[5], articles[0], articles[4]];

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 font-heading text-4xl font-bold text-foreground md:text-5xl">
          Escolhas do Dia
        </h2>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr_1fr]">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {left.map((post) => (
              <Link key={post.id} to={post.link} className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="mt-3 inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {post.category}
                </span>
                <h4 className="mt-1 font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h4>
              </Link>
            ))}
          </div>

          {/* Center */}
          <Link to={center.link} className="group block">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={center.image}
                alt={center.title}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <span className="mt-4 inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {center.category}
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
              {center.title}
            </h3>
            <p className="mt-3 font-body text-sm text-muted-foreground">{center.excerpt}</p>
            <p className="mt-3 font-body text-xs text-muted-foreground">
              Daniel Olimpio · {center.date}
            </p>
          </Link>

          {/* Right column */}
          <div>
            <h3 className="mb-5 font-heading text-2xl font-bold text-foreground">Últimos Artigos</h3>
            <div className="flex flex-col gap-5">
              {right.map((post, i) => (
                <Link key={i} to={post.link} className="group flex items-center gap-3">
                  <div className="h-16 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {post.category}
                    </span>
                    <h4 className="mt-0.5 font-heading text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
