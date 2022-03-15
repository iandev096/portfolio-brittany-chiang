import React from "react";
import { IconType } from "react-icons";

export type IconItem = { Icon: IconType; url: string };
interface Props {
  Item: IconItem;
}

export default function SocialItem({ Item }: Props) {
  return (
    <a
      href={Item.url}
      target="_blank"
      rel="noreferrer"
      className="cursor-pointer"
    >
      <Item.Icon size={18} className="text-light hover:text-secondary" />
    </a>
  );
}
