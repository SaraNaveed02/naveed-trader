import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Companyslogo from "./components/Companyslogo";
import Aboutus from "./components/Aboutus";
import OurService from "./components/OurService";
import Contact from "./components/Contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl overflow-hidden">
        <HeroSection />
        <Aboutus />
        <Companyslogo />
        <OurService />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
