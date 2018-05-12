import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import Button from 'material-ui/Button'
import CartIcon from 'mdi-material-ui/Cart'
import PdfIcon from 'mdi-material-ui/FilePdf'

import canvasActions from '../store/actions/canvas'

const styles = theme => {
  return {
    root: {
      padding: theme.spacing.unit,
      backgroundColor: theme.palette.grey[200],
      borderLeft: '1px solid ' + theme.palette.grey[300],
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    button: {
      marginTop: theme.spacing.unit
    },
    buttonIcon: {
      marginRight: theme.spacing.unit
    }
  }
}

class Inspector extends React.Component {
  setValue = (componentId, prop, value) => () => {
    this.props.override({ componentId, prop, value })
  }

  renderFields = selectedComponent => {
    return <div>
      {
        selectedComponent && <div onClick={this.setValue(selectedComponent.id, 'text', 'Guy')}>selectedComponent.id</div>
      }
      {
        !selectedComponent && 'Document'
      }
    </div>
  }

  render () {
    const { classes, canvas } = this.props
    const selectedComponent = canvas.selected ? canvas.layers.filter(l => l.id === canvas.selected)[0] : null
    return (
      <div className={classes.root}>
        {this.renderFields(selectedComponent)}
        <div>
          <Button
            className={classes.button}
            fullWidth
          >
            <PdfIcon className={classes.buttonIcon} />
            Download
          </Button>
          <Button
            className={classes.button}
            fullWidth
          >
            <CartIcon className={classes.buttonIcon} />
            Buy
          </Button>
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
    override ({ componentId, prop, value }) {
      dispatch(canvasActions.override({ componentId, prop, value }))
    }
  }
}

const connectedInspector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Inspector)

export default withStyles(styles)(connectedInspector)
