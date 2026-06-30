import { Badge } from "@/components/ui/badge";

const MOCK_MEDIA = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop",
    title: "Campaign Kickoff Rally",
    category: "Rallies"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    title: "Meeting with Traditional Rulers",
    category: "Community"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=80&w=800&auto=format&fit=crop",
    title: "Uvwie Youth Mega Rally",
    category: "Rallies"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=800&auto=format&fit=crop",
    title: "Market Women Micro-Credit Scheme",
    category: "Empowerment"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1541888062862-23c34fceb115?q=80&w=800&auto=format&fit=crop",
    title: "Sapele Infrastructure Tour",
    category: "Tours"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    title: "Scholarship Award Ceremony",
    category: "Empowerment"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    title: "Healthcare Blueprint Unveiling",
    category: "Press"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
    title: "Okpe Town Hall Meeting",
    category: "Community"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=800&auto=format&fit=crop",
    title: "Press Conference in Abuja",
    category: "Press"
  }
];

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      {/* PAGE HERO */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Campaign <span className="text-accent">Media Gallery</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A visual journey of our campaign across Okpe, Uvwie, and Sapele. Witness the momentum.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 -mt-8 relative z-20 bg-white rounded-t-[3rem] shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {MOCK_MEDIA.map((item) => (
              <div key={item.id} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <Badge className="w-fit mb-2 bg-primary hover:bg-primary text-white border-none">
                    {item.category}
                  </Badge>
                  <h3 className="text-white font-heading font-bold text-lg leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
