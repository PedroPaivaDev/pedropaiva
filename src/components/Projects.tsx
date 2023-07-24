'use client'
import React from 'react';

import { ContentDBContext } from '@/contexts/ContentDBContext';
import getOption from '@/helpers/getOption';

import ProjectCard from './ProjectCard';
import InputRadio from './InputRadio';

const Projects = () => {
  const contentDB = React.useContext(ContentDBContext);
  const [projectsWithTech, setProjectsWithTech] = React.useState<ProjectsDB|null>(null);
  const [selectedTech, setSelectedTech] = React.useState<OptionsObject>({"HTML5": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"});
  const [selectedProject, setSelectedProject] = React.useState<ProjectDB|null>(null);

  React.useEffect(() => {
    if(contentDB?.projects) {
      let filteredProjects = {};
      Object.keys(contentDB?.projects).filter(projectId => contentDB?.projects[projectId].techs.includes(getOption(selectedTech))).forEach(projectId => {
        filteredProjects = {
          ...filteredProjects,
          [projectId]: contentDB?.projects[projectId]
        }
      });
      setProjectsWithTech(filteredProjects);
    }
  },[selectedTech, contentDB]);

  React.useEffect(() => {
    projectsWithTech && setSelectedProject(projectsWithTech[Object.keys(projectsWithTech)[0]]);
  },[projectsWithTech, contentDB]);

  return (
    <section className="wrapper">
      <h2 id="Projetos">Projetos</h2>
      <div className="wrapper shadowBg gap-5">
        <p>{contentDB?.text.tagTechs}</p>
        {contentDB?.technologies && <InputRadio options={contentDB?.technologies} name={'techTags'}
          state={selectedTech} setState={setSelectedTech}
          className={"row gap-5"}
        />}
        <div className="flex gap-4">
          {projectsWithTech && selectedProject && Object.keys(projectsWithTech).map(projectId =>
            <div
              className={`
                w-4 h-4 cursor-pointer duration-300
                bg-moodboard-gray rounded-lg hover:bg-moodboard-salmon
                ${projectId===selectedProject.id ? 'bg-moodboard-salmon' : ''}
              `}
              key={projectId}
              onClick={() => setSelectedProject(projectsWithTech[projectId])}
            />
          )}
        </div>
        {selectedProject &&
          <ProjectCard key={selectedProject.id} project={selectedProject}/>
        }
      </div>
    </section>
  )
}

export default Projects;