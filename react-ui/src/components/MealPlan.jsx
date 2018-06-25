import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';

class MealPlan extends React.Component {
  render() {
    return (
      <Card className="container" align="center">
        <CardTitle title="React Application" subtitle="This is the Mael Plan Page." />
      </Card>
    )
  }
};

export default MealPlan;
