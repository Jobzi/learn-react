export const TodoItem = ({ todo, toggleTodo }) => {
  const { id, task, completed } = todo
  const handleTodoClick = () => toggleTodo(id)

  return (
        <li>
          <input type="checkbox" checked={completed} onChange={handleTodoClick}></input>
          {task}
        </li>
  )
}
