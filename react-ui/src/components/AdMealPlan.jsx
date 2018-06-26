import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class AdMealPlan extends React.Component {
  render() {
    return (
      <Card className="container" align="center">
        <CardTitle title="Meal Plansss" subtitle="This is the Meal Plan Page." />
        <CardText>Herro, you are an admin!</CardText>
      </Card>
    )
  }
};

export default AdMealPlan;
