import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-black gap-[53px] w-full grid grid-cols-1  py-[22px] md:py-[45px] text-white text-[7px] md:text-[16px] leading-[20px] lg:px-20 px-5">
      <img
        className="object-cover max-w-[216px]"
        src="/images/revas_logo.svg"
        alt=""
      />

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-20">
        <div className="flex flex-col gap-10">
          <p>Company</p>
          <div className="flex flex-col gap-6">
            <p>About us</p>
            <p>contact</p>
            <p>Prices</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:gap-10">
          <p>Product</p>
          <div className="flex flex-col gap-6">
            <p>Market place</p>
            <p>Sell on Revas</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:gap-10">
          <p>Social</p>
          <div className="flex flex-col gap-6">
            <p>Linkedin</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:gap-10 col-span-4 xl:col-span-3 ">
          <p>Information</p>
          <div className="flex flex-col gap-6">
            <p>Email:support@revasexchange.com</p>
            <p>Phone: +234 814 061 7563</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        <p className="text-[7px] md:text-[13px] leading-[21.38px]">
          Copyright © 2023 Revas Exchange- All Rights Reserved.
        </p>
        <button className="bg-transparent text-white flex gap-3 rounded-[100px] items-center border-white border px-[12px] md:px-[30px] py-[10px] md:py-[20px] transition duration-300 ease-in-out transform  hover:shadow-lg hover:bg-white hover:text-black">
          Cookie settings <AiOutlineArrowRight size={10} />
        </button>
      </div>
    </div>
  );
}
