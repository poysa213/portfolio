"use client";
import React from "react";
import { FadeContainer, popUp } from "../content/FramerMotionVariants";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiDjango,
  SiTypescript,
  SiFirebase,
  SiPostgresql,
  SiJavascript,
  SiPrisma,
  SiGraphql,
  SiExpress,
} from "react-icons/si";
import { RiCodeView } from "react-icons/ri";
import { FaReact, FaNodeJs, FaFigma, FaCss3Alt } from "react-icons/fa";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { useDarkMode } from "@context/darkModeContext";
import * as WindowsAnimation from "@lib/windowsAnimation";
import { Skill } from "@types";
import PageTop from "@components/PageTop";
import { getSkills } from "@lib/dataFetch";

export default function () {
  const skills: Skill[] = getSkills();
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <section className="pageTop">
        <PageTop pageTitle="Skills"></PageTop>
        <section className="mx-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={FadeContainer}
            viewport={{ once: true }}
            className="grid my-10 gap-4 grid-col-1 lg:grid-cols-3 md:grid-cols-2 "
          >
            {skills.map((skill, index) => {
              const Icon: React.ElementType = chooseIcon(
                skill.name.toLowerCase()
              );
              return (
                <motion.div
                  variants={popUp}
                  key={index}
                  title={skill.name}
                  onMouseMove={(e) =>
                    WindowsAnimation.showHoverAnimation(e, isDarkMode)
                  }
                  onMouseLeave={(e) => WindowsAnimation.removeHoverAnimation(e)}
                  className="py-4 flex flex-col items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700 transform origin-center md:origin-top group"
                >
                  <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm md:text-base font-semibold select-none pointer-events-none">
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </section>
    </>
  );
}
function chooseIcon(title: string) {
  let Icon: React.ElementType;
  switch (title) {
    case "python":
      Icon = SiPython;
      break;
    case "nextjs":
      Icon = SiNextdotjs;
      break;
    case "reactjs":
      Icon = FaReact;
      break;
    case "tailwind css":
      Icon = SiTailwindcss;
      break;
    case "mysql":
      Icon = SiMysql;
      break;
    case "django":
      Icon = SiDjango;
      break;
    case "html":
      Icon = AiFillHtml5;
      break;
    case "git":
      Icon = AiFillGithub;
      break;
    case "typescript":
      Icon = SiTypescript;
      break;
    case "node.js":
      Icon = FaNodeJs;
      break;
    case "firebase":
      Icon = SiFirebase;
      break;
    case "figma":
      Icon = FaFigma;
      break;
    case "postgresql":
      Icon = SiPostgresql;
      break;
    case "css":
      Icon = FaCss3Alt;
      break;
    case "javascript":
      Icon = SiJavascript;
      break;
    case "prisma":
      Icon = SiPrisma;
      break;
    case "graphql":
      Icon = SiGraphql;
      break;
    case "express.js":
      Icon = SiExpress;
      break;

    default:
      Icon = RiCodeView;
      break;
  }
  return Icon;
}
