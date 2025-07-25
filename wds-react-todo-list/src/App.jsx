import "./styles.css";
import { useState } from "react";
import { NewTodoForm } from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";
import { useEffect } from "react";

export default function App() {
  
  const TODO_LIST_KEY = "TODO_LIST";

  const [todoList, setTodoList] = useState(() => {
    const storedLocalStorage = localStorage.getItem(TODO_LIST_KEY);
    try {
      return storedLocalStorage
      ? JSON.parse(storedLocalStorage)
      : [];
    } catch (e) {
      // If JSON.parse fails, remove the corrupted entry and return an empty array
      localStorage.removeItem(TODO_LIST_KEY);
      return [];
    }
  });

  // save current todoList to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
    } catch (error) {
      console.error("Failed to save todo list to localStorage:", error);
    }
  }, [todoList]);

  function addTodo(title) {

    setTodoList(prevList => {
      return [
        ...prevList
        , {id: crypto.randomUUID(), title: title, completed: false}
      ];
    });
  }
  
  function handleToggle(id, completed) {
    setTodoList(prevList => {
      return prevList.map(item => {
        if (item.id === id) {
          return {...item, completed: completed};
        }
        return item;
      });
    });
  }

  function handleDelete(id) {
    setTodoList(prevList => {
      return prevList.filter(item => item.id !== id);
    });
  } 

  return( 
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1>To Do List</h1>
      <TodoList todoList={todoList} onToggle={handleToggle} onDelete={handleDelete} />
    </>
  );
}
