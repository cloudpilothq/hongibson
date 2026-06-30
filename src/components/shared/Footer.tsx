import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-white p-2 rounded-lg font-heading font-bold text-xl tracking-tight">
                GA
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-none text-white">
                  Gibson Akporehe
                </span>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider mt-1">
                  For House of Reps 2027
                </span>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm max-w-xs mt-4">
              Leadership that listens and delivers. Committed to progress, unity, and sustainable development for Okpe, Uvwie, and Sapele Federal Constituency.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Gibson</Link></li>
              <li><Link href="/manifesto" className="hover:text-accent transition-colors">The Manifesto</Link></li>
              <li><Link href="/news" className="hover:text-accent transition-colors">News & Updates</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Campaign</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li><Link href="/get-involved" className="hover:text-accent transition-colors">Volunteer</Link></li>
              <li><Link href="/get-involved#donate" className="hover:text-accent transition-colors">Donate</Link></li>
              <li><Link href="/events" className="hover:text-accent transition-colors">Upcoming Events</Link></li>
              <li><Link href="/media" className="hover:text-accent transition-colors">Media Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>Campaign Headquarters,<br />Okpe / Uvwie / Sapele,<br />Delta State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>info@gibsonakporehe2027.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} Hon. Gibson Akporehe Campaign Organization. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/60">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
