import { useDispatch } from 'react-redux'
import { filterChange } from '../../reducer/note/filterNoteReducer'

const FilterNotes = () => {
  const dispatch = useDispatch()
  const filterSelected = value => {
    dispatch(filterChange(value))
  }
  return (
     <div>
        all
        <input type='radio' name='filter'onChange={() => filterSelected('ALL')}/>
        important
        <input type='radio' name='filter'onChange={() => filterSelected('IMPORTANT')}/>
        not important
        <input type='radio' name='filter'onChange={() => filterSelected('NO_IMPORTANT')}/>
      </div>
  )
}
export default FilterNotes
