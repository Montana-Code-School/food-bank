import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Selector extends React.Component {

  render() {
    let MenuItems = this.props.foodCategories.map((cat, index) =>
      <MenuItem key={`cat${index}`} value={cat}>{cat}</MenuItem>
    )
    return (
        <FormControl>
          <InputLabel htmlFor="foodCategory-simple">Category</InputLabel>
          <Select
            value={this.props.foodCategory}
            onChange={ (event) => this.props.handleChange(event) }
            inputProps={{
              name: 'foodCategory',
              id: 'foodCategory-simple'
            }}
            autoWidth = {true}
          >
          <MenuItem value="">
              <em>None</em>
          </MenuItem>
            {MenuItems}
          </Select>
        </FormControl>
    );
  }
}

Selector.propTypes = {
  classes: PropTypes.object.isRequired,
};

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

export default withStyles(styles)(Selector);
