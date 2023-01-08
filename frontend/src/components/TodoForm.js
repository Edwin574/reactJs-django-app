import React, { useState } from 'react';
import { Button, InputGroup, FormControl, Form } from 'react-bootstrap';


function TodoForm() {
    
    return (
        <Form>
            <InputGroup className='mb-4'>
                <FormControl placeholder='New Todo' />
                <Button type='submit'>
                    Add
                </Button>
            </InputGroup>
        </Form>
    )
}


export default TodoForm