import React from 'react'
import { withStyles } from 'material-ui/styles'

// import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import ChevronRight from 'mdi-material-ui/ChevronRight'

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
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.logo}>
            Sway
          </div>
          <div className={classes.templatesContainer}>
            <IconButton>
              <ChevronLeft />
            </IconButton>
            <div className={classes.templateText}>
              Template 01
            </div>
            <IconButton>
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
