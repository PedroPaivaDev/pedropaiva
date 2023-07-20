import Contact from "@/components/Contact";
import ProjectCard from "@/components/Project/ProjectCard";
import Projects from "@/components/Project/Projects";

export default function Home() {
  return (
    <div className="container">
      <div className="envelope">
        <div className="wrapper">
          <h2>Bem Vinde ao Meu Espaço</h2>
          <p className="shadowBg text-justify">
            Na arquitetura, temos o costume de dizer que nossa casa é uma extensão da nossa personalidade, então eu criei este espaço virtual com as referências dos materiais e cores que mais me inspiram. Espero que você se sinta a vontade, se imagine tomando um bom café e comendo um pão de queijo quentinho, enquanto me apresento.
          </p>
        </div>
        <div className="wrapper">
          <h2 id="Sobre">Sobre</h2>
          <p className="shadowBg text-justify">
            Sou um desenvolvedor Front-End com empatia para abstrair informações de demandas e experiência em expressar minhas ideias. Me dedico a estudar todos os dias, para me manter atualizado e em constante aprendizado.
          </p>
        </div>
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
