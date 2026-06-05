"use client";
import Image from "next/image";
import React from "react";
import aboutImage from "../../../public/images/about-us.jpg";
import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <section
      id="about"
      className="w-full px-4 py-10 sm:px-6 sm:py-12 md:py-16 lg:px-8"
    >
      <div className="grid min-w-0 grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="min-w-0"
        >
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">About us</h2>
          <p className="mt-4 w-full break-words text-sm leading-relaxed tracking-wide text-neutral-700 sm:text-base lg:mt-6 lg:text-lg lg:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            delectus veritatis, aut a, consequatur nobis facilis, aliquam eaque
            aspernatur quisquam numquam harum distinctio asperiores dolor facere
            dolorem dolores error iste?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            vitae labore quaerat? Impedit possimus autem ea cumque obcaecati,
            debitis labore eligendi ratione eum praesentium vero accusamus atque
            expedita! Iure, ipsam.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative min-w-0 aspect-[4/3] w-full overflow-hidden rounded-lg sm:aspect-[5/4] md:aspect-[4/3] lg:min-h-[22rem] lg:aspect-auto"
        >
          <Image
            src={aboutImage}
            alt="about us"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            priority={false}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutus;
