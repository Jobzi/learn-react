const INITAL_STATE = [{
  content: 'Esta siempre sera mi primera nota',
  import: true,
  id: 1
}]

export const noteReducer = (state = INITAL_STATE, action) => {
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
    default:
      return state
  }
}

// nmetodo para crear nueva nota
export const createNote = content => {
  return {
    type: '@notes/created',
    payload: {
      content: content,
      important: false,
      id: generatedId()
    }
  }
}
// nmetodo para crear nueva nota
export const toogleImportantOf = id => {
  return {
    type: '@notes/toggle_important',
    payload: {
      id
    }
  }
}
// metodo para general un id
export const generatedId = () => Math.floor(Math.random() * 999999) + 1
