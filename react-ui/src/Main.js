import React, { Component } from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import LogoutFunction from './containers/LogoutFunction.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import InventoryPage from './containers/InventoryPage.jsx';
import TestPage from './containers/TestPage.jsx';
import AdInventory from './components/AdminInventory.jsx';
import AdMealPlan from './components/AdMealPlan.jsx';
import Auth from './modules/Auth';
import MealPlan from './components/MealPlan.jsx';
import Suggestions from './components/Suggestions.jsx';
import HelpPage from './components/HelpPage.jsx';
import ContactInfo from './components/ContactInfo.jsx';
import Tabs from './components/Tabs';


// remove tap delay, essential for MaterialUI to work properly


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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true,
      authenticated: false
    };
  }

  componentDidMount() {
    this.toggleAuthenticateStatus()
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
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        console.log(`API call failed: ${e}`);
        this.setState({
          fetching: false
        });
      })
  }
  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
        <div>
          <div>
            <Tabs authenticated= {this.state.authenticated}/>
          </div>
        <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
        <PrivateRoute path="/dashboard" component={DashboardPage}/>
        <PrivateRoute path="/inventory" component={InventoryPage}/>
        <PrivateRoute path="/mealplan" component={MealPlan}/>
        <PrivateRoute path="/suggestions" component={Suggestions}/>
        <PrivateRoute path="/helppage" component={HelpPage}/>
        <PrivateRoute path="/contactinfo" component={ContactInfo}/>
        <PrivateRoute path="/test" component={TestPage}/>
        <PrivateRoute path="/adinventory" component={AdInventory}/>
        <PrivateRoute path="/admealplan" component={AdMealPlan}/>
        <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
        <LoggedOutRoute path="/signup" component={SignUpPage}/>
        <Route path="/logout" component={LogoutFunction}/>
      </div>
    );
  }
}

export default App;
