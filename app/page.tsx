"use client";
import Image from "next/image";
import Landing from "./Landing/page";
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  return (
    <AnimatePresence>
       <motion.div
        initial={{ opacity: 0,y:15 }}
        animate={{ opacity: 1,y:0 }}
        exit={{ opacity: 0, y:15 }}
        transition={{delay:0.25}}>

        <Landing/>
        </motion.div>
    </AnimatePresence>
  );
}
