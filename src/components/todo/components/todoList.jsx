import { TodoItem } from './todoitem'

export const TodoList = ({ todos, toggleTodo }) => {
  return (
        <ul>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))}
        </ul>
  )
}
