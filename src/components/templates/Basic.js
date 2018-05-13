// import Text from '../elements/Text'
// import Svg from '../elements/Svg'
// import Frame from '../../svg/frame-1.svg'

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
      template: 'basic-1',
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
  // layers: [
  //   {
  //     id: 'frame',
  //     name: 'Frame',
  //     component: Svg,
  //     props: {
  //       svg: Frame,
  //       color: '#5a5'
  //     }
  //   }, {
  //     id: 'name',
  //     name: 'Name',
  //     component: Text,
  //     props: {
  //       text: 'Bob',
  //       color: '#0000ff'
  //     }
  //   }, {
  //     id: 'description',
  //     name: 'Description',
  //     component: Text,
  //     props: {
  //       text: 'The amazing',
  //       color: '#ff0000'
  //     }
  //   }
  // ]
}

export default BasicTemplate
