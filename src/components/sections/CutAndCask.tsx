import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Star, X } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

interface CutItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  caskPairing: string;
  notes: string[];
}

const cuts: CutItem[] = [
  {
    id: "ribeye",
    name: "Bone-In Ribeye",
    description: "22oz, dry-aged for 45 days. Rich marbling with intense nutty flavor.",
    price: "$85",
    image: "/images/ribeye.jpg",
    caskPairing: "Cabernet Sauvignon, Napa Valley 2018",
    notes: ["High Marbling", "Oak Smoked", "Rich"]
  },
  {
    id: "filet",
    name: "Barrel-Cut Filet",
    description: "10oz center cut. The most tender cut, finished with truffle butter.",
    price: "$65",
    image: "/images/filet.jpg",
    caskPairing: "Pinot Noir, Willamette Valley 2020",
    notes: ["Tender", "Buttery", "Subtle"]
  },
  {
    id: "strip",
    name: "NY Strip Reserve",
    description: "14oz prime cut. A perfect balance of flavor and tenderness.",
    price: "$55",
    image: "/images/strip.jpg",
    caskPairing: "Malbec, Mendoza 2019",
    notes: ["Bold", "Peppery", "Robust"]
  },
  {
    id: "tomahawk",
    name: "The Ironwood Tomahawk",
    description: "32oz long-bone ribeye. Designed for sharing, served with bone marrow.",
    price: "$145",
    image: "/images/tomahawk.jpg",
    caskPairing: "Bordeaux Blend, Left Bank 2015",
    notes: ["Showstopper", "Intense", "Complex"]
  }
];

export function CutAndCask() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-muted/20 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Cut & Cask</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our signature cuts, expertly paired with selections from our private cellar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cuts.map((cut) => (
            <motion.div
              key={cut.id}
              layoutId={`card-${cut.id}`}
              onClick={() => setSelectedId(cut.id)}
              className="cursor-pointer group relative bg-card border border-border/50 hover:border-primary/50 transition-colors overflow-hidden"
            >
              <AspectRatio ratio={4/5}>
                <img
                  src={cut.image}
                  alt={cut.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3 className="font-serif text-xl text-foreground mb-1">{cut.name}</motion.h3>
                  <p className="text-primary text-sm">{cut.price}</p>
                </div>
              </AspectRatio>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-background/80 backdrop-blur-sm">
              <motion.div
                layoutId={`card-${selectedId}`}
                className="bg-card w-full max-w-4xl overflow-hidden shadow-2xl relative border border-primary/20"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const cut = cuts.find((c) => c.id === selectedId)!;
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[80vh] md:max-h-none overflow-y-auto md:overflow-visible">
                      <div className="relative h-64 md:h-full">
                        <img
                          src={cut.image}
                          alt={cut.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-background/20" />
                      </div>
                      <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center bg-card">
                        <button
                          onClick={() => setSelectedId(null)}
                          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X className="w-6 h-6" />
                        </button>
                        
                        <div>
                          <motion.h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                            {cut.name}
                          </motion.h3>
                          <p className="text-2xl text-primary font-light">{cut.price}</p>
                        </div>

                        <div className="space-y-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {cut.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {cut.notes.map((note) => (
                              <Badge key={note} variant="outline" className="border-primary/30 text-primary/80 uppercase text-xs tracking-wider">
                                {note}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="border-t border-border pt-6 mt-6">
                          <div className="flex items-start gap-3">
                            <Star className="w-5 h-5 text-accent mt-1" />
                            <div>
                              <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">Sommelier Pairing</span>
                              <p className="text-foreground font-medium">{cut.caskPairing}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <button 
                            className="w-full py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest text-sm"
                            onClick={() => setSelectedId(null)}
                          >
                            Add to Reservation
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default CutAndCask;
