import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Star, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Post {
  id: number;
  title: string;
  date: string;
}

interface CategorySidebarProps {
  recentPosts: Post[];
  featuredPosts: Post[];
  quizTitle: string;
  quizLink: string;
}

export const CategorySidebar = ({
  recentPosts,
  featuredPosts,
  quizTitle,
  quizLink,
}: CategorySidebarProps) => {
  return (
    <aside className="space-y-6">
      {/* Recent Posts */}
      <Card className="border-border bg-card shadow-upira-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-heading text-lg">
            <Clock className="h-5 w-5 text-primary" />
            Artigos Recentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recentPosts.map((post) => (
              <li key={post.id}>
                <a
                  href={`#post-${post.id}`}
                  className="group block font-body text-base text-foreground hover:text-primary transition-colors"
                >
                  <p className="font-medium group-hover:underline">{post.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{post.date}</p>
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Featured Posts */}
      <Card className="border-border bg-card shadow-upira-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-heading text-lg">
            <Star className="h-5 w-5 text-primary" />
            Artigos Destaques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {featuredPosts.map((post) => (
              <li key={post.id}>
                <a
                  href={`#post-${post.id}`}
                  className="group block font-body text-base text-foreground hover:text-primary transition-colors"
                >
                  <p className="font-medium group-hover:underline">{post.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{post.date}</p>
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Quiz Widget */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 shadow-upira-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-heading text-lg">
            <HelpCircle className="h-5 w-5 text-primary" />
            Quiz
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-body text-base text-foreground mb-4">{quizTitle}</p>
          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary-dark">
            <a href={quizLink}>Fazer Quiz</a>
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
};
