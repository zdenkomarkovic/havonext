import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Kontakt – Zatražite ponudu",
  description:
    "Kontaktirajte HAVONEXT D.O.O. za organizaciju drumskog prevoza tereta u Srbiji. Besplatna ponuda, odgovaramo u roku od 24 sata.",
  url: `${SITE_URL}/kontakt`,
});

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Navy header */}
        <div className="relative bg-navy overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full -translate-x-1/3 translate-y-1/4" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-primary/20 text-primary-light font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Kontakt
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white">
              Javite nam se
            </h1>
          </div>
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
