import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Companyslogo from "./components/Companyslogo";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl">
        <HeroSection />
      </div>
      <Companyslogo />
    </>
  );
}
