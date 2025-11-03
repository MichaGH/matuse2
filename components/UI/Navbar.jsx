"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FacebookIcon, Instagram, ChevronDown } from "lucide-react";

const lineProps = {
  className: "block h-[3px] w-8 rounded bg-current origin-center absolute",
  transition: { duration: 0.3, ease: "easeInOut" },
};

// main links
const navLinks = [
  { label: "Domov", href: "/" },
  { label: "Stavebníctvo", href: "/sluzby/stavebnictvo" },
  { label: "Kovovýroba", href: "/sluzby/kovovyroba" },
  { label: "Galéria", href: "/galeria" },
  { label: "Kontakt", href: "/kontakt" },
];

// navbar heights
const navHeight = {
  scrolled: 60,
  unscrolled: 80,
};

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Run scroll behavior ONLY on the homepage
  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Background + height animation
  const navBgColor = isHome
    ? (mobileOpen || scrolled ? "#000" : "rgba(0,0,0,0)")
    : "#000";
  const navHeightPx = isHome
    ? (scrolled ? navHeight.scrolled : navHeight.unscrolled)
    : navHeight.unscrolled;

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        backgroundColor: navBgColor,
        height: navHeightPx,
      }}
      transition={{ duration: 0.3 }}
      className={[
        // positioning: fixed on home, relative elsewhere
        isHome ? "fixed top-0 left-0" : "relative",
        "w-full z-50 font-space-grotesk",
        // borders: subtle on home when transparent; consistent on subpages
        isHome
          ? scrolled
            ? "border-b-0"
            : "border-b border-gray-200/15"
          : "border-b border-white/20",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full pl-6 md:px-16">
        {/* Left: Logo */}
        <div className="text-4xl font-bold text-blue-600 flex flex-col font-logo">
          <Link href="/">MATUSE</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <div key={label} className="relative group">
                <Link
                  href={href}
                  className={`${
                    // keep white text in both modes (home top, or black subpage)
                    "text-white"
                  } uppercase font-primary text-sm font-medium transition`}
                >
                  {label}
                </Link>
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-150 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center px-8">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="relative w-12 h-12 px-3 flex flex-col items-center justify-center focus:outline-none text-white"
          >
            <motion.span
              {...lineProps.transition}
              className={lineProps.className}
              animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -10 }}
            />
            <motion.span
              {...lineProps.transition}
              className={lineProps.className}
              animate={mobileOpen ? { opacity: 0, y: 0 } : { opacity: 1 }}
            />
            <motion.span
              {...lineProps.transition}
              className={lineProps.className}
              animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 10 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed left-0 border-t border-white/25 bg-black shadow-lg z-40 flex flex-col p-6 w-full"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="py-3 text-lg text-white hover:text-blue-600 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
