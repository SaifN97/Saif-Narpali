import { motion } from "framer-motion";
import { NextPage } from "next";
import { fadeInUp, routeFade, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const About: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow p-6 pt-1"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="my-3 text-xl font-medium">
        Hi, I’m Saif. I’m a highly passionate self taught web developer with
        love for turning designs into fully functional responsive websites.
        <br /> I don’t like to define myself by the work I’ve done. I define
        myself by the work I want to do. Skills can be taught, personality is
        inherent. <br />I prefer to keep learning, continue challenging myself,
        and do interesting things that matter.
      </h6>
      <div className="flex-grow p-4 my-4 -mx-5">
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={stagger}
          animate="animate"
          initial="initial"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-500 lg:col-span-1 "
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
