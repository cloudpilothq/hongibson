import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const MOCK_EVENTS = [
  {
    id: 1,
    title: "Sapele Mega Town Hall Meeting",
    date: "October 25, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Sapele Athletic Club, Sapele",
    category: "Town Hall",
    description: "Join Hon. Gibson Akporehe for an interactive session discussing the future of infrastructural development and youth empowerment in Sapele. Your voice matters.",
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Uvwie Youth Summit 2026",
    date: "November 2, 2026",
    time: "12:00 PM - 5:00 PM",
    location: "PTI Conference Centre, Effurun",
    category: "Summit",
    description: "A specialized summit focusing on tech empowerment, SME grants, and educational scholarships for the youth of Uvwie Local Government.",
    status: "Upcoming"
  },
  {
    id: 3,
    title: "Okpe Women Empowerment Flag-off",
    date: "November 15, 2026",
    time: "9:00 AM - 1:00 PM",
    location: "Orerokpe Town Hall, Okpe",
    category: "Empowerment",
    description: "Official flag-off of the micro-credit scheme and skills acquisition program for women across Okpe Kingdom.",
    status: "Upcoming"
  },
  {
    id: 4,
    title: "Campaign Grand Finale Rally",
    date: "February 10, 2027",
    time: "10:00 AM - 6:00 PM",
    location: "Sapele Township Stadium",
    category: "Rally",
    description: "The grand finale of the campaign. Join thousands of supporters as we march towards victory at the polls.",
    status: "Upcoming"
  }
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      {/* PAGE HERO */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Campaign <span className="text-accent">Events</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join us on the campaign trail. See where Hon. Gibson Akporehe will be next and be part of the movement for a better constituency.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-8 relative z-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          <div className="space-y-8">
            {MOCK_EVENTS.map((event) => (
              <Card key={event.id} className="overflow-hidden border-border hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  
                  {/* Date Block */}
                  <div className="bg-primary text-primary-foreground p-6 md:w-48 flex flex-col items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-primary/20">
                    <span className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">
                      {event.date.split(' ')[0]} {/* Month */}
                    </span>
                    <span className="text-5xl font-heading font-bold mb-1">
                      {event.date.split(' ')[1].replace(',', '')} {/* Day */}
                    </span>
                    <span className="text-sm opacity-80">
                      {event.date.split(' ')[2]} {/* Year */}
                    </span>
                  </div>

                  {/* Content Block */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-none px-3 py-1">
                        {event.category}
                      </Badge>
                      <Badge variant="outline" className="border-green-500 text-green-600">
                        {event.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">{event.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium text-foreground/80 mb-6 border-t pt-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                    </div>

                    <Link href="#" className={buttonVariants({ variant: "outline", className: "w-fit border-primary text-primary hover:bg-primary hover:text-white" })}>
                      RSVP to Event <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
