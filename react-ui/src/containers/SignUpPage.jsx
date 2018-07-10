import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../components/SignUpForm.jsx';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Carousel from '../components/ImageCarousel.jsx';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';

class SignUpPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: '',
        role: 'user'
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(event) {
    event.preventDefault();

    const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const role = encodeURIComponent(this.state.user.role);
    const formData = `name=${name}&email=${email}&password=${password}&role=${role}`;

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          errors: {}
        });

        localStorage.setItem('successMessage', xhr.response.message);
       // do you need to call toggle auth?
        this.props.history.push('/login');
      }
      else {
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;
        this.setState({
          errors
        });
      }
    });
    xhr.addEventListener('error', () => {
    }, false);
   xhr.send(formData);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <div style={styles.mainDiv}>
        <Card className="container" align="center" style = {styles.introCard}>
          <CardTitle title="What's at the food bank?" />
          <CardText><strong>The one stop shop for meal planning with your local food bank's ingredients</strong></CardText>
          <Carousel />
        </Card>
        <Card style = {styles.signUpCard}>
          <SignUpForm
            onSubmit={this.processForm}
            onChange={this.changeUser}
            errors={this.state.errors}
            user={this.state.user}
          />
        </Card>
      </div>
    );
  }
}

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;

const styles = {
  mainDiv: {
    display: "flex",
    marginTop: 10,
    alignItems: "center",
    flexWrap  : "wrap",
    width: '100%',
    justifyContent: 'space-evenly'
  },
  introCard: {
    height: 500,
    width: '69%',
    marginRight: 5
  },
  signUpCard: {
    height: 500,
    textAlign : "center",
    paddingTop: 60,
    width: '30%',
    marginLeft: 6
  }
}
