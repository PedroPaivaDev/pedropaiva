'use client'
import React from 'react';

import { ContentDBContext } from '@/contexts/ContentDBContext';

const Intro = () => {
  const {text} = React.useContext(ContentDBContext);

  return (
    <div className="wrapper">
      <h2>Bem Vinde ao Meu Espaço</h2>
      <p className="shadowBg text-justify">{text.introduction}</p>
    </div>
  )
}

export default Intro;