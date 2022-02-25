import Link from "next/link";
import { FunctionComponent } from "react";
import { Certificate } from "../types";

const CertificateCard: FunctionComponent<{ certificate: Certificate }> = ({
  certificate: { Icon, name, link },
}) => (
  <div className="flex items-center p-2 space-x-4 cursor-pointer ">
    <Icon className="w-12 h-12 text-teal-500" />
    <a href={link} target="_blank">
      <div className="">
        <h6 className="font-bold">{name}</h6>
      </div>
    </a>
  </div>
);

export default CertificateCard;
