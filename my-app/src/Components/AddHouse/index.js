import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import { locationFilter, categorFilter } from "../../Util/filterData";
import "./style.css";

function AddHouse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState();
  const [category, setCategory] = useState("");
  const [bedroom, setRooms] = useState();
  const [bathroom, setBathRooms] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [userDate, setUserDate] = useState(null);
  const navigate = useNavigate();

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleRooms = (event) => {
    setRooms(event.target.value);
  };

  const handleBathrooms = (event) => {
    setBathRooms(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleImage = (event) => {
    setImage(event.target.value);
  };


  useEffect(() => {
    if (userDate){
    fetch("https://my-json-server.typicode.com/doaaelzamly/mock-api2/houses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDate[0]),
    })
      .then((response) => response.json())
      .then((data) => {
        setOpen(true);
        navigate("/profile");
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError("An unknown error occurred.");
        }
      });
    }
  }, [userDate]);


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userDate = {
        id: "2",
        title,
        description,
        location,
        category,
        bedroom,
        bathroom,
        price,
        image,
      };

    } catch (err) {
        setOpen(true);
        navigate("/profile");
      }
    
  };
  return (
    <>
    <Typography style={{fontWeight:'600', paddingTop:'30px'}}
        variant="h6"
        textAlign="center"
        paddingTop="0.5em"
        paddingBottom="0.5em"
        color="#1E1E1E"
      >
       <span style={{color:'#007bff'}}>Add</span>  New House
    </Typography>
     <TableContainer sx={{width:'70vw', paddingTop:'20px'}} >
      <Table>
        <TableBody>
          <TableRow align="center">
            <FormControl defaultValue="" className="formlogin" required>
            <TextField
                variant="outlined"
                placeholder="Enter the url image"
                type="file"
                name="image"
                size="small"
                required
                fullWidth
                value={image}
                onChange={handleImage}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Title"
                placeholder="Enter the Title"
                variant="outlined"
                size="small"
                required
                fullWidth
                onChange={handleTitle}
                value={title}
              />
              <br />
              <TextField
                  placeholder="Choose the location"
                  className="location"
                  id="filled-select-location"
                  select
                  required
                  fullWidth
                  label="city"
                  size="small"
                  variant="outlined"
                  name="location"
                  value={location}
                  onChange={handleLocation}
                >
                  {locationFilter.map((item) => (
                    <MenuItem value={item}>{item.toLocaleLowerCase()}</MenuItem>
                  ))}
                </TextField>
              <br />
              <TextField
                  variant="outlined"
                  type="number"
                  placeholder="Enter the Price"
                  label="Price $"
                  name="price"
                  size="small"
                  required
                  fullWidth
                  onChange={handlePrice}
                  value={price}
                />
              <br />
              <TextField 
                  variant="outlined"
                  type="number"
                  placeholder="Enter the Bathrooms"
                  label="Bathrooms"
                  name="bathrooms"
                  size="small"
                  required
                  fullWidth
                  onChange={handleBathrooms}
                  value={bathroom}
                />
               <br />
               <TextField
                  variant="outlined"
                  placeholder="Enter the Room"
                  type="number"
                  label="Rooms"
                  name="rooms"
                  size="small"
                  required
                  fullWidth
                  onChange={handleRooms}
                  value={bedroom}
                />
               <br />
              < TextField
                id="outlined-textarea"
                label="Description"
                placeholder="Enter the Description"
                onChange={handleDescription}
                fullWidth
                value={description}
                multiline
                maxRows={4}
              />
              <br />
              <Button
                 onClick={() => setOpen(true)}
                  className="btnadd"
                  sx={{
                    width:'150px',
                    height:'6.5vh',
                    marginTop: "1em",
                    marginLeft:'5em',
                    marginBottom: "2.5em",
                    color: "white",
                    bgcolor: "#007bff",
                    fontSize: "18px",
                    fontWeight: "300",
                    "&:hover": {
                      backgroundColor: "#314E7E",
                      color: "white",
                    },
                  }}
                >
                  Add
                </Button>
              <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  Added successfully
                </Alert>
              </Snackbar>
            </FormControl>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
export default AddHouse;