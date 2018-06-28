import React from 'react';
import { Card, CardTitle} from 'material-ui/Card';
import Auth from '../modules/Auth';


class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
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
    .then(data =>{
      console.log(data)
      this.setState({items:data.items})
    })
}

  render() {
    let itemComponents = this.state.items.map((item,index) =>
        <tr key = {index} style = {styles.tableRowStyle}>
          <td style = {styles.tableRowStyle}>{item.name}</td>
          <td style = {styles.tableRowStyle}>{item.category}</td>
          <td style = {styles.tableRowStyle}>{item.quantity}</td>
          <td style = {styles.tableRowStyle}>{item.recipeUrl}</td>
        </tr>
      )

    return (
      <Card style = {styles.cardStyle} className="container" align="center">
        <CardTitle title="Food Bank Inventory" subtitle="Here you can see what we have in stock and recipe suggestions!" />
        <div style = {styles.tableDivStyle}>
          <table style = {styles.tableRowStyle}>
            <tbody>
              <tr style = {styles.tableRowStyle}>
                <th style = {styles.tableRowStyle}><strong>Name</strong></th>
                <th style = {styles.tableRowStyle}><strong>Category</strong></th>
                <th style = {styles.tableRowStyle}><strong>Quantity</strong></th>
                <th style = {styles.tableRowStyle}><strong>Recipes</strong></th>
              </tr>
            {itemComponents}
            </tbody>
          </table>
        </div>
      </Card>
    )
  }
};

export default Inventory;

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
  }
}
