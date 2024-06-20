import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Hero() {
  return (
    <section className="text-white flex flex-col py-3 w-full relative pb-32 lg:pb-96">
      <div className="mx-auto flex flex-col items-center gap-8 px-5 md:px-10 lg:px-20 lg:pb-20">
        <p className="max-w-[85%] text-2xl font-extrabold lg:text-8xl text-center relative top-0 z-10">
          Global trading platform for recycled plastic
        </p>
        <p className="w-full mx-auto text-center text-[11px] max-w-[886px] leading-[26px] lg:text-[20px] font-normal">
          {
            "We enable buyers and sellers to efficiently trade recycled plastic with confidence, bringing increased opportunity for recycled content for the world's products and packaging."
          }
        </p>
        <Link
          href="/waitlist"
          className="mx-auto max-w-[228px] rounded-3xl bg-white flex items-center border border-white text-black gap-2 py-3 px-5 transition duration-300 ease-in-out transform hover:bg-black hover:text-white"
        >
          Join our waitlist <AiOutlineArrowRight size={10} />
        </Link>
      </div>

      <div className="max-w-[23px] md:max-w-[88px] absolute top-0 left-0  sm:top-[60px] sm:left-[50px] z-0">
        <img className="object-fit w-full " src="/images/small1.png" alt="" />
      </div>

      <div className=" max-w-[20px] sm:max-w-[58px] absolute bottom-0 left-0 ">
        <img className="object-fit w-full" src="/images/small2.png" alt="" />
      </div>

      <div className="max-w-[32px] md:max-w-[68px] absolute right-0 top-0">
        <img className="object-fit w-full" src="/images/small3.png" alt="" />
      </div>

     
    </section>
  );
}
