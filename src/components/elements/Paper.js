import React from 'react'
import { withStyles } from 'material-ui/styles'

const mmToPx = (size, dpi) => {
  const MM_IN_INCH = 25.4
  return size * dpi / MM_IN_INCH
}

const styles = theme => {
  return {
    root: {
      backgroundColor: 'yellow'
    }
  }
}

class Paper extends React.Component {
  render () {
    const {
      classes,
      template,
      position,
      size,
      defaultState,
      dpi,
      ...rest
    } = this.props
    const positionPx = {
      top: position.top ? mmToPx(position.top, dpi) : undefined,
      bottom: position.bottom ? mmToPx(position.bottom, dpi) : undefined,
      left: position.left ? mmToPx(position.left, dpi) : undefined,
      right: position.right ? mmToPx(position.right, dpi) : undefined
    }
    const style = {
      position: 'absolute',
      ...positionPx,
      width: mmToPx(size.width, dpi),
      height: mmToPx(size.height, dpi)
    }
    return (
      <div className={classes.root} style={style} {...rest}>
        Paper
      </div>
    )
  }
}

export default withStyles(styles)(Paper)
