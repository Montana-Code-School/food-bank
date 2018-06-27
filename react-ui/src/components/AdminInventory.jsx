import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Auth from '../modules/Auth';

class AdInventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }

    this.addName = React.createRef();
    this.addCategory = React.createRef();
    this.addQuantity = React.createRef();
    this.submitForm = this.submitForm.bind(this);
    this.editItem = this.editItem.bind(this);

  }

  submitForm() {
    const value = {
      name: this.addName.current.input.value,
      category: this.addCategory.current.input.value,
      quantity: parseInt(this.addQuantity.current.input.value, 10)
    }
    console.log(value);
    fetch('/admin/inventory', {
       method: 'POST',
       headers: {
         'Content-Type' : 'application/json',
         'Accept' : 'application/json',
         Authorization: `bearer ${Auth.getToken()}`
       },
       body:JSON.stringify(value)
     })
     .then ( ( res )  => {return res.json()})
     .then (( data ) => {console.log(data)})
  }

  editItem(evt) {
    let searchUrl='/admin/inventory/' + evt.target.dataset.id
    const value = {
      name: this.addName.current.input.value,
      category: this.addCategory.current.input.value,
      quantity: parseInt(this.addQuantity.current.input.value, 10)
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

  deleteItem(evt) {
    let deleteUrl='/admin/inventory/' + evt.target.dataset.id
      fetch( deleteUrl, { method: 'DELETE' })
        .then( ( res ) => {return res.json()})
        .then( data => console.log(data));
   }
componentDidMount() {
  fetch('/admin/inventory', {
  method:'GET',
  headers: {
         'Accept' : 'application/json',
         'Content-Type' : 'application/json',
         Authorization: `bearer ${Auth.getToken()}`
       }
   })
  .then(res => res.json())
  .then(data => this.setState({items:data.items}))
}

  render() {
    let itemComponents = this.state.items.map((item,index) =>
        <tr>
          <td>{item.name}</td>
          <td>{item.category}</td>
          <td>{item.quantity}</td>
          <td><RaisedButton onClick={this.editItem} type="edit" label="Edit" data-id={item._id} secondary /></td>
          <td><RaisedButton onClick={this.deleteItem} type="delete" label="Delete" data-id={item._id} primary /></td>
        </tr>
    )
    return (
      <Card className="container" align="center">
        <CardTitle title="Admin Inventory" subtitle="This is the Admin Inventory Page." />
        <CardText>Herro, you are an admin!</CardText>
        <div >
            <div >
            <TextField
              floatingLabelText="Item name"
              name="Item name"
              multiLine={false}
              rows={1}
              rowsMax={1}
              ref = {this.addName}
            />
            </div>
            <div >
            <TextField
              floatingLabelText="Category i.e. veggies, fruits, meats"
              name="Category"
              multiLine={false}
              rows={1}
              rowsMax={1}
              ref = {this.addCategory}
            />
            </div>
            <div>
            <TextField
              floatingLabelText="Quantity"
              name="Quantity"
              multiLine={false}
              rows={1}
              rowsMax={1}
              ref = {this.addQuantity}
            />
            </div>
        </div>
        <div>
          <RaisedButton onClick={this.submitForm} type="submit" label="Submit" primary />
        </div>
        <table style = {styles.tableStyle}>
          <tr>
            <th><strong>Name</strong></th>
            <th><strong>Category</strong></th>
            <th><strong>Quantity</strong></th>
          </tr>
          {itemComponents}
        </table>
      </Card>
    )
  }
};

export default AdInventory;

const styles= {
  tableStyle: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid'
  }
}
