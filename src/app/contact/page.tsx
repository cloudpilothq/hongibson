import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      {/* PAGE HERO */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We want to hear from you. Whether you have a question, a suggestion, or simply want to share your thoughts, our team is ready to listen.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-8 relative z-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* CONTACT INFO */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
                <h2 className="text-2xl font-heading font-bold text-primary mb-6">Campaign Headquarters</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Address</h3>
                      <p className="text-muted-foreground mt-1 leading-relaxed">
                        124 Effurun-Sapele Road,<br />
                        Uvwie Local Government Area,<br />
                        Delta State, Nigeria.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Phone</h3>
                      <p className="text-muted-foreground mt-1">
                        +234 (0) 800 123 4567<br />
                        +234 (0) 900 987 6543
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Email</h3>
                      <p className="text-muted-foreground mt-1">
                        info@gibsonakporehe2027.com<br />
                        press@gibsonakporehe2027.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Office Hours</h3>
                      <p className="text-muted-foreground mt-1">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="lg:col-span-3">
              <Card className="border-border shadow-xl">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Send us a Message</h2>
                    <p className="text-muted-foreground">Fill out the form below and our team will get back to you within 24 hours.</p>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                        <Input id="firstName" placeholder="John" className="bg-muted/50 h-12" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                        <Input id="lastName" placeholder="Doe" className="bg-muted/50 h-12" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                        <Input id="email" type="email" placeholder="john@example.com" className="bg-muted/50 h-12" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                        <Input id="phone" type="tel" placeholder="+234..." className="bg-muted/50 h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                      <Input id="subject" placeholder="How can we help you?" className="bg-muted/50 h-12" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                      <Textarea id="message" placeholder="Type your message here..." className="min-h-[150px] bg-muted/50 resize-y" />
                    </div>

                    <Button type="button" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg mt-4">
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
