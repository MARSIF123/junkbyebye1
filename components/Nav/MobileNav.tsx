"use client";
import NavLinks from "@/constant/constants";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type MobileNavProps = {
  showNav: boolean;
  closeNavHandler: () => void;
};

const MobileNav = ({ showNav, closeNavHandler }: MobileNavProps) => {
  const show = showNav ? "translate-x-0" : "translate-x-full";
  return (
    <div>
      <div
        className={`fixed ${show} inset-0 transform transition-all right- duration-500 z[-10000]  w-full h-screen`}
      >
        <div
          className={`text-white ${show} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm-w-[60%] bg-primary-yellow space-y-6 z-[-1000050] right-0`}
        >
          {NavLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <p className="text-primary-blue w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-primary-blue sm:text-[30px]">
                {link.name}
              </p>
            </Link>
          ))}
        </div>
        <CgClose
          onClick={closeNavHandler}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6 cursor-pointer text-primary-blue"
        />
      </div>
    </div>
  );
};

export default MobileNav;
