import React, { Component } from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'
import LoginPage from './containers/LoginPage.jsx';
import LogoutFunction from './containers/LogoutFunction.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import InventoryPage from './containers/InventoryPage.jsx';
import AdInventory from './components/AdminInventory.jsx';
import Auth from './modules/Auth';
import MealPlanPage from './containers/MealPlanPage.jsx';
import Suggestions from './components/Suggestions.jsx';
import HelpPage from './components/HelpPage.jsx';
import Tabs from './components/Tabs';
import AdminPage from './containers/Adminpage.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

class Main extends Component {
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
      .then((response) => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
       return response.json();
      })
      .then((data) => {
        let currState = this.state;
        currState.user = data.user;
        if (data.user.role === 'admin') {
          currState.adminStatus = true;
        }
        this.setState(currState);
      }).catch(e => {
        console.log(`API call failed: ${e}`);
      })
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }
  render() {
    return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router>
        <div>
          <Tabs adminStatus = {this.state.adminStatus}/>
          <PropsRoute
            exact path="/"
            component={SignUpPage}
            toggleAuthenticateStatus={() => this.props.toggleAuthenticateStatus()}
          />
          <PrivateRoute path="/dashboard"
            component={DashboardPage}
            adminStatus = {this.props.adminStatus}
          />
          <PrivateRoute path="/admin-settings"
            component={AdminPage}
            adminStatus = {this.props.adminStatus}
          />
          <PrivateRoute path="/inventory"
            component={InventoryPage}
            adminStatus = {this.props.adminStatus}
          />
          <PrivateRoute path="/mealplan"
            component={MealPlanPage}
            adminStatus = {this.props.adminStatus}
          />
          <PrivateRoute path="/suggestions"
            component={Suggestions}
            adminStatus = {this.props.adminStatus}
          />
          <PrivateRoute path="/helppage"
            component={HelpPage}
            adminStatus = {this.props.adminStatus}
          />
          <PrivateRoute path="/adinventory"
            component={AdInventory}
            adminStatus = {this.props.adminStatus}
          />
          <LoggedOutRoute path="/login"
            component={LoginPage}
            toggleAuthenticateStatus={() => this.props.toggleAuthenticateStatus}
          />
          <Route path="/logout" component={LogoutFunction}/>
        </div>
      </Router>
    </MuiThemeProvider>
    );
  }
}

export default Main;
