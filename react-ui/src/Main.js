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
import AdminPage from './containers/Adminpage.jsx';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: {
          from: props.location
         }
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

export default class Main extends Component {

  render() {
    const { value } = this.props;
    return (
      <main>
        <PropsRoute exact path="/" component={SignUpPage} toggleAuthenticateStatus={() => this.props.toggleAuthenticateStatus()} />
        <PrivateRoute path="/dashboard" component={DashboardPage}/>
        <PrivateRoute path="/admin-settings" component={AdminPage}/>
        <PrivateRoute path="/inventory" component={InventoryPage} user={this.props.user}/>
        <PrivateRoute path="/mealplan" component={MealPlanPage}/>
        <PrivateRoute path="/suggestions" component={Suggestions}/>
        <PrivateRoute path="/helppage" component={HelpPage}/>
        <PrivateRoute path="/adinventory" component={AdInventory}/>
        <PrivateRoute path="/admealplan" component={AdMealPlan}/>
        <LoggedOutRoute path="/login"
          component={LoginPage}
          toggleAuthenticateStatus={() => this.props.toggleAuthenticateStatus()}
          toggleUser={this.props.toggleUser}
          errors={this.props.errors}
          userFormObj={this.props.userFormObj}
          changeUser={this.props.changeUser}
          loginUser={this.props.loginUser}
        />
        <LoggedOutRoute path="/signup" component={SignUpPage}/>
        <Route path="/logout"
          render={(props) =>
            <LogoutFunction
              {...props} 
              toggleUser={this.props.toggleUser}
          />}
        />
      </main>
    );
  }
}

