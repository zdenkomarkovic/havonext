const steps = [
  {
    number: "01",
    title: "Kontaktirajte nas",
    description:
      "Pošaljite nam upit sa osnovnim informacijama o teretu – vrsta robe, polazna tačka, destinacija i željeni rok isporuke.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l9 6 9-6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Dobijate ponudu",
    description:
      "Naš tim analizira zahtev i u roku od nekoliko sati šalje prilagođenu ponudu sa transparentnim cenama i rokovima.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Organizujemo prevoz",
    description:
      "Nakon potvrde, biramo najboljeg prevoznika iz naše mreže, koordiniramo preuzimanje tereta i sređujemo svu dokumentaciju.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Isporuka i potvrda",
    description:
      "Pratite pošiljku u realnom vremenu. Po isporuci dobijate potvrdu i svu pratnju dokumentaciju.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/10 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Proces
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            Kako funkcioniše saradnja?
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Četiri jednostavna koraka koja vas dele od pouzdanog transportnog rešenja.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gray-mid" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Number circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg z-10 relative">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-navy text-white text-xs font-heading font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <p className="text-text-muted text-sm">
            Ceo proces od prvog kontakta do isporuke pratimo i koordiniramo za vas.{" "}
            <a href="/kontakt" className="text-primary font-semibold hover:underline">
              Počnite danas →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
