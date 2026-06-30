import { Scale, FileText, HeartHandshake, Link as LinkIcon, AlertTriangle, ShieldAlert, Edit3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-muted/10 pb-20">
      {/* PAGE HERO */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Scale className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Terms of <span className="text-accent">Service</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Please read these terms carefully before using our platform.
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
                    <a href="#usage" className="block hover:text-primary transition-colors">1. Use of the Site</a>
                    <a href="#intellectual-property" className="block hover:text-primary transition-colors">2. Intellectual Property</a>
                    <a href="#donations" className="block hover:text-primary transition-colors">3. Donations</a>
                    <a href="#third-party" className="block hover:text-primary transition-colors">4. Third-Party Links</a>
                    <a href="#disclaimer" className="block hover:text-primary transition-colors">5. Disclaimer</a>
                    <a href="#limitation" className="block hover:text-primary transition-colors">6. Limitation of Liability</a>
                    <a href="#changes" className="block hover:text-primary transition-colors">7. Changes to Terms</a>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* MAIN CONTENT */}
            <div className="md:col-span-8 lg:col-span-9 space-y-8">
              <Card className="border-border shadow-xl overflow-hidden">
                <CardContent className="p-8 md:p-12 prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-primary prose-a:text-accent prose-p:text-muted-foreground">
                  <p className="lead text-xl text-foreground font-medium mb-8">
                    Welcome to the official campaign website of Hon. Gibson Akporehe. By accessing or using this Site, you agree to comply with and be bound by the following Terms of Service. If you do not agree to these terms, please do not use this Site.
                  </p>

                  <div id="usage" className="scroll-mt-24 pb-8 border-b border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><FileText className="h-6 w-6" /></div>
                      <h2 className="!mb-0 !mt-0">1. Use of the Site</h2>
                    </div>
                    <p>
                      This Site is intended to provide information regarding the 2027 House of Representatives campaign of Hon. Gibson Akporehe. You may use the Site for lawful, non-commercial purposes only. You agree not to use the Site in any way that violates applicable federal, state, or local laws or regulations.
                    </p>
                  </div>

                  <div id="intellectual-property" className="scroll-mt-24 py-8 border-b border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><ShieldAlert className="h-6 w-6" /></div>
                      <h2 className="!mb-0 !mt-0">2. Intellectual Property</h2>
                    </div>
                    <p>
                      All content, logos, graphics, text, and other materials on this Site are the property of the Gibson Akporehe Campaign Organization or its content suppliers and are protected by Nigerian and international copyright and trademark laws. You may not reproduce, distribute, or modify any content without our express written consent.
                    </p>
                  </div>

                  <div id="donations" className="scroll-mt-24 py-8 border-b border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><HeartHandshake className="h-6 w-6" /></div>
                      <h2 className="!mb-0 !mt-0">3. Donations and Contributions</h2>
                    </div>
                    <p>
                      If you choose to make a financial contribution through this Site, you certify that you are a Nigerian citizen or a permanent resident, and that your contribution complies with the laws governing political donations in Nigeria as stipulated by the Independent National Electoral Commission (INEC).
                    </p>
                  </div>

                  <div id="third-party" className="scroll-mt-24 py-8 border-b border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><LinkIcon className="h-6 w-6" /></div>
                      <h2 className="!mb-0 !mt-0">4. Links to Third-Party Websites</h2>
                    </div>
                    <p>
                      This Site may contain links to external websites that are not operated by us. We have no control over the content or practices of these third-party sites and assume no responsibility for them. Your use of any third-party website is at your own risk.
                    </p>
                  </div>

                  <div id="disclaimer" className="scroll-mt-24 py-8 border-b border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><AlertTriangle className="h-6 w-6" /></div>
                      <h2 className="!mb-0 !mt-0">5. Disclaimer of Warranties</h2>
                    </div>
                    <p>
                      This Site and its contents are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
                    </p>
                  </div>

                  <div id="limitation" className="scroll-mt-24 py-8 border-b border-border/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><ShieldAlert className="h-6 w-6" /></div>
                      <h2 className="!mb-0 !mt-0">6. Limitation of Liability</h2>
                    </div>
                    <p>
                      To the fullest extent permitted by law, the Gibson Akporehe Campaign Organization shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of the Site.
                    </p>
                  </div>

                  <div id="changes" className="scroll-mt-24 pt-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><Edit3 className="h-6 w-6" /></div>
                      <h2 className="!mb-0 !mt-0">7. Changes to these Terms</h2>
                    </div>
                    <p>
                      We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting to the Site. Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes.
                    </p>
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
