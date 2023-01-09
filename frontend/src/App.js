import { React, useState,useEffect } from "react";
import { Navbar,Container } from "react-bootstrap";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import axios from "axios";

function App() {

  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/todos/').then((res) => {
      
      setTodos(res.data)
    })
  },[])
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
        <TodoForm setTodos={setTodos} />
        
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </div>
  );
}

export default App;
