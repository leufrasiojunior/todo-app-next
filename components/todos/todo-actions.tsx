import React from "react";

const TodoActions = ({ todo, removeTodos, completeTodos }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "Line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodos(todo.id)}>
          Completar Tarefa
        </button>
        <button className="remove" onClick={() => removeTodos(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default TodoActions;
