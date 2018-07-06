import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Carousel from '../components/ImageCarousel.jsx';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';

const Dashboard = ({ secretData, user }) => (
  <Card className="container" align="center" style = {styles.container}>
    <CardTitle
      title="Dashboard"
    />
    <CardText style={{ fontSize: '16px', color: 'green' }}>
        Welcome <strong>{user.name}</strong>!
      <br />
    </CardText>
    <div style = {styles.buttons} >
      <Button component = {Link} color="secondary" to="/inventory">Inventory</Button>
      <Button component = {Link} color="secondary" to="/mealplan">Recipes</Button>
      <Button component = {Link} color="secondary" to="/helppage">Help Page</Button>
      <Button component = {Link} color="secondary" to="/suggestions">Suggestions</Button>
    </div>
    <Carousel />
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;

const styles = {
  container: {
    padding: 20
  },
  buttons :{
    margin: 5
  }
}
