import React from 'react'
import { withStyles } from 'material-ui/styles'

// import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import ChevronRight from 'mdi-material-ui/ChevronRight'

import SvgIcon from 'material-ui/SvgIcon'
import AccountSvg from 'mdi-svg/svg/account.svg'

const styles = theme => {
  return {
    root: {
      ...theme.utils.container,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: theme.spacing.big,
      backgroundColor: theme.palette.primary.dark
    },
    logo: {
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
    user: {}
  }
}

class Navbar extends React.Component {
  render () {
    console.log(<AccountSvg/>)
    const { classes } = this.props
    return (
      <div className={classes.root}>
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
        <div className={classes.user}>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)
