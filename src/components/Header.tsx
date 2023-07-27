'use client'
import { HeaderViewContext } from '@/contexts/HeaderViewContext';
import React from 'react';

const Header = () => {
  const {visible} = React.useContext(HeaderViewContext);

  const tags = ['Sobre', 'Projetos', 'Educação', 'Contato'];

  return (
    <header className={`
      bg-moodboard-gray duration-300
      ${visible ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <nav className='text-moodboard-dark flex justify-around w-full'>
        {tags.map(tag =>
          <a key={tag} href={`#${tag}`} className='hover:text-moodboard-light duration-300'>{tag}</a>
        )}
      </nav>
    </header>
  )
}

export default Header;