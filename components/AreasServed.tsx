import Image from "next/image";
import hero from "../public/hero.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const AreasServed = () => {
  return (
    <div className="relative flex flex-col items-center text-black overflow-hidden mt-60 mb-60">
      {/* Background image */}
      <Image
        src={hero}
        alt="Areas Served Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-[-1000] "
      />

      {/* Content */}
      <div className="relative w-[90%] flex flex-col max-w-5xl text-center mt-10 mb-16 ">
        <h1 className="z-[-1000] text-3xl sm:text-4xl md:text-5xl font-bold text-primary-red mb-6">
          Areas We Proudly Serve
        </h1>

        <p className="z-[-1000] text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8">
          Goodbye Junk proudly serves <strong>Southern California</strong> —
          including{" "}
          <strong>Santa Clarita Valley, Los Angeles, Antelope Valley,</strong>{" "}
          and <strong>Orange County</strong>. Our team is local, fast, and
          reliable.
        </p>

        {/* Area Lists */}
        <div className=" z-[-1000] text-left text-sm sm:text-base md:text-lg space-y-3 bg-white/70 p-6 rounded-xl shadow-md inline-block">
          <p>
            • <strong>Santa Clarita Valley</strong> — Valencia, Newhall, Saugus,
            Stevenson Ranch
          </p>
          <p>
            • <strong>Los Angeles</strong> — San Fernando Valley, Burbank,
            Glendale, North Hollywood
          </p>
          <p>
            • <strong>Antelope Valley</strong> — Lancaster, Palmdale, Quartz
            Hill
          </p>
          <p>
            • <strong>Orange County</strong> — Anaheim, Irvine, Santa Ana
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center px-10 py-3 bg-primary-red hover:bg-primary-blue transition-all duration-200 rounded-lg text-lg font-medium text-white"
        >
          Book a Pickup
          <BsArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default AreasServed;
