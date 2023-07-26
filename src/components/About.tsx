'use client'
import React from 'react';

import { ContentDBContext } from '@/contexts/ContentDBContext';
import Image from 'next/image';

const About = () => {
  const {text} = React.useContext(ContentDBContext);

  return (
    <section id="Sobre">
      <h2>Sobre</h2>
      <div className="wrapper gap-3 shadowBg">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Image
            src="https://github.com/PedroPaivaDev.png"
            alt='FotoPedro'
            width={130}
            height={130}
            className='rounded-full'
          />
          <p>{text.introduction}</p>
        </div>
        <p>{text.about}</p>
      </div>
    </section>
  )
}

export default About;