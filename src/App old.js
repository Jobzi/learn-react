import { createStore } from 'redux'

const actionIncremented = {
  type: '@counter/incremented'
}
const actionDecremented = {
  type: '@counter/decremented'
}
const actionZero = {
  type: '@counter/zero'
}

// los reducer puede ser agnostico al lenguaje donde estes trabajando
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case '@counter/incremented':
      return state + 1
    case '@counter/decremented':
      return state - 1
    case '@counter/zero':
      return 0
    default:
      return state
  }
}
// utilizamos createStore de redux
export const store = createStore(counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// escucha cada vez que un store despacha y hace un cambio
store.subscribe(() => {
  console.log(store.getState())
})

function App () {
  return (
    <div>
      {store.getState()}
      <button onClick={() => store.dispatch(actionIncremented)}>+</button>
      <button onClick={() => store.dispatch(actionDecremented)}>-</button>
      <button onClick={() => store.dispatch(actionZero)}>0</button>
    </div>
  )
}

export default App
