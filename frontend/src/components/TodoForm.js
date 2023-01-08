import React, { useState } from "react";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";

function TodoForm() {
    const [name, setName] = useState("");
    
    const handleChange = (e) => {
        setName(e.target.value);
    }

  return (
    <Form>
      <InputGroup className="mb-4">
        <FormControl placeholder="New Todo" onChange={handleChange} value={name} />
        <Button type="submit">Add</Button>
      </InputGroup>
    </Form>
  );
}

export default TodoForm;
