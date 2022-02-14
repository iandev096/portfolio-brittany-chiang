import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}

export default function Button(props: Props) {
  return (
    <button
      className="px-4 py-3 text-xs transition duration-200 bg-transparent border rounded-md hover:bg-secondary-tint text-secondary border-secondary"
      {...props}
    />
  );
}
