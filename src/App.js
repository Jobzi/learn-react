
import FormNewNote from './components/notes/formNewNotes'
import ListNotes from './components/notes/listNotes'
import FilterNotes from './components/notes/filterNotes'
import { useEffect } from 'react'
import { getAllNoteAction } from './reducer/note/noteReducer'
import { useDispatch } from 'react-redux'
function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllNoteAction())
  }, [dispatch])

  return (
    <div>
      <FormNewNote/>
      <FilterNotes/>
      <ListNotes />
    </div>
  )
}

export default App
