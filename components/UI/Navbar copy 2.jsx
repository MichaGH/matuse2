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
    { label: "Kovovýroba", href: "/sluzby/vyroba" },
    { label: "Galéria", href: "/galeria" },
    { label: "Kontakt", href: "/kontakt" },
]
const navHeight = {
    scrolled: 60,
    unscrolled: 80,
};

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navBgColor = mobileOpen || scrolled ? "#ffffff" : "rgba(0,0,0,0)";
    const pathname = usePathname();

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{
                backgroundColor: navBgColor,
                height: scrolled ? navHeight.scrolled : navHeight.unscrolled,
            }}
            transition={{ duration: 0.3 }}
            className={`${scrolled ? "border-b-0" : "border-b border-gray-200/15"
                } fixed top-0 left-0 w-full z-50 font-space-grotesk `}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-16  ">
                {/* Left: Logo + Navigation */}


                <div className="text-4xl font-bold text-blue-600 flex flex-col  font-logo">
                    <Link href="/">MATUSE</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map(({ label, href }) => {
                        const isActive = pathname === href;

                        return (
                            <div key={label} className="relative group">
                                <Link
                                    href={label}
                                    className={`${scrolled ? "text-black" : "text-white"
                                        } uppercase font-primary text-sm  font-medium transition`}
                                >
                                    {label}
                                </Link>
                                <span
                                    className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-150 ${isActive ? "w-full" : "w-0 group-hover:w-full"
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
                        className={`relative w-12 h-12 px-3 flex flex-col items-center justify-center focus:outline-none ${scrolled || mobileOpen ? "text-black" : "text-white"
                            }`}
                    >
                        <motion.span
                            {...lineProps.transition}
                            className={`${lineProps.className}`}
                            animate={
                                mobileOpen
                                    ? { rotate: 45, y: 0 }
                                    : { rotate: 0, y: -10 }
                            }
                        />
                        <motion.span
                            {...lineProps.transition}
                            className={`${lineProps.className}`}
                            animate={mobileOpen ? { opacity: 0, y: 0 } : { opacity: 1 }}
                        />
                        <motion.span
                            {...lineProps.transition}
                            className={`${lineProps.className}`}
                            animate={
                                mobileOpen
                                    ? { rotate: -45, y: 0 }
                                    : { rotate: 0, y: 10 }
                            }
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
                        className={`fixed left-0 top-[${scrolled ? navHeight.scrolled : navHeight.unscrolled
                            }px]  bg-black shadow-lg z-40 flex flex-col p-6 w-full`}
                    >
                        {navLinks.map(({ label, href }) => {
                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    className="py-3 text-lg text-gray-700 hover:text-blue-600 font-medium"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}