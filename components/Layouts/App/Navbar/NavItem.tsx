import React from "react";

interface Props {
  item: string;
  count: number;
}

export default function NavItem({ item, count }: Props) {
  return (
    <li key={item}>
      <a
        className="font-mono text-xs cursor-pointer group text-light hover:text-secondary"
        href={"/#" + item.toLowerCase()}
      >
        <span className="mr-1 text-[90%] text-secondary">{`0${count}.`}</span>
        {item}
      </a>
    </li>
  );
}
