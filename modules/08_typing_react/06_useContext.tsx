// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context

import { createContext, useContext, useEffect, useState } from "react";

function getUsers() {
  return Promise.resolve([
  {id: crypto.randomUUID(), name: 'John', age: 25},
  {id: crypto.randomUUID(), name: 'Jane', age: 24},
  ])
}

type User = {
  id: string
  name: string
  age: number
}

type ContextType = {
  users: User[]
  addUser: (user: { name: string, age: number }) => void
}

const Context = createContext<ContextType | null>(null)

function useUsers() {
  const context = useContext(Context)

  if (!context) {
    throw new Error('useUsers must be used within a UsersProvider')
  }

  return context
}

function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])


  function addUser({ name, age }: { name: string, age: number }) {
    setUsers((users) => [
      ...users,
      { id: crypto.randomUUID(), name, age }
    ])
  }

  return (
    <Context.Provider value={{ users, addUser }}>
      <Child />
    </Context.Provider>
  )
}


function Child() {
const { users } = useUsers()

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
