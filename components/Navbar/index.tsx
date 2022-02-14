import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import NavItem from "./NavItem";
import { RiMenu4Line } from "react-icons/ri";
import NavDrawer from "./NavDrawer";
import useNavDrawer from "./useNavDrawer";

const NAV_ITEMS = ["About", "Experience", "Work", "Contact"];

interface Props {
  onDrawerToggled: (shown: boolean) => void;
}

export default function Navbar({ onDrawerToggled }: Props) {
  const { drawerShown, toggleDrawer } = useNavDrawer(onDrawerToggled);

  return (
    <>
      <header className="flex items-center justify-between bg-primary shadow-lg h-24 px-6 top-level-px sm:px-12">
        <a>
          <h1 className="text-xl text-secondary">IA</h1>
        </a>
        <ol className="hidden gap-8 sm:flex sm:items-center">
          {NAV_ITEMS.map((item, idx) => (
            <NavItem key={idx} item={item} count={idx + 1} />
          ))}
          <Button>Resume</Button>
        </ol>
        <RiMenu4Line
          onClick={() => toggleDrawer(true)}
          size={28}
          className="sm:hidden text-secondary cursor-pointer"
        />
      </header>
      <NavDrawer show={drawerShown} onClose={() => toggleDrawer(false)} />
    </>
  );
}
