"use client";
import React, { useEffect, useState } from "react";
import { Skill } from "@types";
import PageTop from "@components/PageTop";
import { getSkills } from "@lib/dataFetch";

interface SkillCardProps {
  skill: Skill;
  iconPath: string;
}

export default function SkillsPage() {
  const skills: Skill[] = getSkills();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const threshold = 0.4;
        if (rect.top <= window.innerHeight * threshold) {
          setInView(true);
        } else {
          setInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        id="skills"
        className="my-10 lg:mx-2 lg:h-[100vh] flex justify-center items-center flex-col w-full"
      >
        <div className="w-full">
          <PageTop pageTitle="Skills" />
          <div
            className={`grid my-10 gap-4 grid-col-1 lg:grid-cols-6 md:grid-cols-2 ${
              inView ? "slide-in" : "slide-out"
            }`}
          >
            {skills.map((skill, index) => {
              const iconPath = `/logos/${skill.name.toLowerCase()}.svg`;
              return (
                <SkillCard key={index} skill={skill} iconPath={iconPath} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function SkillCard({ skill, iconPath }: SkillCardProps) {
  return (
    <div className="py-4 flex flex-col items-center justify-center sm:justify-start gap-4 bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700">
      <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
        <img src={iconPath} alt={skill.name} className="w-6 h-6" />
      </div>
      <p className="text-sm md:text-base font-semibold select-none pointer-events-none">
        {skill.name}
      </p>
    </div>
  );
}
