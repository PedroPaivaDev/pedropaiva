'use client'
import React from "react";

import { HeaderViewContext } from "@/contexts/HeaderViewContext";
import { ContentDBContext } from "@/contexts/ContentDBContext";

import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Loading from "@/components/Loading";

export default function Home() {
  const {handleScroll} = React.useContext(HeaderViewContext);
  const contentDB = React.useContext(ContentDBContext);

  return (
    <div className="page">
      <div className="contain" onScroll={(e) => handleScroll(e)}>
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
