import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { noteReducer } from './reducer/note/noteReducer'
import { filterNoteReducer } from './reducer/note/filterNoteReducer'
import thunk from 'redux-thunk'

// TODO: combina los reducers de otros y muchos mas reducers
const reducer = combineReducers({
  notes: noteReducer,
  filterNotes: filterNoteReducer
})

// *@composeWithDevTools son para activar las dependencias de desarrollo
// *@applyMiddleware(thunk) agrega middleware para crear funciones dentro de otras funciones asyncronas
export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

// ?despacha los metodos iniciales, pudes despachar de varios reducer, pero tienes que tener en cuenta que el typo debe ser el correcto
/* store.dispatch({
    type: '@notes/created',
    payload: {
      content: 'Esta siempre sera mi primera nota',
      important: true,
      id: 1
    }
  }) */
