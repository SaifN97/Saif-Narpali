import Link from "next/link";
import Bar from "../components/Bar";
import CertificateCard from "../components/CertificateCard";
import ServiceCard from "../components/ServiceCard";
import { certificates, languages, tools } from "../data";

const Skills = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 ">
        <div>
          <h5 className="text-2xl font-bold ">Certifications</h5>
          <div className="flex-grow p-4 -mx-5">
            <div className="grid gap-6 md:grid-cols-2">
              {certificates.map((cert) => (
                <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-slate-700 lg:col-span-1 ">
                  <a>
                    <CertificateCard certificate={cert} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default Skills;
