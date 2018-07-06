import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';
import SignUpPage from '../containers/SignUpPage';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
    )
  }
};

export default HomePage;
