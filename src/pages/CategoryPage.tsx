import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogGrid } from "@/components/BlogGrid";
import { CategorySidebar } from "@/components/CategorySidebar";

interface CategoryPageProps {
  title: string;
  description: string;
  heroImage: string;
  recentPosts: Array<{ id: number; title: string; date: string }>;
  featuredPosts: Array<{ id: number; title: string; date: string }>;
  quizTitle: string;
  quizLink: string;
}

export const CategoryPage = ({
  title,
  description,
  heroImage,
  recentPosts,
  featuredPosts,
  quizTitle,
  quizLink,
}: CategoryPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary-dark/30 to-background" />
        </div>
        
        <div className="container relative mx-auto flex h-full items-center px-4">
          <div className="max-w-3xl space-y-4">
            <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-6xl">
              {title}
            </h1>
            <p className="font-body text-lg text-white/90 md:text-xl">
              {description}
            </p>
          </div>
        </div>
      </section>

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
  );
};
