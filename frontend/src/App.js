import React from "react";
import { Navbar,Container } from "react-bootstrap";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div>
      <Navbar bg='light' style={{ marginBottom: '20px' }}>
      <Container>
        <Navbar.Brand href="#">
          TODO APP
      </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <TodoList></TodoList>
      </Container>
    </div>
  );
}

export default App;
