import React from 'react'
import { withStyles } from 'material-ui/styles'

import IconButton from 'material-ui/IconButton'
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import ChevronRight from 'mdi-material-ui/ChevronRight'

import Templates from './templates/'

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

  next = () => {
    if (this.state.current < Templates.templates.length - 1) {
      this.setState({
        ...this.state,
        current: this.state.current + 1
      })
    } else {
      this.setState({
        ...this.state,
        current: 0
      })
    }
  }

  prev = () => {
    if (this.state.current > 0) {
      this.setState({
        ...this.state,
        current: this.state.current - 1
      })
    } else {
      this.setState({
        ...this.state,
        current: Templates.templates.length
      })
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

export default withStyles(styles)(Navbar)
