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

// despacha la accion
store.dispatch(actionIncremented)
store.dispatch(actionIncremented)
store.dispatch(actionDecremented)
store.dispatch(actionZero)
// counterReducer(0, actionIncremented)
//  counterReducer(1, actionDecremented)
// counterReducer(1, actionZero)
