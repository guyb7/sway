const defaultState = {
  data: {},
  selected: null
}

const canvas = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.data
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
