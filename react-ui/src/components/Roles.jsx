import React from 'react';
import Auth from '../modules/Auth';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import AdminStatusAlert from './AdminStatusAlert.jsx';
import DeleteStatusAlert from './DeleteStatusAlert.jsx';

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
      this.setState({users:data.users})
    })
  }

  onChange() {
    this.setState({
      email: this.userEmail.current.input.value
    })
  }

  render() {
    return (
    <div>
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
        <div style={styles.buttonDiv}>
          <AdminStatusAlert
            onClick = {this.onClick}
            email = {this.state.email}
            users = {this.state.users}
          />
          <DeleteStatusAlert
            deleteOnClick = {this.deleteOnClick}
            email = {this.state.email}
            users = {this.state.users}
          />
        </div>
      </Card>
    </div>
    )
   }
}

const styles = {
  buttonDiv: {
    flex:1,
    flexDirection: 'row'
  }
}
