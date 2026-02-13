import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border/10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-serif text-2xl text-foreground tracking-tight">IRONWOOD <span className="text-primary">PRIME</span></h3>
            <p className="text-muted-foreground text-sm">124 Ember Lane, Chicago, IL 60611</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="text-muted-foreground text-sm">Hours</p>
            <p className="text-foreground text-sm">Mon-Sun: 5pm - 11pm</p>
            <p className="text-foreground text-sm">Happy Hour: 4pm - 6pm</p>
          </div>
          
        </div>
        <div className="mt-12 pt-8 border-t border-border/5 text-center text-xs text-muted-foreground/40">
          © 2024 Ironwood Prime. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
