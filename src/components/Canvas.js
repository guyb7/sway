import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

const styles = theme => {
  return {
    root: {
      backgroundColor: theme.palette.common.white,
      height: '100%',
      minHeight: 400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
}

class Canvas extends React.Component {
  render () {
    const { classes, canvas } = this.props
    return (
      <div className={classes.root}>
        {
          canvas.layers.map(l => {
            const Component = l.component
            const props = { ...l.props }
            if (canvas.texts[l.id]) {
              props.text = canvas.texts[l.id]
            }
            return <Component key={l.id} {...props} />
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    canvas: state.canvas
  }
}

const connectedCanvas = connect(
  mapStateToProps
)(Canvas)

export default withStyles(styles)(connectedCanvas)
