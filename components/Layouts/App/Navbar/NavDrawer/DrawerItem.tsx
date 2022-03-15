import React from "react";

interface Props {
  item: string;
  count: number;
}

export default function DrawerItem({ item, count }: Props) {
  return (
    <a
      className="font-mono block text-md text-right cursor-pointer group text-light opacity-90 hover:text-secondary"
      href={"/#" + item.toLowerCase()}
    >
      <span className="mr-1 mb-4 text-[90%] text-secondary">{`0${count}.`}</span>
      {item}
    </a>
  );
}
