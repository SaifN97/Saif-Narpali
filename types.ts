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
