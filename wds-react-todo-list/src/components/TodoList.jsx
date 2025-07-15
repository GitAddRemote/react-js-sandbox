import { TodoItem } from "./TodoItem";

export function TodoList({ todoList, onToggle, onDelete }) {
  return(
    <ul className="list">
      { todoList.map(item => {
       return (
          <TodoItem
            completed={item.completed}
            id={item.id}
            title={item.title}
            key={item.id}
            toggleTodo={onToggle}
            deleteTodo={onDelete}
          />
        )}
      )}
    </ul>
  );
}
