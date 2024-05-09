import React from "react";
import "./todolistitem.css";

const TodoListItem = ({ todo, onRemovePressed }) => (
    <div className="todo-item-conatiner">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            <button className="completed-button">Mark As Completed</button>
            <button
                onClick={() => onRemovePressed(todo.text)}
                className="remove-button"
            >
                Remove
            </button>
        </div>
    </div>
);
export default TodoListItem;
