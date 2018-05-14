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
        university: 'Glorious University',
        text1: 'Upon Nomination of the Faculty of the College of Science and Class, this individual has been awarded the',
        title: 'Dragonslayership',
        subtitle: 'Bachelor of Scinece',
        text2: 'for their excellence in practice and understanding within their field and hold the rights and privilege thereon pertaining to their study.'
      }
    }
  ]
}

export default BasicTemplate
