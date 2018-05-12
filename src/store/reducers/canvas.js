const defaultState = {
  layers: [],
  texts: {},
  selected: null
}

const canvas = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_LAYERS':
      return {
        ...state,
        layers: action.layers
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
