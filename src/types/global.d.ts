interface ProjectsDB {
  [key:string]: ProjectDB;
}

interface ProjectDB {
  id: string;
  type: 'original' | 'bootcamp' | 'curso';
  title: string;
  description: string;
  deploy: string;
  gitHub: string;
  gif: string;
  techs: string[];
}

interface OptionsObject {
  [key: string]: string;
}