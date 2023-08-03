import React from 'react';

import Loading from './Loading';

interface PropsProjectCard {
  project: ProjectDB;
  className: string;
}

const ProjectCard = ({project, className}: PropsProjectCard) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const img = new Image();
    img.src = project.gif;
    img.onload = () => {
      setLoading(false);
      setIsImageLoaded(true);
    };
  }, [project.gif]);

  return (
    <div className={`${className} wrapper w-full gap-4`}>
      <div className='flex justify-center items-center w-full'>
        <div className='flex flex-col justify-center items-start w-6/12'>
          <h3>{project.title}</h3>
          <small className='uppercase'>Projeto {project.type}</small>
        </div>
        <a href={project.deploy} target='_blank' className='w-3/12 hover:text-moodboard-salmon duration-300'>Deploy</a>
        <a href={project.gitHub} target='_blank' className='w-3/12 hover:text-moodboard-salmon duration-300'>GitHub</a>
      </div>
      <p className='text-justify'>{project.description}</p>
      <div className='flex justify-center items-center min-h-[280px] sm:h-[500px]'>
        {loading ? <Loading /> : isImageLoaded ?
          <img src={project.gif} alt="gif" className="max-h-[500px]"/> :
          null
        }
      </div>
    </div>
  )
}

export default ProjectCard;