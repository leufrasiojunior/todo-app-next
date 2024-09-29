"use client";
import { Card } from "@/components/ui/card";
import HeaderGeneral from "@/components/general/headergeneral";
import { Separator } from "@/components/ui/separator";
import SearchTodo from "../../components/todos/searchTodo";
import FilterTodos from "../../components/todos/filterTodos";
import TodoForm from "../../components/todos/todoForm";
import TodoActions from "@/components/todos/todo-actions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const TodoList = () => {
  const router = useRouter();
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    { id: 3, text: "Estudar React", category: "Estudos", isCompleted: false },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login");
    }
  });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("A-Z");

  const addTodo = (text: string, category: string) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodos = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodos = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Card
      className="max-w-xl p-5 space-y-6 my-auto bg-stone-50 "
      style={{ width: "150rem" }}
    >
      <HeaderGeneral
        label="Acompanhe as suas tarefas."
        title="Lista de tarefas"
      />
      <SearchTodo search={search} setSearch={setSearch} />
      <Separator />
      <FilterTodos filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="space-y-4 flex flex-col justify-center">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "A-Z"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <TodoActions
              key={todo.id}
              todo={todo}
              removeTodos={removeTodos}
              completeTodos={completeTodos}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </Card>
  );
};

export default TodoList;
