import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Story() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <AspectRatio ratio={3/4} className="bg-muted overflow-hidden">
              <img
                src="/images/chef-fire.jpg"
                alt="Chef tending to wood fire"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </AspectRatio>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary text-sm font-serif italic">The Hearth</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              The Art of the <span className="text-primary italic">Ember</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                At Ironwood Prime, we believe that true flavor is born from patience and fire. 
                Our kitchen is centered around a massive open hearth, fed daily with seasoned oak and hickory.
              </p>
              <p>
                Every cut of meat is hand-selected for marbling and maturity, then seared over live embers 
                to lock in a smoky richness that cannot be replicated. It is a primal, honest way of cooking 
                that honors the ingredients and the history of the craft.
              </p>
            </div>
            <div className="pt-4">
              <span className="inline-block border-b border-primary text-primary pb-1 uppercase tracking-widest text-sm hover:text-primary/80 cursor-pointer transition-colors">
                Our Philosophy
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Story;
