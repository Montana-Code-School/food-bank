import React from 'react';
import Auth from '../modules/Auth';
import AdminInventory from '../components/AdminInventory.jsx';
import Inventory from '../components/Inventory.jsx';



class InventoryPage extends React.Component {

  /**
   * Class constructor.
   */
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
      console.log(data);
      if(data){
        this.setState({
          secretData: data.message,
          user: data.user
        })
      }
    })
  }

render() {
  const AdminView = () => { return this.state.user.role === "admin" ? (
    <div>
       <AdminInventory/>
    </div>
      ) : (
    <div>
       <Inventory/>
    </div>
  )}
  return (AdminView());
}

}

export default InventoryPage;
