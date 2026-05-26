import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogGrid } from "@/components/BlogGrid";
import { CategorySidebar } from "@/components/CategorySidebar";

interface IntroBlock {
  heading: string;
  paragraphs: string[];
}

interface CategoryPageProps {
  title: string;
  description: string;
  heroImage: string;
  recentPosts: Array<{ id: number; title: string; date: string }>;
  featuredPosts: Array<{ id: number; title: string; date: string }>;
  quizTitle: string;
  quizLink: string;
  slug?: string;
  /** SEO title tag (defaults to `${title} | Upira - Raiz com atitude`) */
  seoTitle?: string;
  /** Meta description (defaults to `description`). Keep < 160 chars. */
  metaDescription?: string;
  /** Meta keywords, comma-separated. */
  keywords?: string;
  /** Displayed H1 (defaults to `title`). Use for keyword-rich headlines. */
  headline?: string;
  /** Eyebrow above the H1 (defaults to "Categoria"). */
  eyebrow?: string;
  /** Optional SEO intro section rendered below the hero. */
  intro?: IntroBlock;
}

export const CategoryPage = ({
  title,
  description,
  heroImage,
  recentPosts,
  featuredPosts,
  quizTitle,
  quizLink,
  slug,
  seoTitle,
  metaDescription,
  keywords,
  headline,
  eyebrow = "Categoria",
  intro,
}: CategoryPageProps) => {
  const pageUrl = `https://upira.com.br/${slug || title.toLowerCase()}`;
  const finalTitle = seoTitle || `${title} | Upira - Raiz com atitude`;
  const finalDescription = metaDescription || description;
  const finalKeywords =
    keywords ||
    `${title.toLowerCase()}, upira, off-grid, sustentabilidade, vida consciente`;
  const finalHeadline = headline || title;

  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>{finalTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={finalDescription} />
        <meta name="keywords" content={finalKeywords} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={finalTitle} />
        <meta property="og:description" content={finalDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://upira.com.br/og-image.jpg" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={finalTitle} />
        <meta name="twitter:description" content={finalDescription} />
        <meta name="twitter:image" content="https://upira.com.br/og-image.jpg" />

        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": finalHeadline,
            "description": finalDescription,
            "url": pageUrl,
            "inLanguage": "pt-BR",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Upira",
              "url": "https://upira.com.br",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-6">
          <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden rounded-3xl shadow-upira-lg">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/70 via-primary-dark/30 to-transparent" />
            </div>

            <div className="relative flex h-full items-end p-8 md:p-12">
              <div className="max-w-3xl space-y-4">
                <span className="inline-block rounded-full bg-primary/90 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary-foreground">
                  {eyebrow}
                </span>
                <h1 className="font-heading text-5xl font-bold leading-[1.05] text-white md:text-7xl">
                  {finalHeadline}
                </h1>
                <p className="font-body text-lg text-white/90 md:text-2xl">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Intro */}
        {intro && (
          <section className="container mx-auto px-4 pt-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                {intro.heading}
              </h2>
              <div className="mt-6 space-y-4">
                {intro.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-body text-base leading-relaxed text-muted-foreground md:text-lg"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content Section with Sidebar */}
        <main className="container mx-auto px-4 py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <BlogGrid />
            </div>

            <CategorySidebar
              recentPosts={recentPosts}
              featuredPosts={featuredPosts}
              quizTitle={quizTitle}
              quizLink={quizLink}
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};
