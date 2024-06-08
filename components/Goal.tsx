import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Goal() {
  return (
    <div className="bg-[#F2F2F4] h-auto max-w-full py-[50px] md:py-[160px] px-5 lg:px-20 gap-3 md:gap-0 grid  grid-cols-1 md:grid-cols-2 border auto-cols-[645px]">
      <div className="bg-black text-white border border-black rounded-3xl md:rounded-l-3xl md:rounded-r-none relative px-5 lg:px-20 py-[70px] flex flex-col gap-[38px]">
        <div className="absolute top-0 left-0">
          <img src="/images/img7.png" alt="" />
        </div>
        <p className="w-full text-[27px] md:text-[52px] md:leading-[59px] font-[600]">
          Creating a sustainable future for everyone
        </p>
        <p className="max-w-[496px] text-[16px] font-[400] leading-[20.8px]">
          We envision a world where plastic waste is transformed into a valuable
          resource, creating a circular economy that benefits people and the
          planet.
        </p>
        <button className="lg:w-[200px] rounded-[100px] bg-white flex items-center justify-center py-3  border border-white text-black gap-2 transition duration-300 ease-in-out transform  hover:shadow-lg  hover:bg-black hover:text-white">
          Join our waitlist <AiOutlineArrowRight size={10} />
        </button>
      </div>
      <div className="border-2 border-black rounded-3xl md:rounded-l-none md:rounded-r-3xl w-full">
        <img
          className="object-cover w-full rounded-3xl md:rounded-r- md:rounded-l-none"
          src="/images/family.png"
          alt=""
        />
      </div>
    </div>
  );
}
