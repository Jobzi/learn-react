import { useContext } from 'react'
import UserContext from '../context/userContext'

const Header = ({ name = 'name' }) => {
  const { user, setUser } = useContext(UserContext)

  const changeUser = () => {
    setUser({ user: 'jobzi2', name: 'Jipson Yair Murillo Lucio', learn: 'Angular' })
  }

  return (
    <header>
        <p>Mi nombre vienen de las props {name}</p>
        <div>mi user of context: {user.user}</div>
        <div>name: {user.name}</div>
        <div>learn: {user.learn}</div>
        <button onClick={changeUser}>Change Other User</button>
    </header>
  )
}

export default Header
