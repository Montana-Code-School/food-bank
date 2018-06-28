import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

function TabContainer(props) {

  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonAuto extends React.Component {

state = {
  value: 0,
};

handleChange = (event, value) => {
   this.setState({ value });
 };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const LogInTab = () => { return this.props.authenticated ? (
      <div>
        <Tab value={value} label="Log Out" component={Link} to="/logout"/>
      </div>
        ) : (
      <div>
        <Tab value={value} label="Sign Up" component={Link} to="/signup"/>
        <Tab value={value}label="Log In" component={Link} to="/login"/>
      </div>
    )}

    const HomeTab = (meh) => { return this.props.authenticated ? (
      <div>
        <Tab onChange={meh} label="Home" component = {Link} to="/dashboard"/>
      </div>
        ) : (
      <div>
        <Tab onChange={meh} label="Home" component={Link} to="/"/>
      </div>
    )}

    return (
      <div>
        <AppBar color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
              <HomeTab meh={() => this.handleChange}/>
              <Tab label="Admin Test" component ={Link} to="/test"/>
              <Tab label="Inventory" component = {Link} to="/inventory"/>
              <Tab label="Meal Plan" component = {Link} to="/mealplan"/>
              <Tab label="Suggestions" component = {Link} to="/suggestions"/>
              <Tab label="Help Page" component = {Link} to="/helppage"/>
              <Tab label="Admin Inventory" component = {Link} to="/adinventory"/>
              <Tab label="Contact Info" component = {Link} to="/contactinfo"/>

              <LogInTab />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles (styles)(ScrollableTabsButtonAuto);//was named
