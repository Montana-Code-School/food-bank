import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../components/SignUpForm.jsx';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Carousel from '../components/ImageCarousel.jsx';

class SignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    // set the initial component state
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

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const role = encodeURIComponent(this.state.user.role);
    const formData = `name=${name}&email=${email}&password=${password}&role=${role}`;
//WAS COMMENTED OUT BELOW WHILE AN AUTH ROUTE IS BEING PRODUCED
    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success
        // change the component-container state
        this.setState({
          errors: {}
        });
        // set a message
        localStorage.setItem('successMessage', xhr.response.message);
        // redirect user after sign up to login page
        this.props.history.push('/login');
      }
      else {
        // failure
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
  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }
  /**
   * Render the component.
   */
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
