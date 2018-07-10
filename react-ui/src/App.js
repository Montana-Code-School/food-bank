import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth from './modules/Auth';


// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      adminStatus: false,
      user: {}
    };
    this.toggleAuthenticateStatus = this.toggleAuthenticateStatus.bind(this);
  }

  componentDidMount() {
    this.toggleAuthenticateStatus() // looking for local token and returns true if it's there

    fetch('/api/dashboard', {
      METHOD : "GET",
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        Authorization: `bearer ${Auth.getToken()}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        let currState = this.state;
        currState.user = json.user;
        if (json.user.role === 'admin') {
          currState.adminStatus = true;
        }
        this.setState(currState);
      }).catch(e => {
        console.log(`API call failed: ${e}`);
      })
      console.log("after fetch on app", this.state);
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    console.log("app adminStatus", this.state.adminStatus);
    return (
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
           <div>
             <Main
               authenticated = {this.state.authenticated}
               adminStatus = {this.state.adminStatus}
               user = {this.state.user}
               toggleAuthenticateStatus = {this.toggleAuthenticateStatus}
             />
          </div>
        </Router>
      </MuiThemeProvider>
    </div>

    );
  }
}
