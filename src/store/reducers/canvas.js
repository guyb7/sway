const defaultState = {
  frame: null,
  papers: [],
  overrides: {},
  selected: null
}

const canvas = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_FRAME':
      return {
        ...state,
        frame: action.frame
      }
    case 'SET_PAPERS':
      return {
        ...state,
        papers: action.papers,
        overrides: {}
      }
    case 'OVERRIDE':
      const overrides = {
        ...state.overrides,
        [action.key]: action.value
      }
      return {
        ...state,
        overrides
      }
    case 'SELECT':
      return {
        ...state,
        selected: {
          id: action.componentId,
          fields: action.componentFields
        }
      }
    case 'DESELECT':
      return {
        ...state,
        selected: null
      }
    default:
      return state
  }
}

export default canvas
