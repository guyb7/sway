const BasicTemplate = {
  id: 'basic',
  name: 'Basic Template',
  frame: {
    type: 'basic',
    backSurface: 'paper',
    fronSurface: 'glass',
    innerSize: {
      width: 250,
      height: 337
    }
  },
  papers: [
    {
      template: 'basic',
      position: {
        top: 20,
        left: 20
      },
      size: {
        width: 210,
        height: 297
      },
      defaultState: {
        name: 'George',
        description: 'Dragonslayership Mastery'
      }
    }
  ]
}

export default BasicTemplate
