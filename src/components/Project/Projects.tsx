'use client'
import React from 'react';

import projectsDB from '@/helpers/projectsDB';

import ProjectCard from './ProjectCard';
import InputRadio from '../InputRadio';

const tagTechs = {
  React: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  "React-Router": "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
  "NextJS": "https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
  "TypeScript": "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
  "Styled-Components": "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
  "Firebase": "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black",
  "JavaScript": "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
  "CSS3": "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  "HTML5": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
}

const Projects = () => {
  const [selectedTechs, setSelectedTechs] = React.useState<OptionsObject>({React: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"});

  React.useEffect(() => {
    console.log(selectedTechs)
  },[selectedTechs])

  return (
    <div className="wrapper">
      <h2 id="Projetos">Projetos</h2>
      <InputRadio options={tagTechs} name={'techTags'}
        state={selectedTechs} setState={setSelectedTechs}
      />
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