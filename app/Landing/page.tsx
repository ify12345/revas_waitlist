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
import { motion, AnimatePresence } from "framer-motion";

export default function Landing() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
}
