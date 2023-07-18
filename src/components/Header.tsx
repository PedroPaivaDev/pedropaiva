import React from 'react';

const Header = () => {
  const tags = ['Sobre', 'Projetos', 'Educação', 'Contato']
  return (
    <header className='bg-moodboard-gray'>
      <nav className='text-moodboard-dark flex justify-around w-full'>
        {tags.map(tag =>
          <a href={`#${tag}`} className='hover:text-moodboard-light duration-300'>{tag}</a>
        )}
      </nav>
    </header>
  )
}

export default Header;