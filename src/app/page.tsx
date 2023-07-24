import React from "react";

import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Project/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="container">
      <div className="envelope">
        <About />
        <Intro />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
