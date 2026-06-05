"use client";
import Image from "next/image";
import React from "react";
import seriveImage from "../../../public/images/service image.png";
import servicelogo from "../../../public/images/servicelogo.png";
import { motion } from "framer-motion";

const SERVICES = [
  { id: 1, delay: 0.60 },
  { id: 2, delay: 0.30 },
  { id: 3, delay: 0.10 },
];

function ServiceCard({ delay }) {
  return (
    <motion.article
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="flex min-w-0 flex-col items-center justify-center gap-3 rounded-xl bg-white/80 px-4 py-6 text-center shadow-sm backdrop-blur-sm sm:px-5 sm:py-8 md:bg-transparent md:shadow-none md:backdrop-blur-none"
    >
      <Image
        src={servicelogo}
        alt="service logo"
        className="h-16 w-16 shrink-0 rounded-full object-cover sm:h-20 sm:w-20"
      />
      <h3 className="text-base font-semibold sm:text-lg">service name</h3>
      <p className="max-w-xs text-sm leading-relaxed text-neutral-700 sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </motion.article>
  );
}

const OurService = () => {
  return (
    <motion.section
    initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      id="services"
      className="relative w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:min-h-[32rem] md:py-20 lg:min-h-[36rem] lg:px-8"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-0 mx-auto flex justify-center md:absolute md:inset-x-0 md:top-8 md:mx-0 lg:top-4"
      >
        <Image
          src={seriveImage}
          alt="service illustration"
          className="h-auto w-full max-w-[240px] object-contain p-2 sm:max-w-xs md:max-w-md md:p-8 lg:max-w-lg"
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 384px, 512px"
          priority={false}
        />
      </motion.div>

      <div className="relative z-10 mt-6 sm:mt-8 md:mt-52 lg:mt-56">
        <h2 className="mb-8 text-center text-2xl font-bold sm:mb-10 sm:text-3xl lg:text-4xl">
          Our Services
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
          {SERVICES.map(({ id, delay }) => (
            <ServiceCard key={id} delay={delay} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurService;
