const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Brzo i efikasno",
    description:
      "Reagujemo u roku od sat vremena. Organizujemo prevoz za kratko vreme, čak i u hitnim situacijama.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Provereni partneri",
    description:
      "Sarađujemo samo sa licenciranim i osiguranim prevoznicima. Svaki partner redovno prolazi proveru kvaliteta.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Potpuna transparentnost",
    description:
      "Znate tačno gde je vaša roba u svakom trenutku. Redovne obaveštenja i jasne cene – bez iznenadjenja.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Podrška 24/7",
    description:
      "Naš tim je dostupan tokom celog dana. Bilo kada da vam zatreba pomoć, tu smo za vas.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Konkurentne cene",
    description:
      "Optimizujemo troškove i pronalazimo najpovoljnija rešenja. Uštedite novac bez žrtvovanja kvaliteta.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Kompletna dokumentacija",
    description:
      "Preuzimamo brigu o svim otpremnicama, potvrdama i pratećoj dokumentaciji. Sve po propisima.",
  },
];

export default function WhyUs() {
  return (
    <section id="zasto-mi" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/15 text-white font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Naše prednosti
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Zašto izabrati HAVONEXT?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Kombinacija iskustva, pouzdanosti i modernog pristupa čini nas
            preferiranim partnerom za organizaciju transporta.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-2xl p-7 border border-white/20 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-primary/20 text-primary-light rounded-xl flex items-center justify-center mb-5">
                {reason.icon}
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">
                {reason.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 bg-white/10 border border-white/20 rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">
            Spremi ste za saradnju?
          </h3>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Kontaktirajte nas danas i dobijte besplatnu ponudu za vaš prevoz.
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-4 rounded-lg transition-colors shadow-lg"
          >
            Kontaktirajte nas
          </a>
        </div>
      </div>
    </section>
  );
}
