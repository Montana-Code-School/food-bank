import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Auth from '../modules/Auth';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginBottom: 10
  },
  tabs: {
    width: '12.5%',
  }
});

class ScrollableTabsButtonAuto extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    value: 0,
    user:{},
    adminStatus: false,
    role: ''

  };
  this.handleChange = this.handleChange.bind(this)

}

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
            scrollButtons="off"

          >
              <Tab style = {styles.tabs} label="Home" component = {Link} to= {this.props.authenticated ? "/dashboard" : "/"}/>
              <Tab style = {styles.tabs} label="Inventory" component = {Link} to="/inventory"/>
              <Tab style = {styles.tabs} label="Meal Plan" component = {Link} to="/mealplan"/>}
              <Tab style = {styles.tabs} label="Suggestions" component = {Link} to="/suggestions"/>
              <Tab style = {styles.tabs} label="Help Page" component = {Link} to="/helppage"/>
              <Tab style = {styles.tabs} label="Contact Info" component = {Link} to="/contactinfo"/> }
              {this.state.adminStatus ? <Tab style = {styles.tabs} label= 'Admin Settings' component={Link} to="/admin-settings"/> : "" }
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

export default withStyles (styles)(ScrollableTabsButtonAuto);
