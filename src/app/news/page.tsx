import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { MOCK_NEWS } from "@/lib/data";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      {/* PAGE HERO */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-15" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Latest <span className="text-accent">Updates</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay informed with the latest news, press releases, and campaign activities across Okpe, Uvwie, and Sapele.
          </p>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="py-20 bg-white -mt-8 rounded-t-[3rem] relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_NEWS.map((news) => (
              <Card key={news.id} className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 right-4 z-20 bg-primary/90 hover:bg-primary backdrop-blur-sm border-none shadow-md">
                    {news.category}
                  </Badge>
                </div>
                <CardHeader className="pt-6 pb-3">
                  <div className="flex items-center text-sm text-muted-foreground mb-3 font-medium">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-heading font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/news/${news.id}`}>
                      {news.title}
                    </Link>
                  </h3>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Link href={`/news/${news.id}`} className={buttonVariants({ variant: "ghost", className: "w-fit p-0 hover:bg-transparent text-primary font-semibold group-hover:text-primary/80 transition-colors" })}>
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
              Load More News
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
