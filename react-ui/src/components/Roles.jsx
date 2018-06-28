import React from 'react';
import Auth from '../modules/Auth';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Roles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      email: '',
      selectedUser:{}
    }
    this.userEmail = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
}

componentDidMount() {
  fetch('/admin/user-collect', {
  method:'GET',
  headers: {
         'Accept' : 'application/json',
         'Content-Type' : 'application/json',
         Authorization: `bearer ${Auth.getToken()}`
       }
   })
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    this.setState({users:data.users})
  })
}

onChange() {
  this.setState({
    email: this.userEmail.current.input.value
  })
  console.log(this.state.email);
}

onClick() {
  let foundEmail = this.state.users.filter((element) => {
    if (element.email === this.state.email) {
      return element
    }
  })

  if (foundEmail.length === 1) {
    let searchUrl='/admin/user-collect/' + foundEmail[0]._id

    const value = {
      role: "admin"
    }

    fetch(searchUrl, {
       method: 'PUT',
       headers: {
         'Content-Type' : 'application/json',
         'Accept' : 'application/json',
         Authorization: `bearer ${Auth.getToken()}`
       },
       body:JSON.stringify(value)
     })
     .then ( res   => res.json())
     .then ( data  => console.log(data))
  }
}

render() {
  return (
    <Card className="container" align="center">
        <h2 className="card-heading">Add admin</h2>
        <div className="field-line">
          <TextField
            floatingLabelText="Enter the users email"
            name="Add admin"
            ref = {this.userEmail}
            onChange = {this.onChange}
          />
        </div>
    <div className="button-line">
      <RaisedButton type="userEmail" label="user email" primary onClick={this.onClick} />
    </div>
  </Card>
  )
}
}
