import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Products() {
  const [active, setActive] = useState("bales");
  const Bales = () => setActive("bales");
  const Flakes = () => setActive("flakes");
  const Pellets = () => setActive("pellets");
  const selected =
    active === "bales"
      ? "bg-white text-black lg:rounded-[100px] border-black border-2 w-full "
      : "";
  const selected2 =
    active === "flakes"
      ? "bg-white text-black lg:rounded-[100px] border-black border-2 w-full "
      : "";
  const selected3 =
    active === "pellets"
      ? "bg-white text-black lg:rounded-[100px] border-black border-2 w-full"
      : "";
  return (
    <div className="px-5 lg:px-20">
      <div className="mx-auto text-center flex flex-col gap-4 py-5 ">
        <p className="text-2xl lg:text-[52px]  font-[600]">
          Buy or Sell Recycled Plastic
        </p>
        <p className=" font-[400] text-md lg:text-[20px]">
          Plastics can be traded in the forms of bales, flakes and pellets
        </p>
      </div>

      <div className="flex-col lg:flex-row flex justify-center gap-[9px] text-center md:gap-[18px] bg-black text-white  mx-auto items-center lg:rounded-[100px] w-full max-w-[600px]">
        <button
          onClick={Bales}
          className={`"p-20 lg:p-[10px] lg:rounded-[100px] w-full  text-center " ${selected}`}
        >
          Plastic Bales
        </button>
        <button
          onClick={Flakes}
          className={`"p-20 lg:p-[10px] lg:rounded-[100px] w-full text-center " ${selected2}`}
        >
          Plastic Flakes
        </button>
        <button
          onClick={Pellets}
          className={`"p-20 lg:p-[10px] lg:rounded-[100px] w-full text-center " ${selected3}`}
        >
          Plastic Pellets
        </button>
      </div>

      <div className=" border px-5 lg:px-20 border-[#F2F2F4] bg-[#F2F2F4] my-8  max-w-full grid grid-cols-1 xl:grid-cols-2 auto-cols-[630.5px] items-center gap-[50px] xl:gap-[155px]  py-10">
       
        <div className="flex flex-col gap-[10px]  xl:gap-[38px] w-full">
          <p className="lg:leading-[63px] text-[20px] xl:text-[52px] font-[700]">
            {selected && "Plastic Bales"}
            {selected2 && "Plastic Flakes"}
            {selected3 && "Plastic Pellets"}
          </p>
          <p className="leading-[18px] xl:leading-[26px] text-[14px] xl:text-[20px] font-[400]">
            {selected &&
              "Bales trading on the RPX are primarily any whole polyethyleneterephthalate (PET) bottle with a screw-neck top that contains the ASTM D7611 “#1, PET or PETE” resin identification code and that is clear, transparent green, or transparent light blue."}
            {selected2 &&
              "Flake for the RPX goes through a process of  PET bottles being pre-sorted - rejecting impurities both by colour and material type,as well as a subsequent washing process -  the bottles are put into a grinder or shredder  and turned into flakes."}
            {selected3 &&
              "Plastic resin pellets are small granules generally with shape of a cylinder or a disk  with a diameter of a few millimetres. These plastic particles are industrial raw material that are sold to manufacturing sites where 'user plastics' are made by re-melting and    moulding into the final products or packaging."}
          </p>
          <Link
            href="/signup"
            className="flex text-white bg-black items-center gap-[10px] rounded-[50px] max-w-[151px]  lg:py-[16px] px-[32px] transition duration-300 ease-in-out transform  hover:shadow-lg hover:bg-white hover:text-black"
          >
            Register <AiOutlineArrowRight size={10} />{" "}
          </Link>
        </div>
        <div className="border-black rounded border-2">
          <img className="w-full" src="/images/products.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
