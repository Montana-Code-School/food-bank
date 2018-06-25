import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';

class Suggestions extends React.Component {
  render() {
    return (
      <Card className="container" align="center">
        <CardTitle title="React Application" subtitle="This is the suggestions Page." />
      </Card>
    )
  }
};

export default Suggestions;
