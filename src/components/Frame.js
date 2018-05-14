import React from 'react'
import { withStyles } from 'material-ui/styles'

// import Frame from '../../svg/frame-1.svg'

const mmToPx = (size, dpi) => {
  const MM_IN_INCH = 25.4
  return size * dpi / MM_IN_INCH
}

const styles = theme => {
  return {
    root: {
      border: '2px solid #aa0000',
      backgroundColor: '#ffcccc'
    }
  }
}

class Frame extends React.Component {
  render () {
    const {
      classes,
      children,
      dpi,
      type,
      backSurface,
      fronSurface,
      innerSize,
      ...rest
    } = this.props
    const style = {
      position: 'relative',
      width: mmToPx(innerSize.width, dpi),
      height: mmToPx(innerSize.height, dpi)
    }
    return (
      <div className={classes.root} style={style} {...rest}>
        {children}
      </div>
    )
  }
}

export default withStyles(styles)(Frame)
