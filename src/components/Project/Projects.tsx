'use client'
import React from 'react';

import projectsDB from '@/helpers/projectsDB';

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
  const [selectedTechs, setSelectedTechs] = React.useState<OptionsObject>({"HTML5": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"});

  React.useEffect(() => {
    console.log(selectedTechs)
  },[selectedTechs])

  return (
    <div className="wrapper">
      <h2 id="Projetos">Projetos</h2>
      <InputRadio options={tagTechs} name={'techTags'}
        state={selectedTechs} setState={setSelectedTechs}
        className={"shadowBg row gap-5"}
      />
      {Object.keys(projectsDB).map(projectId =>
        <ProjectCard key={projectId} project={projectsDB[projectId]}/>
      )}
    </div>
  )
}

export default Projects;