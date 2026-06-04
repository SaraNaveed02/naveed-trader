'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/images/logo.jpeg'
import { motion } from 'framer-motion'
const Upperpage = () => {
  const [hidden, setHidden] = useState(false)

  if (hidden) return null

  return (
    <div className="relative w-full overflow-hidden">
    <motion.div
    initial={{ opacity: 1, y: 0 }}
    animate={{ opacity: 0, y: '-100%' }}
    transition={{ duration: 4, delay: 0.5, ease: 'easeInOut' }}
    onAnimationComplete={() => setHidden(true)}
    className="flex flex-row justify-between items-center gap-5 bg-white text-black px-4 py-8 md:py-12">
    <Image src={logo} alt="upperimage" className="relative md:w-1/3 object-contain"/>  
    <div className="hidden md:flex flex-col gap-5">
      <div className="flex flex-row justify-center gap-3 items-center mt-4">
   <div className="w-2 h-48 md:h-64 lg:h-80 bg-black rounded-lg"></div>
   <div className="w-2 h-40 md:h-56 lg:h-72 bg-[#ab723a] rounded-lg"></div>
   <div className="w-2 h-52 md:h-72 lg:h-96 bg-black rounded-lg"></div>
    </div>
    </div> 
    {/* lg screen */}
<div className='hidden md:flex flex-col '>
  <h1 className='text-[5rem] font-bold uppercase text-center'>
    Naveed trading company
  </h1>
  <p className='text-1xl  uppercase text-center'>Delivering Quality, Fulfilling Trust</p>
</div>
{/* small screen */}
<div className='md:hidden flex flex-col text-center gap-5 top-9/12 left-7.5 absolute z-10'>
  <h1 className='text-[1rem] font-bold uppercase  text-center'>
    Naveed trading company
  </h1>
  <p className='text-lg uppercase text-center'>Delivering Quality, Fulfilling Trust</p>
</div>

    </motion.div>
    </div>
  )
};

export default Upperpage;
