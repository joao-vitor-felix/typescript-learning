import { useState } from "react";

type User = {
  name: string;
  age: number;
};


function App() {
  // You can type as a generic to tell the type of the state or you can use the type inference
  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks#usestate
  const [user, setUser] = useState<User | null>(null);
  const [state, setState] = useState(false);
  const [text, setText] = useState<string>('');
  const [number, setNumber] = useState<number[]>([]);

  return <></>
}
