import type { NextPage } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import AppLayout from "../components/Layouts/App";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        recusandae tenetur itaque voluptas, hic ut repudiandae accusantium
        reprehenderit expedita voluptatem veniam voluptate minus. Non nam
        laboriosam, illum molestias nobis praesentium.
      </p>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
