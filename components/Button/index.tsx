import React, { HTMLProps } from "react";

interface Props extends Omit<HTMLProps<HTMLButtonElement>, "size"> {
  type?: "button" | "submit" | "reset";
  size?: "md" | "lg";
}

export default function Button({ size = "md", className, ...props }: Props) {
  const px = { md: "px-4", lg: "px-5" };
  const py = { md: "py-3", lg: "py-4" };
  const text = { md: "text-xs", lg: "text-sm" };

  return (
    <button
      className={`${px[size]} ${py[size]} ${text[size]} transition duration-200 bg-transparent border rounded-md hover:bg-secondary-tint text-secondary font-mono border-secondary ${className}`}
      {...props}
    />
  );
}
