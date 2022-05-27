import React from "react";
import Button from "../../../Button";

interface Props {}

export default function Intro({}: Props) {
  return (
    <div className="-mt-[5vh]">
      <p className="font-mono text-secondary text-xs mb-4">Hello, my name is</p>
      <h1 className="intro-responsive-heading">Isaac Anyimiah.</h1>
      <h2 className="intro-responsive-heading-sub mb-6">
        I build mobile and web apps.
      </h2>
      <p className="sm:w-[80%] mb-14 leading-relaxed text-sm">
        I&apos;m an{" "}
        <span className="text-secondary">JavaScript developer</span> with
        <span className="text-secondary"> frontend</span> specialization.
        Currently, I work at expressPay as a Frontend Engineer (in collaboration with backend engineers and ui/ux designers) implementing component-based responsive user interfaces and consuming APIs to deliver delightful user experiences. 
      </p>
      {/* <Button size="lg">Check out my channel</Button> */}
    </div>
  );
}
