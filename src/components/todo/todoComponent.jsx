import { useState, useRef, useEffect } from 'react'
import { TodoList } from './components/todoList'

const KEY = 'todoApp.todo'

export const TodoComponent = () => {
  const [todo, setTodo] = useState([])

  // TODO: utilizar useEffect para la persistencia de datos del localstorage
  // el hook @useEffect recibe como parametro un callback y un array de dependencias, puede ser una varieable, funcion
  useEffect(() => {
    const storageTodo = JSON.parse(localStorage.getItem(KEY))
    if (storageTodo)setTodo(storageTodo)
  }, [])
  // este efecto se ejecuta cada vez que escuche un cambuio en la variable @todo
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todo))
  }, [todo])

  // TODO: utiliza @useRef se usa un hook para atrapar el valor del bottom
  const todoTaskRef = useRef()
  const handleAddTodo = () => {
    // obtenermos el valor del hook que atrapamos en el bottom
    const task = todoTaskRef.current.value
    if (task === '') return
    setTodo((prev) => {
      return [...prev, { id: (Math.random() * 150).toFixed(), task, completed: false }]
    })
    todoTaskRef.current.value = null
  }
  // cambiar el valor de la tarea de completado a no completado va desde el componente mas pequeño al mas grande
  const toggleTodo = (id) => {
    const newTodo = [...todo]
    const todoFind = newTodo.find((todo) => todo.id === id)
    todoFind.completed = !todoFind.completed
    setTodo(newTodo)
  }
  // borra los valores que ya estan completados
  const handleClearAll = () => {
    const newTodo = todo.filter((tod) => !tod.completed)
    setTodo(newTodo)
  }
  return (
        <>
            <TodoList todos={todo} toggleTodo={toggleTodo}/>
            <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"></input>
            <button onClick={handleAddTodo}>+</button>
            <button onClick={handleClearAll}>Delete</button>
            <div>Te quedan {todo.filter((tod) => !tod.completed).length} tareas por terminar</div>
        </>
  )
}
