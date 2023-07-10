import { FadeContainer, popUp } from "../content/FramerMotionVariants";

import { motion } from "framer-motion";
import { Social } from "./Social";


export default function Footer() {
  

  return (
    <footer className="w-full px-4  text-gray-600 dark:text-white  font-mono print:hidden bg-white dark:bg-gray-400/10 flex flex-col">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl p-5 border-t-2 border-gray-200  dark:border-gray-400/10 mx-auto text-sm sm:text-base flex flex-col items-center justify-between gap-5"
      >
        <Social />
      <h3>&#169;2023 All right reserved </h3>
      
  
      </motion.div>
      <div>

      </div>

    </footer>
  );
}

