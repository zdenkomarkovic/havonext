export default function CtaBanner() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-navy rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
          Trebate prevoz?{" "}
          <span className="text-navy">Javite se danas.</span>
        </h2>
        <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Odgovaramo u roku od sat vremena. Dobijte besplatnu ponudu bez obaveza
          i uvjerite se zašto nam klijenti ponovo ukazuju poverenje.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/kontakt"
            className="bg-navy hover:bg-secondary text-white font-semibold px-10 py-4 rounded-lg transition-colors shadow-lg text-base"
          >
            Pošaljite upit
          </a>
          <a
            href="tel:+381603681349"
            className="bg-white/20 hover:bg-white/30 border-2 border-white/60 hover:border-white text-white font-semibold px-10 py-4 rounded-lg transition-colors text-base inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            060 368 1349
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
          {[
            "✓ Bez skrivenih troškova",
            "✓ Odgovaramo za 1 sat",
            "✓ Licencirani prevoznici",
            "✓ Osigurani transport",
          ].map((badge) => (
            <span key={badge} className="font-medium">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
