import React from "react";
import TabView from "../../../TabView";
import SectionHeading from "../../../Typography/SectionHeading";

interface Props {}

export default function WorkExperience({}: Props) {
  return (
    <div className="md:w-11/12 lg:w-10/12 mx-auto">
      <SectionHeading prepend="02" title="Work Experience" />
      <TabView />
    </div>
  );
}
