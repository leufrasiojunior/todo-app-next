import React from "react";
import { Button } from "../ui/button";
import CheckCircle from "../icons/check-circle";
import XCircle from "../icons/x-circle";
import CancelCircle from "../icons/cancel-circle";

interface Todo {
  id: number;
  text: string;
  category: string;
  isCompleted: boolean;
}

interface TodoActionsProps {
  todo: Todo;
  removeTodos: (id: number) => void;
  completeTodos: (id: number) => void;
}

const TodoActions: React.FC<TodoActionsProps> = ({
  todo,
  removeTodos,
  completeTodos,
}) => {
  return (
    <div
      className={`p-4 mb-4 border rounded-lg shadow-md ${
        todo.isCompleted ? "line-through bg-gray-100" : "bg-white"
      }`}
    >
      <div className="mb-2 text-center">
        <p className="text-lg font-semibold text-center">{todo.text}</p>
        <p className="text-sm text-gray-500">Categoria: {todo.category}</p>
      </div>
      <div className="flex space-x-4 justify-center">
        <Button
          onClick={() => completeTodos(todo.id)}
          variant="outline"
          className={`${todo.isCompleted ? "bg-gray-100" : "bg-white"}`}
        >
          {todo.isCompleted ? (
            <>
              <CancelCircle /> <p>Marcar como Pendente</p>
            </>
          ) : (
            <>
              <CheckCircle /> <p>Marcar como Finalizada</p>
            </>
          )}
        </Button>
        <Button onClick={() => removeTodos(todo.id)} variant="destructive">
          <XCircle />
        </Button>
      </div>
    </div>
  );
};

export default TodoActions;
