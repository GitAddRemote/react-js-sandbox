import "./styles.css";
import { useState } from "react";
import { NewTodoForm } from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(title) {

    setTodoList(prevList => {
      return [
        ...prevList
        , {id: crypto.randomUUID(), title: title, completed: false}
      ];
    });
  }
  
  function handleToggle(id, completed) {
    console.log("in App.jsx handleToggle");
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
