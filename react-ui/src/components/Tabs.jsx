import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';

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
                {this.props.adminStatus ? <Tab style = {styles.tabs} label= 'Admin Settings' component={Link} to="/admin-settings"/> : "" }
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

const styles = theme => ({
  root: {
    marginTop: 25,
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
