import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import LoginForm from '../components/LoginForm.jsx';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true,
      errors: {},
      userFormObj: {
        email: '',
        password: ''
      }
    };
    this.loginUser = this.loginUser.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  loginUser(event) {
    event.preventDefault();
    const data = {
      email: this.state.userFormObj.email,
      password: this.state.userFormObj.password
    }

    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then ( res => res.json() )
    .then ( ( data ) => {
      console.log("hello");
      if(data.success) {
        this.setState({
          errors: {}
        });

        Auth.authenticateUser(data.token);
        this.props.toggleAuthenticateStatus()
        this.props.toggleUser(true)
        this.props.history.push('/dashboard')
      } else {
        const errors = data.errors ?  data.errors : {};
        errors.summary = data.message;

        this.setState({
          errors
        });
      }
    })
   }

   changeUser(event) {
     const field = event.target.name;
     const userFormObj = this.state.userFormObj;
     userFormObj[field] = event.target.value;

     this.setState({
       userFormObj
     });
   }

  render() {
    return (
      <LoginForm
        onSubmit={this.loginUser}
        onChange={this.changeUser}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        userFormObj={this.state.userFormObj}
      />
    );
  }
}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};
