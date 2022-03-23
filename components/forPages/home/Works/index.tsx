import React from "react";
import SectionHeading from "../../../Typography/SectionHeading";
import { RiGithubLine, RiShareBoxLine } from "react-icons/ri";
import ProjectItem from "../../../ProjectItem";

interface Props {}

export default function Works({}: Props) {
  return (
    <div className="">
      <SectionHeading prepend="02" title="Projects I have Worked on" />
      <ProjectItem
        title="Spotify Clone"
        sub="Featured Project"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        quidem maxime eaque illum libero ullam maiores dolore optio
        commodi illo. Ad molestias doloribus error dolorum amet ullam!"
        tags={["NextJS", "Firebase", "Spotify API", "Tailwind CSS"]}
        projectUrl=""
        githubUrl=""
      />
    </div>
  );
}
