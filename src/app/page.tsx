import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, ChevronRight, GraduationCap, HeartPulse, Building2, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-secondary">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/95 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent font-semibold text-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                2027 House of Representatives Aspirant
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight">
                Leadership That <span className="text-accent">Listens</span> and Delivers.
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
                Join Hon. Gibson Akporehe in building a prosperous, secure, and progressive future for the Okpe, Uvwie, and Sapele Federal Constituency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/get-involved" className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary/90 text-white font-semibold text-lg h-14 px-8 w-full sm:w-auto" })}>
                  Support Gibson <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/manifesto" className={buttonVariants({ size: "lg", variant: "outline", className: "bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold text-lg h-14 px-8 w-full sm:w-auto" })}>
                  Read Manifesto
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block relative h-[600px]">
              {/* Image Placeholder for Gibson */}
              <div className="absolute bottom-0 right-0 w-full h-[110%] flex items-end justify-center">
                 <div className="relative w-full max-w-md h-full rounded-t-[100px] bg-gradient-to-t from-primary to-transparent border-t-4 border-accent/50 overflow-hidden flex items-end shadow-2xl">
                    <img 
                      src="/candidate.jpg" 
                      alt="Hon. Gibson Akporehe"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">20+</p>
              <p className="text-muted-foreground font-medium">Years Leadership</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground font-medium">Community Projects</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">10k+</p>
              <p className="text-muted-foreground font-medium">Empowered Citizens</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">1</p>
              <p className="text-muted-foreground font-medium">United Constituency</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform -rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop" 
                alt="Community Meeting" 
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-border">
                <p className="font-heading font-bold text-xl text-primary mb-2">"Your Voice Will Be Heard"</p>
                <p className="text-sm text-muted-foreground">— Hon. Gibson Akporehe</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">The Vision</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">A Progressive and Inclusive Constituency</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our vision is to build a prosperous Okpe, Uvwie, and Sapele where every citizen has access to quality education, healthcare, and economic opportunities. We are committed to infrastructural development and empowering our youth and women to be self-reliant.
                </p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Integrity and Transparent Representation",
                  "Inclusive Community Development",
                  "Sustainable Economic Growth",
                  "Youth & Women Empowerment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent h-6 w-6 flex-shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/about" className={buttonVariants({ variant: "outline", size: "lg", className: "mt-4 border-primary text-primary hover:bg-primary hover:text-white" })}>
                Meet Gibson Akporehe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO / CORE PILLARS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Core Agenda</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">Why Vote Gibson?</h3>
            <p className="text-muted-foreground text-lg">
              Our comprehensive manifesto addresses the critical needs of our people, focusing on sustainable development and real empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Education", icon: GraduationCap, desc: "Scholarships, school rehabilitation, and digital skills training." },
              { title: "Healthcare", icon: HeartPulse, desc: "Upgrading primary health centers and maternal care support." },
              { title: "Infrastructure", icon: Building2, desc: "Road networks, clean water, and community electrification." },
              { title: "Empowerment", icon: Users, desc: "SME grants, agricultural support, and youth mentorship." }
            ].map((pillar, i) => (
              <Card key={i} className="border-border hover:shadow-lg transition-shadow group cursor-pointer bg-muted/10">
                <CardContent className="p-8">
                  <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <pillar.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-heading font-bold mb-3">{pillar.title}</h4>
                  <p className="text-muted-foreground mb-6 line-clamp-2">{pillar.desc}</p>
                  <Link href="/manifesto" className="text-primary font-medium flex items-center gap-1 hover:text-primary/80">
                    Read more <ChevronRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join thousands of volunteers across Okpe, Uvwie, and Sapele who are working towards a brighter future with Gibson.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-involved" className={buttonVariants({ size: "lg", className: "bg-accent hover:bg-accent/90 text-white font-bold h-14 px-10 text-lg" })}>
              Become a Volunteer
            </Link>
            <Link href="/contact" className={buttonVariants({ size: "lg", variant: "outline", className: "bg-transparent border-white text-white hover:bg-white/10 h-14 px-10 text-lg" })}>
              Contact the Campaign
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
