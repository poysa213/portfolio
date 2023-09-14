import { useRouter } from "next/navigation";
import {
  FadeContainer,
  opacityVariant,
  popUp,
} from "@content/FramerMotionVariants";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Ripples from "react-ripples";


export default function Header() {
  const router = useRouter();
  return (
    <div className="relative   dark:text-gray-100 max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="grid place-content-center py-20  min-h-screen"
      >
        <div className="w-full relative mx-auto flex flex-col items-center gap-10">
          {/* <motion.div
      variants={popUp}
      className="relative w-44 h-44 xs:w-52 xs:h-52 flex justify-center items-center rounded-full p-3 before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:dark:border-white before:rounded-full before:animate-photo-spin"
    >
      <Image
        // src={homeProfileImage}
        className="rounded-full shadow filter saturate-0"
        width={400}
        height={400}
        alt="cover Profile Image"
        quality={75}
        priority={true}
      />
    </motion.div> */}

          <div className="w-full flex flex-col p-5 gap-3 select-none text-center ">
            <div className="flex flex-col gap-1">
              <motion.p
                variants={opacityVariant}
                className="font-medium text-4xl md:text-4xl lg:text-6xl text-gray-500 mt-2 lg:mt-10"
              >
                Full Stack Developer
              </motion.p>
              <motion.p
                variants={opacityVariant}
                className="font-medium text-sm md:text-2xl lg:text-4xl text-gray-500 mt-2 lg:mt-10"
              >
                Cyber Security enthusiast
              </motion.p>
              <motion.h1
                variants={opacityVariant}
                className="text-lg md:text-xl lg:text-2xl font-bold mt-2 lg:mt-8"
              >
                Youcef Hanaia
              </motion.h1>
            </div>
          </div>

          <motion.div className="rounded-md overflow-hidden" variants={popUp}>
            <Ripples className="w-full" color="rgba(0, 0, 0, 0.5)">
              <button
                className="flex items-center gap-2 px-5 py-2 border rounded-md border-gray-500 dark:border-gray-400 select-none  hover:bg-gray-100 dark:hover:bg-neutral-800 outline-none"
                onClick={() => router.push("/resume")}
              >
                <FiDownload />
                <p>My Resume</p>
              </button>
            </Ripples>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
