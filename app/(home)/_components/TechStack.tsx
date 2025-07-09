"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDocker,
  FaDatabase,
  FaPython,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPrisma,
  SiPostman,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsGitlab } from "react-icons/bs";
import { FaAws } from "react-icons/fa6";
import { VscVscodeInsiders } from "react-icons/vsc";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

function TechStack() {
  return (
    <>
      <div className=" rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={techStackList}
          direction="right"
          speed="normal"
        />
      </div>
      <div className=" mt-5 rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={techStackDevOps}
          direction="left"
          speed="normal"
        />
      </div>
    </>
  );
}

const techStackList = [
  { name: "react", icon: FaReact },
  { name: "Javascript", icon: IoLogoJavascript },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "HTML5", icon: FaHtml5 },
  { name: "Python", icon: FaPython },
  { name: "Sass", icon: FaSass },
  { name: "Typescript", icon: SiTypescript },
  { name: "MongoDB", icon: SiMongodb },
  { name: "ExpressJS", icon: SiExpress },
  { name: "Prisma", icon: SiPrisma },
  { name: "NextJS", icon: RiNextjsLine },
  { name: "NodeJS", icon: DiNodejs },
];

const techStackDevOps = [
  { name: "Postgres", icon: BiLogoPostgresql },
  { name: "Deployment", icon: AiOutlineDeploymentUnit },
  { name: "VsCode", icon: VscVscodeInsiders },
  { name: "Aws", icon: FaAws },
  { name: "GitLab", icon: BsGitlab },
  { name: "Figma", icon: IoLogoFigma },
  { name: "Postman", icon: SiPostman },
  { name: "Databases", icon: FaDatabase },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: FaGithub },
];

export default TechStack;
