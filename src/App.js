import Header from './components/header'
import { TodoComponent } from './components/todo/todoComponent'
import { UserContextProvider } from './context/userContext'

function App () {
  return (
    <UserContextProvider>
      <Header name={'Jipson Murillo'} />
      <TodoComponent />
    </UserContextProvider>
  )
}

export default App
