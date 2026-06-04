'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/images/logo.jpeg'
import { motion } from 'framer-motion'
const Upperpage = () => {
  return (
    <motion.div  
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='flex flex-row justify-between items-center gap-5'>
    <Image src={logo} alt="upperimage" className='w-1/3 h-screen object-contain'/>  
    <div className='flex flex-row justify-center gap-3 items-center mt-4'>
   <div className='w-2 h-[30rem] bg-black rounded-lg'></div>
   <div className='w-2 h-[25rem]  bg-[#ab723a] rounded-lg'></div>
   <div className='w-2 h-[33rem] bg-black rounded-lg'></div>
    </div>
<div>
  <h1 className='text-[5rem] font-bold uppercase text-center'>
    Naveed trading company
  </h1>
  <p className='text-1xl  uppercase text-center'>Delivering Quality, Fulfilling Trust</p>
</div>
    </motion.div>
  )
};

export default Upperpage;
