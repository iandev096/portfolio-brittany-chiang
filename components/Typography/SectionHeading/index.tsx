import React from "react";

interface Props {
  prepend: string;
  title: string;
}

export default function SectionHeading({ prepend, title }: Props) {
  return (
    <div className="mb-10 flex items-center">
      <h1 className="text-2xl">
        <span className="text-secondary text-base font-mono align-middle">
          {prepend}.{" "}
        </span>
        <span className="font-semibold text-gray-extra-light">{title}</span>
      </h1>
      <span
        role="decorator"
        className="h-[1px] ml-4 bg-primary-extra-light grow"
      />
    </div>
  );
}
