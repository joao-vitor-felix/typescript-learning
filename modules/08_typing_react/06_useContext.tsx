// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context

function getUsers() {
  return Promise.resolve([
  {id: crypto.randomUUID(), name: 'John', age: 25},
  {id: crypto.randomUUID(), name: 'Jane', age: 24},
  ])
}

// CONTEXT
import { createContext, useContext, useEffect, useState } from "react";

type User = {
  id: string
  name: string
  age: number
}

type UserContextType = {
  users: User[]
  addUser: (user: { name: string, age: number }) => void
}

const UserContext = createContext<UserContextType | null>(null)

function UserContextProvider() {
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
    <UserContext.Provider value={{ users, addUser }}>
      <Child />
    </UserContext.Provider>
  )
}

// HOOK
function useUsers() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUsers must be used within a UsersProvider')
  }

  return context
}

// CHILD COMPONENT
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
