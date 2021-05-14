import { createContext, useState } from 'react'

const UserContext = createContext({ })

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ user: 'jobzi', name: 'Jipson Murillo', learn: 'React' })
  return <UserContext.Provider value={{ user, setUser }}>
   {children}
   </UserContext.Provider>
}

export default UserContext
