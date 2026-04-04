import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import SeasonalPromoCarousel from "@/components/SeasonalPromoCarousel";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroCarousel />
        <ServicesSection />
        <SeasonalPromoCarousel />
        <AboutSection />
        <section id="contacto" className="min-h-screen flex items-center justify-center bg-surface">
          <p className="text-muted-foreground text-lg">Contacto — próximamente</p>
        </section>
      </main>
    </div>
  );
};

export default Index;
