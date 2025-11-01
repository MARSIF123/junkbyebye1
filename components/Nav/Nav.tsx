"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import { NavLinks } from "@/constant/constants";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdContactSupport } from "react-icons/md";

type NavProps = {
  openNavHandler: () => void;
};

const Nav = ({ openNavHandler }: NavProps) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setNavBg(true);
      }
      if (window.scrollY < 50) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-primary-yellow shadow-md" : "fixed"
      } duration-200 h-[12vh] z-index[10000] fixed w-full`}
    >
      <div className="flex items-center justify-between w-[90%] mx-auto h-full">
        {/* Logo */}
        <Link className="flex items-center space-x-2" href="/">
          <div className=" w-20 h-20 rounded-full flex items-center justify-center flex-col">
            <Image src={Logo} alt="Goodbye Junk Logo" />
          </div>
          <h1 className="text-xl sm:block md:text-2xl text-primary-red font-bold">
            Goodbye Junk
          </h1>
        </Link>
        {/* Navigation Links */}
        <div className="hidden space-x-10 items-center lg:flex">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-base hover:text-primary-blue font-medium text-primary-red transition-all duration-200"
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="hidden sm:block">
          <Link
            href={"/contact"}
            className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-primary-red hover:bg-primary-blue transition-all duration-300 text-white flex items-center space-x-2"
          >
            <MdContactSupport className="w-5 h-5" />
            <span>Get a Quote</span>
          </Link>
        </div>

        <HiBars3BottomRight
          onClick={openNavHandler}
          className="w-8 h-8 text-primary-red lg:hidden cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav;
