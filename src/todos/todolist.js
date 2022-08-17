import React from "react";
import "./todolist.css";
import NewTodoForm from "./newtodoform";
import TodoListItem from "./todolistitem";
const TodoList = ({todos=[{text:'hello'}]})=>(
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo=> <TodoListItem todo={todo}/>)}
    </div>
)
export default TodoList;