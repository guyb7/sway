import React from 'react'
import { withStyles } from 'material-ui/styles'
import defaults from 'lodash/defaults'

import Templates from './paper-templates/'

import { mmToPx } from './Utils'

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
      overrides,
      selectComponent,
      selectedComponent,
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
    const paperState = defaults(overrides, defaultState)
    const PaperTemplate = Templates[template]
    return (
      <div className={classes.root} style={style} {...rest}>
        <PaperTemplate
          paperState={paperState}
          selectComponent={selectComponent}
          selectedComponent={selectedComponent}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Paper)
