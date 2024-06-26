import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";


export default function NavBar() {
  return (
    <nav className="text-white flex justify-between p-5  items-center w-full gap-6 md:gap-2 fixed bg-black z-50">
      <div className="w-[130px] lg:w-[200px] block">
       <img className="object-cover w-full" src="/images/revas_logo.svg" alt="revas_logo" />
      </div>
      {/* <div className="max-w-[50px] w-full lg:hidden">
       <img className="object-cover w-full" src="/images/logo.svg" alt="revas_logo" />
      </div> */}
    <Link
       href="/waitlist"
      className="rounded-3xl bg-white flex justify-between items-center border border-white text-black gap-2 max-w-[228px] p-2 lg:py-3  lg:px-5 transition duration-300 ease-in-out transform hover:bg-black hover:text-white"
    >
      <p className="flex text-center text-sm">Join our waitlist</p>
      <AiOutlineArrowRight size={10} />
    </Link>
  </nav>
  )
}

