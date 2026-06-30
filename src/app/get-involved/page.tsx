import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Users, HeartPulse, Smartphone, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      {/* PAGE HERO */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-15" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Get <span className="text-accent">Involved</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            This campaign belongs to you. Choose how you want to support Hon. Gibson Akporehe and let's build a better future together.
          </p>
        </div>
      </section>

      {/* UNIFIED GET INVOLVED SECTION */}
      <section className="py-20 -mt-8 relative z-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Card className="border-border shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-3">Join the Movement</h2>
                <p className="text-muted-foreground">Fill out the form below to formally register your support.</p>
              </div>

              <form className="space-y-10">
                
                {/* Involvement Type Selection */}
                <div>
                  <label className="text-sm font-bold text-foreground uppercase tracking-wide mb-4 block">1. How would you like to help?</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex flex-col items-center justify-center gap-3 p-6 border-2 rounded-xl cursor-pointer border-primary bg-primary/5 transition-colors relative">
                      <input type="radio" name="involvementType" value="volunteer" className="absolute top-4 right-4 w-5 h-5 text-primary focus:ring-primary border-muted-foreground" defaultChecked />
                      <Users className="h-8 w-8 text-primary" />
                      <span className="font-bold text-primary text-lg">Volunteer</span>
                      <span className="text-xs text-muted-foreground text-center">Canvassing & Field Work</span>
                    </label>

                    <label className="flex flex-col items-center justify-center gap-3 p-6 border-2 rounded-xl cursor-pointer hover:border-primary transition-colors bg-white relative group">
                      <input type="radio" name="involvementType" value="donate" className="absolute top-4 right-4 w-5 h-5 text-primary focus:ring-primary border-muted-foreground" />
                      <HeartPulse className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="font-bold text-foreground group-hover:text-primary text-lg transition-colors">Donate</span>
                      <span className="text-xs text-muted-foreground text-center">Financial Support</span>
                    </label>

                    <label className="flex flex-col items-center justify-center gap-3 p-6 border-2 rounded-xl cursor-pointer hover:border-primary transition-colors bg-white relative group">
                      <input type="radio" name="involvementType" value="digital" className="absolute top-4 right-4 w-5 h-5 text-primary focus:ring-primary border-muted-foreground" />
                      <Smartphone className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="font-bold text-foreground group-hover:text-primary text-lg transition-colors">Digital Team</span>
                      <span className="text-xs text-muted-foreground text-center">Social Media & PR</span>
                    </label>
                  </div>
                </div>

                {/* Personal Details */}
                <div className="space-y-6">
                  <label className="text-sm font-bold text-foreground uppercase tracking-wide mb-2 block border-b pb-2">2. Your Details</label>
                  
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
                    <label htmlFor="ward" className="text-sm font-medium text-foreground">Ward / Local Government Area</label>
                    <Input id="ward" placeholder="E.g., Uvwie LGA, Ward 3" className="bg-muted/50 h-12" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Additional Comments (Optional)</label>
                    <Textarea id="message" placeholder="Tell us more about how you want to contribute..." className="min-h-[120px] bg-muted/50 resize-y" />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <Button type="button" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-16 text-xl shadow-lg">
                    Submit Registration <Send className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground pt-4">
                    By submitting this form, you agree to our <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link> and <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link>.
                  </p>
                </div>

              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SOCIALS SECTION */}
      <section className="py-12 bg-white">
         <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Already registered? Join our community channels:</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#" className={buttonVariants({ className: "h-14 px-8 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-lg" })}>
                Join WhatsApp Group
              </Link>
              <Link href="#" className={buttonVariants({ className: "h-14 px-8 bg-[#0088cc] hover:bg-[#0088cc]/90 text-white font-bold text-lg" })}>
                Join Telegram Channel
              </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
