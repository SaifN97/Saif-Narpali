import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { fadeInUp, routeFade, stagger } from "../animations";
import ProjectNavbar from "../components/ProjectNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../types";
import { motion } from "framer-motion";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetail, setShowDetail] = useState<null | Number>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );

    setProjects(newArray);
    setActive(category);
  };

  return (
    <>
      <ProjectNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <motion.div
        className="px-5 py-2 overflow-y-scroll "
        style={{ height: "65vh" }}
        variants={routeFade}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Head>
          <title>Saif Narpali | Web Developer</title>
        </Head>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="relative grid grid-cols-12 gap-4 my-3"
        >
          {projects.map((project) => (
            <motion.div
              variants={fadeInUp}
              key={project.id}
              className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-black-500 sm:col-span-6 lg:col-span-4"
            >
              <ProjectCard
                project={project}
                key={project.id}
                setShowDetail={setShowDetail}
                showDetail={showDetail}
              />
            </motion.div>
          ))}
        </motion.div>
        <a
          className="flex w-full md:w-1/2 lg:w-1/3  mt-5 mx-auto  items-center justify-center gap-3 px-2 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r to-teal-500 from-slate-700 hover:scale-105 transition-all duration-100 ease-in-out focus:outline-none"
          href="#"
        >
          <FaGithub /> View More on Github
        </a>
      </motion.div>
    </>
  );
};

export default Projects;
