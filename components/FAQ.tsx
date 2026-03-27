"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Koje vrste tereta prevozite?",
    answer:
      "Organizujemo prevoz raznovrsnog tereta – od paletne robe, rasutog tereta i građevinskog materijala do prehrambenih proizvoda i farmaceutike. Svaki zahtev analiziramo individualno i pronalazimo adekvatnog prevoznika za specifičan tip tereta.",
  },
  {
    question: "Koliko brzo možete da organizujete prevoz?",
    answer:
      "U zavisnosti od dostupnosti prevoznika i destinacije, prevoz možemo organizovati u roku od nekoliko sati. Za hitne zahteve dostupni smo 24/7. Standardne naloge obrađujemo u roku od 2-4 sata od primljenog upita.",
  },
  {
    question: "Da li je teret osiguran tokom prevoza?",
    answer:
      "Da. Svi prevozi se realizuju sa važećim cargo osiguranjem i odgovornošću prevoznika. Možemo organizovati i dodatno osiguranje tereta prema vrednosti pošiljke na zahtev klijenta.",
  },
  {
    question: "Kako se formiraju cene transporta?",
    answer:
      "Cena zavisi od tipa i težine tereta, relacije, hitnosti i specifičnih zahteva (temperature, gabarit, itd.). Svaki upit obrađujemo posebno i šaljemo transparentnu ponudu bez skrivenih troškova. Kontaktirajte nas za konkretnu kalkulaciju.",
  },
  {
    question: "Na kojim relacijama radite?",
    answer:
      "Pokrivamo sve destinacije unutar Srbije. Naša mreža proverenih prevoznika prisutna je u svim regionima – od Vojvodine do juga Srbije. Za specifične destinacije ili vanredne relacije konsultujte naš tim.",
  },
  {
    question: "Kakva dokumentacija prati pošiljku?",
    answer:
      "Za svaki transport priprema se kompletna dokumentacija – otpremnica (CMR), tovarni list, potvrda o preuzimanju i isporuci, kao i eventualna fitosanitarna ili veterinarska dokumentacija za specifičnu robu. Brinemo o svemu umesto vas.",
  },
  {
    question: "Kako mogu da pratim status moje pošiljke?",
    answer:
      "Po realizaciji naloga dobijate kontakt podatke vozača i redovne informacije o statusu prevoza. Za veće klijente i redovne saradnike organizujemo direktno GPS praćenje u realnom vremenu.",
  },
  {
    question: "Radite li sa fizičkim licima ili samo sa firmama?",
    answer:
      "Pretežno sarađujemo sa privrednim subjektima, ali smo otvoreni i za upit fizičkih lica koja imaju ozbiljne transportne potrebe. Svaki upit razmotriće naš tim.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy mb-4">
            Često postavljana pitanja
          </h2>
          <p className="text-text-muted text-lg">
            Odgovaramo na najčešća pitanja naših klijenata. Nešto niste pronašli?{" "}
            <a href="/kontakt" className="text-primary font-semibold hover:underline">
              Pitajte nas direktno.
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "border-primary/40 shadow-sm"
                    : "border-gray-mid hover:border-primary/20"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-light transition-colors"
                >
                  <span className="font-heading font-semibold text-navy text-base pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white rotate-45"
                        : "bg-gray-mid text-text-muted"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 bg-white">
                    <p className="text-text-muted leading-relaxed text-sm border-t border-gray-mid pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
