import axios from "axios";
import React, { useState } from "react";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";

function TodoForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const addTask=(e)=>{
   let newTask=e.target.value
   axios.post('http://127.0.0.1:8000/api/todos/')
  }

  return (
    <Form>
      <InputGroup className="mb-4">
        <FormControl
          placeholder="New Todo"
          onChange={handleChange}
          value={name}
        />
        <Button type="submit">Add</Button>
      </InputGroup>
    </Form>
  );
}

export default TodoForm;
