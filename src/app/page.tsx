import React from "react";

import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="page">
      <div className="contain">
        <div className="envelope">
          <About />
          <Projects />
          <Education />
          <Contact />
        </div>
      </div>
    </div>
  )
}
