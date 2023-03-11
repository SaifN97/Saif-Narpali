import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}
export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}
export interface Certificate {
  Icon: IconType;
  name: string;
  link: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url?: string;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | "Vanilla"
  | "React.js"
  | "Next.js"
  | "API"
  | "Redux"
  | "FullStack"
  | "TailwindCSS"
  | "FrontendMentor";
