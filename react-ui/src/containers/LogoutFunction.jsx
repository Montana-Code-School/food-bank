import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';

class LogoutFunction extends React.Component {
  componentDidMount() {
    Auth.deauthenticateUser();
    console.log(this.props);
    this.props.toggleUser(null);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <p>Logging out...</p>
      </div>
    )
  }
}

LogoutFunction.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LogoutFunction;
