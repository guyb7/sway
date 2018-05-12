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
