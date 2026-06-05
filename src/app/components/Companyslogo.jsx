"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.jpeg";
import { motion } from 'framer-motion'

const LOGOS = [logo, logo, logo, logo, logo];

function LogoGroup({ id, hidden }) {
  return (
    <motion.div
  
      className="logo-marquee-group flex w-1/2 shrink-0 items-center justify-around gap-12 px-8" 
      aria-hidden={hidden}
    >
      {LOGOS.map((src, i) => (
        <Image
          key={`${id}-${i}`}
          src={src}
          alt={hidden ? "" : "company logo"}
          className="h-24 w-20 shrink-0 rounded-full object-contain"
        />
      ))}
    </motion.div>
  );
}

const Companyslogo = () => {
  return (
    <motion.section
    initial={{y:90, opacity:0}}
    whileInView={{y:0 , opacity:1}}
    transition={{duration:1.5}}
    className="logo-marquee w-full overflow-hidden py-8" aria-label="Partner companies">
      <motion.div
      
      className="logo-marquee-track flex w-[200%]">
        <LogoGroup id="a" />
        <LogoGroup id="b" hidden />
      </motion.div>
    </motion.section>
  );
};

export default Companyslogo;
