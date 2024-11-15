import { useRouter } from "next/navigation";
import { FadeContainer, opacityVariant } from "@content/FramerMotionVariants";
import { motion } from "framer-motion";
import { Social } from "@components/Social";

export default function Header() {
  const router = useRouter();
  return (
    <section
      id="header"
      className="relative  bg-white dark:text-gray-100 max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto"
    >
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="grid place-content-center py-20  min-h-screen"
      >
        <div className="w-full relative mx-auto flex flex-col items-center gap-10">
          <div className="w-full flex flex-col p-5 gap-3 select-none text-center ">
            <div className="flex flex-col gap-1">
              <motion.h1
                variants={opacityVariant}
                className=" text-6xl  lg:text-6xl mt-2 lg:mt-8 font-sarina font-bold"
              >
                Youcef Hanaia
              </motion.h1>

              <motion.p
                variants={opacityVariant}
                className="text-xl md:text-2xl lg:text-4xl text-customBlueNuit mt-2 lg:mt-10 font-mono"
              >
                Full Stack Developer
              </motion.p>

              <div className="flex justify-center my-8">
                <a
                  href="https://drive.google.com/file/d/1sF2XWjaiSuwAS1XvJvxExlleacVNeNKy/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                >
                  View My Resume
                </a>
              </div>
              <Social />
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
