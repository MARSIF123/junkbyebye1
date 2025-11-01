import Image from "next/image";
import bg from "../../public/hero.png"; // reuse hero bg or replace with a service-themed one

const Services = () => {
  return (
    <div className="overflow-hidden ">
      <section className="relative flex flex-col items-center text-black overflow-hidden py-20 mt-[80px] z-[-1999] mb-60">
        {/* Background Image */}
        <Image
          src={bg}
          alt="Goodbye Junk Services Background"
          fill
          className="object-cover opacity-20 -z-10"
        />

        {/* Content */}
        <div className="relative w-[90%] max-w-5xl text-center bg-white/70 p-8 rounded-2xl shadow-md z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-red mb-6">
            Our Services
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8 text-gray-800">
            We handle anything you need gone — from single-item pickups to major
            cleanouts. Our professional crew works safely, quickly, and always
            with care.
          </p>

          <ul className="text-left text-base sm:text-lg md:text-xl font-medium leading-relaxed space-y-3 text-gray-900 mx-auto w-fit">
            <li>• Residential Junk Removal</li>
            <li>• Commercial / Office Cleanouts</li>
            <li>• Garage & Estate Cleanouts</li>
            <li>• Furniture & Appliance Removal</li>
            <li>• Hot Tub / Shed / Mattress Removal</li>
            <li>• Construction & Renovation Debris</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;
