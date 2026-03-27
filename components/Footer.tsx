"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    if (pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.jpeg"
                alt="HAVONEXT logo"
                width={44}
                height={44}
                className="rounded-sm"
              />
              <span className="font-heading font-bold text-xl tracking-wide">
                HAVONEXT
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Vaš pouzdan partner za organizaciju drumskog saobraćaja u Srbiji.
              Brzo, sigurno i transparentno.
            </p>
            <div className="mt-5 space-y-2">
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {COMPANY.email}
              </a>
              <br />
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/50 mb-5">
              Navigacija
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company info */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/50 mb-5">
              Podaci o firmi
            </h4>
            <ul className="space-y-3">
              <li className="text-sm">
                <span className="text-white/50 block text-xs">Naziv</span>
                <span className="text-white/80">{COMPANY.name}</span>
              </li>
              <li className="text-sm">
                <span className="text-white/50 block text-xs">Matični broj</span>
                <span className="text-white/80">{COMPANY.mb}</span>
              </li>
              <li className="text-sm">
                <span className="text-white/50 block text-xs">PIB</span>
                <span className="text-white/80">{COMPANY.pib}</span>
              </li>
              <li className="text-sm">
                <span className="text-white/50 block text-xs">Telefon</span>
                <a href={`tel:${COMPANY.phoneTel}`} className="text-white/80 hover:text-primary transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="text-sm">
                <span className="text-white/50 block text-xs">Email</span>
                <a href={`mailto:${COMPANY.email}`} className="text-white/80 hover:text-primary transition-colors">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} {COMPANY.name}. Sva prava zadržana.
          </p>
          <p className="text-white/50 text-xs">
            Izrada sajta{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
