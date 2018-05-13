import React from 'react'
import ReactSVG from 'react-svg'
import { withStyles } from 'material-ui/styles'

const styles = theme => {
  return {
    root: {
      '& *': {
        fill: 'currentColor'
      }
    }
  }
}

class Svg extends React.Component {
  render () {
    const { classes, svg, className, color, ...rest } = this.props
    return (
      <ReactSVG
        path={svg}
        style={color ? { color } : undefined}
        className={color ? `${className} ${classes.root}` : className}
        {...rest}
      />
    )
  }
}

export default withStyles(styles)(Svg)
