import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function OurProducts() {
  return (
    <div className="px-5 lg:px-0 mx-auto justify-center w-full flex flex-col lg:flex-row items-center gap-[50px] xl:gap-[155px] p-[40px] md:p-[99px] ">
    <div className="flex flex-col gap-[38px]  xl:gap-[14px] w-full max-w-[492px]">
      <p className="text-[11px] leading-[10px]">OUR PRODUCTS</p>
      <p className="xl:leading-[48px] text-[20px] xl:text-[42px] font-[600]">
        Access to a wide range of Recycled Plastics
      </p>

      <p className="leading-[26px] text-[14px] xl:text-[20px] font-[300]">
        We offer a wide range of recycled plastic products, including{" "}
        <span className="font-semibold">PET, HDPE, LDPE, PP,</span> and
        more. We source our products from trusted suppliers worldwide,
        ensuring the highest quality standards.
      </p>

      <p className="leading-[26px] text-[14px] xl:text-[20px] font-[300]">
        Our products are available in various forms, including baled,
        shredded, and granulated, and are suitable for a wide range of
        applications.
      </p>

      <button className="flex justify-center text-white bg-black items-center gap-[10px] rounded-[50px] max-w-[225px] py-[16px] transition duration-300 ease-in-out transform  hover:shadow-lg hover:bg-white hover:text-black">
        Join our waitlist <AiOutlineArrowRight size={10} />{" "}
      </button>
    </div>

    <div className="border-black rounded border-2  w-full max-w-[492px]">
      <img className="w-full h-full object-cover" src="/images/22.png" alt="" />
    </div>
  </div>
  )
}
