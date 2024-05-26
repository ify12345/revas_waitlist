import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";


export default function NavBar() {
  return (
    <nav className="text-white flex justify-between p-5  items-center w-full gap-6 md:gap-2">
    <img className="object-cover min-w-fit" src="/images/revas_logo.svg" alt="" />
    <Link
       href="/waitlist"
      className="rounded-3xl bg-white flex justify-between items-center border border-white text-black gap-2 max-w-[228px] py-3 px-5 transition duration-300 ease-in-out transform hover:bg-black hover:text-white"
    >
      <p className="hidden md:flex text-center">Join our waitlist</p>
      <AiOutlineArrowRight size={10} />
    </Link>
  </nav>
  )
}

