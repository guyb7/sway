import { createMuiTheme } from 'material-ui/styles'
import indigo from 'material-ui/colors/indigo'
import amber from 'material-ui/colors/amber'

const Theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: amber
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
