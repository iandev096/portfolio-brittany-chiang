import type { NextPage } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import Button from "../components/Button";
import AboutMe from "../components/forPages/home/AboutMe";
import Intro from "../components/forPages/home/Intro";
import WorkExperience from "../components/forPages/home/WorkExperience";
import Works from "../components/forPages/home/Works";
import AppLayout from "../components/Layouts/App";

// NAVBAR_HEIGHT: '6rem'
export default function Home() {
  return (
    <>
      {/* INTRO */}
      <section className="min-h-[calc(100vh-6rem)] flex items-center">
        <Intro />
      </section>

      {/* ABOUT ME */}
      <section className="py-28">
        <AboutMe />
      </section>

      {/* PAST WORK EXPERIENCE */}
      <section className="py-28">
        <WorkExperience />
      </section>

      {/* works */}
      <section className="py-28">
        <Works />
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
