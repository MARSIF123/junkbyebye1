import { IoCheckmarkDone } from "react-icons/io5";

const Highlights = () => {
  return (
    <div className="flex w-[80%] mx-auto mt-20 flex-col items-center">
      <div className="">
        <IoCheckmarkDone className="inline-block mr-2 w-5 h-5 text-primary-yellow" />
        Same-Day Service
      </div>
      <div className=" ">
        <IoCheckmarkDone className="inline-block mr-2 w-5 h-5 text-primary-yellow" />
        Upfront Pricing
      </div>
      <div className="">
        <IoCheckmarkDone className="inline-block mr-2 w-5 h-5 text-primary-yellow" />
        Eco-Friendly Disposal
      </div>
      <h2 className="mt-5 text-sm px-2 text-center sm-text-2xl font-medium flex items-center">
        Goodbye Junk is the easy, stress-free way to clear out your space.
        Whether you’re cleaning out your garage, remodeling, <br />
        or finally ready to ditch that old furniture our team is here to help.
        We load, lift, and sweep up so you don’t have to.
      </h2>
    </div>
  );
};

export default Highlights;
