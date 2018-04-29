import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CssBaseline from 'material-ui/CssBaseline'
import { withStyles } from 'material-ui/styles'
import Theme from './Theme'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const styles = theme => {
  return {
    root: {
      height: '100%',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    }
  }
}

class App extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <div className={classes.root}>
          <Navbar />
          <Home />
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(App)
