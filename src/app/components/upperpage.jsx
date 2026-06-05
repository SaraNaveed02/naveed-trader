"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/images/logo.jpeg";
import { motion } from "framer-motion";

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
      className="fixed inset-0 z-[100] flex flex-row items-center justify-between gap-5 overflow-hidden bg-white px-4 py-8 text-black md:py-12"
    >
      <Image
        src={logo}
        alt="Naveed Trading Company"
        className="relative max-h-[40vh] w-auto object-contain md:max-h-none md:w-1/3"
      />

      <div className="hidden flex-col gap-5 md:flex">
        <div className="mt-4 flex flex-row items-center justify-center gap-3">
          <div className="h-48 w-2 rounded-lg bg-black md:h-64 lg:h-80" />
          <div className="h-40 w-2 rounded-lg bg-[#ab723a] md:h-56 lg:h-72" />
          <div className="h-52 w-2 rounded-lg bg-black md:h-72 lg:h-96" />
        </div>
      </div>

      <div className="hidden flex-col md:flex">
        <h1 className="text-center text-[5rem] font-bold uppercase">
          Naveed trading company
        </h1>
        <p className="text-center text-xl uppercase">
          Delivering Quality, Fulfilling Trust
        </p>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 flex w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col gap-5 text-center md:hidden">
        <h1 className="text-base font-bold uppercase sm:text-lg">
          Naveed trading company
        </h1>
        <p className="text-sm uppercase sm:text-lg">
          Delivering Quality, Fulfilling Trust
        </p>
      </div>
    </motion.div>
  );
};

export default Upperpage;
