interface ContentDB {
  text: TextDB;
  projects: ProjectsDB;
  technologies: {
    [key: string]: string;
  };
  education: CoursesDB;
}

interface TextDB {
  introduction: string;
  about: string;
  tagTechs: string;
}

interface ProjectsDB {
  [key:string]: ProjectDB;
}

interface ProjectDB {
  id: string;
  type: 'autoral' | 'bootcamp' | 'curso';
  title: string;
  description: string;
  deploy: string;
  gitHub: string;
  gif: string;
  techs: string[];
}

interface CoursesDB {
  [key:string]: CourseDB;
}

interface CourseDB {
  id: string;
  title: string;
  institution: string;
}

interface OptionsObject {
  [key: string]: string;
}

// type TechTag = "HTML5" | "CSS3" | "JavaScript" | "React" | "React-Router" | "React-Native" | "NextJS" | "TypeScript" | "Styled-Components" | "Firebase" | "TailwindCSS" | "NodeJS" | "Prisma" | "SQLite" | "Fastify" | "Figma" | "SASS" | "Vite" | "Bootstrap" | "JQuery"