import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";


export default function MarketPlace() {
  return (
    <Animator
    style={{}}
    variant="zoom"
    direction="right"
    delay={index === 0 ? 400 : index === 1 ? 800 : 1000}
    timeout={index === 0 ? 400 : index === 1 ? 800 : 1000}
  >
    <div className="px-5 lg:px-20 w-full flex flex-col lg:flex-row items-center gap-[50px] xl:gap-[155px] pt-8">
        <div className="border-black rounded border-2 w-full">
        <img className="w-full object-cover" src="/images/23.png" alt="" />
      </div>
      <div className="flex flex-col gap-[38px]  xl:gap-[14px] w-full">
        <p className="text-[16px] ">OUR MARKETPLACE</p>
        <p className="xl:leading-[48px] text-[20px] xl:text-[42px] font-[600]">
          Quality-Controlled Global Marketplace for Recycled Plastics
        </p>

        <p className="leading-[26px] text-[14px] xl:text-[20px] font-[300]">
          We are a global marketplace for recycled plastics, with a wide range
          of plastic types and grades available..
        </p>

        <p className="leading-[26px] text-[14px] xl:text-[20px] font-[300]">
          Our platform supports both post-industrial and post-consumer plastics,
          and we provide quality control services to ensure that the plastic
          meets the required specifications
        </p>

        <button className="flex justify-center text-white bg-black items-center gap-[10px] rounded-[50px] max-w-[225px] py-[16px] transition duration-300 ease-in-out transform  hover:shadow-lg hover:bg-white hover:text-black">
          Join our waitlist <AiOutlineArrowRight size={10} />
        </button>
      </div>

    
    </div>
    </Animator>
  );
}
