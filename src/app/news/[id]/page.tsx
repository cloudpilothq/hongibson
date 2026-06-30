import { MOCK_NEWS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { buttonVariants, Button } from "@/components/ui/button";

interface NewsArticleProps {
  params: {
    id: string;
  };
}

// Generate static params for all mock news articles so they are statically generated
export function generateStaticParams() {
  return MOCK_NEWS.map((news) => ({
    id: news.id,
  }));
}

export default function NewsArticlePage({ params }: NewsArticleProps) {
  const article = MOCK_NEWS.find((n) => n.id === params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pb-20 pt-24">
      {/* Article Header & Image */}
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link href="/news" className={buttonVariants({ variant: "ghost", className: "mb-8 -ml-4 text-muted-foreground hover:text-primary" })}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
        </Link>
        
        <div className="space-y-6 mb-10">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1">
            {article.category}
          </Badge>
          <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight text-foreground">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground font-medium text-sm border-y py-4">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-primary" />
              {article.date}
            </div>
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4 text-primary" />
              {article.author}
            </div>
            <Button variant="ghost" size="sm" className="ml-auto text-primary hover:text-primary hover:bg-primary/10">
              <Share2 className="mr-2 h-4 w-4" /> Share Article
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 md:px-6 max-w-5xl mb-12">
        <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary">
          {article.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim() === '') return null;
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-heading font-bold text-lg">
            Share this update with your community:
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Facebook
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Twitter
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
