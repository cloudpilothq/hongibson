import { CheckCircle2, Quote, ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      
      {/* PREMIUM SPLIT HERO SECTION */}
      <section className="relative pt-24 lg:pt-0 lg:min-h-[85vh] flex items-center bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 py-12 lg:py-24 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-[0.2em]">
                Meet The Candidate
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-foreground leading-[1.1] tracking-tight">
                A Visionary <br />
                <span className="text-primary">Leader for</span> <br />
                Our Times.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-medium">
                Hon. Gibson Akporehe combines decades of executive experience with a profound dedication to the Okpe, Uvwie, and Sapele people.
              </p>
            </div>
            
            <div className="relative hidden lg:block h-full min-h-[85vh] w-full absolute right-0 top-0 w-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-muted/20 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2000&auto=format&fit=crop" 
                alt="Hon. Gibson Akporehe"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Mobile Image */}
            <div className="lg:hidden w-full aspect-square rounded-3xl overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=1000&auto=format&fit=crop" 
                alt="Hon. Gibson Akporehe"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE QUOTE */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full opacity-5 pointer-events-none">
          <Quote className="w-full h-full" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-8">
            "True leadership is not about the position you hold, but the impact you make on the lives of those you serve."
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6" />
          <p className="text-lg uppercase tracking-widest font-semibold text-accent">Hon. Gibson Akporehe</p>
        </div>
      </section>

      {/* EDITORIAL BIOGRAPHY */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="absolute -left-8 -top-8 w-48 h-48 bg-muted/50 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" 
                alt="Gibson Akporehe in community" 
                className="relative rounded-t-full rounded-b-xl shadow-2xl w-full object-cover border-8 border-white"
              />
              <div className="absolute -bottom-12 -right-12 bg-accent text-accent-foreground p-8 rounded-full shadow-xl hidden md:block">
                <span className="block text-4xl font-black font-heading leading-none">20+</span>
                <span className="block text-sm font-bold uppercase tracking-wider mt-1">Years of<br/>Service</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h3 className="text-primary font-bold tracking-[0.2em] uppercase text-sm">The Man Behind The Mission</h3>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">A Life Dedicated to Progress</h2>
              </div>
              
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Born and raised in the heart of Delta State, Hon. Gibson Akporehe's journey is a testament to the power of resilience, education, and an unwavering commitment to his roots. Growing up in a community rich in culture but struggling with infrastructural deficits, he recognized early on that systemic change requires both grassroots empathy and executive competence.
                </p>
                <p>
                  Before his pivot to public service, Gibson spent over two decades distinguishing himself in the private sector. He successfully managed large-scale public-private partnerships, demonstrating an exceptional ability to turn struggling initiatives into highly profitable, community-enriching enterprises.
                </p>
                <p>
                  However, the boardroom was never his final destination. Driven by a deep-seated desire to uplift the Okpe, Uvwie, and Sapele Federal Constituency, he transitioned into grassroots mobilization, funding numerous scholarships, micro-credit schemes, and rural electrification projects entirely from personal resources before ever seeking public office.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ELEGANT TIMELINE */}
      <section className="py-32 bg-muted/10 border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-heading font-bold mb-4">A Proven Track Record</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Experience that guarantees capable representation on Day One.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
            
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow-xl md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="w-full pl-16 md:pl-0 md:w-[calc(50%-3rem)] bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-all">
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Foundational Years</span>
                <h3 className="text-2xl font-heading font-bold mb-3">Academic Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Equipped with advanced degrees in Public Administration and Economics from premier institutions, laying the analytical foundation for effective legislative drafting and economic policy-making.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow-xl md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="w-full pl-16 md:pl-0 md:w-[calc(50%-3rem)] bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-all">
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Executive Experience</span>
                <h3 className="text-2xl font-heading font-bold mb-3">Private Sector Leadership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Spearheaded multinational logistics and infrastructure projects, managing multi-million dollar budgets while maintaining a perfect record of corporate transparency and accountability.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow-xl md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -translate-x-1/2">
                <Award className="w-4 h-4" />
              </div>
              <div className="w-full pl-16 md:pl-0 md:w-[calc(50%-3rem)] bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-all">
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Public Service</span>
                <h3 className="text-2xl font-heading font-bold mb-3">Grassroots Mobilization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Established the Akporehe Foundation, directly funding the education of over 1,000 students and providing seed capital for 500+ female-owned SMEs across Delta State.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES - HIGH END GRID */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-heading font-bold mb-6">Guiding Principles</h2>
              <p className="text-muted-foreground text-lg mb-8">
                These are not just campaign promises; these are the deeply held values that have defined Gibson's life and will dictate his actions in the House of Representatives.
              </p>
              <Link href="/manifesto" className={buttonVariants({ variant: "outline", size: "lg", className: "border-primary text-primary hover:bg-primary hover:text-white" })}>
                Read the Full Manifesto <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Radical Transparency", desc: "Open-book governance. You will always know how constituency funds are spent." },
                { title: "Inclusive Growth", desc: "Policies designed to lift the most vulnerable, not just the privileged few." },
                { title: "Modern Infrastructure", desc: "Leveraging technology and federal partnerships to rebuild our roads and ports." },
                { title: "Youth Empowerment", desc: "Transforming our young population from a demographic challenge into an economic powerhouse." }
              ].map((value, idx) => (
                <div key={idx} className="p-8 border border-border/60 rounded-2xl hover:border-primary/50 transition-colors bg-muted/5">
                  <CheckCircle2 className="h-8 w-8 text-accent mb-6" />
                  <h4 className="text-xl font-bold font-heading mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
