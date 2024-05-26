import Link from "next/link";
import React from "react";

export default function Benefits() {
  return (
    <div className="bg-black text-white px-5 lg:px-20 w-full flex flex-col gap-[30px] py-16">
      <p className="text-[44px] leading-[57px] font-[600]">
        Your benefits on Revas
      </p>
      <div className="flex flex-col lg:flex-row gap-[100px]">
        <div className="flex flex-col gap-[23px]">
          <img className="max-w-[80px]" src="/images/v1.png" alt="" />
          <p className="text-[28px] leading-[36px] font-[600]">
            Find verified suppliers and materials, all in one place
          </p>
          <p className="text-[20px] leading-[26px] font-[400]">
            Access a digital platform that connects buyers and sellers of
            recycled plastics worldwide.
          </p>
          <Link href="/" className="leading-[26px] text-[20px] font-[400]">
            Learn more
          </Link>
        </div>
        {/* grid2 */}
        <div className="flex flex-col gap-[23px]">
          <img className="max-w-[70px]" src="/images/v2.png" alt="v3" />
          <p className="text-[28px] leading-[36px] font-[600]">
            Secure Transactions with Our Escrow Service
          </p>
          <p className="text-[20px] leading-[26px] font-[400]">
            We enable transactions to be efficient, transparent, and secure
            through our escrow service.
          </p>
          <Link href="/" className="leading-[26px] text-[20px] font-[400]">
            Learn more
          </Link>
        </div>
        {/* grid3 */}
        <div className="flex flex-col gap-[23px]">
          <img className="max-w-[80px]" src="/images/v3.png" alt="v3" />
          <p className="text-[28px] leading-[36px] font-[600]">
            Digital Data Sheet for Quality Control
          </p>
          <p className="text-[20px] leading-[26px] font-[400]">
            We provide data analytics and quality control services to help
            optimize the value of plastic waste.
          </p>
          <Link href="/" className="leading-[26px] text-[20px] font-[400]">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
