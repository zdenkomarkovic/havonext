const certifications = [
  {
    title: "Licenca za drumski prevoz",
    body: "Ministarstvo građevinarstva, saobraćaja i infrastrukture Republike Srbije",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Registracija APR",
    body: "Agencija za privredne registre – aktivni privredni subjekt, puna pravna usklađenost",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Osiguranje prevoza",
    body: "Cargo osiguranje i odgovornost prevoznika za sve realizovane transporte",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
      </svg>
    ),
  },
  {
    title: "PDV obveznik",
    body: "U sistemu PDV-a – ispravno fakturisanje i finansijska transparentnost za sve klijente",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

// Placeholder partner logos
const partnerPlaceholders = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6",
];

export default function Partners() {
  return (
    <section className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications */}
        <div className="text-center mb-14">
          <span className="inline-block bg-secondary/10 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Legitimnost
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            Sertifikati i dozvole
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Poslujemo u skladu sa svim zakonskim propisima Republike Srbije.
            Transparentnost i legalnost su osnova svakog posla.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white rounded-2xl p-6 border border-gray-mid text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                {cert.icon}
              </div>
              <h3 className="font-heading font-semibold text-navy text-base mb-2">
                {cert.title}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">{cert.body}</p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center mb-10">
          <h3 className="font-heading font-bold text-2xl text-navy mb-3">
            Naši poslovni partneri
          </h3>
          <p className="text-text-muted max-w-xl mx-auto text-sm">
            Sarađujemo sa proverenim prevoznicima i logističkim kompanijama.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partnerPlaceholders.map((label) => (
            <div
              key={label}
              className="bg-white rounded-xl border border-gray-mid aspect-[3/2] flex flex-col items-center justify-center p-4 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
            >
              {/* Logo placeholder */}
              <div className="w-10 h-10 bg-gray-mid rounded-lg flex items-center justify-center mb-2">
                <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-text-muted text-xs">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-text-muted text-xs mt-4">
          * Zameniti logotipima pravih partnera
        </p>
      </div>
    </section>
  );
}
