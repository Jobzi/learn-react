
export const noteReducer = (state = [], action) => {
  if (action.type === '@notes/created') {
    // return state.concat(action.payload)
    return [...state, action.payload]
  }
  if (action.type === '@notes/toggle_important') {
    const { id } = action.payload
    return state.map(note => {
      if (note.id === id) {
        return { ...note, important: !note.important }
      }
      return note
    })
  }
  return state
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
