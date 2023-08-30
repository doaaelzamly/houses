import React, { useContext, useState, useEffect } from "react";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import './style.css';

function Profile() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState();
  const [phone, setPhone] = useState();
  const [image, setImage] = useState();
  const [email, setEmail] = useState();
  const [open, setOpen] = useState(false);
  const [openalert, setOpenalert] = useState(false);
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenalert(false);
  };
  const handleUserName = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleSubmit = async () => {
    try {
      const user = { username, email, phone,image };
      const response = await fetch(
        "https://my-json-server.typicode.com/doaaelzamly/mock-api2/user",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) {
        setOpenalert(true);
      }
    } catch (err) {
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/doaaelzamly/mock-api2/user"
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {}
    })();
  }, [user]);
  return (
      <TableContainer align="center" sx={{width:'70vw', paddingTop:'20px'}}>
        <Typography style={{fontWeight:'600'}}
          variant="h6"
          textAlign="center"
          paddingTop="0.5em"
          paddingBottom="0.5em"
          color="#1E1E1E"
        >
          <span style={{color:'#007bff'}}>My</span> Profile
        </Typography>
        <div className="userAvatar"  style={{padding:'20px'}}>
          <Avatar
            className="avatar"
            sx={{ width: 120, height: 120 }}
          >{image}</Avatar>
        </div>
        <Table>
          <TableBody>
            <TableRow align="center">
              <FormControl defaultValue="" className="formlogin" required>
                <TextField
                  id="outlined"
                  label="User Name"
                  defaultValue="DoaaElzamly"
                  fullWidth
                  size="small"
                  value={username}
                  onChange={handleUserName}
                />
                <br />
                <TextField
                  id="outlined"
                  label="Email"
                  fullWidth
                  size="small"
                  defaultValue="doaaelzamly12@gmail.com"
                  value={email}
                  onChange={handleEmail}
                />
                <br />
                <TextField
                  id="outlined"
                  label="Mobile"
                  defaultValue="0595204783"
                  fullWidth
                  size="small"
                  value={phone}
                  onChange={handlePhone}
                />
                <Button
                 onClick={() => setOpen(true)}
                  className="btnadd"
                  sx={{
                    width:'100px',
                    marginTop: "2.5em",
                    marginBottom: "2.5em",
                    marginLeft:'7em',
                    height:'6.5vh',
                    color: "white",
                    bgcolor: "#007bff",
                    fontSize: "16px",
                    fontWeight: "300",
                    "&:hover": {
                      backgroundColor: "#314E7E",
                      color: "white",
                    },
                  }}
                >
                  Save
                </Button>
                <Dialog open={open} onClose={() => setOpen(false)}>
                  <DialogTitle>Confirm Updating</DialogTitle>
                  <DialogContent>
                    {" "}
                    Are you sure you want to update this personal?
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        handleSubmit();
                        setOpen(false);
                      }}
                      color="primary"
                    >
                      Update
                    </Button>
                  </DialogActions>
                </Dialog>
                <Snackbar
                  open={openalert}
                  autoHideDuration={5000}
                  onClose={handleClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    User updated successfully
                  </Alert>
                </Snackbar>
              </FormControl>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
  );
}
export default Profile;