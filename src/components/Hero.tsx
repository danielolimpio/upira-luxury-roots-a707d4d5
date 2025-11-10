import heroImage from "@/assets/hero-upira.jpg";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 via-primary-dark/20 to-background" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex h-full items-center px-4">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Raiz com atitude
          </h1>
          <p className="font-body text-lg text-white/90 md:text-xl">
            Não é sobre fugir do mundo. É sobre escolher viver bem — do seu jeito.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary px-8 py-3 font-body text-sm font-semibold text-primary-foreground shadow-upira-md transition-all hover:bg-primary-dark hover:shadow-upira-lg rounded-lg">
              Explorar conteúdo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
