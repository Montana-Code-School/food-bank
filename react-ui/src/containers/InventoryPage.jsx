import React from 'react';
import Auth from '../modules/Auth';
import AdminInventory from '../components/AdminInventory.jsx';
import Inventory from '../components/Inventory.jsx';

class InventoryPage extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
     fetch('/admin/inventory',{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'Accept' : 'application/json',
          Authorization: `bearer ${Auth.getToken()}`
        }
      })
      .then ( ( res )  => {return res.json()})
      .then (( data ) => console.log(data));
    }

  render() {
    const AdminView = () => { return this.props.user && this.props.user.role === "admin" ? (
      <AdminInventory onClick= {this.onClick}/>
      ) : (
      <Inventory/>
    )}
    return (AdminView());
  }
}

export default InventoryPage;
