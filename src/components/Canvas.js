import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import canvasActions from '../store/actions/canvas'

import Frame from './Frame'
import Paper from './Paper'

import IconButton from 'material-ui/IconButton'
import ZoomInIcon from 'mdi-material-ui/MagnifyPlusOutline'
import ZoomOutIcon from 'mdi-material-ui/MagnifyMinusOutline'

const styles = theme => {
  return {
    root: {
      backgroundColor: theme.palette.common.white,
      minHeight: 400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    },
    component: {
      cursor: 'default',
      border: `1px solid transparent`,
      '&:hover': {
        border: `1px solid ${theme.palette.red[100]}`
      },
      '&.selected': {
        border: `1px solid ${theme.palette.red[400]}`
      }
    },
    zoomContainer: {
      position: 'absolute',
      bottom: theme.spacing.unit,
      left: theme.spacing.unit,
      zIndex: 100
    },
    zoomButton: {
      height: theme.spacing.quad,
      width: theme.spacing.quad
    }
  }
}

class Canvas extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      zoom: 0.5,
      dpi: 72
    }
  }

  selectComponent = id => e => {
    e.stopPropagation()
    this.props.selectComponent(id)
  }

  deselect = () => {
    this.props.deselectComponents()
  }

  zoomIn = () => {
    this.setState({
      ...this.state,
      zoom: this.state.zoom * 1.25
    })
  }

  zoomOut = () => {
    this.setState({
      ...this.state,
      zoom: this.state.zoom / 1.25
    })
  }

  render () {
    const { classes, className = '', canvas } = this.props
    const { dpi, zoom } = this.state
    return (
      <div className={`${className} ${classes.root}`} onClick={this.deselect}>
        <div className={classes.zoomContainer}>
          <IconButton className={classes.zoomButton} onClick={this.zoomOut}>
            <ZoomOutIcon />
          </IconButton>
          <IconButton className={classes.zoomButton} onClick={this.zoomIn}>
            <ZoomInIcon />
          </IconButton>
        </div>
        <div style={{ transform: `scale(${zoom})` }}>
          {
            canvas.frame &&
            <Frame {...canvas.frame} dpi={dpi}>
              {
                canvas.papers && canvas.papers.map((p, n) => {
                  return <Paper key={n} {...p} dpi={dpi} canvas={canvas} />
                })
              }
            </Frame>
          }
        </div>
      </div>
    )
  }
}

// const selectedComponent = canvas.selected
// {
//   canvas.layers.map(l => {
//     const Component = l.component
//     const props = { ...l.props }
//     if (canvas.texts[l.id]) {
//       props.text = canvas.texts[l.id]
//     }
//     let overrides = {}
//     if (canvas.overrides[l.id]) {
//       overrides = canvas.overrides[l.id]
//     }
//     const isSelected = selectedComponent === l.id
//     return (
//       <Component
//         key={l.id}
//         {...props}
//         {...overrides}
//         onClick={this.selectComponent(l.id)}
//         className={`${classes.component} ${isSelected ? 'selected' : ''}`}
//       />
//     )
//   })
// }
// </div>

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
