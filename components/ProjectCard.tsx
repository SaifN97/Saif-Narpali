import { FunctionComponent, useState } from "react";
import { IProject } from "../types";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { fadeInUp, stagger } from "../animations";
import { motion } from "framer-motion";
// TODO Github
import { MdClose } from "react-icons/md";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | Number;
  setShowDetail: (id: Number | null) => void;
}> = ({
  project: {
    name,
    image_path,
    deployed_url,
    github_url,
    description,
    key_techs,
    id,
  },
  setShowDetail,
  showDetail,
}) => {
  return (
    <>
      <Image
        src={image_path}
        alt={name}
        layout="responsive"
        width={300}
        height={150}
        objectFit="cover"
        objectPosition="top"
        onClick={() => setShowDetail(id)}
        className="rounded-md cursor-pointer "
      />

      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="fixed left-0 z-10 grid w-full h-auto p-2 overflow-hidden text-black bg-gray-100 border border-gray-200 rounded-tl-3xl rounded-br-3xl top-40 md:p-10 dark:bg-black-200 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 dark:text-gray-100 md:grid-cols-2 gap-x-12 dark:shadow-custom-dark dark:border-slate-700 ">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100 rounded-tr-2xl rounded-bl-2xl"
            >
              <Image
                src={image_path}
                alt={name}
                className="overflow-hidden rounded-tr-2xl rounded-bl-2xl"
                layout="responsive"
                width={300}
                height={150}
                objectFit="cover"
                objectPosition="center"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              {github_url && (
                <a
                  href={github_url}
                  target="_blank"
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-black-500 rounded-tr-2xl rounded-bl-2xl"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
              )}
              <a
                href={deployed_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm rounded-tr-2xl rounded-bl-2xl dark:bg-black-500"
              >
                <FaEye /> <span>View Live</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl "
            >
              {name}
            </motion.h2>
            <motion.h3
              variants={fadeInUp}
              className="my-3 text-base font-medium"
            >
              {description}
            </motion.h3>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((value, i) => (
                <span
                  key={i}
                  className="p-1 px-2 my-1 bg-gray-300 rounded-sm dark:bg-black-500"
                >
                  {value}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-black-200"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
