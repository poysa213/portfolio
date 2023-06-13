'use client'
import { AnimatedButtonProps } from "@types";
import { motion } from "framer-motion";

export default function AnimatedButton({
  onClick,
  infinity,
  className,
  children,
  variants,
}:AnimatedButtonProps) {
  return (
    <motion.button
      className={className}
      initial="hidden"
      onClick={onClick}
      variants={variants}
      whileInView="visible"
      viewport={{ once: !infinity }}
    >
      {children}
    </motion.button>
  );
}
