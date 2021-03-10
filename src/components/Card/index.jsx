import React from "react";

import { Container, Label } from "./styles";

function Card() {
  return (
    <Container>
      <header>
        <Label color="#0B9ED9" />
      </header>
      <p>Fazer migração completa de servidor</p>
      <img src="https://github.com/PauloGui.png" alt="" />
    </Container>
  );
}

export default Card;
