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
                  return <Paper
                    key={n}
                    {...p}
                    dpi={dpi}
                    overrides={canvas.overrides}
                    selectedComponent={canvas.selected}
                    selectComponent={this.props.selectComponent}
                  />
                })
              }
            </Frame>
          }
        </div>
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
    selectComponent (id, fields) {
      dispatch(canvasActions.select(id, fields))
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
