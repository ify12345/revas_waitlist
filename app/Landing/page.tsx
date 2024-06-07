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
import LandingLayout from "./layout";

export default function Landing() {
  return (
    <LandingLayout>
      <NavBar />
      <Hero />
      <Recyclates />
      <section className="bg-white flex flex-col text-black -mt-20 lg:-mt-96">
        <Products />
        <MarketPlace />
        <OurProducts />
        <Benefits />
        <Goal />
        <Footer />
      </section>
    </LandingLayout>
  );
}
