import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = props => {
    console.log(props)

    return (
        <div>
            {props.state.map(item => {
                return (
                    <div className="todolist">
                        <TodoItem toggleCompleted={props.toggleCompleted} item={item} />
                    </div>
                )
            })}
        </div>
    )
}  