import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Auth from '../modules/Auth';
import Selector from './Selector.jsx'
import Tabs from '../components/Tabs';

class AdInventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      foodCategory: '',
      foodCategories: ['Meat', 'Fruit', 'Vegetable', 'Canned'],
      name: ''
    }

    this.addName = React.createRef();
    this.addCategory = React.createRef();
    this.addQuantity = React.createRef();
    this.createItem = this.createItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  createItem() {
    const value = {
      name: this.addName.current.input.value,
      category: this.state.foodCategory,
      quantity:this.addQuantity.current.input.value,
    }
    fetch('/admin/inventory', {
       method: 'POST',
       headers: {
         'Content-Type' : 'application/json',
         'Accept' : 'application/json',
         Authorization: `bearer ${Auth.getToken()}`
       },
       body:JSON.stringify(value)
     })
     .then ( res   => res.json())
     .then ( data  => this.setState({items:data.items}))
  }

  editItem(evt) {
    let searchUrl='/admin/inventory/' + evt.currentTarget.dataset.id
    const value = {
      name: this.addName.current.input.value,
      category: this.state.foodCategory,
      quantity: this.addQuantity.current.input.value,
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
     .then ( data  => this.setState({items:data.items}))
   }

  deleteItem(evt) {
    let deleteUrl='/admin/inventory/' + evt.currentTarget.dataset.id
      fetch( deleteUrl, { method: 'DELETE' })
        .then( res  => res.json() )
        .then( data => this.setState({items:data.items}));
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
  .then((res) => {
    return res.json()})
  .then(data => this.setState({items:data.items}))
}

render() {
  let itemComponents = this.state.items.map((item,index) =>
      <tr key={`row${index}`} style = {styles.tableRowStyle}>
        <td style = {styles.tableRowStyle}>{item.name}</td>
        <td style = {styles.tableRowStyle}>{item.category}</td>
        <td style = {styles.tableRowStyle}>{item.quantity}</td>
        <td style = {styles.tableRowStyle}>
          <RaisedButton
            onClick={this.editItem}
            type="edit"
            label="Edit"
            data-id={item._id}
            secondary />
          </td>
        <td style = {styles.tableRowStyle}>
          <RaisedButton
            onClick={this.deleteItem}
            type="delete"
            label="Delete"
            data-id={item._id}
            primary />
          </td>
      </tr>
    )
    return (
    <div>
      <Card style = {styles.cardStyle} className="container" align="center">
        <CardTitle title="Inventory" subtitle="Maintain your Inventory" style={styles.titleStyle}/>
        <form style = {styles.inputDiv}>
            <div>
              <TextField
                floatingLabelText="Item Name"
                name="Item Name"
                multiLine={false}
                rows={1}
                rowsMax={1}
                ref = {this.addName}
                style = {styles.inputStyle}
              />
              <Selector
                name={this.state.name}
                foodCategory={this.state.foodCategory}
                foodCategories={this.state.foodCategories}
                handleChange={this.handleChange}
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
                style = {styles.inputStyle}
              />
            </div>
          </form>
        <div>
          <RaisedButton onClick={this.createItem} type="submit" label="Submit" primary />
        </div>
        <div style = {styles.tableDivStyle}>
          <table style = {styles.tableRowStyle}>
            <tbody>
              <tr style = {styles.tableRowStyle}>
                <th style = {styles.tableRowStyle}><strong>Name</strong></th>
                <th style = {styles.tableRowStyle}><strong>Category</strong></th>
                <th style = {styles.tableRowStyle}><strong>Quantity</strong></th>
                <th style = {styles.tableRowStyle}><strong>Edit</strong></th>
                <th style = {styles.tableRowStyle}><strong>Delete</strong></th>
              </tr>
              {itemComponents}
          </tbody>
         </table>
        </div>
      </Card>
    </div>
    )
  }
};

export default AdInventory;

const styles= {
  tableStyle: {
    margin: 15,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  tableRowStyle: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  tableDivStyle: {
    margin: 15,
    width: '100%',
    marginBottom: 15
  },
  cardStyle:{
    padding: 10
  },
  inputDiv: {
    flex:1,
    flexDirection: 'row'
  },
  inputStyle:{
    margin: 10
  },
  titleStyle: {
    marginBottom:-30
  }
}
