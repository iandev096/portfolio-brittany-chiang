import React from "react";
import SectionHeading from "../../../Typography/SectionHeading";
import TechItem from "../../../TechItem";
import Button from "../../../Button";

interface Props { }

export default function Contact({ }: Props) {
  return (
    <div>
      <div className="text-sm space-y-4 sm:w-8/12 mx-auto">
        <SectionHeading prepend="01" title="Contact Me" />
        <p className="text-sm font-mono font-medium py-4 leading-relaxed text-secondary">
          Want to work with me or get to know me more? Click the button below. 
        </p>
        <div className="pt-8 flex justify-end">
          <Button onClick={() => window?.open('mailto:ianyimiah@gmail.com')} className="w-full" size="lg">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}
