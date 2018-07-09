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
import AdMealPlan from './components/AdMealPlan.jsx';
import Auth from './modules/Auth';
import MealPlanPage from './containers/MealPlanPage.jsx';
import Suggestions from './components/Suggestions.jsx';
import HelpPage from './components/HelpPage.jsx';
import Tabs from './components/Tabs';
import AdminPage from './containers/Adminpage.jsx';

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

class Main extends Component {
  render() {
    return (
      <div>
        <PropsRoute exact path="/" component={SignUpPage} toggleAuthenticateStatus={() => this.props.toggleAuthenticateStatus()} />
        <PrivateRoute path="/dashboard" component={DashboardPage}/>
        <PrivateRoute path="/admin-settings" component={AdminPage}/>
        <PrivateRoute path="/inventory" component={InventoryPage}/>
        <PrivateRoute path="/mealplan" component={MealPlanPage}/>
        <PrivateRoute path="/suggestions" component={Suggestions}/>
        <PrivateRoute path="/helppage" component={HelpPage}/>
        <PrivateRoute path="/adinventory" component={AdInventory}/>
        <PrivateRoute path="/admealplan" component={AdMealPlan}/>
        <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.props.toggleAuthenticateStatus()} />
        <Route path="/logout" component={LogoutFunction}/>
      </div>
    );
  }
}

export default Main;
