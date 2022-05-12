import React from "react";
import SectionHeading from "../../../Typography/SectionHeading";
import TechItem from "../../../TechItem";
import Button from "../../../Button";

interface Props {}

export default function Contact({}: Props) {
  return (
    <div>
      <div className="text-sm space-y-4 sm:w-8/12 mx-auto">
        <SectionHeading prepend="01" title="Contact Me" />
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
        <div className="pt-8 flex justify-end">
          <Button className="w-full" size="lg">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}
