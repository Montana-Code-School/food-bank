import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';
import SignUpPage from '../containers/SignUpPage';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }
  render() {
    return (
    <div>
  
    </div>

    )
  }
};

export default HomePage;
