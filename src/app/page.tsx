'use client'
import React from "react";

import { ContentDBContext } from "@/contexts/ContentDBContext";

import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Loading from "@/components/Loading";

export default function Home() {
  const contentDB = React.useContext(ContentDBContext);
  return (
    <div className="page">
      <div className="contain">
        <div className="envelope">
          {contentDB.text.about ?
            <>
              <About />
              <Projects />
              <Education />
              <Contact />
            </> :
            <Loading />
          }
        </div>
      </div>
    </div>
  )
}
