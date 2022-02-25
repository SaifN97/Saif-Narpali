import { RiLightbulbFill } from "react-icons/ri";
import { FaRocket, FaServer, FaLaptopCode, FaUser } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdOutlineDevices } from "react-icons/md";
import { SiFrontendmentor } from "react-icons/si";
import { Service } from "./types";

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
