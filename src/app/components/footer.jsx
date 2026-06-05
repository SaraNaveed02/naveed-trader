"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import logo from "../../../public/images/logo.jpeg";

const RECENT_POSTS = [
  { title: "Quality products for every trade", date: "March 12, 2026" },
  { title: "New supplier partnership announced", date: "February 28, 2026" },
  { title: "Warehouse expansion update", date: "February 10, 2026" },
  { title: "Customer trust & delivery standards", date: "January 22, 2026" },
];

const QUICK_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { href: "#", label: "Facebook", Icon: CiFacebook },
  { href: "#", label: "Twitter", Icon: FaTwitter },
  { href: "#", label: "Instagram", Icon: FaInstagram },
  { href: "#", label: "LinkedIn", Icon: FaLinkedinIn },
];

const Footer = () => {
  return (
    <footer className="footer-dotted-bg relative overflow-hidden text-white bg-black">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(225,173,1,0.06),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {/* Company info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{x:0 ,opacity:1}}
            transition={{duration:1}}
            className="min-w-0 space-y-6"
          >
            <Link href="#" className="inline-flex items-center gap-3">
              <Image
                src={logo}
                alt="Naveed Trading Company"
                className="h-14 w-14 shrink-0 rounded-full border-2 border-[#E1AD01] object-contain sm:h-16 sm:w-16"
              />
              <span className="text-xl font-bold leading-tight sm:text-2xl">
                <span className="text-[#E1AD01]">Naveed</span>{" "}
                <span className="text-white">Trading</span>
              </span>
            </Link>

            <div className="space-y-4 text-sm leading-relaxed text-neutral-300 sm:text-[15px]">
              <p>
                Naveed Trading Company delivers reliable trading solutions with
                a focus on quality products and trusted partnerships across the
                region.
              </p>
              <p>
                Building transparent relationships with our customers — better
                service, fair deals, and consistent support without compromise.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-base font-bold text-white sm:text-lg">
                Stay Connected
              </h3>
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-white/90 transition-colors hover:text-[#E1AD01]"
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent posts */}
          <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{x:0 ,opacity:1}}
          transition={{duration:1.5,delay:1}}
          className="min-w-0">
            <h3 className="mb-6 text-lg font-bold text-white sm:text-xl">
              Recent Posts
            </h3>
            <ul className="space-y-5">
              {RECENT_POSTS.map((post) => (
                <li key={post.title} className="flex gap-3 sm:gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E1AD01] text-[#111111] sm:h-10 sm:w-10">
                    <HiPencil className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-snug text-white sm:text-base">
                      {post.title}
                    </p>
                    <p className="mt-1 text-xs text-[#E1AD01] sm:text-sm">
                      {post.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick links */}
          <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{x:0 ,opacity:1}}
          transition={{duration:2,delay:1.2}}
          className="min-w-0 md:col-span-2 lg:col-span-1">
            <h3 className="mb-6 text-lg font-bold text-white sm:text-xl">
              Quick Links
            </h3>
            <ul>
              {QUICK_LINKS.map(({ label, href, active }) => (
                <li
                  key={label}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <Link
                    href={href}
                    className={`block py-3.5 text-sm transition-colors sm:text-base ${
                      active
                        ? "font-medium text-[#E1AD01]"
                        : "text-neutral-300 hover:text-[#E1AD01]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-neutral-400 sm:text-sm">
              © {new Date().getFullYear()} Naveed Trading Company. All rights
              reserved.
            </p>
          </motion.div>
        </div>

        <motion.div
        initial={{ x: -210, opacity: 0 }}
        whileInView={{x:0 ,opacity:1}}
        transition={{duration:1}}
         className="mt-12 border-t border-white/10 pt-8 sm:mt-14">
          <h3 className="mb-3 text-base font-bold text-white sm:text-lg">
            Disclaimer
          </h3>
          <p className="max-w-3xl text-xs leading-relaxed text-neutral-400 sm:text-sm">
            Information on this website is provided for general purposes only.
            Naveed Trading Company makes no warranties about completeness or
            accuracy. Product availability and pricing may change without
            notice. By using this site you agree to our terms and policies.
          </p>
        </motion.div>
      </div>

      <Link
        href="#"
        aria-label="Back to top"
        className="absolute bottom-6 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E1AD01] text-lg font-bold text-[#111111] shadow-lg shadow-amber-500/20 transition-transform hover:scale-105 sm:right-6 sm:h-14 sm:w-14"
      >
        N
      </Link>
    </footer>
  );
};

export default Footer;
