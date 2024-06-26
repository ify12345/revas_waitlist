"use client";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import Goal from "@/components/Goal";
import Hero from "@/components/Hero";
import MarketPlace from "@/components/MarketPlace";
import NavBar from "@/components/NavBar";
import OurProducts from "@/components/OurProducts";
import Products from "@/components/Products";
import Recyclates from "@/components/Recyclates";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Landing() {
  return (
    <div>
      <NavBar />
      <main className="pt-24 lg:pt-28">
        <Hero />
        <Recyclates />
        <section className="bg-white flex flex-col text-black -mt-20 lg:-mt-[200px]">
          <Products />
          <MarketPlace />
          <OurProducts />
          <Benefits />
          <Goal />
          <Footer />
        </section>
      </main>
    </div>
  );
}
