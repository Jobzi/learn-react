import { useDispatch } from 'react-redux'
import { createNoteAction } from '../../reducer/note/noteReducer'

const FormNewNote = () => {
  const dispatch = useDispatch()

  const addNote = async (event) => {
    event.preventDefault()
    const { target } = event
    const content = target.note.value
    target.note.value = ''
    // *creamos la nota para el backend
    // ?:creamos una nueva nota con la logina del api incorporado
    // const newNote = await createNewNote(content)
    // dispatch(createNote(newNote))
    // ?----------------------------
    // TODO: creamos una funcion con el thunk para incoporar la logica dentro de un solo metodo
    dispatch(createNoteAction(content))
  }

  return (
    <form onSubmit={addNote}>
        <input name = 'note'/>
        <button>add note</button>
    </form>
  )
}
export default FormNewNote
