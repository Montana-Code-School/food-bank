import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';

class ScrollableTabsButtonAuto extends React.Component {

    render() {
      console.log("tabs adminstatus", this.props.adminStatus)
      const { classes } = this.props;

<<<<<<< HEAD
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
              <Tab style = {styles.tabs} label="AdInventory" component = {Link} to="/inventory"/>
              <Tab style = {styles.tabs} label="Meal Plan" component = {Link} to="/mealplan"/>}
=======
      const AdminView = (() =>  {return this.props.adminStatus ? (
        <div className = {classes.root} style = {styles.root}>
          <AppBar position = "static" color="default">
            <Tabs
              value={this.props.value}
              onChange={() => this.props.handleChange}
              indicatorColor="primary"
              scrollable
              scrollButtons="off"
            >
              <Tab style = {styles.tabs} label="Home" component = {Link} to= "/dashboard"/>
              <Tab style = {styles.tabs} label="Inventory" component = {Link} to="/adinventory"/>
              <Tab style = {styles.tabs} label="Meal Plan" component = {Link} to="/mealplan"/>
>>>>>>> 3c4cd3ad5092b4367f04ebff333b4aa4d4cea323
              <Tab style = {styles.tabs} label="Suggestions" component = {Link} to="/suggestions"/>
              <Tab style = {styles.tabs} label="Help Page" component = {Link} to="/helppage"/>
              <Tab style = {styles.tabs} label= 'Admin Settings' component={Link} to="/admin-settings"/>
              <Tab
                label="Log Out" component={Link} to="/logout"
              />
            </Tabs>
          </AppBar>
        </div>
          ) : (
            <div className = {classes.root} style = {styles.root}>
              <AppBar position = "static" color="default">
                <Tabs
                  value={this.props.value}
                  onChange={() => this.props.handleChange}
                  indicatorColor="primary"
                  scrollable
                  scrollButtons="off"
                >
                  <Tab style = {styles.tabs} label="Home" component = {Link} to= "/dashboard"/>
                  <Tab style = {styles.tabs} label="Inventory" component = {Link} to="/inventory"/>
                  <Tab style = {styles.tabs} label="Meal Plan" component = {Link} to="/mealplan"/>
                  <Tab style = {styles.tabs} label="Suggestions" component = {Link} to="/suggestions"/>
                  <Tab style = {styles.tabs} label="Help Page" component = {Link} to="/helppage"/>
                  <Tab
                    label="Log Out" component={Link} to="/logout"
                  />
                </Tabs>
              </AppBar>
            </div>
  )})

  return (
    AdminView()
    );
  }
}

  ScrollableTabsButtonAuto.propTypes = {
    classes: PropTypes.object.isRequired,
};

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

export default withStyles (styles)(ScrollableTabsButtonAuto);
