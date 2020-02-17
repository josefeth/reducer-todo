import React, { useReducer } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm'
import { todoReducer, initialState } from './reducers/Reducer';
import AppInput from './components/Tags/AppInput';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });

  const toggleCompleted = item =>
    dispatch({ type: "TOGGLE_COMPLETE", payload: item });

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList toggleCompleted={toggleCompleted} state={state}/>
      
    </div>
  );
}

export default App;