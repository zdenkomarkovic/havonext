import Image from "next/image";

export default function About() {
  return (
    <section id="o-nama" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/74047.jpg"
                alt="HAVONEXT tim"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/15 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-secondary/15 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-secondary/10 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              O kompaniji
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-6 leading-tight">
              Ko smo mi i <span className="text-primary">zašto nam veruju</span>?
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                <strong className="text-navy">HAVONEXT D.O.O.</strong> je kompanija specijalizovana
                za organizaciju drumskog saobraćaja u Srbiji. Naš tim iskusnih stručnjaka brine o
                svakom detalju transportnog procesa – od prvog kontakta do finalne isporuke.
              </p>
              <p>
                Gradimo dugoročne partnerske odnose zasnovane na poverenju, transparentnosti i
                rezultatima. Svaki klijent dobija individualan pristup i rešenja prilagođena
                njegovim potrebama.
              </p>
              <p>
                Naša mreža proverenih prevoznika pokriva celu Srbiju, što nam omogućava da reagujemo
                brzo i efikasno – bez obzira na destinaciju ili vrstu tereta.
              </p>
            </div>

            {/* Feature list */}
            <ul className="mt-8 space-y-3">
              {[
                "Licencirana kompanija sa punom pravnom usklađenošću",
                "Tim sa višegodišnjim iskustvom u transportu",
                "Transparentno formiranje cena – bez skrivenih troškova",
                "Individualni pristup svakom klijentu",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-text-dark text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "5000+", label: "Realizovanih prevoza" },
            { value: "50+", label: "Partnera-prevoznika" },
            { value: "100%", label: "Zadovoljnih klijenata" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-mid"
            >
              <p className="font-heading font-bold text-4xl text-primary">{stat.value}</p>
              <p className="text-text-muted text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
