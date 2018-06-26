import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class ContactInfo extends React.Component {
  render() {
    return (
      <Card className="container" align="center">
        <CardTitle title="React Application" subtitle="This is the ContactInfo Page." />
      </Card>
    )
  }
};

export default ContactInfo;
