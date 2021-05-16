import { createStore } from 'redux'
import { createNote, noteReducer, toogleImportantOf } from './reducer/noteReducer'

export const store = createStore(noteReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// despacha los metodos iniciales
store.dispatch({
  type: '@notes/created',
  payload: {
    content: 'esto es una prueba de mis app de notas',
    import: true,
    id: 1
  }
})

function App () {
  const state = store.getState()

  const addNote = (event) => {
    event.preventDefault()
    const { target } = event
    const content = target.note.value
    target.note.value = ''
    store.dispatch(createNote(content))
  }

  const toggleImport = (id) => {
    store.dispatch(toogleImportantOf(id))
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input name = 'note'/>
        <button>add note</button>
      </form>
      <ul>
        {state.map(note => {
          return <li key={note.id} onClick={() => toggleImport(note.id)}>
              {note.content}
              <strong>{note.important
                ? 'important'
                : 'not important'}</strong>
              </li>
        })}
      </ul>
    </div>
  )
}

export default App
