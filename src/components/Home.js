import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    container: {
      ...theme.utils.container,
      padding: theme.spacing.huge,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    title: {
      fontWeight: 300
    }
  }
}

class Home extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <h1 className={classes.title}>Sway</h1>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
