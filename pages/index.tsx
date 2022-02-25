import { NextPage } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const About: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow p-6 pt-1">
      <h6 className="my-3 text-xl font-medium">
        Hi, I’m Saif. I’m a highly passionate self taught web developer with
        love for turning designs into fully functional responsive websites.
        <br /> I don’t like to define myself by the work I’ve done. I define
        myself by the work I want to do. Skills can be taught, personality is
        inherent. <br />I prefer to keep learning, continue challenging myself,
        and do interesting things that matter.
      </h6>
      <div className="flex-grow p-4 my-4 -mx-5">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div className="col-span-2 p-2 bg-gray-200 rounded-lg lg:col-span-1 ">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
