import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

  }

  return <>
    <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">Item</label>
      <input type="text" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1>ToDo List</h1>
  <ul>
    <li>
      <label>
        <input type="checkbox" />
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
}