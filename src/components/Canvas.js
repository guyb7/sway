import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import canvasActions from '../store/actions/canvas'

const styles = theme => {
  return {
    root: {
      backgroundColor: theme.palette.common.white,
      height: '100%',
      minHeight: 400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    component: {
      cursor: 'default',
      '&:hover': {
        border: `1px solid ${theme.palette.red[100]}`
      },
      '&.selected': {
        border: `1px solid ${theme.palette.red[400]}`
      }
    }
  }
}

class Canvas extends React.Component {
  selectComponent = id => e => {
    e.stopPropagation()
    this.props.selectComponent(id)
  }

  deselect = () => {
    this.props.deselectComponents()
  }

  render () {
    const { classes, canvas } = this.props
    const selectedComponent = canvas.selected
    return (
      <div className={classes.root} onClick={this.deselect}>
        {
          canvas.layers.map(l => {
            const Component = l.component
            const props = { ...l.props }
            if (canvas.texts[l.id]) {
              props.text = canvas.texts[l.id]
            }
            const isSelected = selectedComponent === l.id
            return (
              <Component
                key={l.id}
                {...props}
                onClick={this.selectComponent(l.id)}
                className={`${classes.component} ${isSelected ? 'selected' : ''}`}
              />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    canvas: state.canvas
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectComponent (id) {
      dispatch(canvasActions.select(id))
    },
    deselectComponents () {
      dispatch(canvasActions.deselect())
    }
  }
}

const connectedCanvas = connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas)

export default withStyles(styles)(connectedCanvas)
