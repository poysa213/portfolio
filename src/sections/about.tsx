"use client";
import React from "react";
import { popUpFromBottomForText, opacityVariant } from "../content/FramerMotionVariants";
import AnimatedText from "@/FramerMotion/AnimatedText";
import AnimatedDiv from "@/FramerMotion/AnimatedDiv";
import Image from "next/image";
import PageTop from "@components/PageTop";

export default function AboutMe() {
  return (
    <section id="about" className="pageTop">
      <PageTop pageTitle="About Me" />
      <section className="text-md md:m-0 sm:text-base justify-center">
        <div className="items-end mx-auto flex justify-center p-16">
          <Image
            src="https://i.imgur.com/N4rmiIB.jpg"
            className="filter saturate-150 hover:saturate-0 duration-1000 rounded-lg hover:rounded-3xl drop-shadow-lg transition-all"
            width={400}
            height={300}
            alt="Profile image of Youcef Hanaia"
            priority={true}
          />
        </div>

        <AnimatedText
          className="text-slate-500 dark:text-slate-400 font-medium font-mono text-[1.2rem] animate-bounce ml-[-2rem] md:ml-[-6rem]"
          variants={popUpFromBottomForText}
        >
          <span className="text-[3rem] md:text-[6rem] text-black font-sarina p-3 dark:text-white">
            &#60;
          </span>
        </AnimatedText>

        <AnimatedText
          className="text-slate-500 dark:text-slate-400 md:text-[1.3rem] font-mono p-4"
          variants={popUpFromBottomForText}
        >
          <span className="animate-pulse text-[1.4rem]">Welcome!</span> I'm{" "}
          <span className="font-bold">Youcef Hanaia</span>, a{" "}
          <span className="font-bold">Full Stack Software Engineer</span>.
        </AnimatedText>
        <AnimatedText
          className="text-slate-500 dark:text-slate-400 md:text-[1.2rem] font-mono p-4"
          variants={popUpFromBottomForText}
        >
          I build intuitive and engaging user interfaces that effectively convey the value of each project. On the backend, I develop scalable, robust, and efficient systems that ensure optimal performance and seamless integration.
        </AnimatedText>

        <AnimatedText
          className="text-slate-500 dark:text-slate-400 md:text-[1.2rem] font-mono p-4"
          variants={popUpFromBottomForText}
        >
          I have a strong passion for <span className="font-bold">web security</span> and participate actively in{" "}
          <span className="font-bold">CTF competitions</span> to enhance my
          cybersecurity skills.
          <br />
          I am always eager to learn and adapt to new technologies to deliver
          the highest quality work possible.
        </AnimatedText>

        <AnimatedText
          className="mr-4 text-slate-500 dark:text-slate-400 font-medium font-mono p-3 text-[1.2rem] text-right animate-bounce"
          variants={popUpFromBottomForText}
        >
          <span className="md:text-[6rem] text-[3rem] text-black font-sarina dark:text-white text-right mr-[-4rem] md:mr-[-10rem]">
            /&#62;
          </span>
        </AnimatedText>

        <AnimatedDiv
          variants={opacityVariant}
          className="blog-container prose-sm 3xl:prose-lg md:flex md:justify-between text-lg py-96"
        >
          <AnimatedText
            variants={popUpFromBottomForText}
            className="font-mono font-semibold text-2xl text-slate-500 dark:text-slate-400"
          >
            <h1>Technologies I Primarily Work With</h1>
          </AnimatedText>
          <AnimatedText
            variants={popUpFromBottomForText}
            className="md:text-[1.3rem] text-slate-500 dark:text-slate-400 font-normal"
          >
            @ React & Next.js <br />
            @ NestJS & Django <br />
            @ Docker & GCP <br />
          </AnimatedText>
        </AnimatedDiv>

        <AnimatedDiv
          variants={opacityVariant}
          className="prose-sm 3xl:prose-lg md:flex md:justify-between text-lg py-32"
        >
          <AnimatedText
            variants={popUpFromBottomForText}
            className="font-mono font-semibold text-2xl text-slate-500 dark:text-slate-400"
          >
            <h1>Roles I'm Comfortable In</h1>
          </AnimatedText>
          <AnimatedText
            variants={popUpFromBottomForText}
            className="md:text-[1.3rem] text-slate-500 dark:text-slate-400 font-normal"
          >
            - Frontend Engineer <br />
            - Backend Engineer <br />
            - Full Stack Engineer <br />
            - DevOps Engineer <br />
          </AnimatedText>
        </AnimatedDiv>

       
      </section>
    </section>
  );
}
