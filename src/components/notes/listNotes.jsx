import { useDispatch, useSelector } from 'react-redux'
import { IMPORTANT_FILTERS } from '../../constants/filters'
import { toogleImportantOf } from '../../reducer/note/noteReducer'

const ListNotes = () => {
  const notes = useSelector(({ filterNotes, notes }) => {
    if (filterNotes === IMPORTANT_FILTERS.ALL) {
      return notes
    }
    return filterNotes === IMPORTANT_FILTERS.IMPORTANT
      ? notes.filter(note => note.important)
      : notes.filter(note => !note.important)
  })

  const dispatch = useDispatch()

  const toggleImportant = (id) => {
    dispatch(toogleImportantOf(id))
  }

  return (
      <ul>
        {notes.map(note => <Note key={note.id} note={note} toggleImportant={toggleImportant}/>)}
      </ul>
  )
}

const Note = ({ note, toggleImportant }) => {
  return (
    <li key={note.id} onClick={() => toggleImportant(note.id)}>
      {note.content}
      <strong>{note.important
        ? 'important'
        : 'not important'}
      </strong>
    </li>
  )
}
export default ListNotes
