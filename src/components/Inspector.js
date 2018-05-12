import React from 'react'
import { withStyles } from 'material-ui/styles'

import Button from 'material-ui/Button'
import CartIcon from 'mdi-material-ui/Cart'
import PdfIcon from 'mdi-material-ui/FilePdf'

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
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        Inspector
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

export default withStyles(styles)(Inspector)
