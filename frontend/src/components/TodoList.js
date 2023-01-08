import React from 'react';

import { ListGroup } from 'react-bootstrap';

function TodoList({todos=[]}) {
    
    return (
        <ListGroup>
            {todos.map((t) => {
                return <ListGroup.Item key={t.id}>{t.name }</ListGroup.Item>
            })} 
      </ListGroup>
    )
}


export default TodoList
