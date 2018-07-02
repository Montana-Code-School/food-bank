import React from 'react';
import Auth from '../modules/Auth';
import Roles from '../components/Roles.jsx'

class AdminPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "user":{}
    }
  }

  componentDidMount() {
    fetch('/api/dashboard',{
      method: 'GET',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        Authorization: `bearer ${Auth.getToken()}`
      }
    })
    .then ( ( res )  => {return res.json()})
    .then (( data ) => {
      if(data){
        this.setState({
          user: data.user
        })
      }
    })
  }

  render() {
    return(<Roles />)
  }
}

export default AdminPage;
