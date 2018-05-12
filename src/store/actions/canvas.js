export default {
  setLayers (layers) {
    return {
      type: 'SET_LAYERS',
      layers
    }
  },
  setText ({ id, text }) {
    return {
      type: 'SET_TEXT',
      id,
      text
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
