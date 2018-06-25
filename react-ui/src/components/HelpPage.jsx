import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';

class Help extends React.Component {
  render() {
    return (
      <Card className="container" align="center">
        <CardTitle title="Get Help" subtitle="Use Our Store" />
         <CardText>
              Asking for help is something that can be difficult to do, but getting food at our food bank store is free, simple, and confidential. By following the three easy steps below you will be on your way to filling your shopping cart with nutritious, nourishing food.
              1
              Welcome
              Asking for help can be difficult to do.

              Here at Missoula Food Bank & Community Center, we want you to feel welcome. When you arrive at the store, we will ask you to fill out a simple survey that will be used for statistical purposes. Your personal information will remain confidential.
              2
              Interview
              We are here to help

              Once we have entered your survey in our system, a trained volunteer will spend a few moments with you to explain how the store works and share information about other resources that may be available to you.
              3
              Shop & Go!
              You're on your way to nourishing food.

              Based on the number of people in your household, you are able to select food from the choices available that day. Once you have completed shopping, our volunteer grocery boxers will make sure you received the allotted amount and will box your groceries for easy transport.
         </CardText>
      </Card>
    )
  }
};

export default Help;
