import { ReactElement } from "react";
import AboutMe from "../components/forPages/home/AboutMe";
import Contact from "../components/forPages/home/Contact";
import Intro from "../components/forPages/home/Intro";
import WorkExperience from "../components/forPages/home/WorkExperience";
import Works from "../components/forPages/home/Works";
import AppLayout from "../components/Layouts/App";

// NAVBAR_HEIGHT: '6rem'
export default function Home() {
  return (
    <>
      {/* INTRO */}
      <section
        id="intro"
        className="min-h-[calc(100vh-6rem)] flex items-center"
      >
        <Intro />
      </section>

      {/* ABOUT ME */}
      <section id="about" className="py-28">
        <AboutMe />
      </section>

      {/* PAST WORK EXPERIENCE */}
      <section id="experience" className="py-28">
        <WorkExperience />
      </section>

      {/* works */}
      <section id="work" className="py-28">
        <Works />
      </section>

      {/* contact me */}
      <section id="contact" className="py-28">
        <Contact />
      </section>

      <footer className="relative text-center font-mono text-xs leading-7 mt-16 py-4 bg-primary-dark">
        <div>
          <p>
            Inspired by{" "}
            <a className="text-secondary" href="https://brittanychiang.com/">
              Brittany Chiang
            </a>
          </p>
          <p>
            Implemented by{" "}
            <span className="text-secondary">Isaac Anyimiah</span>
          </p>
        </div>
        <div className="absolute inset-0 scale-x-150 bg-primary-dark -z-10" />
      </footer>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
