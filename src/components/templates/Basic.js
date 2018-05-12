import Text from '../elements/Text'
import Svg from '../elements/Svg'
import Frame from '../../svg/frame-1.svg'

const BasicTemplate = {
  id: 'basic',
  name: 'Basic Template',
  layers: [
    {
      id: 'frame',
      name: 'Frame',
      component: Svg,
      props: {
        svg: Frame,
        color: '#5a5'
      }
    }, {
      id: 'name',
      name: 'Name',
      component: Text,
      props: {
        text: 'Bob',
        color: '#0000ff'
      }
    }, {
      id: 'description',
      name: 'Description',
      component: Text,
      props: {
        text: 'The amazing',
        color: '#ff0000'
      }
    }
  ]
}

export default BasicTemplate
