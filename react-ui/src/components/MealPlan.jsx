import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

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
