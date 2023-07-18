import ProjectCard from "@/components/Project/ProjectCard";

export default function Home() {
  return (
    <div className="container">
      <div className="envelope">
        <div className="wrapper">
          <h1>Bem Vinde ao Meu Espaço</h1>
          <p className="shadowBg text-justify">
            Na arquitetura, temos o costume de dizer que nossa casa é uma extensão da nossa personalidade, então eu criei este espaço virtual com as referências dos materiais e cores que mais me inspiram. Espero que você se sinta a vontade, se imagine tomando um bom café e comendo um pão de queijo quentinho, enquanto me apresento.
          </p>
        </div>
        <div className="wrapper">
          <h1 id="Sobre">Sobre</h1>
          <p className="shadowBg text-justify">
            Sou um desenvolvedor Front-End com empatia para abstrair informações de demandas e experiência em expressar minhas ideias. Me dedico a estudar todos os dias, para me manter atualizado e em constante aprendizado.
          </p>
        </div>
        <div className="wrapper">
          <h1 id="Projetos">Projetos</h1>
          <ProjectCard title="PP-Restaurante"
            description="Site do restaurante PP, desenvolvido com a biblioteca React, com o objetivo de atender os pedidos de marmita. O projeto priorizou a acessibilidade, de modo que algumas funcionalidades podem ser feitas de duas formas, pois o público alvo do estabelecimento são pessoas com idade avançada e de pouca afinidade com tecnologia."
            deploy="https://pp-restaurante.vercel.app/"
            gitHub="https://github.com/PedroPaivaDev/pp-restaurante"
            gif="https://github.com/PedroPaivaDev/pp-restaurante/blob/main/src/assets/animation1.gif?raw=true"
          />
          <ProjectCard title="La-Petra"
            description="Versão simplificada do site da doceria La Petra, desenvolvido com a biblioteca React, com o objetivo de atender os pedidos de ovos de páscoa."
            deploy="https://la-petra.vercel.app/"
            gitHub="https://github.com/PedroPaivaDev/la-petra"
            gif="https://github.com/PedroPaivaDev/la-petra/blob/main/src/assets/animation.gif?raw=true"
          />
          <ProjectCard title="Avatar-Arena"
            description="Aplicação do meu primeiro projeto pessoal, refatorada com a biblioteca React."
            deploy="https://avatar-arena.vercel.app/"
            gitHub="https://github.com/PedroPaivaDev/Avatar-Arena"
            gif="https://github.com/PedroPaivaDev/Avatar-Arena/blob/main/src/assets/Anima.gif?raw=true"
          />
        </div>
      </div>
    </div>
  )
}
