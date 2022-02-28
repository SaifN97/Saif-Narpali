import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        width="128px"
        height="128px"
        src="/images/me.jpg"
        alt="Saif Narpali"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h1 className="my-4 text-3xl font-medium tracking-wider font-web">
        <span className="text-transparent bg-gradient-to-r from-teal-500 to-slate-700 bg-clip-text">
          Saif
        </span>{" "}
        Narpali
      </h1>

      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500">
        Frontend Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-500"
        href="/saifResume.pdf"
        download
      >
        <GiTie /> Download Resume
      </a>

      {/* Socials */}
      <div className="flex items-center justify-around w-9/12 mx-auto text-teal-600 lg:w-full">
        <a href="https://github.com/SaifN97" target="_blank">
          <AiFillGithub className="w-8 h-8 hover:text-slate-700" />
        </a>
        <a href="https://www.linkedin.com/in/heysaifnarpali/ " target="_blank">
          <AiFillLinkedin className="w-8 h-8 hover:text-slate-700" />
        </a>
        <a href="https://twitter.com/NarpaliSaif" target="_blank">
          <AiFillTwitterCircle className="w-8 h-8 hover:text-slate-700" />
        </a>
        <a href="https://www.instagram.com/saif.codes_/" target="_blank">
          <AiFillInstagram className="w-8 h-8 hover:text-slate-700" />
        </a>
      </div>

      <div className="py-4 my-5 -m-4 space-y-2 bg-gray-200 dark:bg-black-500">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Mumbai, India</span>
        </div>
        <p>heysaif01@gmail.com</p>
        <p>8169772804</p>
      </div>

      <button
        className="w-8/12 px-5 py-2 text-white transition-all duration-100 ease-in-out bg-black rounded-full cursor-pointer bg-gradient-to-r from-teal-500 to-slate-700 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:heysaif01@gmail.com")}
      >
        Email Me
      </button>

      <div className="flex items-center justify-center w-full my-5 ">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          {/*  toggle  */}
          <div className="relative">
            {/*  input  */}
            <input
              type="checkbox"
              id="toggleB"
              className="sr-only"
              onClick={changeMode}
            />
            {/*  line  */}
            <div className="block h-8 rounded-full bg-slate-700 w-14"></div>
            {/*  dot */}
            <div className="absolute w-6 h-6 transition bg-white rounded-full dot left-1 top-1"></div>
          </div>
          {/* label  */}
          <div className="ml-2 font-medium text-slate-700 dark:text-white">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
