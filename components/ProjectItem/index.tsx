import React from "react";
import { RiGithubLine, RiShareBoxLine } from "react-icons/ri";

interface Props {
  title: string;
  sub: string;
  description: string;
  tags: string[];
  githubUrl: string;
  projectUrl: string;
  reverse?: boolean;
}

export default function ProjectItem({
  description,
  title,
  sub,
  tags,
  githubUrl,
  projectUrl,
  reverse,
}: Props) {
  return (
    <div className="grid grid-cols-12">
      <div className="relative col-start-1 col-end-8 row-start-1 shadow-primary-shadow shadow-lg row-end-2 rounded-md overflow-hidden">
        <div className="absolute inset-0 z-10 bg-primary-light opacity-70" />
        <img
          alt="project-1"
          className="w-full h-full object-left-top object-cover grayscale-[80%]"
          src="/images/project-1.png"
        />
      </div>
      <div
        className={`col-start-7 col-end-[-1] z-20 row-start-1 row-end-2 ${
          reverse ? "text-left" : "text-right"
        }`}
      >
        <p className="text-xs font-mono text-secondary">{sub}</p>
        <h2 className="text-xl font-semibold text-gray-extra-light">{title}</h2>
        <div className="my-6 bg-primary-light shadow-primary-shadow shadow-lg px-6 py-5">
          <p>{description}</p>
        </div>
        <ul
          className={`flex gap-4 mb-4 text-xs font-mono ${
            reverse ? "justify-start" : "justify-end"
          }`}
        >
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div
          className={`flex gap-3 ${reverse ? "justify-start" : "justify-end"}`}
        >
          <a href={githubUrl}>
            <RiGithubLine className="text-gray-extra-light" />
          </a>
          <a href={projectUrl}>
            <RiShareBoxLine className="text-gray-extra-light" />
          </a>
        </div>
      </div>
    </div>
  );
}
