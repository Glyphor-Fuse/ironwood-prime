import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-ember.jpg"
          alt="Charred wood and ember texture"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="font-serif text-xl tracking-[0.2em] text-primary uppercase">
            Est. 2024
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold text-foreground tracking-tight">
            IRONWOOD <br /> <span className="text-primary-foreground/90 mix-blend-overlay">PRIME</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg md:text-xl text-muted-foreground font-light tracking-wide">
            A sanctuary of shadow and ember. Experience the art of wood-fired dining.
          </p>
          
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-lg tracking-widest uppercase transition-all duration-300 hover:scale-105"
            >
              Reserve Your Table
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
