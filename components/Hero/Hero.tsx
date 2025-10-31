import Link from "next/link";
import hero from "../../public/hero.png";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="relative flex items-center text-black overflow-hidden flex-col mt-50">
      <div className="relative flex flex-col items-center">
        <Image src={hero} alt="Hero Image" className="z-[-1999] w-200" />
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
          Say Bye Bye to Junk <br /> Fast, Local, Affordable.
        </h1>
        <h2 className="mt-5 text-sm px-2 text-center sm-text-2xl font-medium flex items-center">
          From small pick-ups to full property cleanouts, Goodbye Junk makes
          junk removal simple. Call, text, or book online 24/7 <br />
          and let our friendly crew handle the heavy lifting.
        </h2>
        <Link
          href={"/contact"}
          className="mt-6 px-10 py-2 bg-primary-red hover:bg-primary-blue transition-all duration-200 rounded-lg text-lg font-medium"
        >
          <span>Let's Go</span>
          <BsArrowRight className="inline-block ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
