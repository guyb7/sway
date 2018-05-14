import defaults from 'lodash/defaults'

// import Svg from '../paper-elements/Svg'

import React from 'react'
import { withStyles } from 'material-ui/styles'

import { mmToPx } from '../Utils'

const styles = theme => {
  return {
    root: {
      padding: mmToPx(12)
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
    },
    university: {
      fontSize: mmToPx(16),
      textAlign: 'center'
    },
    text: {
      fontSize: mmToPx(8),
      textAlign: 'center'
    },
    title: {
      fontSize: mmToPx(24),
      textAlign: 'center'
    },
    subtitle: {
      fontSize: mmToPx(18),
      textAlign: 'center'
    }
  }
}

const componentsFields = {
  university: [
    {
      key: 'university',
      type: 'text'
    }
  ],
  text1: [
    {
      key: 'text1',
      type: 'multiline'
    }
  ],
  title: [
    {
      key: 'title',
      type: 'text'
    }
  ],
  subtitle: [
    {
      key: 'subtitle',
      type: 'text'
    }
  ],
  text2: [
    {
      key: 'text2',
      type: 'multiline'
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

  getComponentClass = (id, className) => {
    const classes = [className]
    if (this.props.selectedComponent && this.props.selectedComponent.id === id) {
      classes.push(this.props.classes.selected)
    } else {
      classes.push(this.props.classes.available)
    }
    return classes.join(' ')
  }

  render () {
    const { classes, paperState } = this.props
    const state = defaults(paperState, {
      university: 'University Name',
      text1: 'Upon Nomination of the Faculty of the College of Science and Class, this individual has been awarded the',
      title: 'Study Name',
      subtitle: 'Bachelor of Scinece',
      text2: 'for their excellence in practice and understanding within their field and hold the rights and privilege thereon pertaining to their study.'
    })
    return (
      <div className={classes.root}>
        <div className={this.getComponentClass('university', classes.university)} onClick={this.selectComponent('university', state)}>
          {state.university}
        </div>
        <div className={this.getComponentClass('text1', classes.text)} onClick={this.selectComponent('text1', state)}>
          {state.text1}
        </div>
        <div className={this.getComponentClass('title', classes.title)} onClick={this.selectComponent('title', state)}>
          {state.title}
        </div>
        <div className={this.getComponentClass('subtitle', classes.subtitle)} onClick={this.selectComponent('subtitle', state)}>
          {state.subtitle}
        </div>
        <div className={this.getComponentClass('text2', classes.text)} onClick={this.selectComponent('text2', state)}>
          {state.text2}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(BasicTemplate)
