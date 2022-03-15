import React from "react";
import SectionHeading from "../../../Typography/SectionHeading";
import TechItem from "../../../TechItem";

interface Props {}

const TECHS = [
  ["Javascript", "Typescript", "CSS/SCSS"],
  ["ReactJS", "React Native", "NodeJS"],
];

export default function AboutMe({}: Props) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="text-sm space-y-4 sm:w-8/12 sm:mr-12">
          <SectionHeading prepend="01" title="About Me" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta
            itaque pariatur quod impedit sequi deserunt possimus minima labore
            unde maxime exercitationem vel velit reprehenderit repellendus
            quaerat, esse a quasi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illum
            magni eos libero. Reprehenderit blanditiis dignissimos nemo iste
            voluptates provident, officiis excepturi ad at maxime temporibus qui
            iure, aspernatur ipsum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            assumenda aliquid ut consequuntur ullam voluptate quas blanditiis,
          </p>
          <p>Here are a few technologies I know how to use very well:</p>
          <div className="columns-2 font-mono text-xs pb-4 sm:w-8/12 md:w-7/12 lg:w-6/12">
            {TECHS.map((list) => (
              <ul key={list.toString()} className="space-y-2">
                {list.map((item) => (
                  <TechItem item={item} key={item} />
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="sm:w-4/12 sm:mt-20">
          <div className="w-4/6 min-w-[180px] max-w-[300px] mx-auto mt-4 sm:m-0 sm:w-full bg-light opacity-90 mix-blend-color-dodge hover:mix-blend-normal outline outline-2 outline-offset-8 outline-secondary hover:outline-gray-dark">
            <img
              className="h-full w-full brightness-95"
              src="/images/me.png"
              alt="Isaac Anyimiah"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
