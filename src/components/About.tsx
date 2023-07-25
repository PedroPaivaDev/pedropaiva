'use client'
import React from 'react';

import { ContentDBContext } from '@/contexts/ContentDBContext';
import Image from 'next/image';

const About = () => {
  const {text} = React.useContext(ContentDBContext);

  return (
    <section id="Sobre">
      <h2>Sobre</h2>
      <div className="wrapper gap-5 shadowBg">
        <Image
          src="https://github.com/PedroPaivaDev.png"
          alt='FotoPedro'
          width={200}
          height={200}
          className='rounded-full'
        />
        <p>{text.introduction}</p>
        <p>{text.about}</p>
      </div>
    </section>
  )
}

export default About;