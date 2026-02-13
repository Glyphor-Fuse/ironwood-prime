import { Button } from "@/components/ui/button";

export function PrivateDining() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/private-room.jpg')" }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 container px-4 mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8 p-12 border border-primary/30 bg-background/40 backdrop-blur-sm">
          <span className="text-primary text-sm uppercase tracking-[0.3em]">Exclusivity</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            The Cellar Room
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Host your most intimate gatherings in our private cellar. Surrounded by our 
            reserve collection, the Cellar Room offers a bespoke dining experience 
            customized by our Executive Chef.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-widest mt-4">
            Request an Invitation
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PrivateDining;
