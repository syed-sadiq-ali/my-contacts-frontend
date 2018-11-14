import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class EditContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: props.contact,
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
    const { firstName, lastName, mobileNumber, email, work } = this.state.contact;

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            required
            value={firstName}
            onChange={this.handleChange}
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            value={lastName}
            onChange={this.handleChange}
          />
          <TextField
            margin="dense"
            id="mobileNumber"
            label="Mobile Number"
            type="text"
            fullWidth
            value={mobileNumber}
            onChange={this.handleChange}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={this.handleChange}
          />
          <TextField
            margin="dense"
            id="work"
            label="Organization"
            type="text"
            fullWidth
            value={work}
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => onSubmit(this.state.contact)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default EditContactModal;
