import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Placeholder content to test scroll behavior */}
      <main className="pt-20">
        <section id="inicio" className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground text-lg">Hero section — próximamente</p>
        </section>
        <section id="productos" className="min-h-screen flex items-center justify-center bg-surface">
          <p className="text-muted-foreground text-lg">Productos — próximamente</p>
        </section>
        <section id="nosotros" className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground text-lg">Nosotros — próximamente</p>
        </section>
        <section id="contacto" className="min-h-screen flex items-center justify-center bg-surface">
          <p className="text-muted-foreground text-lg">Contacto — próximamente</p>
        </section>
      </main>
    </div>
  );
};

export default Index;
