import Text from '../elements/Text'

const BasicTemplate = {
  id: 'basic',
  name: 'Basic Template',
  layers: [
    {
      id: 'name',
      name: 'Name',
      component: Text,
      props: {
        text: 'Bob',
        color: 'blue'
      }
    }
  ]
}

export default BasicTemplate
