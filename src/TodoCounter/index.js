import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'



function TodoCounter(){
  //{completedTodos, totalTodos}
  const {completedTodos, totalTodos} = React.useContext(TodoContext)

    return(
        <h2 className="TodoCounter">Has cmpletado {completedTodos} de {totalTodos} TODOs</h2> 
    );
}

export { TodoCounter };