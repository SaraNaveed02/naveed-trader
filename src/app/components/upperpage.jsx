"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/images/logo.jpeg";
import { motion } from "framer-motion";

const BarDecor = ({ className = "" }) => (
  <div
    className={`flex flex-row items-end justify-center gap-2 sm:gap-3 ${className}`}
  >
    <div className="h-20 w-1.5 rounded-lg bg-black sm:h-24 sm:w-2 md:h-64 lg:h-80" />
    <div className="h-16 w-1.5 rounded-lg bg-[#ab723a] sm:h-20 sm:w-2 md:h-56 lg:h-72" />
    <div className="h-24 w-1.5 rounded-lg bg-black sm:h-28 sm:w-2 md:h-72 lg:h-96" />
  </div>
);

const Upperpage = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (hidden) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <motion.div
      role="presentation"
      aria-hidden={hidden}
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 3, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => setHidden(true)}
      className="fixed inset-0 z-[100] overflow-hidden bg-white text-black"
    >
      {/* Mobile & small tablets: stacked layout */}
      <div className="flex h-full min-h-0 flex-col items-center justify-center gap-10 px-5 py-12 text-center sm:gap-12 sm:px-8 md:hidden">
        <Image
          src={logo}
          alt="Naveed Trading Company"
          className="h-24 w-24 shrink-0 rounded-full border-2 border-amber-400 object-contain sm:h-28 sm:w-28"
          priority
        />

        <div className="max-w-xs w-full space-y-2 sm:max-w-sm sm:space-y-3">
          <h1 className="text-lg font-bold uppercase leading-tight tracking-wide sm:text-2xl">
            Naveed trading company
          </h1>
          <p className="text-xs uppercase leading-relaxed text-neutral-700 sm:text-sm">
            Delivering Quality, Fulfilling Trust
          </p>
        </div>

        <BarDecor />
      </div>

      {/* Desktop: horizontal layout */}
      <div className="hidden h-full min-h-0 flex-row items-center justify-between gap-6 px-8 py-12 lg:gap-10 lg:px-12 lg:py-16 md:flex">
        <Image
          src={logo}
          alt="Naveed Trading Company"
          className="h-auto max-h-[55vh] w-[28%] min-w-[140px] max-w-[280px] shrink-0 object-contain lg:w-1/4"
          priority
        />

        <BarDecor className="shrink-0" />

        <div className="min-w-0 flex-1 max-w-2xl space-y-3 text-center lg:space-y-4">
          <h1 className="text-3xl font-bold uppercase leading-tight lg:text-5xl xl:text-[5rem]">
            Naveed trading company
          </h1>
          <p className="text-base uppercase text-neutral-700 lg:text-xl">
            Delivering Quality, Fulfilling Trust
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Upperpage;
