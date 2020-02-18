import React, { useState } from 'react';

export const TodoForm = props => {

    const [newTodo, setNewTodo] = useState();

    const handleChanges = event => {
        setNewTodo(event.target.value);
      };

    const handleSubmit = event => {
        event.preventDefault();
        props.addTodo(newTodo)
    }

    return (
       <div className="todoform">
         <h1>My To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input className="input" name='new-todo' type='text' value={newTodo} onChange={handleChanges} /><br></br>
                <button className="button">Add</button>
            </form>
      </div>
      
    )
}  