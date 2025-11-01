import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import NavLinks from "@/constant/constants";
import { MdContactSupport } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

const Footer = () => {
  return (
    <div className={`transition-all  duration-200 z-index[10000] w-full`}>
      <div className="flex justify-between w-[90%] mx-auto h-full lg:flex-row flex-col items-center lg:items-start ">
        {/* Logo */}
        <Link className="flex items-center space-x-2 lg:mb-0 mb-4" href="/">
          <div className=" w-20 h-20 rounded-full flex items-center justify-center flex-col">
            <Image src={Logo} alt="Goodbye Junk Logo" />
          </div>
          <h1 className="text-xl sm:block md:text-2xl text-primary-red font-bold">
            Goodbye Junk
          </h1>
        </Link>
        {/* Navigation Links */}
        <div className="space-x-10  flex flex-col items-start lg:mb-0 mb-4 ">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-base hover:text-primary-blue font-medium text-primary-red transition-all duration-200"
            >
              <p>• {link.name}</p>
            </Link>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="flex flex-col lg:items-start items-center space-y-4 lg:mb-0 mb-4">
          <Link
            href="mailto:info@junkbyebye.com"
            className="flex items-center spaxe-x-3 mb-4"
          >
            <BiEnvelope className="w-9 h-9 text-primary-red" />
            <span className="text-sm font-bold">info@junkbyebye.com</span>
          </Link>
          <Link
            href="tel:+18552932935"
            className="flex items-center spaxe-x-3 mb-4"
          >
            <BiPhone className="w-9 h-9 text-primary-red" />
            <span className="text-sm font-bold">
              855-BYE-BYE5 / (855)-293-2935
            </span>
          </Link>
          <Link
            href="https://www.google.com/maps?q=19425+Soledad+Canyon+Rd,+Suite+272,+Canyon+Country,+CA+91351"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center spaxe-x-3 mb-4"
          >
            <BiMap className="w-9 h-9 text-primary-red" />
            <span className="text-sm font-bold">
              19425 Soledad Canyon Rd, Suite 272, Canyon Country, CA 91351
            </span>
          </Link>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-5 mb-5">
        &copy; {new Date().getFullYear()} Goodbye Junk. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
