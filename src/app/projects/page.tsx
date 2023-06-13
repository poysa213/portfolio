'use client'
import React from "react";
import { AnimatePresence } from "framer-motion";
import Project from "@components/Project";
import PageTop from "@components/PageTop";
import { getProjects } from "@lib/dataFetch";
import AnimatedDiv from "@FramerMotion/AnimatedDiv";
import { FadeContainer } from "@content/FramerMotionVariants";
import { ProjectType } from "@types";

export default function Projects() {
    const projects: ProjectType[] = getProjects();
  return (
    <>
      <section className="pageTop">
        
        <PageTop pageTitle="Projects">
        <p className="text-red-200">I will add all my projects Here as soon as i can, Thanks&#60;3</p>
          I've been making various types of projects some of them were basics
          and some of them were complicated. So far I've made{" "}
          <span className="font-bold text-gray-600 dark:text-gray-200">
            {projects.length}
          </span>{" "}
          projects.
        </PageTop>

        <AnimatedDiv
          variants={FadeContainer}
          className="grid grid-cols-1 gap-4 mx-auto md:ml-[20%] xl:ml-[24%]"
        >
          <AnimatePresence>
            {projects &&
              projects.map((project, index) => {
                if (project.name === "" && project.githubURL === "")
                  return null;
                return <Project key={index} project={project} />;
              })}
          </AnimatePresence>
        </AnimatedDiv>
      </section>
    </>
  );
}

