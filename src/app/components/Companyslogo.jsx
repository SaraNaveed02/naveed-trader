"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.jpeg";

const LOGOS = [logo, logo, logo, logo, logo];

function LogoGroup({ id, hidden }) {
  return (
    <div
      className="logo-marquee-group flex w-1/2 shrink-0 items-center justify-around gap-12 px-8"
      aria-hidden={hidden}
    >
      {LOGOS.map((src, i) => (
        <Image
          key={`${id}-${i}`}
          src={src}
          alt={hidden ? "" : "company logo"}
          className="h-20 w-20 shrink-0 rounded-full object-contain"
        />
      ))}
    </div>
  );
}

const Companyslogo = () => {
  return (
    <section className="logo-marquee w-full overflow-hidden py-8" aria-label="Partner companies">
      <div className="logo-marquee-track flex w-[200%]">
        <LogoGroup id="a" />
        <LogoGroup id="b" hidden />
      </div>
    </section>
  );
};

export default Companyslogo;
