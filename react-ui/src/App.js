import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main';
import Auth from './modules/Auth';
import Tabs from './components/Tabs';
import { BrowserRouter as Router } from 'react-router-dom';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true,
      authenticated: false,
      adminStatus: false,
      errors: {},
      userFormObj: {
        email: '',
        password: ''
      },
      user: null
    };
    this.toggleUser = this.toggleUser.bind(this);
  }

  toggleUser(newUser) {
    if(!newUser) {
      this.setState({ user: null })
    } else {
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
          currState.message = json.message;
          currState.fetching = false;
          currState.user = json.user;
          this.setState(currState);
        }).catch(e => {
          console.log(`API call failed: ${e}`);
          this.setState({
            fetching: false
          });
        })
    }
  }

  componentWillMount() {
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
           <div>
             <Tabs
               user = {this.state.user}
               authenticated= {this.state.authenticated}
               toggleAuthenticateStatus={() => this.toggleAuthenticateStatus}
               toggleUser={this.toggleUser}
             />
             <Main
               user = {this.state.user}
               toggleAuthenticateStatus={() => this.toggleAuthenticateStatus}
               toggleUser={this.toggleUser}
               errors={this.state.errors}
               userFormObj={this.state.userFormObj}
               changeUser={this.changeUser}
               user = {this.state.user}
             />
          </div>
        </Router>
      </MuiThemeProvider>
    </div>

    );
  }
}
