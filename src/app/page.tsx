"use client";
import Contact from "@sections/ContactForm";
import AboutMe from "@sections/about";
import Header from "@sections/header";
import Projects from "@sections/projects";
import Skills from "@sections/skills";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <AboutMe />

      <Projects />

      <Skills />
      <Contact />
    </div>
  );
}
