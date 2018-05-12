import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'

import IconButton from 'material-ui/IconButton'
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import ChevronRight from 'mdi-material-ui/ChevronRight'

import Templates from './templates/'

import canvasActions from '../store/actions/canvas'

const styles = theme => {
  return {
    root: {
      backgroundColor: theme.palette.primary.dark
    },
    container: {
      ...theme.utils.container,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: theme.spacing.big
    },
    logo: {
      width: theme.spacing.huge,
      padding: theme.spacing.double
    },
    templatesContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    templateText: {
      width: theme.spacing.huge * 2,
      textAlign: 'center',
      overflowX: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    },
    user: {
      width: theme.spacing.huge
    }
  }
}

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  componentDidMount () {
    this.setCanvasLayers()
  }

  setCanvasLayers = () => {
    this.props.setLayers(Templates.templates[this.state.current].layers)
  }

  setCurrent = idx => {
    this.setState({
      ...this.state,
      current: idx
    }, this.setCanvasLayers)
  }

  next = () => {
    if (this.state.current < Templates.templates.length - 1) {
      this.setCurrent(this.state.current + 1)
    } else {
      this.setCurrent(0)
    }
  }

  prev = () => {
    if (this.state.current > 0) {
      this.setCurrent(this.state.current - 1)
    } else {
      this.setCurrent(Templates.templates.length - 1)
    }
  }

  render () {
    const { classes } = this.props
    const template = Templates.templates[this.state.current]

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.logo}>
            Sway
          </div>
          <div className={classes.templatesContainer}>
            <IconButton onClick={this.prev}>
              <ChevronLeft />
            </IconButton>
            <div className={classes.templateText}>
              {template.name}
            </div>
            <IconButton onClick={this.next}>
              <ChevronRight />
            </IconButton>
          </div>
          <div className={classes.user} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setLayers (layers) {
      dispatch(canvasActions.setLayers(layers))
    }
  }
}

const connectedNavbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default withStyles(styles)(connectedNavbar)
