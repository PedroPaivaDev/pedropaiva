interface ProjectsDB {
  [key:string]: ProjectDB;
}

interface ProjectDB {
  id: string;
  type: 'autoral' | 'bootcamp' | 'curso' | 'teste-técnico';
  title: string;
  description: string;
  deploy: string;
  gitHub: string;
  gif: string;
  techs: TechTag[];
}

interface OptionsObject {
  [key: string]: string;
}

type TechTag = "HTML5" | "CSS3" | "JavaScript" | "React" | "React-Router" | "React-Native" | "NextJS" | "TypeScript" | "Styled-Components" | "Firebase" | "TailwindCSS" | "NodeJS" | "Prisma" | "SQLite" | "Fastify" | "Figma" | "SASS" | "Vite" | "Bootstrap" | "JQuery"