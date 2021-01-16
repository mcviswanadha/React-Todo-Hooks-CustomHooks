import React from "react";
import "./styles.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "./useTodoState";

export default function App() {
  // const [todos, setTodos] = useState([]);
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
