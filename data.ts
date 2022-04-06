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
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "TailwindCSS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "60",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "VsCode",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Chakra UI",
    level: "60",
  },

  {
    Icon: BsCircleFill,
    name: "NPM",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Dev Tools",
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
    category: ["Next.js", "TailwindCSS", "API"],
    key_techs: ["React.js", "Next.js", "Stripe", "FakeStoreAPI", "TailwindCSS"],
  },

  {
    id: 1,
    name: "NotYouTube",
    image_path: "/images/react/notyoutube.jpg",
    deployed_url: "https://not-youtube.vercel.app",
    github_url: "https://github.com/SaifN97/NotYoutube",
    category: ["React.js", "Redux", "API"],
    description: "NotYouTube is almost YouTube powered using YouTube API",
    key_techs: ["React", "Redux", "Axios", "Firebase", "YouTubeAPI"],
  },

  {
    id: 18,
    name: "Airbnb Clone",
    image_path: "/images/next/airbnb.png",
    deployed_url: "https://airbnb-clone-saifn97.vercel.app",
    github_url: "https://github.com/SaifN97/airbnb-clone",
    category: ["Next.js", "React.js", "TailwindCSS"],
    description:
      "This project is a clone attempt of airbnb website with TailwindCSS. Integrated with maps powered by MapBox Studio",
    key_techs: ["React.js", "Next.js", "TailwindCSS", "Sanity"],
  },

  {
    id: 2,
    name: "LinkedIn Clone",
    image_path: "/images/react/linkedin.jpg",
    deployed_url: "https://clonelinkedinsn.netlify.app/",
    github_url: "https://github.com/SaifN97/linkedin-clone",
    category: ["React.js", "Redux", "FullStack"],
    description:
      "This is was a clone attempt of LinkedIn.com with firebase OAuth",
    key_techs: ["React", "Redux", "Firebase"],
  },

  {
    id: 3,
    name: "Graph blog",
    image_path: "/images/react/graphcms.jpg",
    deployed_url: "https://graph-cms-blog-nu.vercel.app",
    github_url: "https://github.com/SaifN97/graph-cms-blog",
    category: ["Next.js", "TailwindCSS", "FullStack"],
    description:
      "This is a blogging website backed up user friendly content management system using GraphQL on the backend",
    key_techs: ["React.js", "Next.js", "GraphQL", "TailwindCSS"],
  },

  {
    id: 4,
    name: "ShareMe",
    image_path: "/images/react/shareme.jpg",
    deployed_url: "https://nshareme.netlify.app",
    github_url: "https://github.com/SaifN97/ShareMe",
    category: ["React.js", "TailwindCSS", "FullStack"],
    description:
      "ShareMe is a Social Media app similar to Pinterest for sharing ideas with photos and illustrations",
    key_techs: ["React.js", "SanityCMS", "TailwindCSS"],
  },

  {
    id: 5,
    name: "Medium 2.0",
    image_path: "/images/next/medium.jpg",
    deployed_url: "https://medium-2-0-saifn97.vercel.app/",
    github_url: "https://github.com/SaifN97/medium-2.0",
    category: ["Next.js", "TailwindCSS", "FullStack"],
    description: "This is a clone attempt website inspired by medium.com",
    key_techs: ["Next.js", "Sanity", "TailwindCSS"],
  },

  {
    id: 6,
    name: "Spotify 2.0",
    image_path: "/images/next/spotify.jpg",
    deployed_url: "https://spotify-2-0-eight.vercel.app",
    github_url: "https://github.com/SaifN97/Spotify-2.0",
    category: ["Next.js", "TailwindCSS", "API"],
    description:
      "This a web app provides remote access of your spotify account using Spotify API",
    key_techs: ["Next.js", "Recoil", "SpotifyAPI", "TailwindCSS"],
  },

  {
    id: 7,
    name: "Cryptoverse",
    image_path: "/images/react/cryptoverse.jpg",
    github_url: "https://github.com/SaifN97/cryptoverse",
    deployed_url: "https://sn-cryptoverse.netlify.app/",
    category: ["React.js", "Redux", "API"],
    description:
      "This is a web app for live Cryptocurrency updates and news powered by CryptoAPI from RapidAPI.com",
    key_techs: ["React", "API", "Redux Toolkit", "AntDesign"],
  },

  {
    id: 8,
    name: "Gericht Restaurant",
    image_path: "/images/react/geritch.jpg",
    deployed_url: "https://geritch-resto.netlify.app/",
    github_url: "https://github.com/SaifN97/Geritch-restaurant-brochure-site",
    category: ["React.js", "TailwindCSS"],
    description:
      "This is a fully responsive demo brochure site for restaurants made with React.js and TailwindCSS",
    key_techs: ["React.js", "TailwindCSS"],
  },

  {
    id: 9,
    name: "Realtor",
    image_path: "/images/next/realtor.jpg",
    deployed_url: "https://realtor-saifn97.vercel.app/",
    github_url: "https://github.com/SaifN97/Realtor",
    category: ["Next.js", "API"],
    description:
      "Realor is a demo real estate platform to buy or rent your dream home powered by Bayut API",
    key_techs: ["Next.js", "RapidAPI", "ChakraUI", "Bayut API"],
  },

  {
    id: 10,
    name: "GPT-3 Open AI",
    image_path: "/images/react/gpt3.jpg",
    deployed_url: "https://blogopenaigpt3.netlify.app/",
    github_url: "https://github.com/SaifN97/Open-AiIGPT3-landing-page",
    category: ["React.js"],
    description: "This is a static landing page for GPT-3 OpenAI",
    key_techs: ["React", "SCSS"],
  },

  {
    id: 11,
    name: "Blogr",
    image_path: "/images/frontendmentor/blogr.jpg",
    deployed_url: "https://reverent-fermi-c94e80.netlify.app/",
    github_url: "https://github.com/SaifN97/Blogr-landing-page",
    category: ["Vanilla", "FrontendMentor"],
    description: "This was a challenge project from frontendMentor.io",
    key_techs: ["HTML", "SCSS", "JavaScript"],
  },

  {
    id: 12,
    name: "SunnySide",
    image_path: "/images/frontendmentor/sunnyside.jpg",
    deployed_url: "https://vigilant-euler-c3932b.netlify.app/",
    github_url: "https://github.com/SaifN97/Sunnyside-agency-landing-page",
    category: ["Vanilla", "FrontendMentor"],
    description: "This was a challenge project from frontendMentor.io",
    key_techs: ["HTML", "SCSS", "JavaScript", "CSS Custom properties"],
  },

  {
    id: 13,
    name: "Space Tourism",
    image_path: "/images/frontendmentor/space.jpg",
    deployed_url: "https://saifn97-space-tourism.netlify.app/",
    github_url: "https://github.com/SaifN97/Space-tourism-multipage-website",
    category: ["Vanilla", "FrontendMentor"],
    description: "This was a challenge project from FrontendMentor.io",
    key_techs: ["HTML", "SCSS", "JavaScript", "CSS Custom properties"],
  },

  {
    id: 14,
    name: "Huddle",
    image_path: "/images/frontendmentor/huddle-dark.jpg",
    deployed_url: "https://distracted-booth-c13b35.netlify.app/",
    github_url:
      "https://github.com/SaifN97/Huddle-landing-page-with-curved-sections",
    category: ["Vanilla", "FrontendMentor"],
    description: "This was a challenge project from FrontendMentor.io",
    key_techs: ["HTML", "SCSS", "JavaScript", "CSS Custom properties"],
  },

  {
    id: 15,
    name: "Insure",
    image_path: "/images/frontendmentor/insure.jpg",
    deployed_url: "https://festive-galileo-1ea9f6.netlify.app/",
    github_url: "https://github.com/SaifN97/Insure-landing-page",
    category: ["Vanilla", "FrontendMentor"],
    description: "This was a challenge project from frontendMentor.io",
    key_techs: ["HTML", "SCSS", "JavaScript", "CSS Custom properties"],
  },

  {
    id: 16,
    name: "Flyo",
    image_path: "/images/frontendmentor/fylo-dark.jpg",
    deployed_url: "https://sleepy-euclid-89fe58.netlify.app/",
    github_url: "https://github.com/SaifN97/Fylo-dark-theme-landing-page",
    category: ["Vanilla", "FrontendMentor"],
    description: "This was a challenge project from frontendMentor.io",
    key_techs: ["HTML", "SCSS", "JavaScript", "CSS Custom properties"],
  },

  {
    id: 17,
    name: "Clipboard",
    image_path: "/images/frontendmentor/clipboard.jpg",
    deployed_url: "https://priceless-lamarr-be16c6.netlify.app/",
    github_url: "https://github.com/SaifN97/Clipboard-landing-page",
    category: ["Vanilla", "FrontendMentor"],
    description: "This was a challenge project from frontendMentor.io",
    key_techs: ["HTML", "SCSS", "JavaScript", "CSS Custom properties"],
  },

  //18 ids in total
];
