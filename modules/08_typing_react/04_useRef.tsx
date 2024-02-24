import { useRef } from "react";


function App() {
  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks#useref

  // 1. DOM element ref: To access a DOM element: provide only the element type as argument, and use null as initial value. In this case, the returned reference will have a read-only .current that is managed by React. TypeScript expects you to give this ref to an element's ref prop

  const inputRef = useRef<HTMLInputElement>(null);

  // 2. Mutable value ref: To have a mutable value: provide the type you want, and make sure the initial value fully belongs to that type
  const value = useRef(0)
  const num = useRef<number>()

  value.current = 5
  num.current = 5

  return <input ref={inputRef}></input>
}
