import React from "react";

interface Props {
  item: string;
  count: number;
  onClick: (ev: any) => void;
}

export default function DrawerItem({ item, count, onClick }: Props) {
  return (
    <a
      className="font-mono block text-md text-right cursor-pointer group text-light opacity-90 hover:text-secondary"
      href={"/#" + item.toLowerCase()}
      onClick={onClick}
    >
      <span className="mr-1 mb-4 text-[90%] text-secondary">{`0${count}.`}</span>
      {item}
    </a>
  );
}
