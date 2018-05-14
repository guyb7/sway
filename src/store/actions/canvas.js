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
  override ({ key, value }) {
    return {
      type: 'OVERRIDE',
      key,
      value
    }
  },
  select (componentId, componentFields) {
    return {
      type: 'SELECT',
      componentId,
      componentFields
    }
  },
  deselect () {
    return {
      type: 'DESELECT'
    }
  }
}
