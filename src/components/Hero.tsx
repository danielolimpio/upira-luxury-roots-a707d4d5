import heroImage from "@/assets/hero-upira.jpg";

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-6 pb-10">
      <div className="relative h-[72vh] min-h-[520px] w-full overflow-hidden rounded-3xl shadow-upira-lg">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/70 via-primary-dark/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative flex h-full items-end p-8 md:p-14">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block rounded-full bg-primary/90 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-widest text-primary-foreground">
              Raiz com atitude
            </span>
            <h1 className="font-heading text-5xl font-bold leading-[1.05] text-white md:text-7xl lg:text-8xl">
              Viva off-grid <br />com elegância.
            </h1>
            <p className="font-body text-lg text-white/90 md:text-2xl max-w-2xl">
              Não é sobre fugir do mundo. É sobre escolher viver bem — do seu jeito.
            </p>
            <div className="flex gap-4 pt-2">
              <button className="rounded-full bg-primary px-8 py-3.5 font-body text-base font-semibold text-primary-foreground shadow-upira-md transition-all hover:bg-primary-dark hover:shadow-upira-lg">
                Explorar conteúdo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
