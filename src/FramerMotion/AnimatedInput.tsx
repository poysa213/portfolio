'use client'
import { AnimatedInputProps } from "@types";
import { motion } from "framer-motion";

export default function AnimatedInput({
  infinity,
  className,
  variants,
  options,
  onChange,
}:AnimatedInputProps) {
  return (
    <motion.input
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !infinity }}
      variants={variants}
      className={className}
      onChange={onChange}
      {...options}
    />
  );
}
