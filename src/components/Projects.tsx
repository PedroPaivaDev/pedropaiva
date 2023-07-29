'use client'
import React from 'react';

import { ContentDBContext } from '@/contexts/ContentDBContext';
import getOption from '@/helpers/getOption';

import ProjectCard from './ProjectCard';
import InputRadio from './InputRadio';
import Slider from './Slider';

const Projects = () => {
  const contentDB = React.useContext(ContentDBContext);
  const [projectsWithTech, setProjectsWithTech] = React.useState<ProjectsDB|null>(null);
  const [selectedProjectType, setSelectedProjectType] = React.useState<OptionsObject>({autoral: undefined});
  const [selectedTech, setSelectedTech] = React.useState<OptionsObject>({"HTML5": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"});
  const [selectedProject, setSelectedProject] = React.useState<ProjectDB|null>(null);

  const projectsTypes:OptionsObject = {
    autoral: undefined,
    bootcamp: undefined,
    curso: undefined
  }

  const handleSwipe = (direction: 'right' | 'left') => {
    if(projectsWithTech && Object.keys(projectsWithTech).length > 1 && selectedProject) {
      const arrayProjects = Object.keys(projectsWithTech);
      const indexCurrentProj = arrayProjects.indexOf(selectedProject?.id);
      if(
        direction==='right' &&
        indexCurrentProj > 0
      ) {
        setSelectedProject(projectsWithTech[arrayProjects[indexCurrentProj - 1]]);
      } else if(
        direction==='left' &&
        indexCurrentProj < (arrayProjects.length - 1)
      ) {
        setSelectedProject(projectsWithTech[arrayProjects[indexCurrentProj + 1]])
      } else {
        return;
      }
    } else {
      return;
    }
  };

  React.useEffect(() => {
    if(contentDB?.projects) {
      let filteredProjects = {};
      Object.keys(contentDB?.projects).filter(projectId => contentDB?.projects[projectId].type===getOption(selectedProjectType)).filter(projectId => contentDB?.projects[projectId].techs.includes(getOption(selectedTech))).forEach(projectId => {
        filteredProjects = {
          ...filteredProjects,
          [projectId]: contentDB?.projects[projectId]
        }
      });
      setProjectsWithTech(filteredProjects);
    }
  },[contentDB, selectedProjectType, selectedTech]);

  React.useEffect(() => {
    projectsWithTech && setSelectedProject(projectsWithTech[Object.keys(projectsWithTech)[0]]);
  },[contentDB, projectsWithTech]);

  return (
    <section id="Projetos">
      <h2>Projetos</h2>
      <div className="wrapper shadowBg gap-5">
        <p>{contentDB?.text.projectType}</p>
        <InputRadio options={projectsTypes} name={'techTags'}
          state={selectedProjectType} setState={setSelectedProjectType}
          className={"row gap-5"}
        />
        <p>{contentDB?.text.tagTechs}</p>
        {contentDB?.technologies &&
          <InputRadio options={contentDB?.technologies} name={'techTags'}
            state={selectedTech} setState={setSelectedTech}
            className={"row gap-5"}
          />
        }
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
        <Slider onSwipe={handleSwipe}>
          {selectedProject &&
            <ProjectCard key={selectedProject.id} project={selectedProject}/>
          }
        </Slider>
      </div>
    </section>
  )
}

export default Projects;