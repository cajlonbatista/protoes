import React from "react";

import { LandingContainer } from "./styles";

import toggle from "../../global/assets/toggle.svg";

export const Landing = (props) => {
  return (
    <LandingContainer>
      <div>
        <h1>Organize tudo com o Protoes</h1>
        <p>
          Recupere a clareza e a tranquilidade, tirando todas essas tarefas da
          sua cabeça e colocando na sua lista de tarefas.
        </p>
      </div>
      <img src={toggle}></img>

      <div>
        <a href="/">START</a>
      </div>
    </LandingContainer>
  );
};
