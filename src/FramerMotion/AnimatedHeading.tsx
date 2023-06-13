'use client'
import { motion } from "framer-motion";
import { AnimatedHeadingProps } from "@types";

export default function AnimatedHeading({
  variants,
  className,
  children,
  infinity,
}:AnimatedHeadingProps) {
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !infinity }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.h1>
  );
}
