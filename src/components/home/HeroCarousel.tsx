import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

export const HeroCarousel = () => {
  const featured = articles.slice(0, 3);
  const [index, setIndex] = useState(0);
  const post = featured[index];

  const next = () => setIndex((i) => (i + 1) % featured.length);
  const prev = () => setIndex((i) => (i - 1 + featured.length) % featured.length);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[78vh] min-h-[560px] w-full">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent" />

        {/* Floating card */}
        <div className="absolute bottom-8 left-1/2 w-[92%] max-w-6xl -translate-x-1/2 md:bottom-16 md:left-auto md:right-12 md:translate-x-0 md:max-w-2xl">
          <div className="rounded-3xl bg-background/95 p-7 shadow-upira-lg backdrop-blur md:p-10">
            <Link to={`/${post.category.toLowerCase()}`}>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {post.category}
              </span>
            </Link>
            <Link to={post.link}>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-foreground transition-colors hover:text-primary md:text-5xl">
                {post.title}
              </h2>
            </Link>
            <p className="mt-4 font-body text-base text-muted-foreground md:text-lg">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                  D
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">Daniel Olimpio</p>
                  <p className="font-body text-xs text-muted-foreground">{post.date}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Anterior"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Próximo"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
