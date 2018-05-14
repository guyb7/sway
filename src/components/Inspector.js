import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

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
  setValue = (key, value) => {
    this.props.override({ key, value })
  }

  renderDocumentFields = () => {
    const { classes } = this.props
    return <div>
      <div className={classes.title}>Document</div>
    </div>
  }

  renderComponentFields = selectedFields => {
    const { classes } = this.props
    const fields = []
    const update = (key, value) => {
      this.setValue(key, value)
    }
    for (let f of selectedFields) {
      switch (f.type) {
        case 'text':
        case 'multiline':
          fields.push(<div className={classes.itemContainer} key={f.key}>
            <div className={classes.itemTitle}>
              Text
            </div>
            <TextField
              className={classes.textField}
              defaultValue={f.value}
              onChange={e => { update(f.key, e.target.value) }}
              multiline={f.type === 'multiline'}
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
      <div className={classes.title}>{selectedFields.name}</div>
      {
        [...fields]
      }
    </form>
  }

  render () {
    const { classes, canvas } = this.props
    const selectedFields = canvas.selected ? canvas.selected.fields : null
    return (
      <div className={classes.root}>
        {selectedFields && this.renderComponentFields(selectedFields)}
        {!selectedFields && this.renderDocumentFields()}
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
    override ({ key, value }) {
      dispatch(canvasActions.override({ key, value }))
    }
  }
}

const connectedInspector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Inspector)

export default withStyles(styles)(connectedInspector)
