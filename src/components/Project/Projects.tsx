import React from 'react';
import ProjectCard from './ProjectCard';
import projectsDB from '@/helpers/projectsDB';

const Projects = () => {
  return (
    <div className="wrapper">
      <h2 id="Projetos">Projetos</h2>
      {Object.keys(projectsDB).map(projectId =>
        <ProjectCard key={projectId}
          title={projectsDB[projectId].title}
          description={projectsDB[projectId].description}
          deploy={projectsDB[projectId].deploy}
          gitHub={projectsDB[projectId].gitHub}
          gif={projectsDB[projectId].gif}
        />
      )}
    </div>
  )
}

export default Projects;