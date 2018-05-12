import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => {
  return {
    root: {
      backgroundColor: theme.palette.common.white,
      height: '100%',
      minHeight: 400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
}

class Canvas extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        Canvas
      </div>
    )
  }
}

export default withStyles(styles)(Canvas)
