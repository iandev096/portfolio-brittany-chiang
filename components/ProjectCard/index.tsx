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
          <a href={githubUrl}>
            <RiShareBoxLine size={20} />
          </a>
        </div>
      </div>

      <a href={githubUrl}>
        <h2 className="text-xl font-semibold text-gray-extra-light mb-4">
          {title}
        </h2>
      </a>
      <p className="mb-8">{description}</p>

      <ul className="flex gap-4 mb-4 px-6 md:px-0  text-xs font-mono">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
