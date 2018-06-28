import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import Roles from '../components/Roles.jsx'

class TestPage extends React.Component {

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
      console.log(data);
      if(data){
        this.setState({
          user: data.user
        })
      }
    })
  }

  render() {
    <Roles />
  }
}

export default TestPage;
