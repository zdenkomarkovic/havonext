const testimonials = [
  {
    name: "Marko Petrović",
    role: "Direktor nabavke",
    company: "Agro-Srbija d.o.o.",
    quote:
      "HAVONEXT nam je rešio hronični problem sa sezonskim transportom žitarica. Reaguju brzo, cene su korektne i uvek znamo gde je naša roba. Preporučujem svima.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Jelena Nikolić",
    role: "Menadžer logistike",
    company: "GraditeljPro d.o.o.",
    quote:
      "Sarađujemo sa HAVONEXT-om već duže vreme za transport građevinskog materijala. Nikada nas nisu iznevjerili – ni rokovima ni dokumentacijom. Profesionalan tim.",
    rating: 5,
    initial: "J",
  },
  {
    name: "Stefan Đorđević",
    role: "Vlasnik",
    company: "EKO Distribucija",
    quote:
      "Potreban mi je bio hitan prevoz za kratko vreme i HAVONEXT je to rešio za nekoliko sati. Impresivna brzina reakcije i korektna komunikacija tokom celog procesa.",
    rating: 5,
    initial: "S",
  },
  {
    name: "Milica Savić",
    role: "Rukovodilac nabavke",
    company: "FarmaPlus d.o.o.",
    quote:
      "Za farmaceutske isporuke nema kompromisa. HAVONEXT razume te zahteve i osigurava da sva dokumentacija i temperaturni uslovi budu ispravni. Pravi partneri.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Dragan Ilić",
    role: "Izvršni direktor",
    company: "Tehno-Trade Srbija",
    quote:
      "Godinama smo tražili pouzdanog organizatora transporta. Sa HAVONEXT-om smo smanjili troškove prevoza za oko 20% bez gubitka kvaliteta. Odlična saradnja.",
    rating: 5,
    initial: "D",
  },
  {
    name: "Ana Vasić",
    role: "Supply chain menadžer",
    company: "RetailMax d.o.o.",
    quote:
      "Zadovoljni smo administrativnom podrškom – od otpremnica do CMR dokumentacije, sve je uvek uredno. Nije nam više potreban interni tim za to.",
    rating: 5,
    initial: "A",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Utisci klijenata
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            Šta kažu naši klijenti
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Pouzdanost i kvalitet usluge se ne mere obećanjima – merimo ih iskustvima
            firmi koje sarađuju sa nama.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-light rounded-2xl p-7 border border-gray-mid flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote mark */}
              <div className="text-primary/20 mb-3">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.657 1.343-3 3-3V8zm16 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.657 1.343-3 3-3V8z" />
                </svg>
              </div>

              <StarRating count={t.rating} />

              <p className="text-text-dark text-sm leading-relaxed mt-4 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 pt-5 border-t border-gray-mid flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-text-muted text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="mt-14 bg-navy rounded-2xl p-8 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { value: "5.0 / 5", label: "Prosečna ocena" },
            { value: "100+", label: "Recenzija klijenata" },
            { value: "98%", label: "Stopa ponovne saradnje" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-heading font-bold text-3xl text-primary">{item.value}</p>
              <p className="text-white/60 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
