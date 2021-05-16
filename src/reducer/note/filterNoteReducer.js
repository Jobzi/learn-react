const ACTIONS_TYPES = {
  SET_IMPORTANCE: '@filters/set_important'
}

export const filterNoteReducer = (state = 'ALL', action) => {
  console.log('ACTION:', action)
  switch (action.type) {
    case ACTIONS_TYPES.SET_IMPORTANCE:
      return action.payload
    default:
      return state
  }
}
export const filterChange = filter => {
  return {
    type: ACTIONS_TYPES.SET_IMPORTANCE,
    payload: filter
  }
}
