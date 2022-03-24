import React from "react";
import SectionHeading from "../../../Typography/SectionHeading";
import ProjectItem from "../../../ProjectItem";
import { OTHER_PROJ_ITEMS, PROJECT_ITEMS } from "../../../../data";
import ProjectCard from "../../../ProjectCard";

interface Props {}

export default function Works({}: Props) {
  return (
    <div>
      <SectionHeading prepend="03" title="Projects I have Worked on" />
      <div className="space-y-28 pt-10">
        {PROJECT_ITEMS.map((item, idx) => (
          <ProjectItem reverse={idx % 2 !== 0} {...item} key={item.title} />
        ))}
      </div>

      <div className="mt-28">
        <SectionHeading prepend="03.5" title="Other Noteworthy Projects" />
        <div className="grid grid-cols-2 gap-4">
          {OTHER_PROJ_ITEMS.map((item, idx) => (
            <ProjectCard {...item} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
