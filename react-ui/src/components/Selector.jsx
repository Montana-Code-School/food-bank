import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Selector extends React.Component {
  state = {

  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="foodCategory-simple">Category</InputLabel>
          <Select
            value={this.state.foodCategory}
            onChange={this.handleChange}
            inputProps={{
              name: 'foodCategory',
              id: 'foodCategory-simple',
            }}
            ref={this.props.addCategory}
          >
          <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Meat'}>Meat</MenuItem>
            <MenuItem value={'Fruit'}>Fruit</MenuItem>
            <MenuItem value={'Vegetable'}>Vegetable</MenuItem>
            <MenuItem value={'Canned'}>Canned</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

Selector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Selector);
