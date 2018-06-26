import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class AdInventory extends React.Component {
  render() {
    return (
      <Card className="container" align="center">
        <CardTitle title="React Application" subtitle="This is the Inventory Page." />
        <CardText>Herro, you are an admin!</CardText>
      </Card>
    )
  }
};

export default AdInventory;
