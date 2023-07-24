'use client'
import React from 'react';

import { ContentDBContext } from '@/contexts/ContentDBContext';

const About = () => {
  const {text} = React.useContext(ContentDBContext);

  return (
    <section className="wrapper">
      <h2 id="Sobre">Sobre</h2>
      <p className="shadowBg text-justify">{text.about}</p>
    </section>
  )
}

export default About;