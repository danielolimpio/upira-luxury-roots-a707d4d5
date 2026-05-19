import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

export const LetsExplore = () => {
  const main = articles[4];
  const side = [articles[1], articles[5], articles[0]];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="mb-10 font-heading text-4xl font-bold text-foreground md:text-5xl">
        Vamos Explorar
      </h2>
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Main left */}
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
          <div className="mt-5">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {main.category}
            </span>
            <h3 className="mt-2 font-heading text-3xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary md:text-4xl">
              {main.title}
            </h3>
            <p className="mt-3 font-body text-sm text-muted-foreground">{main.excerpt}</p>
            <p className="mt-3 font-body text-xs text-muted-foreground">
              Daniel Olimpio · {main.date}
            </p>
          </div>
        </Link>

        {/* Side list */}
        <div className="flex flex-col divide-y divide-border">
          {side.map((post) => (
            <Link
              key={post.id}
              to={post.link}
              className="group grid grid-cols-[1fr_140px] gap-5 py-5 first:pt-0 last:pb-0 sm:grid-cols-[1fr_180px]"
            >
              <div>
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {post.category}
                </span>
                <h4 className="mt-2 font-heading text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-2xl">
                  {post.title}
                </h4>
                <p className="mt-2 font-body text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <p className="mt-3 font-body text-xs text-muted-foreground">
                  Daniel Olimpio · {post.date}
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
