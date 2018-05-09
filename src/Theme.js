import { createMuiTheme } from 'material-ui/styles'

const Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#ebefe0',
      dark: '#b9bdae',
      contrastText: '#000'
    },
    secondary: {
      light: '#a4a992',
      main: '#757a64',
      dark: '#494e3a',
      contrastText: '#fff',
      contrastTextDark: '#000'
    },
    custom: {
      orange: '#c26b36',
      darkBrown: '#453615',
      darkYellow: '#b8a561'
    }
  },
  spacing: {
    half: 4,
    unit: 8,
    double: 16,
    triple: 24,
    quad: 32,
    big: 64,
    huge: 128
  },
  utils: {
    container: {
      maxWidth: 960,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
})

export default Theme
