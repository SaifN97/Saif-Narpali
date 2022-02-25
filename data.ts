import { RiLightbulbFill } from "react-icons/ri";
import { FaRocket, FaFreeCodeCamp } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdOutlineDevices } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { Certificate, Service, Skill } from "./types";

export const services: Service[] = [
  {
    Icon: AiFillThunderbolt,
    title: "Fast",
    about: "Fast load times and lag free interaction, my highest priority.",
  },
  {
    Icon: MdOutlineDevices,
    title: "Responsive",
    about: "My layouts will work on any device, big or small.",
  },
  {
    Icon: RiLightbulbFill,
    title: "Intuitive",
    about: "Strong preference for easy to use, intuitive UX/UI.",
  },
  {
    Icon: FaRocket,
    title: "Dynamic",
    about:
      "Websites don't have to be static, I love making pages come to life.",
  },
];

export const certificates: Certificate[] = [
  {
    Icon: FaFreeCodeCamp,
    name: "Responsive Web Design",
    link: "https://www.freecodecamp.org/certification/saif97/responsive-web-design",
  },
  {
    Icon: FaFreeCodeCamp,
    name: "JavaScript Algorithms & DS",
    link: "https://www.freecodecamp.org/certification/saif97/javascript-algorithms-and-data-structures",
  },
  {
    Icon: FaFreeCodeCamp,
    name: "Frontend Development Libraries",
    link: "https://www.freecodecamp.org/certification/saif97/front-end-development-libraries",
  },
  {
    Icon: FaFreeCodeCamp,
    name: "Backend Development & APIs",
    link: "https://www.freecodecamp.org/certification/saif97/back-end-development-and-apis",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "TailwindCSS",
    level: "70",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "VsCode",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "NPM",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Windows",
    level: "80",
  },
];
