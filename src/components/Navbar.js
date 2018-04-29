import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => {
  return {
    root: {
      ...theme.utils.container,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: theme.spacing.big
    },
    logo: {},
    buttons: {}
  }
}

class Navbar extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.logo}>
          React App
        </div>
        <div className={classes.buttons}>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)
