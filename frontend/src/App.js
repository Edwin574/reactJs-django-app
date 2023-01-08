import React from "react";
import { Navbar,Container } from "react-bootstrap";


function App() {
  return (
    <div>
      <Navbar bg='light' style={{ marginBottom: '20px' }} />
      <Container>
        <Navbar.Brand href="#">
          TODO APP
      </Navbar.Brand>
      </Container>
    </div>
  );
}

export default App;
