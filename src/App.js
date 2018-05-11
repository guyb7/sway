import React from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CssBaseline from 'material-ui/CssBaseline'
import { withStyles } from 'material-ui/styles'
import Theme from './Theme'

import store from './store'

import Editor from './components/Editor'
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
      <Provider store={store}>
        <MuiThemeProvider theme={Theme}>
          <CssBaseline />
          <div className={classes.root}>
            <Navbar />
            <Editor />
            <Footer />
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default withStyles(styles)(App)
