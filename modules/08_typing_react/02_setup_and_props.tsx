type ChildProps = {
  name: string;
}

// We can also use React.FC to define the type of the component, but we write more code and it adds some extra properties to the component which are not necessary most of the time.
// const Child: React.FC<ChildProps> = ({ name }) => {}

function Child({ name }: ChildProps) {
  return(
    <h1>{name}</h1>
  )
}

import type { ComponentProps } from 'react';

// If we want to infer the type of the props of a component, in this case a button, we can use the ComponentProps type from the react package and make a intersection with the props of the button component. This way we can use the props of the button component and also add some extra props to it, like the outline prop in this case.

// We can also do it with an actual component you built, like the Child component in this case, so it would have a prop of outline and a name. it would be like this:

// type ButtonProps = {
// outline?: boolean;
// } & ComponentProps<typeof Child>

// This is useful if for some reason the actual type is not exported or if you're a library, maybe the types are not exported for the actual components so you can use this to infer the type of the props of the component.

type ButtonProps = {
  outline?: boolean;
} & ComponentProps<'button'>;

function Button({ outline, ...props }: ButtonProps) {
  return <button {...props}></button>
}

function App() {
  return (
    <>
    <Child name='John'/>
    <Button aria-label='this is a button' disabled>button</Button>
    </>
  )
}