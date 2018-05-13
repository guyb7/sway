export default {
  setFrame (frame) {
    return {
      type: 'SET_FRAME',
      frame
    }
  },
  setPapers (papers) {
    return {
      type: 'SET_PAPERS',
      papers
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
