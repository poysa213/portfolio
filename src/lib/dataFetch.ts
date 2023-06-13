import skills from "@content/skillsData";
import  projects  from "@content/projectsData";
import socialMedia from "@content/socialMedia";

export function getSkills() {
  return skills;
}


export function getProjects() {
  return projects.reverse();
}


export function getSocialMedia() {
  return socialMedia;
}


