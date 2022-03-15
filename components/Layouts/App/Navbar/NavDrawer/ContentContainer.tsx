import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {}

export default function ContentContainer(props: Props) {
  return (
    <div
      className={`h-full w-[75%] max-w-[400px] absolute inset-y-0 right-0 bg-primary-light shadow-primary-left px-6 sm:px-12 py-7`}
      {...props}
    />
  );
}
