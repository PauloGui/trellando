import React from "react";
import Card from "../Card";
import { Container } from "./styles";

function List() {
  return (
    <Container>
      <header>
        <h2>To Do</h2>
        <button type="button">
          <i className="fas fa-plus" />
        </button>
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}

export default List;
