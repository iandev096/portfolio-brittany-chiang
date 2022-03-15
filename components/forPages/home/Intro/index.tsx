import React from "react";
import Button from "../../../Button";

interface Props {}

export default function Intro({}: Props) {
  return (
    <div className="-mt-[5vh]">
      <p className="font-mono text-secondary text-xs mb-4">Howdy, my name is</p>
      <h1 className="intro-responsive-heading">Isaac Anyimiah.</h1>
      <h2 className="intro-responsive-heading-sub mb-6">
        I build mobile and web apps.
      </h2>
      <p className="sm:w-[80%] mb-14 text-sm">
        I&apos;m a well-rounded{" "}
        <span className="text-secondary">JavaScript developer</span> with
        <span className="text-secondary"> frontend</span> specialization.
        Currently, I work at expressPay as a Frontend Engineer where with a
        focus on implementing component-based user interfaces and collaborating
        with backend engineers. I also have a youtube channel where teach
        programming and building web and mobile apps.
      </p>
      <Button size="lg">Check out my channel</Button>
    </div>
  );
}
