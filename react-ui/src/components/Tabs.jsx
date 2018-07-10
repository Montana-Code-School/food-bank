import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Auth from '../modules/Auth';
import {Link} from 'react-router-dom';

class ScrollableTabsButtonAuto extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
      user:{},
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
        <nav className = {classes.root} style = {styles.root}>
          <AppBar position = "static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              scrollable
              scrollButtons="off"
            >
                {
                  Auth.isUserAuthenticated()
                  ? <Tab style = {styles.tabs} label="Dashboard" component = {Link} to="/dashboard"/>
                  : <Tab style = {styles.tabs} label="Home" component = {Link} to="/"/>
                }
                {
                  this.props.user && this.props.user.role === 'admin'
                  ? <Tab style = {styles.tabs} label= 'Admin Settings' component={Link} to="/admin-settings"/>
                  : ""
                }
                <Tab style = {styles.tabs}
                     user={this.props.user}
                     label="Inventory"
                     component = {Link}
                     to="/inventory"
                />
                <Tab style = {styles.tabs} label="Meal Plan" component = {Link} to="/mealplan"/>}
                <Tab style = {styles.tabs} label="Suggestions" component = {Link} to="/suggestions"/>
                <Tab style = {styles.tabs} label="Help Page" component = {Link} to="/helppage"/>
                {
                  Auth.isUserAuthenticated()
                  ? <Tab label="Log Out" component={Link} to="/logout"/>
                  : <Tab label="Log In" component={Link} to="/login"/>
                }

            </Tabs>
          </AppBar>
        </nav>
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
