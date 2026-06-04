import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent py-4 top-0 sticky " >
        <ul className="flex gap-4 justify-center items-center textblack bg-transparent ">
            <li className="text-xl  cursor-pointer hover:opacity-80 hover:text-[#E1AD01]">Home</li>
            <li className="text-xl  cursor-pointer hover:opacity-80 hover:text-[#E1AD01]">About</li>
            <li className="text-xl  cursor-pointer hover:opacity-80 hover:text-[#E1AD01]">Services</li>
            <li className="text-xl  cursor-pointer hover:opacity-80 hover:text-[#E1AD01]">Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar