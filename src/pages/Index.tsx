import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { CutAndCask } from "@/components/sections/CutAndCask";
import { PrivateDining } from "@/components/sections/PrivateDining";
import { ReservationCTA } from "@/components/sections/ReservationCTA";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <CutAndCask />
        <PrivateDining />
        <ReservationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
