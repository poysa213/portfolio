'use client'
import { AnimatedTextProps } from "@types";
import { motion } from "framer-motion";

export default function AnimatedText({
  variants,
  className,
  children,
  infinity,
}:AnimatedTextProps) {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !infinity }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.p>
  );
}
