"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/constants";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Došlo je do greške. Pokušajte ponovo ili nas kontaktirajte direktno.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-text-muted text-lg max-w-2xl mx-auto text-center mb-16">
          Imate pitanje ili trebate ponudu? Popunite formu ili nas kontaktirajte
          direktno – odgovaramo brzo.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-navy rounded-2xl p-8 text-white h-full">
              <h3 className="font-heading font-bold text-xl mb-8">
                Informacije o kompaniji
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-white hover:text-primary transition-colors font-medium">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Telefon</p>
                    <a href={`tel:${COMPANY.phoneTel}`} className="text-white hover:text-primary transition-colors font-medium">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Web sajt</p>
                    <p className="text-white font-medium">{COMPANY.website}</p>
                  </div>
                </div>

                <div className="border-t border-white/15 pt-6 space-y-3">
                  <p className="text-white/60 text-xs uppercase tracking-wide">Podaci o kompaniji</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/60 text-sm">Naziv</span>
                      <span className="text-white text-sm font-medium">{COMPANY.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60 text-sm">Matični broj</span>
                      <span className="text-white text-sm font-medium">{COMPANY.mb}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60 text-sm">PIB</span>
                      <span className="text-white text-sm font-medium">{COMPANY.pib}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center bg-gray-light rounded-2xl p-12 text-center border border-gray-mid">
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-navy mb-3">Poruka poslata!</h3>
                  <p className="text-text-muted">
                    Hvala na interesovanju. Javićemo vam se u najkraćem roku.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
                      Ime i prezime <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Vaše ime"
                      className="w-full px-4 py-3 rounded-lg border border-gray-mid bg-gray-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-text-dark placeholder:text-text-muted"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+381 ..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-mid bg-gray-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-text-dark placeholder:text-text-muted"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                    Email adresa <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vas@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-mid bg-gray-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-text-dark placeholder:text-text-muted"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                    Poruka <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Opišite vaše potrebe (vrsta tereta, destinacija, rokovi...)"
                    className="w-full px-4 py-3 rounded-lg border border-gray-mid bg-gray-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors text-text-dark placeholder:text-text-muted resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors shadow-lg text-base"
                >
                  {loading ? "Slanje..." : "Pošaljite poruku"}
                </button>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <p className="text-text-muted text-xs text-center">
                  Odgovaramo u roku od 24 sata. Vaši podaci su sigurni i neće biti deljeni.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
