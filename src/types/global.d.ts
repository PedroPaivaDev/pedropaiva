interface ProjectsDB {
  [key:string]: ProjectDB;
}

interface ProjectDB {
  id: string;
  title: string;
  description: string;
  deploy: string;
  gitHub: string;
  gif: string;
  techs: string[];
}