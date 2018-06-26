import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';


class TestPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {},
      role: ''
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    fetch('/admin/dashboard',{
      method: 'GET',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        Authorization: `bearer ${Auth.getToken()}`
      }
    })
    .then ( ( res )  => {
        if (res.status === 200) {
       return res.json()}})
    .then (( data ) => {
      console.log(data);
      if(data){
        this.setState({
          secretData: data.message,
          user: data.user,
          role: data.user.role
        })
      }
    })
  }
  /**
   * Render the component.
   */
  render() {
    const DisplayText = this.state.role === 'admin' ? (<p> You are an admin </p>) : (<p> You are a regular user </p>)

    return (DisplayText)
  }
}

export default TestPage;
