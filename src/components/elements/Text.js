import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => {
  return {
    root: {
    }
  }
}

class Text extends React.Component {
  render () {
    const { classes, text, className, color, ...rest } = this.props
    const style = {
      color
    }
    return (
      <div className={`${className} ${classes.root}`} style={style} {...rest}>
        {text}
      </div>
    )
  }
}

export default withStyles(styles)(Text)
