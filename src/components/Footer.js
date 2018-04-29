import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => {
  return {
    root: {
      ...theme.typography.caption,
      ...theme.utils.container,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: theme.spacing.huge
    },
    text: {
      padding: theme.spacing.unit,
      paddingLeft: 0
    }
  }
}

class Footer extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.text}>
          React App
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Footer)
