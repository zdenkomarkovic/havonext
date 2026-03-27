"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (!href.startsWith("#")) {
      window.location.href = href;
      return;
    }
    if (pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={pathname === "/" ? "#hero" : "/"}
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              handleNavClick("#hero");
            }
          }}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.jpeg"
            alt="HAVONEXT logo"
            width={48}
            height={48}
            className="rounded-sm"
          />
          <span
            className={`font-heading font-bold text-xl tracking-wide ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            HAVONEXT
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`font-medium text-sm transition-colors hover:text-primary ${
                scrolled ? "text-text-dark" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className={`hidden xl:inline-flex items-center gap-1.5 font-medium text-sm transition-colors hover:text-primary ${
              scrolled ? "text-text-dark" : "text-white/90"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {COMPANY.phone}
          </a>
          <a
            href="/kontakt"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/kontakt");
            }}
            className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Kontaktirajte nas
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg ${
            scrolled ? "text-navy" : "text-white"
          }`}
          aria-label="Otvori meni"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-mid">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-text-dark font-medium py-3 px-2 hover:text-primary transition-colors border-b border-gray-mid last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/kontakt"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/kontakt");
              }}
              className="mt-3 bg-primary hover:bg-primary-dark text-white font-semibold text-center py-3 rounded-lg transition-colors"
            >
              Kontaktirajte nas
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
