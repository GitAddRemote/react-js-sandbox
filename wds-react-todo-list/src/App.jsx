import "./styles.css";
import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodoList(prevList => {
      return [...prevList, {id: crypto.randomUUID(), title: newItem, completed: false}];
    });
    setNewItem("");
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

  return <>
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">Item</label>
      <input 
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text" 
        id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1>ToDo List</h1>
  <ul>
    {todoList.map(item => (
      <>
        <li key={item.id}>
          <label>
            <input type="checkbox" checked={item.completed} onChange={() => handleToggle(item.id, item.completed)} />
            {item.title}
          </label>
          <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      </>
    ))}
  </ul>
  </>
}