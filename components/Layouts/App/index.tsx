import Head from "next/head";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { SOCIAL_ITEMS2 } from "./data";
import classes from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
  const [blurApp, setBlurApp] = useState(false);

  return (
    <div id="app">
      <Head>
        <title>Isaac Anyimiah | Software Developer</title>
        <meta
          name="My Portfolio"
          content="Showcase of my skills and my projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        onDrawerToggled={(shown) => setBlurApp(shown)}
        className={blurApp ? "blur-md duration-1000" : ""}
      />

      <main
        className={`transition-all duration-200 ${
          blurApp ? "blur-sm" : ""
        } pt-24`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-28 lg:px-40">
          {children}
        </div>
      </main>

      <aside className="hidden md:block fixed bottom-0 left-10">
        <div className="flex flex-col gap-4 translate-x-[-50%]">
          {SOCIAL_ITEMS2.map((Item) => (
            <a
              className="cursor-pointer text-gray hover:text-secondary"
              key={Item.url}
            >
              <Item.Icon size={18} />
            </a>
          ))}
        </div>
        <div role="decorator" className="w-[1px] bg-gray h-20 mt-6" />
      </aside>

      <aside className="hidden md:block fixed bottom-0 right-8">
        <div className="flex flex-col gap-4 translate-x-[-50%]">
          <p className={`${classes.vertical_text} font-mono text-xs`}>
            ianyimiah@gmail.com
          </p>
        </div>
        <div role="decorator" className="w-[1px] bg-gray h-20 mt-6" />
      </aside>
    </div>
  );
}
