import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import get from 'lodash/get'

import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
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
    title: {
      ...theme.typography.caption,
      marginBottom: theme.spacing.double
    },
    itemTitle: {
      ...theme.typography.caption
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
  setValue = (componentId, prop, value) => {
    this.props.override({ componentId, prop, value })
  }

  renderDocumentFields = () => {
    const { classes } = this.props
    return <div>
      <div className={classes.title}>Document</div>
    </div>
  }

  renderComponentFields = selectedComponent => {
    const { classes, canvas } = this.props
    const fields = []
    const update = (prop, value) => {
      this.setValue(selectedComponent.id, prop, value)
    }
    for (let k in selectedComponent.props) {
      const overrideValue = get(canvas, `overrides.${selectedComponent.id}.${k}`, null)
      const value = overrideValue !== null ? overrideValue : selectedComponent.props[k]
      switch (k) {
        case 'text':
          fields.push(<div className={classes.itemContainer}>
            <div className={classes.itemTitle}>
              Text
            </div>
            <TextField
              key={k}
              className={classes.textField}
              value={value}
              onChange={e => { update(k, e.target.value) }}
            />
          </div>)
          break
        default:
      }
    }
    return <form
      className={classes.form}
      noValidate
      autoComplete='off'
      onSubmit={e => e.preventDefault()}
    >
      <div className={classes.title}>{selectedComponent.name}</div>
      {
        [...fields]
      }
    </form>
  }

  render () {
    const { classes, canvas } = this.props
    const selectedComponent = canvas.selected ? canvas.layers.filter(l => l.id === canvas.selected)[0] : null
    return (
      <div className={classes.root}>
        {selectedComponent && this.renderComponentFields(selectedComponent)}
        {!selectedComponent && this.renderDocumentFields()}
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
