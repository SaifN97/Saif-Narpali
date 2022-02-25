import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/60750929?v=4"
        alt="Saif Narpali"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h1 className="my-4 text-3xl font-medium tracking-wider font-web">
        <span className="text-transparent bg-gradient-to-r from-teal-500 to-slate-700 bg-clip-text">
          Saif
        </span>{" "}
        Narpali
      </h1>

      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-slate-700">
        Frontend Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-slate-700"
        href="#"
      >
        <GiTie /> Download Resume
      </a>

      {/* Socials */}
      <div className="flex items-center justify-around w-9/12 mx-auto text-teal-600 lg:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 hover:text-slate-700" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 hover:text-slate-700" />
        </a>
        <a href="">
          <AiFillTwitterCircle className="w-8 h-8 hover:text-slate-700" />
        </a>
        <a href="">
          <AiFillInstagram className="w-8 h-8 hover:text-slate-700" />
        </a>
      </div>

      <div className="py-4 my-5 -m-4 space-y-2 bg-gray-200 dark:bg-slate-700">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Mumbai, India</span>
        </div>
        <p>heysaif01@gmail.com</p>
        <p>8169772804</p>
      </div>

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-teal-500 to-slate-700 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:code.sumax@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeMode}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-teal-500 to-slate-700 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Change Mode
      </button>
    </div>
  );
};

export default Sidebar;
