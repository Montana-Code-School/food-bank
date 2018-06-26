import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main';
import { BrowserRouter as Router } from 'react-router-dom';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
           <div>
             <Main />
          </div>
        </Router>
      </MuiThemeProvider>
    </div>

    );
  }
}
