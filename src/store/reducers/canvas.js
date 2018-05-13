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
      const componentOverrides = { ...state.overrides[action.componentId] }
      componentOverrides[action.prop] = action.value
      const overrides = {
        ...state.overrides,
        [action.componentId]: componentOverrides
      }
      return {
        ...state,
        overrides
      }
    case 'SELECT':
      return {
        ...state,
        selected: action.componentId
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
