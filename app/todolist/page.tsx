"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TodoActions from "@/components/todos/todo-actions";
import TodoForm from "../../components/todos/todoForm";
import SearchTodo from "../../components/todos/searchTodo";
import FilterTodos from "../../components/todos/filterTodos";
import { Card } from "@/components/ui/card";
import HeaderGeneral from "@/components/general/headergeneral";
import { Separator } from "@/components/ui/separator";

const TodoList = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login");
    }
  });

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
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("A-Z");

  const addTodo = (text, category) => {
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
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodos = (id: number) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <Card className="mx-auto p-5">
      <HeaderGeneral
        label="Acompanhe as suas tarefas."
        title="Lista de tarefas"
      />
      <Separator />

      <SearchTodo search={search} setSearch={setSearch} />

      <Separator />
      <FilterTodos filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
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
