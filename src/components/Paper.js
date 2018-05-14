import React from 'react'
import { withStyles } from 'material-ui/styles'

import Templates from './paper-templates/'

const mmToPx = (size, dpi) => {
  const MM_IN_INCH = 25.4
  return size * dpi / MM_IN_INCH
}

const styles = theme => {
  return {
    root: {
      backgroundColor: '#ffff88'
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
      canvas,
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
    const PaperTemplate = Templates[template]
    return (
      <div className={classes.root} style={style} {...rest}>
        <PaperTemplate />
      </div>
    )
  }
}

export default withStyles(styles)(Paper)
