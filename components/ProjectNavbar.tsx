import { FunctionComponent } from "react";
import { Category } from "../types";

const NavItem: FunctionComponent<{
  value: Category | "all";
  active: string;
  handleFilterCategory: Function;
}> = ({ value, active, handleFilterCategory }) => {
  var className =
    "font-semibold capitalize cursor-pointer hover:text-teal-500 ";
  if (active === value) className += " text-teal-500 ";

  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <nav className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="React.js" {...props} />
      <NavItem value="Vanilla" {...props} />
      <NavItem value="Next.js" {...props} />
      <NavItem value="Redux" {...props} />
      <NavItem value="Sanity" {...props} />
    </nav>
  );
};

export default ProjectNavbar;
