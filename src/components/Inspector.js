import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => {
  return {
    root: {
      padding: theme.spacing.unit,
      backgroundColor: theme.palette.grey[300]
    }
  }
}

class Inspector extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        Inspector
      </div>
    )
  }
}

export default withStyles(styles)(Inspector)
