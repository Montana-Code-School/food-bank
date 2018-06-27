import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class AdInventory extends React.Component {
  render() {
    return (
      <Card className="container" align="center">
        <CardTitle title="Admin Inventory" subtitle="This is the Admin Inventory Page." />
        <CardText>Herro, you are an admin!</CardText>
        <div >
          <TextField
            floatingLabelText="Add"
            name="Add Inventory"
            multiLine={false}
            rows={1}
            rowsMax={1}
          />
        </div>
        <div>
          <RaisedButton onClick={this.props.onClick} type="submit" label="Change" primary />
        </div>
      </Card>
    )
  }
};

export default AdInventory;
