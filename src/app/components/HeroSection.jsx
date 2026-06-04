"use client"
import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion'
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
  <div className="relative w-full h-screen max-[639px]:w-[640px] max-[639px]:origin-top-left max-[639px]:scale-[calc(100vw/640px)] max-[639px]:h-[calc(100vh*640px/100vw)]">
 {/* left small circle css */}
  <div className=" relative  ">
    <motion.div
    initial={{width:0 , height:0}}
   whileInView={{width:160 ,height:160}}
    transition={{duration:1.5}}
    className="w-40 h-40 rounded-full bg-amber-600 absolute"></motion.div>
    <motion.div  initial={{width:0 , height:0}}
   whileInView={{width:160 ,height:160}}
    transition={{duration:1.5 ,delay:.5}} className="w-40 h-40 rounded-full bg-amber-400 opacity-50 absolute top-28 left-20 z-2"></motion.div>
    <motion.div 
      initial={{width:0 , height:0}}
      whileInView={{width:160 ,height:160}}
       transition={{duration:1.5 ,delay:1}}
    className="w-40 h-40 rounded-full bg-amber-200 absolute  top-52 opacity-90 z-1"></motion.div>
  </div>
  {/* top right cirlce css */}
<div>
<motion.div
 initial={{x:150}}
 whileInView={{x:0}}
 transition={{duration:2}}
className="w-80 h-80 rounded-bl-full bg-amber-300 z-0 absolute top-0 right-0"></motion.div>
<motion.div 
initial={{width:0 , height:0}}
whileInView={{width:160 ,height:160}}
 transition={{duration:1.5 ,delay:1}}
className="w-40 h-40 rounded-full bg-amber-300 opacity-50 absolute top-40 right-40 z-2"></motion.div>

</div>
{/* text and heading */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
    <h2 className="text-3xl uppercase">Heading</h2>
    <p className="text-md max-w-lg">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
      explicabo asperiores rerum repellat.
    </p>
  </div>
  {/* left bottom cirlce css */}
  <div>
  <motion.div
  initial={{x:-100}}
  whileInView={{x:0}}
  transition={{duration:2}}
  className="w-80 h-80 rounded-tr-full bg-amber-300 z-0 absolute bottom-10 left-0"></motion.div>

  </div>
  </div>
</div>
  );
};

export default HeroSection;
