import { Shield, Lock, Eye, Server, UserCheck, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      {/* PAGE HERO */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Shield className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We are committed to protecting your personal information and your right to privacy.
          </p>
          <p className="text-sm text-white/60 mt-4 uppercase tracking-widest font-semibold">
            Last Updated: October 2026
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* STICKY SIDEBAR NAVIGATION */}
            <div className="md:col-span-4 lg:col-span-3 sticky top-24 hidden md:block">
              <Card className="border-border shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-4 border-b pb-2">Contents</h3>
                  <nav className="space-y-3 text-sm font-medium text-muted-foreground">
                    <a href="#information" className="block hover:text-primary transition-colors">1. Information We Collect</a>
                    <a href="#usage" className="block hover:text-primary transition-colors">2. How We Use Your Data</a>
                    <a href="#sharing" className="block hover:text-primary transition-colors">3. Data Sharing & Disclosure</a>
                    <a href="#security" className="block hover:text-primary transition-colors">4. Data Security</a>
                    <a href="#rights" className="block hover:text-primary transition-colors">5. Your Rights</a>
                    <a href="#contact" className="block hover:text-primary transition-colors">6. Contact Us</a>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* MAIN CONTENT */}
            <div className="md:col-span-8 lg:col-span-9 space-y-8">
              <Card className="border-border shadow-xl overflow-hidden">
                <CardContent className="p-8 md:p-12 prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-primary prose-a:text-accent prose-p:text-muted-foreground">
                  <p className="lead text-xl text-foreground font-medium mb-8">
                    The Gibson Akporehe Campaign Organization ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (gibsonakporehe2027.com) or participate in our campaign activities.
                  </p>

                  <div id="information" className="scroll-mt-24 pb-8 border-b border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><Eye className="h-6 w-6" /></div>
                      <h2 className="!mb-0 !mt-0">1. Information We Collect</h2>
                    </div>
                    <p>We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul>
                      <li>Sign up to volunteer.</li>
                      <li>Make a donation to the campaign.</li>
                      <li>Subscribe to our newsletter or SMS updates.</li>
                      <li>Contact us via email or our contact forms.</li>
                    </ul>
                    <p>The information collected may include your name, email address, phone number, physical address, and voter registration status.</p>
                  </div>

                  <div id="usage" className="scroll-mt-24 py-8 border-b border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><Server className="h-6 w-6" /></div>
                      <h2 className="!mb-0 !mt-0">2. How We Use Your Data</h2>
                    </div>
                    <p>We use the information we collect primarily to:</p>
                    <ul>
                      <li>Send you updates about campaign events, news, and policies.</li>
                      <li>Coordinate volunteer activities and canvassing efforts.</li>
                      <li>Process donations and ensure compliance with electoral laws.</li>
                      <li>Respond to your inquiries and provide support.</li>
                    </ul>
                  </div>

                  <div id="sharing" className="scroll-mt-24 py-8 border-b border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><UserCheck className="h-6 w-6" /></div>
                      <h2 className="!mb-0 !mt-0">3. Data Sharing & Disclosure</h2>
                    </div>
                    <p>
                      We do not sell, rent, or trade your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, processing donations, or distributing communications, provided that those parties agree to keep this information confidential.
                    </p>
                  </div>

                  <div id="security" className="scroll-mt-24 py-8 border-b border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><Lock className="h-6 w-6" /></div>
                      <h2 className="!mb-0 !mt-0">4. Data Security</h2>
                    </div>
                    <p>
                      We implement standard administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>

                  <div id="rights" className="scroll-mt-24 py-8 border-b border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><Shield className="h-6 w-6" /></div>
                      <h2 className="!mb-0 !mt-0">5. Your Rights</h2>
                    </div>
                    <p>
                      You have the right to opt-out of receiving promotional communications from us at any time by following the unsubscribe instructions provided in those emails or by contacting us directly.
                    </p>
                  </div>

                  <div id="contact" className="scroll-mt-24 pt-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><Mail className="h-6 w-6" /></div>
                      <h2 className="!mb-0 !mt-0">6. Contact Us</h2>
                    </div>
                    <p>
                      If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-muted/30 p-6 rounded-xl mt-6 border border-border">
                      <p className="!my-1"><strong>Email:</strong> privacy@gibsonakporehe2027.com</p>
                      <p className="!my-1"><strong>Address:</strong> 124 Effurun-Sapele Road, Uvwie LGA, Delta State.</p>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
