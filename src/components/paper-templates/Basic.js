import defaults from 'lodash/defaults'

import Text from '../paper-elements/Text'
// import Svg from '../paper-elements/Svg'

import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => {
  return {
    root: {
    },
    available: {
      cursor: 'default',
      border: `1px solid transparent`,
      '&:hover': {
        border: `1px solid ${theme.palette.red[100]}`
      }
    },
    selected: {
      cursor: 'default',
      border: `1px solid ${theme.palette.red[400]}`
    }
  }
}

const componentsFields = {
  name: [
    {
      key: 'name',
      type: 'text'
    }
  ]
}

class BasicTemplate extends React.Component {
  getComponentFields = (id, state) => {
    const fields = componentsFields[id]
    return fields.map(f => ({
      ...f,
      value: state[f.key]
    }))
  }

  selectComponent = (id, state) => e => {
    e.stopPropagation()
    this.props.selectComponent(id, this.getComponentFields(id, state))
  }

  render () {
    const { classes, paperState, selectedComponent } = this.props
    const state = defaults(paperState, {
      name: 'Name'
    })
    const selected = selectedComponent ? selectedComponent.id : null
    return (
      <div className={classes.root}>
        Basic Paper
        <Text className={selected ? classes.selected : classes.available} color='red' onClick={this.selectComponent('name', state)}>
          {state.name}
        </Text>
      </div>
    )
  }
}

export default withStyles(styles)(BasicTemplate)
