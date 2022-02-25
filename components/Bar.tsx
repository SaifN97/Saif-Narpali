import { FunctionComponent } from "react";

import { Skill } from "../types";

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-slate-700">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r to-cyan-500 from-slate-700"
        style={{
          width: bar_width,
        }}
      >
        <Icon className="mr-3" /> {name}
      </div>
    </div>
  );
};
export default Bar;
