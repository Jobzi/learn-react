import { createNewNote, getAll } from '../../services/notes'

// eslint-disable-next-line no-unused-vars
const INITAL_STATE = [{
  content: 'Esta siempre sera mi primera nota',
  import: true,
  id: 1
}]

export const noteReducer = (state = [], action) => {
  console.log('ACTION:', action)

  switch (action.type) {
    case '@notes/created':
      return [...state, action.payload]
    case '@notes/toggle_important': {
      const { id } = action.payload
      return state.map(note => {
        if (note.id === id) {
          return { ...note, important: !note.important }
        }
        return note
      })
    }
    case '@notes/init':
      return action.payload
    default:
      return state
  }
}

// nmetodo para crear nueva nota
export const createNote = note => {
  return {
    type: '@notes/created',
    payload: note
  }
}
// nmetodo para obtener todos los valores de las notas de db
export const getAllNote = note => {
  return {
    type: '@notes/init',
    payload: note
  }
}
// nmetodo para cambiar el estado de la nota
export const toogleImportantOf = id => {
  return {
    type: '@notes/toggle_important',
    payload: {
      id
    }
  }
}

// ? vamos a crear un action creator con funciones vue vuelven otra funcion asyncrona
// *:metodo para crear nueva nota al backend use @createNote
export const createNoteAction = content => {
  return async (dispatch) => {
    const newNote = await createNewNote(content)
    dispatch(createNote(newNote))
  }
}
// *:metodo para iniciar todas las notas al backenduse @getAllNote
export const getAllNoteAction = () => {
  return async (dispatch) => {
    const note = await getAll()
    dispatch(getAllNote(note))
  }
}
