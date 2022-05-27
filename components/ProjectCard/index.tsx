import React from "react";
import { RiGithubLine, RiShareBoxLine, RiBriefcaseLine } from "react-icons/ri";

interface Props {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  projectUrl: string;
}

export default function ProjectCard({
  description,
  title,
  tags,
  githubUrl,
  projectUrl,
}: Props) {
  return (
    <div className="p-8 bg-primary-light shadow-md shadow-primary-shadow transition-all hover:shadow-xl hover:-translate-y-1 rounded-md">
      <div className="flex justify-between items-center mb-7">
        <a href={githubUrl}>
          <RiBriefcaseLine size={40} className="text-secondary" />
        </a>
        <div className="flex gap-4">
          <a href={githubUrl}>
            <RiGithubLine size={20} />
          </a>
          <a href={projectUrl}>
            <RiShareBoxLine size={20} />
          </a>
        </div>
      </div>

      <a href={projectUrl}>
        <h2 className="text-xl font-semibold text-gray-extra-light mb-4">
          {title}
        </h2>
      </a>
      <p className="mb-8 text-sm leading-relaxed">{description}</p>

      <ul className="flex gap-4 mb-4 md:px-0 overflow-x-scroll text-xs font-mono hide-scrollbar">
        {tags.map((tag) => (
          <li className="shrink-0" key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
