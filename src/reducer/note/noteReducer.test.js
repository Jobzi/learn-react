import { noteReducer } from './noteReducer'
// this is TTD for create new notes
describe('noteReducer', () => {
  test('return new state after action with toggle',
    () => {
      const state = [
        {
          id: 1,
          content: 'note1',
          importamt: false
        }, {
          id: 2,
          content: 'note2',
          importamt: false
        }
      ]
      const action =
          {
            type: '@notes/toggle_important',
            payload: {
              id: 2
            }
          }
      const newState = noteReducer(state, action)
      expect(newState).toHaveLength(2)
      expect(newState).toContainEqual(state[0])
      expect(newState).toContainEqual({
        id: 2,
        content: 'note2',
        importamt: true
      })
    })
})
