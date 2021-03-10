import React from "react";

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
    </Container>
  );
}

export default List;
