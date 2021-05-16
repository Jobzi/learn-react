import { useDispatch } from 'react-redux'
import { createNote } from '../../reducer/note/noteReducer'

const FormNewNote = () => {
  const dispatch = useDispatch()

  const addNote = (event) => {
    event.preventDefault()
    const { target } = event
    const content = target.note.value
    target.note.value = ''
    dispatch(createNote(content))
  }

  return (
    <form onSubmit={addNote}>
        <input name = 'note'/>
        <button>add note</button>
    </form>
  )
}
export default FormNewNote
