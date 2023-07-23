'use client'
import React from 'react';

import { getData } from '@/services/firebase';
import getOption from '@/helpers/getOption';

import ProjectCard from './ProjectCard';
import InputRadio from '../InputRadio';

const Projects = () => {
  const [projectsDB, setProjectsDB] = React.useState<ProjectsDB|null>(null);
  const [tagTechs, setTagTechs] = React.useState<OptionsObject|null>(null);
  const [projectsWithTech, setProjectsWithTech] = React.useState<ProjectsDB|null>(null);
  const [selectedTech, setSelectedTech] = React.useState<OptionsObject>({"HTML5": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"});
  const [selectedProject, setSelectedProject] = React.useState<ProjectDB|null>(null);

  React.useEffect(() => {
    getData<ProjectsDB|null>('projects', setProjectsDB);
  },[]);

  React.useEffect(() => {
    getData<OptionsObject|null>('technologies', setTagTechs);
  },[]);

  React.useEffect(() => {
    if(projectsDB) {
      let filteredProjects = {};
      Object.keys(projectsDB).filter(projectId => projectsDB[projectId].techs.includes(getOption(selectedTech) as TechTag)).forEach(projectId => {
        filteredProjects = {
          ...filteredProjects,
          [projectId]: projectsDB[projectId]
        }
      });
      setProjectsWithTech(filteredProjects);
    }
  },[selectedTech, projectsDB, tagTechs]);

  React.useEffect(() => {
    projectsWithTech && setSelectedProject(projectsWithTech[Object.keys(projectsWithTech)[0]]);
  },[projectsWithTech, projectsDB, tagTechs]);

  return (
    <section className="wrapper">
      <h2 id="Projetos">Projetos</h2>
      <div className="wrapper shadowBg gap-5">
        <p>Selecione uma tecnologia e veja os projetos que a utilizaram:</p>
        {tagTechs && <InputRadio options={tagTechs} name={'techTags'}
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