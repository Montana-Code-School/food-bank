import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';

class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {}
    };
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
          user: data.user,
        })
      }
    })
 }

  render() {
    return (
      <div>
        <Dashboard secretData={this.state.secretData} user={this.state.user} />
      </div>
    );
  }
}

export default DashboardPage;
