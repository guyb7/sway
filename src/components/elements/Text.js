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
    const { classes, text, className, ...rest } = this.props
    return (
      <div className={`${className} ${classes.root}`} {...rest}>
        {text}
      </div>
    )
  }
}

export default withStyles(styles)(Text)
