import axios from "axios";
import React, { useState } from "react";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";

function TodoForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const addTask=(e)=>{
    e.preventDefault()
    console.log(e)

   let newTask={ "name":e.target.value,"completed": false} 
   axios.post('http://127.0.0.1:8000/task',{newTask}).then((res)=>{
    console.log(res)
   }).catch((e)=>{
     console.log(e)
   })
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
