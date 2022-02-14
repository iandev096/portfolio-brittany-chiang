import Head from "next/head";
import React, { useState } from "react";
import Navbar from "../../Navbar";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
  const [blurApp, setBlurApp] = useState(false);

  return (
    <div
      className={`transition-all duration-200 ${
        blurApp ? "blur-sm" : "blur-0"
      }`}
      id="app"
    >
      <Head>
        <title>Isaac Anyimiah | Software Developer</title>
        <meta
          name="My Portfolio"
          content="Showcase of my skills and my projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar onDrawerToggled={(shown) => setBlurApp(shown)} />

      <main>{children}</main>

      <footer></footer>
    </div>
  );
}
