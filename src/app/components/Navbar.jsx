"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import logo from "../../../public/images/logo.jpeg";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SocialLinks = ({ className = "" }) => (
  <div className={`flex items-center  gap-3 ${className}`}>
    <Link
      href="#"
      aria-label="Facebook"
      className="text-neutral-800 transition-colors hover:text-[#E1AD01]"
    >
      <CiFacebook className="h-7 w-7 sm:h-8 sm:w-8" />
    </Link>
    <Link
      href="#"
      aria-label="Instagram"
      className="text-neutral-800 transition-colors hover:text-[#E1AD01]"
    >
      <FaInstagram className="h-7 w-7 sm:h-8 sm:w-8" />
    </Link>
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="#" className="shrink-0" onClick={closeMenu}>
          <Image
            src={logo}
            alt="NTC logo"
            className="h-12 w-12 rounded-full border-2 border-amber-400 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
          />
        </Link>

        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-base font-medium text-neutral-900 transition-colors hover:text-[#E1AD01] lg:text-lg"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <SocialLinks className="hidden md:flex" />

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-900 transition-colors hover:bg-neutral-100 hover:text-[#E1AD01] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <HiX className="h-7 w-7" />
          ) : (
            <HiMenu className="h-7 w-7" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "screen", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-neutral-200 bg-white md:hidden h-screen"
          >
            <ul className="flex flex-col gap-1 px-4 py-3 sm:px-6 ">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className="block rounded-md px-3 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-amber-50 hover:text-[#E1AD01]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-neutral-100 px-4 py-4 sm:px-6">
              <SocialLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
