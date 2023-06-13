'use client'
import { AnimatedLinkProps } from "@types";
import { motion } from "framer-motion";

export default function AnimatedLink({ variants, infinity, children }: AnimatedLinkProps) {
  return (
    <motion.a
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: !infinity }}
    >
      {children}
    </motion.a>
  );
}
