
'use client'
import React from "react";
import { popUpFromBottomForText } from "../../content/FramerMotionVariants";
import AnimatedText from "@/FramerMotion/AnimatedText";
import AnimatedDiv from "@/FramerMotion/AnimatedDiv";
import Image from "next/image";
import { opacityVariant } from "@/content/FramerMotionVariants";
import { TbBrandFiverr } from 'react-icons/tb'
import PageTop from "@components/PageTop";
import Link from "next/link";
import ContactForm from "@components/ContactForm";


export default function AboutMe() {
  return (
    <section className="pageTop">
      <PageTop pageTitle="About me" />
      <section className="text-md md:m-0 sm:text-base  justify-center ">
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
          className=" text-slate-500 dark:text-slate-400 font-medium font-mono text-[1.2rem] animate-bounce ml-[-2rem] md:ml-[-6rem]"
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
          I am a dedicated and accomplished <span className="font-bold">Full Stack Developer</span> with a strong focus on <span className="font-bold">Cybersecurity</span>. 
          <br /> 
          Currently, I am pursuing a <span className="font-bold">Master</span>'s Degree in  <span className="font-bold">Computer Science</span> to further enhance my expertise in this field.
   
        
        </AnimatedText>

        <AnimatedText
          className="text-slate-500 dark:text-slate-400 md:text-[1.2rem] font-mono p-4"
          variants={popUpFromBottomForText}
        >
         Currently, I work as a <span className="font-bold">Full Stack Developer</span> as a <span className="font-bold">Freelancer</span> on <span className="font-bold">Fiverr</span>, where I collaborate with clients from diverse backgrounds.
         <br />
          This experience has given me the opportunity to work on a wide range of projects, allowing me to enhance my <span className="font-bold">problem-solving</span> abilities and adapt to different requirements.
          <br />
          <br />
          <div className="flex items-center">
         <span className="font-bold">And here is a link to my account in Fiverr</span><Link target="_blank" className="ml-2 bg-[#1DBF73] p-1 rounded text-white" href={"https://www.fiverr.com/youcefpoysa"}><TbBrandFiverr /></Link>
          </div>
          <br />
  
        
        </AnimatedText>
        
        

       

        <AnimatedText
          className="mr-4 text-slate-500 dark:text-slate-400 font-medium font-mono p-3 text-[1.2rem] text-right animate-bounce "
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
     
      <PageTop pageTitle="Contact me" />
        <ContactForm />
  
       
      </section>
    </section>
  );
}
