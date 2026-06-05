"use client"
import Image from "next/image";
import React from "react";
import contactus from "../../../public/images/contactus1.jpg";
import {motion} from 'framer-motion'
const inputClass =
  "mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 sm:text-base";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full px-4 py-10 sm:px-6 sm:py-12 md:py-16 lg:px-8"
    >
      <h2 className="mb-8 text-center text-2xl font-bold sm:mb-10 sm:text-3xl lg:text-4xl">
        Contact us
      </h2>

      <div className="grid min-w-0 grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 lg:gap-14">
        <motion.div
        initial={{x:-100 , opacity:0}}
        whileInView={{x:0,opacity:1}}
transition={{duration:1}}
className="relative min-h-64 min-w-0 w-full overflow-hidden rounded-lg sm:min-h-72 md:min-h-80 lg:min-h-full">
          <Image
            src={contactus}
            alt="Contact us"
            fill
            className="object-contain p-1 sm:p-2"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>

        <form 
         action="https://formspree.io/f/mvzngyve"
  method="POST"
        className="flex min-w-0 w-full flex-col gap-5 sm:gap-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            <label className="flex flex-col text-sm font-medium text-neutral-800 sm:text-base">
              First Name
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className={inputClass}
                required
              />
            </label>
            <label className="flex flex-col text-sm font-medium text-neutral-800 sm:text-base">
              Last Name
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className={inputClass}
                required
              />
            </label>
          </div>

          <label className="flex flex-col text-sm font-medium text-neutral-800 sm:text-base">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className={inputClass}
              required
            />
          </label>

          <label className="flex flex-col text-sm font-medium text-neutral-800 sm:text-base">
            Message
            <textarea
              name="message"
              rows={4}
              placeholder="Your message"
              className={`${inputClass} min-h-[7rem] resize-y sm:min-h-[8rem]`}
              required
            />
          </label>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600 sm:w-auto sm:px-8 sm:text-base"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
