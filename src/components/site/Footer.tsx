import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Wifi } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-onyx border-t border-border/40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-aurora opacity-60" />
      <div className="relative container mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-9 h-9 rounded-xl bg-gradient-red grid place-items-center shadow-glow-red">
              <Wifi className="w-4 h-4 text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-semibold leading-tight">
              Home <span className="text-primary">Fiber</span>{" "}
              <span className="text-amber font-serif-italic font-normal">Connection</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Home Fiber Connection is an independent third-party service assistance startup, launched in 2026. We provide general guidance and informational support related to internet, broadband, Wi-Fi and cable TV services.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-amber mb-5 font-semibold">Explore</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Assistance Topics</Link></li>
            <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-amber mb-5 font-semibold">Legal</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms &amp; Conditions</Link></li>
            <li><Link to="/refund" className="hover:text-foreground transition-colors">Refund Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-amber mb-5 font-semibold">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="tel:8884784101" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" /> (888) 478-4101
              </a>
            </li>
            <li>
              <a href="mailto:support@homefiberconnection.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" /> support@homefiberconnection.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Independent · U.S. based
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground/80">
            Legal name: Home Fiber Connection LLC
          </p>
        </div>
      </div>

      <div className="relative border-t border-border/40">
        <div className="container mx-auto px-6 lg:px-10 py-6 text-xs text-muted-foreground leading-relaxed">
          <p className="max-w-5xl">
            <strong className="text-foreground">Disclaimer:</strong> Home Fiber Connection is an independent third-party service assistance startup. We are not affiliated with, authorized by, sponsored by, or endorsed by any internet, broadband, cable TV, or streaming service provider. Brand names, if mentioned anywhere on this site, are trademarks of their respective owners and are used strictly for informational purposes only. Our service assistance fee is separate from any provider charges.
          </p>
        </div>
        <div className="container mx-auto px-6 lg:px-10 py-4 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2 border-t border-border/40">
          <p>© {new Date().getFullYear()} Home Fiber Connection LLC. All rights reserved.</p>
          <p>Independent third-party assistance · Launched 2026</p>
        </div>
      </div>
    </footer>
  );
}
