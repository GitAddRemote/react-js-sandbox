export function TodoList({ todoList, onToggle, onDelete }) {
  return( 
    <ul>
      {todoList.map(item => (
        <li key={item.id}>
          <label>
          <input type="checkbox" checked={item.completed} onChange={(e) => onToggle(item.id, e.target.checked)} />
            {item.title}
          </label>
          <button className="btn btn-danger" onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
