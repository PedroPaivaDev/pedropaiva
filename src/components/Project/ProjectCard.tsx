'use client'
import Image from 'next/image';
import React from 'react';

interface PropsProjectCard {
  title: string;
  description: string;
  deploy: string;
  gitHub: string;
  gif: string;
}

const ProjectCard = ({title, description, deploy, gitHub, gif}: PropsProjectCard) => {
  return (
    <div className='wrapper bg-moodboard-dark p-5 rounded-3xl'>
      <div className='flex justify-between items-center w-full'>
        <h2 className='w-6/12'>{title}</h2>
        <a href={deploy} className='w-3/12 hover:text-moodboard-salmon duration-300'>Deploy</a>
        <a href={gitHub} className='w-3/12 hover:text-moodboard-salmon duration-300'>GitHub</a>
      </div>
      <p className='text-justify'>{description}</p>
      <Image src={gif} alt='gif' width={200} height={200}/>
    </div>
  )
}

export default ProjectCard;