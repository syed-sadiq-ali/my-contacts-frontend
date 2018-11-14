import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddContactFormModal extends React.Component {
  render() {
    const { show, onClose } = this.props;
    return (
      <Dialog
        open={show}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a contact, please enter the following information.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            required
            placeholder="Sadiq"
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            placeholder="Ali"
          />
          <TextField
            margin="dense"
            id="mobileNumber"
            label="Mobile Number"
            type="text"
            fullWidth
            placeholder="0345-1234567"
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            placeholder="sadiq.ali@tenpearls.com"
          />
          <TextField
            margin="dense"
            id="work"
            label="Organization"
            type="text"
            fullWidth
            placeholder="10Pearls"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AddContactFormModal;
