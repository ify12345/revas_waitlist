"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AiOutlineMail } from "react-icons/ai";
import { FiLoader } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Success = () => {
  const searchParams = useSearchParams()
  

  return (
    <section className="bg-black text-white flex items-center justify-center h-screen w-screen text-[16px] relative px-8 lg:px-0">
      <main className="flex flex-col gap-5 relative">
        <button className="hidden lg:block absolute top-[-5%] right-0">
          <IoMdClose />
        </button>
        <div className="mx-auto bg-green rounded-full w-[80px] p-[20px]">
          <img className="max-w-full" src="/images/check.svg" alt="close" />
        </div>
        <p className="mx-auto text-[1.9rem] leading-[35px] text-center ">
          {"We've added you to our waiting list!"}
        </p>
        <p className="mx-auto text-center text-[.85rem] text-[#AEAAAE] mb-6">
          {"We'll let you know when Revas is ready."}
        </p>
        <div className="flex flex-col items-center p-[15px] bg-[#262626] rounded-md gap-5">
          <div className="bg-black w-full flex items-center gap-6 text-[0.8rem] p-3">
            <AiOutlineMail size={16} />
            <span>{searchParams}</span>
          </div>
          <p className="text-center max-w-[412px] text-[.85rem] text-[#AEAAAE]">
            Thank you for joining our business waiting list. We appreciate your
            interest and look forward to serving you soon!
          </p>
        </div>
        <Link
          href="/"
          className="flex justify-center text-black bg-white items-center gap-[10px] py-[16px] transition duration-300 ease-in-out transform  hover:shadow-lg hover:bg-black hover:text-white"
          type="submit"
        >
          <p className="flex gap-2 items-center font-bold">Go to Website</p>
        </Link>
      </main>
    </section>
  );
};

export default Success;
