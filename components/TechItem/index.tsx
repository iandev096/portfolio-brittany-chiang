import React from "react";
import { BsCaretRight } from "react-icons/bs";

interface Props {
  item: string;
}

export default function TechItem({ item }: Props) {
  return (
    <li className="flex items-baseline">
      <span className="mr-2">
        <BsCaretRight size={8} className="text-secondary" />
      </span>
      {item}
    </li>
  );
}
