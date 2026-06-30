import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GraduationCap, HeartPulse, Building2, Users, Leaf, MonitorPlay } from "lucide-react";

const manifestoPillars = [
  {
    id: "education",
    title: "Education & Youth Development",
    icon: GraduationCap,
    problem: "Many of our youths lack access to quality education and modern skills training, leading to high unemployment rates.",
    solution: "We will sponsor bills to increase funding for public schools in our constituency, establish modern ICT and vocational training centers, and provide annual scholarships for indigent students.",
    impact: "A globally competitive youth population equipped with 21st-century skills to drive local economic growth."
  },
  {
    id: "healthcare",
    title: "Healthcare & Social Services",
    icon: HeartPulse,
    problem: "Primary healthcare centers are under-equipped and inaccessible to many rural dwellers.",
    solution: "I will facilitate federal intervention funds to upgrade primary healthcare centers across Okpe, Uvwie, and Sapele. We will also launch periodic free medical outreach programs.",
    impact: "Reduced maternal and infant mortality rates, and improved life expectancy in our communities."
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Industrial Development",
    icon: Building2,
    problem: "Poor road networks and inadequate power supply stifle local businesses and agriculture.",
    solution: "Lobby for the inclusion of critical constituency roads in the federal budget. We will partner with private investors to develop an industrial park in Sapele to revive its glorious industrial past.",
    impact: "Easier movement of goods and services, attraction of foreign investments, and massive job creation."
  },
  {
    id: "empowerment",
    title: "Women Empowerment & SMEs",
    icon: Users,
    problem: "Women and small business owners struggle with access to capital to scale their trades.",
    solution: "Establish a constituency micro-credit scheme offering zero-interest loans to market women and artisans. We will also provide business management training.",
    impact: "Financial independence for families, poverty reduction, and a thriving local economy."
  },
  {
    id: "digital-economy",
    title: "Digital Economy & Tech",
    icon: MonitorPlay,
    problem: "Our constituency is lagging in the rapidly growing digital economy sector.",
    solution: "Partner with tech giants to set up tech hubs and incubators in Uvwie and Sapele, offering free coding and design bootcamps.",
    impact: "Creating thousands of remote jobs and positioning Delta State as a new tech destination."
  },
  {
    id: "environment",
    title: "Environmental Protection",
    icon: Leaf,
    problem: "Environmental degradation and poor waste management affect public health.",
    solution: "Advocate for stronger environmental laws and secure federal ecological funds to address flooding and erosion in vulnerable areas.",
    impact: "A cleaner, safer, and more sustainable environment for current and future generations."
  }
];

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* PAGE HERO */}
      <section className="bg-primary text-primary-foreground pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            The <span className="text-accent">Manifesto</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A comprehensive, actionable blueprint to transform the Okpe, Uvwie, and Sapele Federal Constituency.
          </p>
        </div>
      </section>

      {/* MANIFESTO DETAILS */}
      <section className="py-20 bg-white -mt-8 rounded-t-[3rem] relative z-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid gap-12">
            {manifestoPillars.map((pillar) => (
              <div key={pillar.id} id={pillar.id} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <pillar.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-secondary">{pillar.title}</h2>
                </div>
                
                <Card className="border-border shadow-sm">
                  <CardContent className="p-0">
                    <Accordion defaultValue={["solution"]} className="w-full">
                      <AccordionItem value="problem" className="border-b px-6">
                        <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary">
                          The Challenge
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                          {pillar.problem}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="solution" className="border-b px-6">
                        <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary">
                          Our Solution
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                          {pillar.solution}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="impact" className="border-none px-6">
                        <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary">
                          Expected Impact
                        </AccordionTrigger>
                        <AccordionContent className="text-primary font-medium text-base leading-relaxed pb-6">
                          {pillar.impact}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
