import React from 'react';

interface PropsProjectCard {
  project: ProjectDB;
}

const ProjectCard = ({project}: PropsProjectCard) => {
  return (
    <div className='wrapper gap-4'>
      <div className='flex justify-center items-center w-full'>
        <div className='flex flex-col justify-center items-start w-6/12'>
          <h3>{project.title}</h3>
          <small className='uppercase'>Projeto {project.type}</small>
        </div>
        <a href={project.deploy} target='_blank' className='w-3/12 hover:text-moodboard-salmon duration-300'>Deploy</a>
        <a href={project.gitHub} target='_blank' className='w-3/12 hover:text-moodboard-salmon duration-300'>GitHub</a>
      </div>
      <p className='text-justify'>{project.description}</p>
      <img src={project.gif} alt='gif' className="w-full"/>
    </div>
  )
}

export default ProjectCard;