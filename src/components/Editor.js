import React from 'react'
import { withStyles } from 'material-ui/styles'

import Canvas from './Canvas'
import Inspector from './Inspector'

const styles = theme => {
  return {
    root: {
      display: 'grid',
      gridTemplateColumns: `auto ${theme.spacing.huge * 2}px`,
      gridTemplateRows: 'auto',
      width: '100%',
      height: '100%',
      fontSize: 14
    }
  }
}

class Editor extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Canvas />
        <Inspector />
      </div>
    )
  }
}

export default withStyles(styles)(Editor)
