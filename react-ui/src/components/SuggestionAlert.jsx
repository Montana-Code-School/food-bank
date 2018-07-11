import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Auth from '../modules/Auth';

class SuggestionAlert extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.props.suggestionCall()

    this.setState({ open: true });

    this.props.suggestionReset()
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          style = {styles.button}
          onClick={this.handleClickOpen}>Submit
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description">
                Thank you for your suggestion.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              style = {styles.button}
              onClick={this.handleClose}
              autoFocus>
              Okay!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SuggestionAlert;

const styles = {
  button: {
    margin: 10,
    border: 1,
    borderColor: 'black'
  }
}
