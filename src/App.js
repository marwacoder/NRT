import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router, Redirect,  } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import Navbar from './Layout/Navbar';

import {Dashboard, Flight, Train, Profile, Reports} from './Layout/Routes/Routes'
import { deepOrange, grey, indigo, amber, } from '@material-ui/core/colors';

import Muli from './fonts/Muli-Regular.ttf';





export const history = createBrowserHistory();




const muli = {
  fontFamily: 'Muli',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Muli'),
    local('Muli-Regular'),
    url(${Muli}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
const App = () => {
  const [darkState, setDarkState] = React.useState(false);
  const darkTheme = darkState ? "dark" : "light";
  const primaryColor = darkState ? grey[900] : indigo[900];
  const secondaryColor = darkState ? deepOrange[900] : amber[900];
  const [route, setRoute] = React.useState(false);
  

  let theme = createMuiTheme({
    typography: {
      
      fontFamily: 'Muli, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [muli],
      },
    },
  },
    transitions: {
      easing: {

      },
      duration: {
        enteringScreen: 225
      }
    },
    palette: {
      type: darkTheme,
      primary: {
        main: primaryColor
      },
      secondary: {
        main: secondaryColor,
        contrastText: '#fff'
      }

    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    }
  });

  theme = responsiveFontSizes(theme);

  const handleThemeChange = () => {
    setDarkState(prev=> !prev);
  }
  const handleMotion = () => {
    setRoute((prev) => !prev)
  }
  return (
    <>
      
    <MuiThemeProvider theme={theme}>
      
        <Router history={history}>
        <Navbar history={history} darkState={darkState} handleMotion={handleMotion} handleThemeChange={handleThemeChange} />
        
        <Switch >
          <Redirect
        exact
        from="/"
        to="/dashboard"
            />
            
          <Route exact path="/dashboard" name="Dashboard" render={props => <Dashboard {...props}/>}/>
          <Route  path='/train' name="Train" render={props => <Train darkState={darkState} {...props} />} />
            <Route path='/flight' name="Flight" render={props => <Flight {...props} />} />
            <Route path='/profile' name="Profile" render={props => <Profile {...props} />} />
            <Route path='/reports' name="Reports" render={props => <Reports {...props} />} />
            
          </Switch>
        
        </Router>
      </MuiThemeProvider>
   </>
  );
}

export default App;
