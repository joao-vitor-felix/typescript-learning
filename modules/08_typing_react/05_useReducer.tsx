import { useReducer } from 'react'


type State = {
  count: number
}

type IncrementAction = {
  type: "INCREMENT"
  increaseBy: number
}

type DecrementAction = {
  type: "DECREMENT"
  decreaseBy: number
}

type ActionType = IncrementAction | DecrementAction

function reducer(state: State, action: ActionType) {
  switch(action.type) {
    case "INCREMENT":
      return { ... state, count: state.count + action.increaseBy }
    case "DECREMENT":
      return { ...state, count: state.count - action.decreaseBy }
      default: return state // return state or throw an error
  }
}

// We could also do something like this:
// const initialState = { count: 0 };
// function reducer(state: typeof initialState, action: ACTIONTYPE)
// const [state, dispatch] = useReducer(reducer, initialState);
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks#usereducer

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <div>
      <button onClick={() => dispatch ({type: "DECREMENT", decreaseBy: 1})}>
        -
      </button>
      {state.count}
      <button onClick={() => dispatch ({type: "INCREMENT", increaseBy: 1})}>
      +
      </button>
    </div>
  )
}
