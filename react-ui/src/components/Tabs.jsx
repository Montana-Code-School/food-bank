import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
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
  tabs: {
    width: '12.5%',

  }
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
    return (
      <div className = {classes.root} style = {styles.root}>
        <AppBar position = "static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            scrollable
            scrollButtons="auto"
          >
              <Tab style = {styles.tabs} label="Home" component = {Link} to= {this.props.authenticated ? "/dashboard" : "/"}/>
              <Tab style = {styles.tabs} label="Inventory" component = {Link} to="/inventory"/>
              <Tab style = {styles.tabs} label="Meal Plan" component = {Link} to="/mealplan"/>
              <Tab style = {styles.tabs} label="Suggestions" component = {Link} to="/suggestions"/>
              <Tab style = {styles.tabs} label="Help Page" component = {Link} to="/helppage"/>
              <Tab style = {styles.tabs} label="Contact Info" component = {Link} to="/contactinfo"/>
              {this.props.authenticated ? "" : <Tab style = {styles.tabs} label= 'Sign Up' component={Link} to="/signup"/> }
              <Tab label={this.props.authenticated ? "Log Out" : "Log In"} component={Link} to={this.props.authenticated ? "/logout" : "/login"}/>
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
