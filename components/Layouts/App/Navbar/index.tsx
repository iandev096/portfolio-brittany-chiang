import React, { useEffect, useRef, useState } from "react";
import Button from "../../../Button";
import NavItem from "./NavItem";
import { RiMenu4Line } from "react-icons/ri";
import NavDrawer from "./NavDrawer";
import useNavDrawer from "./useNavDrawer";
import Image from "next/image";
import openExternalLink from "../../../../util/url";

const NAV_ITEMS = ["About", "Experience", "Work", "Contact"];

interface Props {
  onDrawerToggled: (shown: boolean) => void;
  className?: string;
}

export default function Navbar({ onDrawerToggled, className = "" }: Props) {
  const { drawerShown, toggleDrawer } = useNavDrawer(onDrawerToggled);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const onScroll = () => {
      const currenScrollPos = window.scrollY;
      const shouldNotHideNav =
        prevScrollPos > currenScrollPos || currenScrollPos < 180;
      if (shouldNotHideNav) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      prevScrollPos = currenScrollPos;
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`shadow-lg flex fixed w-full z-50 ${
          showNav ? "top-0" : "-top-24"
        } items-center justify-between bg-primary-light h-24 px-6 sm:px-12 transition-all duration-200 ${className}`}
      >
        <a className="w-12" href="#intro">
          <Image width={951} height={528} layout='responsive' src='/images/logo.svg' />
        </a>
        <ol className="hidden gap-8 md:flex md:items-center">
          {NAV_ITEMS.map((item, idx) => (
            <NavItem key={idx} item={item} count={idx + 1} />
          ))}
          <Button onClick={() => openExternalLink('https://drive.google.com/file/d/1vSucJkxLZzoigYoX2F-XviKjIMLTWWsb/view')}>CV</Button>
        </ol>
        <RiMenu4Line
          onClick={() => toggleDrawer(true)}
          size={28}
          className="md:hidden text-secondary cursor-pointer"
        />
      </header>
      <NavDrawer show={drawerShown} onClose={() => toggleDrawer(false)} />
    </>
  );
}
