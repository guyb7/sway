import Text from '../paper-elements/Text'
import Svg from '../paper-elements/Svg'

import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => {
  return {
    root: {
    }
  }
}

class Frame extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        Basic Paper
        <Text color='red'>
          Edit me
        </Text>
      </div>
    )
  }
}

export default withStyles(styles)(Frame)
