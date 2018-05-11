export default {
  setUser (data) {
    return {
      type: 'SET_DATA',
      data
    }
  },
  select (componentId) {
    return {
      type: 'SELECT',
      componentId
    }
  },
  deselect () {
    return {
      type: 'DESELECT'
    }
  }
}
