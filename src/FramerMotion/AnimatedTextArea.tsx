'use client'
import { AnimatedTextAreaProps } from "@types";
import { motion } from "framer-motion";

export default function AnimatedTextArea({
  infinity,
  className,
  variants,
  options,
  onChange,
}:AnimatedTextAreaProps) {
  return (
    <motion.textarea
      whileInView="visible"
      initial="hidden"
      viewport={{ once: !infinity }}
      variants={variants}
      className={className}
      onChange={onChange}
      {...options}
    />
  );
}
