"use client";
import AboutMe from "@sections/about";
import Header from "@sections/header";
import Projects from "@sections/projects";
import Skills from "@sections/skills";

export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />

      <Projects />

      <Skills />
    </>
  );
}
