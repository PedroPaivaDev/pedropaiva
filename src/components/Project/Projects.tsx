'use client'
import React from 'react';

import projectsDB from '@/helpers/projectsDB';
import getOption from '@/helpers/getOption';

import ProjectCard from './ProjectCard';
import InputRadio from '../InputRadio';

const tagTechs = {
  "HTML5": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  "CSS3": "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  "JavaScript": "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
  "React": "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  "React-Router": "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
  "NextJS": "https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
  "TypeScript": "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
  "Styled-Components": "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
  "Firebase": "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black",
  "React-Native": "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  "TailwindCSS": "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  "NodeJS": "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
  "Prisma": "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white",
  "SQLite": "https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white",
  "Fastify": "https://img.shields.io/badge/fastify-202020?style=for-the-badge&logo=fastify&logoColor=white",
  "Figma": "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
  "SASS": "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"

}

const Projects = () => {
  const [projectsWithTech, setProjectsWithTech] = React.useState<ProjectsDB|null>(null);
  const [selectedTech, setSelectedTech] = React.useState<OptionsObject>({"HTML5": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"});
  const [selectedProject, setSelectedProject] = React.useState<ProjectDB|null>(null);

  React.useEffect(() => {
    let filteredProjects = {};
    Object.keys(projectsDB).filter(projectId => projectsDB[projectId].techs.includes(getOption(selectedTech) as TechTag)).forEach(projectId => {
      filteredProjects = {
        ...filteredProjects,
        [projectId]: projectsDB[projectId]
      }
    });
    setProjectsWithTech(filteredProjects);
  },[selectedTech])

  React.useEffect(() => {
    projectsWithTech && setSelectedProject(projectsWithTech[Object.keys(projectsWithTech)[0]]);
  },[projectsWithTech])

  return (
    <section className="wrapper">
      <h2 id="Projetos">Projetos</h2>
      <div className="wrapper shadowBg gap-5">
        <InputRadio options={tagTechs} name={'techTags'}
          state={selectedTech} setState={setSelectedTech}
          className={"row gap-5"}
        />
        <div className="flex gap-5">
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