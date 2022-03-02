import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const { pathname } = useRouter();

  const [active, setActive] = useState("");

  //later
  useEffect(() => {
    if (pathname === "/") setActive("About");
    else if (pathname === "/projects") setActive("Projects");
    else if (pathname === "/skills") setActive("Skills");
  }, []);

  return (
    <div className="my-2 border-b-2 border-gray-200 dark:border-black-700">
      <div className="flex items-center justify-around gap-4 px-5 py-3 text-base font-normal md:text-xl">
        <Link href="/">
          <a
            onClick={() => setActive("About")}
            className={`text-xl font-bold  hover:text-teal-600 md:text-2xl ${
              active === "About"
                ? "text-teal-500 border-b-4 border-teal-500"
                : ""
            }`}
          >
            About
          </a>
        </Link>
        <Link href="/skills">
          <a
            onClick={() => setActive("Skills")}
            className={`text-xl font-bold  hover:text-teal-600 md:text-2xl ${
              active === "Skills"
                ? "text-teal-500 border-b-4 border-teal-500"
                : ""
            }`}
          >
            Skills
          </a>
        </Link>
        <Link href="/projects">
          <a
            onClick={() => setActive("Projects")}
            className={`text-xl font-bold  hover:text-teal-600 md:text-2xl ${
              active === "Projects"
                ? "text-teal-500 border-b-4 border-teal-500"
                : ""
            }`}
          >
            Projects
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
