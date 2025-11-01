import Image from "next/image";
import aboutBg from "../../public/hero.png"; // you can use a different bg if you want

const About = () => {
  return (
    <div className="overflow-hidden pt-120vh">
      <div className="relative flex items-center text-black z-[-1999]  overflow-hidden flex-col mt-50 mb-50">
        {" "}
        {/* Background Image */}
        <Image
          src={aboutBg}
          alt="About Goodbye Junk Background"
          fill
          className="object-cover opacity-20 "
        />
        {/* Content */}
        <div className="relative w-[90%] max-w-5xl text-center z-10 bg-white/70 p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-red mb-6">
            About Goodbye Junk
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-gray-800">
            Goodbye Junk started with a simple idea — make junk removal easier,
            friendlier, and faster. We’re a local team based in{" "}
            <strong>Santa Clarita</strong>, proudly serving SoCal 24/7. We
            believe junk removal should be quick, affordable, and stress-free.
          </p>

          <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-gray-800 mt-6">
            We show up on time, give upfront pricing, and always treat your home
            or business with care. Whether it’s one item or an entire property,
            Goodbye Junk delivers clean, professional service — every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
