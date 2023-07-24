import React from "react";

import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="container">
      <div className="envelope">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
