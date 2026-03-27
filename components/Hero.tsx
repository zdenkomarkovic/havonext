import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-navy overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full -translate-x-1/3 translate-y-1/4" />
      </div>

      {/* Diagonal accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <span className="inline-block bg-primary/20 text-primary-light font-semibold text-xs px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
              Drumski saobraćaj
            </span>
            <h1 className="font-heading font-bold text-2xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
              <span className="text-primary">HAVONEXT</span> – vaš pouzdan{" "}
              partner za transport
            </h1>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              Organizujemo drumski prevoz tereta širom Srbije. Brzina,
              pouzdanost i transparentnost – sve na jednom mestu.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/kontakt"
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg text-center transition-colors shadow-lg text-sm"
              >
                Zatražite ponudu
              </a>
              <a
                href="#usluge"
                className="border-2 border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded-lg text-center transition-colors text-sm"
              >
                Naše usluge
              </a>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
              {[
                { value: "500+", label: "Uspešnih isporuka" },
                { value: "50+", label: "Proverenih prevoznika" },
                { value: "24/7", label: "Podrška i praćenje" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading font-bold text-2xl text-primary">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-end">
            <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/10">
              <Image
                src="/73903.jpg"
                alt="Transport i logistika"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
