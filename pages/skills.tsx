import Bar from "../components/Bar";
import { fadeInUp, routeFade } from "../animations";
import CertificateCard from "../components/CertificateCard";
import { certificates, languages, tools } from "../data";
import { motion } from "framer-motion";
import Head from "next/head";

const Skills = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Saif Narpali | Web Developer</title>
      </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 ">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="text-2xl font-bold ">Certifications</h5>
          <div className="flex-grow p-4 -mx-5">
            <div className="grid gap-6 md:grid-cols-2">
              {certificates.map((cert) => (
                <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-500 lg:col-span-1 ">
                  <a>
                    <CertificateCard certificate={cert} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
