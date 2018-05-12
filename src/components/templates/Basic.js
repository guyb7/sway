import Text from '../elements/Text'

const BasicTemplate = {
  id: 'basic',
  name: 'Basic Template',
  layers: [
    {
      id: 'name',
      component: Text,
      props: {
        text: 'Bob'
      }
    }
  ]
}

export default BasicTemplate
