import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Auth from '../modules/Auth';

class AdminStatusAlert extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });

    let foundEmail = this.props.users.filter((element) => {
      if (element.email === this.props.email) {
        return element
      } else {
        return false;
      }
    })

    if (foundEmail.length === 1) {
      let searchUrl='/admin/user-collect/' + foundEmail[0]._id
      const value = {
        role: "admin"
      }

      fetch(searchUrl, {
         method: 'PUT',
         headers: {
           'Content-Type' : 'application/json',
           'Accept' : 'application/json',
           Authorization: `bearer ${Auth.getToken()}`
         },
         body:JSON.stringify(value)
      })
       .then ( res   => res.json())
       .then ( data  => console.log(data))
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="contained" style = {{margin: 3}} color="primary" onClick={this.handleClickOpen}>Make admin</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This user now has adminstrative access.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" style = {{margin: 3}} color="primary" onClick={this.handleClose} color="primary" autoFocus>
              Okay!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AdminStatusAlert;
