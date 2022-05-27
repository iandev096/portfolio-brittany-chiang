import React from "react";
import { RiGithubLine, RiShareBoxLine } from "react-icons/ri";
import openExternalLink from "../../util/url";

interface Props {
  title: string;
  sub: string;
  description: string;
  tags: string[];
  githubUrl: string;
  projectUrl: string;
  reverse?: boolean;
  imageSrc: string;
}



export default function ProjectItem({
  description,
  title,
  sub,
  tags,
  githubUrl,
  projectUrl,
  reverse,
  imageSrc,
}: Props) {
  
  return (
    <div className="md:grid grid-cols-12 group">
      <div
        className={`${
          reverse ? "col-start-6 col-end-[-1]" : "col-start-1 col-end-8"
        } row-start-1 cursor-pointer row-end-2 relative shadow-primary-shadow md:shadow-lg rounded-md overflow-hidden -z-10 md:z-auto`}
      >
        <div onClick={() => openExternalLink(projectUrl)} className="absolute inset-0 z-10 bg-primary-light opacity-70 group-hover:opacity-0 transition-all" />
        <img
          alt={title}
          className="w-full h-full object-left-top object-cover grayscale-[80%] group-hover:grayscale-[20%] transition-all"
          src={imageSrc}
        />
      </div>
      <div
        className={`z-20 row-start-1 row-end-2 -mt-12 md:mt-0 md:bg-none bg-gradient-to-b to-transparent from-primary-light ${
          reverse
            ? "md:text-left col-start-1 col-end-7"
            : "md:text-right col-start-7 col-end-[-1]"
        }`}
      >
        <p className="text-xs font-mono text-secondary px-6 md:px-0 pt-5 md:pt-0">
          {sub}
        </p>
        <h2 className="text-xl font-semibold text-gray-extra-light px-6 md:px-0">
          {title}
        </h2>
        <div className="my-6 md:bg-primary-light shadow-primary-shadow md:shadow-lg px-6 py-5">
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
        <ul
          className={`flex gap-4 mb-4 px-6 md:px-0  text-xs font-mono ${
            reverse ? "md:justify-start" : "md:justify-end"
          }`}
        >
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div
          className={`flex gap-3 px-6 md:px-0  ${
            reverse ? "justify-start" : "justify-end"
          }`}
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
