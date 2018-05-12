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
  override ({ componentId, prop, value }) {
    return {
      type: 'OVERRIDE',
      componentId,
      prop,
      value
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
