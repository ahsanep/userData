import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios'


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [updateemail, setUpdateEmail] = React.useState()

  // const [data, setData] = React.useState([])


  // React.useEffect(() => {
  //     getDetails()
  // }, [])

  // async function getDetails() {

  //     try {
  //         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  //         console.log("Datat", response.data);
  //         const responseData = response.data
  //         console.log(responseData)
  //         setData(responseData)

  //     } catch (error) {
  //         alert("Something went wrong....")
  //         console.error(error);

  //     }
  // }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUpdateEmail("aq@gmail.com")
  };

  return (
    <div>

      <Button variant="outlined" onClick={handleClickOpen} className="details">
        Details
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Detail</DialogTitle>
        <DialogContent>
          <p>Ahsan</p>
          <p>Adrress</p>
          <p>Adrress</p>
          <p>Adrress</p>
          <p>Adrress</p>

     
     
          <p>Ahsan</p>
          <p>Adrress</p>
          <p>Adrress</p>
          <p>Adrress</p>
          <p>Adrress</p>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            placeholder='Update your Email'

          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
