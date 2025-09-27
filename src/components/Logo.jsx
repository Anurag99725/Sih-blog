"use client"
import React from "react";
import { motion } from "framer-motion";

export default function Logo({ size = "sm", animate = true, className = "" }) {
  const sizeMap = {
    sm: "text-2xl md:text-3xl tracking-wide",
    md: "text-4xl md:text-6xl tracking-normal",
    lg: "text-6xl md:text-8xl tracking-tight",
    xl: "text-8xl md:text-9xl tracking-tight",
  };

  const fontSizeClass = sizeMap[size] || sizeMap.lg;
  const letters = Array.from("LEVIATHAN");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04 },
    },
  };

  const letterVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 28 },
    },
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.h1
        aria-label="LEVIATHAN"
        className={`select-none font-extrabold ${fontSizeClass} leading-none bg-clip-text text-transparent drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)] relative font-mono`}
        initial={animate ? "hidden" : false}
        animate={animate ? "visible" : undefined}
        variants={containerVariants}
      >
        {/* Military-style gradient text */}
        <span className="inline-block bg-gradient-to-r from-[#4b5320] via-[#6b705c] to-[#2d2f2a] bg-clip-text text-transparent">
          {letters.map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              variants={letterVariants}
              className="inline-block px-[1px] md:px-[2px]"
            >
              {ch}
            </motion.span>
          ))}
        </span>
      </motion.h1>
    </div>
  );
}
