
'use client'
import React from "react";
import { popUpFromBottomForText } from "../../content/FramerMotionVariants";
import AnimatedText from "@/FramerMotion/AnimatedText";
import AnimatedDiv from "@/FramerMotion/AnimatedDiv";
import Image from "next/image";
import { opacityVariant } from "@/content/FramerMotionVariants";
import PageTop from "@components/PageTop";


export default function AboutMe() {
  return (
    <section className="pageTop">
      <PageTop pageTitle="About me" />
      <section className="px-5 sm:px-20 sm:mx-20 text-md md:m-0 sm:text-base  justify-center ">
        <div className="items-end mx-auto flex justify-center p-16">
          <Image
            src="/img/personal/poysa213.jpg"
            className=" filter saturate-150 hover:saturate-0 duration-1000  rounded-lg hover:rounded-3xl drop-shadow-lg transition-all "
            width={400}
            height={300}
            // layout="fill"
            alt="Poysa213 figure"
            priority={true}
          />
        </div>

        <AnimatedText
          className="text-slate-500 dark:text-slate-400 font-medium font-mono text-[1.2rem] animate-bounce ml-[-3rem] md:ml-[-6rem]"
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
          <span className="animate-pulse text-[1.4rem]"> Welcome!</span> I'm{" "}
          <span className="font-bold">Youcef Hanaia</span>, also known as{" "}
          <span className="font-bold">poysa213.</span>
        </AnimatedText>
        <AnimatedText
          className="text-slate-500 dark:text-slate-400 md:text-[1.2rem] font-mono p-4"
          variants={popUpFromBottomForText}
        >
          I'm a passionate and self-taught{" "}
          <span className="font-bold">Full Stack Developer</span> with a deep
          interest in <span className="font-bold">Cybersecurity</span>.
          Currently, I am pursuing my{" "}
          <span className="font-bold">Master's</span> Degree in Computer
          Science, further enriching my knowledge in the field.
        </AnimatedText>

        <AnimatedText
          className="text-slate-500 dark:text-slate-400 font-medium font-mono md:text-[1.2rem] p-4"
          variants={popUpFromBottomForText}
        >
          My journey into <span className="font-bold">web development</span>{" "}
          began during my high school days. Driven by a strong desire to learn,
          I immersed myself in various resources such as tutorials, articles,
          and hands-on projects. Along the way, I explored multiple programming
          languages, including Python, Pascal (yes, even Pascal!), Brainfuck,
          and more.
        </AnimatedText>
        <AnimatedText
          className="text-slate-500 dark:text-slate-400 font-medium font-mono  md:text-[1.2rem] p-4"
          variants={popUpFromBottomForText}
        >
          When I'm not coding, you'll find me engaging in exciting challenges on
          platforms like <span className="font-bold">Hack The Box (HTB)</span>{" "}
          and <span className="font-bold">PicoCTF</span>. I actively participate
          in hacking machines, solving web and forensics challenges, and
          continuously enhancing my skills in the realm of{" "}
          <span className="font-bold">cybersecurity</span>. Additionally, I keep
          myself up to date with the latest{" "}
          <span className="font-bold">vulnerabilities,</span> particularly in
          the web domain, by reading articles and exploring new attack vectors.
        </AnimatedText>

        <AnimatedText
          className="text-slate-500 dark:text-slate-400 font-medium font-mono p-3 text-[1.2rem] text-right animate-bounce "
          variants={popUpFromBottomForText}
        >
          <span className="md:text-[6rem] text-[3rem] text-black font-sarina dark:text-white text-right mr-[-4rem] md:mr-[-10rem]">
            /&#62;
          </span>
        </AnimatedText>

        <AnimatedDiv
          variants={opacityVariant}
          className="blog-container prose-sm  3xl:prose-lg md:flex md:justify-between text-lg py-96"
        >
          <AnimatedText
            variants={popUpFromBottomForText}
            className="font-mono font-semibold text-[0.7rem] text-slate-500 dark:text-slate-400"
          >
            <h1>I'm Comfortable with</h1>
          </AnimatedText>
          <AnimatedText
            variants={popUpFromBottomForText}
            className="md:text-[1.3rem] text-slate-500 dark:text-slate-400 font-normal"
          >
            @ Bootstrap&Tailwindcss <br />
            @ Git&Python&Django <br />
            @ PostgreSQL&Mysql <br />
            @ ReactJS&NextJs <br />
            @ Html&Css&Js <br />
          </AnimatedText>
        </AnimatedDiv>
      </section>
    </section>
  );
}
