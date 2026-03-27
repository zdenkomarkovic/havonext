const industries = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Poljoprivreda",
    description: "Sezonski prevoz žitarica, voća, povrća i agrarne opreme po Srbiji.",
    color: "bg-green-50 text-green-700 border-green-100",
    accent: "bg-green-100",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Građevinarstvo",
    description: "Transport građevinskog materijala, opreme i mašina na lokacije širom Srbije.",
    color: "bg-orange-50 text-orange-700 border-orange-100",
    accent: "bg-orange-100",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: "Maloprodaja i FMCG",
    description: "Redovni i hitni prevozi robe za maloprodajne lance i distributere.",
    color: "bg-blue-50 text-blue-700 border-blue-100",
    accent: "bg-blue-100",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Industrija i Manufaktura",
    description: "Logistika za fabrike i industrijska postrojenja – sirovine i gotovi proizvodi.",
    color: "bg-slate-50 text-slate-700 border-slate-100",
    accent: "bg-slate-100",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Farmaceutika",
    description: "Temperatura-kontrolisani transport medicinskih i farmaceutskih proizvoda.",
    color: "bg-red-50 text-red-700 border-red-100",
    accent: "bg-red-100",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Energetika",
    description: "Prevoz energetske opreme, transformatora i komponenti za energetski sektor.",
    color: "bg-yellow-50 text-yellow-700 border-yellow-100",
    accent: "bg-yellow-100",
  },
];

export default function Industries() {
  return (
    <section className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Sektori
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            Industrije koje opslužujemo
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Iskustvo sa raznovrsnim teretom i industrijama čini nas fleksibilnim partnerom
            za firme iz svih privrednih grana.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className={`group bg-white rounded-2xl p-7 border ${industry.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 ${industry.accent} rounded-xl flex items-center justify-center mb-5`}>
                {industry.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                {industry.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-text-muted text-sm mt-10">
          Ne vidite svoju industriju?{" "}
          <a href="/kontakt" className="text-primary font-semibold hover:underline">
            Kontaktirajte nas
          </a>{" "}
          – organizujemo prevoz za sve vrste tereta.
        </p>
      </div>
    </section>
  );
}
