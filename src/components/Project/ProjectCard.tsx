import React from 'react';

interface PropsProjectCard {
  project: ProjectDB;
}

const ProjectCard = ({project}: PropsProjectCard) => {
  return (
    <div className='wrapper gap-4'>
      <div className='flex justify-between items-center w-full'>
        <div className='flex flex-col justify-center items-center w-full'>
          <h2 className='w-6/12'>{project.title}</h2>
          <small className='uppercase'>Projeto {project.type}</small>
        </div>
        <a href={project.deploy} className='w-3/12 hover:text-moodboard-salmon duration-300'>Deploy</a>
        <a href={project.gitHub} className='w-3/12 hover:text-moodboard-salmon duration-300'>GitHub</a>
      </div>
      <p className='text-justify'>{project.description}</p>
      <img src={project.gif} alt='gif' width={'200px'} height={'200px'}/>
    </div>
  )
}

export default ProjectCard;