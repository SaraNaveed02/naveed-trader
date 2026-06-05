"use client"
import React from "react";
import { motion } from 'framer-motion'
const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <motion.div
        initial={{ width: 0, height: 0 }}
        whileInView={{ width: 160, height: 160 }}
        transition={{ duration: 1.5 }}
        className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-amber-600 absolute top-10 md:top-16 left-4 md:left-6"
      />
      <motion.div
        initial={{ width: 0, height: 0 }}
        whileInView={{ width: 160, height: 160 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-amber-400 opacity-50 absolute top-24 md:top-36 left-12 md:left-24 z-10"
      />
      <motion.div
        initial={{ width: 0, height: 0 }}
        whileInView={{ width: 160, height: 160 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-amber-200 absolute top-40 md:top-56 left-2 md:left-8 opacity-90 z-0"
      />
      <motion.div
        initial={{ x: 150 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2 }}
        className="md:w-80 md:h-80 w-40 h-40 rounded-bl-full bg-amber-300 absolute top-0 right-0 "
      />
      <motion.div
        initial={{ width: 0, height: 0 }}
        whileInView={{ width: 160, height: 160 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="md:block hidden w-40 h-40 rounded-full bg-amber-300 opacity-50 absolute top-40 right-40 z-10"
      />
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2 }}
        className=" md:w-80 md:h-80 w-40 h-40  rounded-tr-full bg-amber-300 absolute bottom-10 left-0"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-20">
        <h2 className="text-4xl font-bold uppercase tracking-wide md:text-5xl">
          Heading
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-900 max-w-3xl md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis explicabo asperiores rerum repellat.
        </p>
      </div>
  </div>
  );
};

export default HeroSection;
