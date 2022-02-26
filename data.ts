import { RiLightbulbFill } from "react-icons/ri";
import { FaRocket, FaFreeCodeCamp } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdOutlineDevices } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { Certificate, IProject, Service, Skill } from "./types";

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

export const projects: IProject[] = [
  {
    id: 0,
    name: "Amazon 2.0",
    description:
      "This is a clone attempt of Amazon.com E-commerce website, integrated with Stripe payments and FakeStore API",
    image_path: "/images/next/amazon.jpg",
    deployed_url: "https://amazon-2-0-saifn97.vercel.app",
    github_url: "https://github.com/SaifN97/amazon-2.0",
    category: ["Next.js"],
    key_techs: ["React.js", "Next.js", "Stripe", "FakeStoreAPI", "TailwindCSS"],
  },
  {
    id: 1,
    name: "Graph blog",
    //TODO add data
    image_path: "/images/react/graphcms.jpg",
    deployed_url: "https://graph-cms-blog-nu.vercel.app",
    github_url: "https://github.com/SaifN97/graph-cms-blog",
    category: ["Next.js"],
    description:
      "This is a blogging website backed up user friendly content management system using GraphQL on the backend",
    key_techs: ["React.js", "Next.js", "GraphQL", "TailwindCSS"],
  },

  {
    id: 2,
    name: "ShareMe",
    image_path: "/images/react/shareme.jpg",
    deployed_url: "https://nshareme.netlify.app",
    github_url: "https://github.com/SaifN97/ShareMe",
    category: ["React.js", "TailwindCSS", "Sanity"],
    description:
      "ShareMe is a Social Media app similar to Pinterest for sharing ideas with photos and illustrations",
    key_techs: ["React.js", "SanityCMS", "TailwindCSS"],
  },

  {
    id: 3,
    name: "NotYouTube",
    image_path: "/images/react/notyoutube.jpg",
    deployed_url: "https://not-youtube.vercel.app",
    github_url: "https://github.com/SaifN97/NotYoutube",
    category: ["React.js", "Redux"],
    description: "NotYouTube is almost YouTube powered using YouTube API",
    key_techs: ["React", "Redux", "Axios", "Firebase", "YouTubeAPI"],
  },

  {
    id: 4,
    name: "LinkedIn Clone",
    image_path: "/images/react/linkedin.jpg",
    deployed_url: "https://clonelinkedinsn.netlify.app/",
    github_url: "https://github.com/SaifN97/linkedin-clone",
    category: ["React.js", "Redux"],
    description:
      "This is was a clone attempt of LinkedIn.com with firebase OAuth",
    key_techs: ["React", "Redux", "Firebase"],
  },
  {
    id: 5,
    name: "Blogr",
    image_path: "/images/frontendmentor/blogr.jpg",
    deployed_url: "https://reverent-fermi-c94e80.netlify.app/",
    github_url: "https://github.com/SaifN97/Blogr-landing-page",
    category: ["Vanilla", "FrontendMentor"],
    description: "Hey, You are seeing this project now...Enjoy",
    key_techs: ["HTML", "SCSS", "JavaScript"],
  },
  {
    id: 6,
    name: "Cryptoverse",
    image_path: "/images/react/cryptoverse.jpg",
    github_url: "https://github.com/SaifN97/cryptoverse",
    deployed_url: "https://sn-cryptoverse.netlify.app/",
    category: ["React.js"],
    description: "Hey, You are seeing this project now...Enjoy",
    key_techs: ["React", "API", "AntDesign"],
  },
  {
    id: 7,
    name: "Spotify 2.0",
    image_path: "/images/react/linkedin.jpg",
    deployed_url: "spotify-2-0-eight.vercel.app",
    github_url: "https://github.com/SaifN97/Spotify-2.0",
    category: ["Next.js"],
    description:
      "This a web app provides remote access of your spotify account using Spotify API",
    key_techs: ["React", "Next.js", "Recoil", "SpotifyAPI", "TailwindCSS"],
  },
  {
    id: 8,
    name: "Space Tourism",
    image_path: "/images/frontendmentor/space.jpg",
    deployed_url: "https://saifn97-space-tourism.netlify.app/",
    github_url: "https://github.com/SaifN97/Space-tourism-multipage-website",
    category: ["Vanilla"],
    description: "This was a challenge project from FrontendMentor.io",
    key_techs: ["HTML", "SCSS", "JavaScript", "CSS Custom properties"],
  },
  {
    id: 9,
    name: "Huddle",
    image_path: "/images/frontendmentor/huddle.jpg",
    deployed_url: "https://distracted-booth-c13b35.netlify.app/",
    github_url:
      "https://github.com/SaifN97/Huddle-landing-page-with-curved-sections",
    category: ["Vanilla"],
    description: "This was a challenge project from FrontendMentor.io",
    key_techs: ["HTML", "SCSS", "JavaScript", "CSS Custom properties"],
  },
];
