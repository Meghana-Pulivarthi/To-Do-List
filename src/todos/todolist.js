import React from "react";
import { connect } from "react-redux";
import "./todolist.css";
import NewTodoForm from "./newtodoform";
import TodoListItem from "./todolistitem";
import { removeTodo } from "./actions";
const TodoList = ({ todos = [{ text: "hello" }] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map((todo) => (
            <TodoListItem todo={todo} />
        ))}
    </div>
);
const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = (dispatch) => ({
    onRemovePressed: (text) => dispatch(removeTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
