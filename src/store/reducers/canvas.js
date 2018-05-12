const defaultState = {
  layers: [],
  texts: {},
  overrides: {},
  selected: null
}

const canvas = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_LAYERS':
      return {
        ...state,
        layers: action.layers,
        overrides: {}
      }
    case 'SET_TEXT':
      const texts = {
        ...state.texts,
        [action.id]: action.text
      }
      return {
        ...state,
        texts
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
