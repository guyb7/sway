import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => {
  return {
    root: {
      color: 'red'
    }
  }
}

class Text extends React.Component {
  render () {
    const { classes, text } = this.props
    return (
      <div className={classes.root}>
        {text}
      </div>
    )
  }
}

export default withStyles(styles)(Text)
