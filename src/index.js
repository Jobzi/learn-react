import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { noteReducer } from './reducer/note/noteReducer'
import { filterNoteReducer } from './reducer/note/filterNoteReducer'

// combina los reducers de otros y muchos mas reducers
const reducer = combineReducers({
  notes: noteReducer,
  filterNotes: filterNoteReducer
})
// @composeWithDevTools son para activar las dependencias de desarrollo
const store = createStore(reducer, composeWithDevTools())

// despacha los metodos iniciales
/* store.dispatch({
  type: '@notes/created',
  payload: {
    content: 'Esta siempre sera mi primera nota',
    import: true,
    id: 1
  }
}) */

const RenderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

RenderApp()
store.subscribe(() => {
  RenderApp()
})
