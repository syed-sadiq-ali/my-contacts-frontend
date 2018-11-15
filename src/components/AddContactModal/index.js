import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddContactModal extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    this.setState(
      {
        contact: {
          ...this.state.contact,
          [id]: value,
        }
      }
    );
  }

  render() {
    const { open, onClose, onSubmit } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title">New Contact</DialogTitle>
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
            onChange={this.handleChange}
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            placeholder="Ali"
            onChange={this.handleChange}
            required
          />
          <TextField
            margin="dense"
            id="mobileNumber"
            label="Mobile Number"
            type="number"
            fullWidth
            placeholder="03451234567"
            onChange={this.handleChange}
            required
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            placeholder="sadiq.ali@tenpearls.com"
            onChange={this.handleChange}
          />
          <TextField
            margin="dense"
            id="work"
            label="Organization"
            type="text"
            fullWidth
            placeholder="10Pearls"
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => onSubmit(this.state.contact)} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AddContactModal;
