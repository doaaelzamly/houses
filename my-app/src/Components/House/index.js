import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import BdsIcon from '@mui/icons-material/Hotel';
import BathIcon from '@mui/icons-material/Bathtub';
import PlaceIcon from '@mui/icons-material/Place';
import { Box } from "@mui/system";

function MyHouses() {
  const [houses, setHouses] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState();
  const [open, setOpen] = useState(false);
  const [openalert, setOpenalert] = useState(false);
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenalert(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/doaaelzamly/mock-api2/houses"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHouses(data);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, [refresh]);

  const deleteHouse = async (houseId) => {
    try {
      const response = await fetch(
        `https://my-json-server.typicode.com/doaaelzamly/mock-api2/houses${houseId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setOpenalert(true);
      }

    
      const updatedHouses = houses.filter((house) => house.id !== houseId);
      setHouses(updatedHouses);
    } catch (error) {
      console.error("Error deleting house:", error);
      setError("Failed to delete the house");
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/doaaelzamly/mock-api2/houses"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHouses(data);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, [refresh]);

  return (
    <Box style={{textAlign:'center', padding:'30px', width:'70vw'}}>
     
     <Typography  style={{ fontWeight:'600'}}
          variant="h6"
          textAlign="center"
          paddingTop="0.5em"
          paddingBottom="0.5em"
          color="#1e1e1e"
        >
          <span style={{color:'#007bff'}}>My</span> Houses
        </Typography>

      <TableContainer component={Paper}  style={{ width:'50vw', borderRadius:'' , marginBottom:'120px', paddingTop:'20px', marginLeft:'120px' }} >
       
        <Table>
          <TableBody>
            {houses.length ? (
              houses.slice(0, 4).map((house) => (
                <>
                  <TableRow align="right" sx={{height:'13vh'}}>
                    <TableCell>
                      <img className="img" src={house.image} alt="house " style={{ height:'120px'}} />
                    </TableCell>
                    <TableCell style={{ color: "#1e1e1e", fontSize: "18px",fontWeight:'500'  }}>
                      {house.title} 
                      <Box  style={{ color: "#007bff", fontSize: "16px",fontWeight:'500', paddingTop:'8px'}}>{house.price} $ </Box>

                      <Box sx={{display:'flex', paddingTop:'8px'}}>
                        <Box  style={{ color: "#7d7d7d", fontSize: "15px",fontWeight:'400'}}>
                          <BdsIcon style={{fontSize: "16", marginLeft:'3px'}}/>
                          {house.bedroom}bd 
                        </Box>
                        <Box  style={{ color: "#7d7d7d", fontSize: "15px",fontWeight:'400'}}>
                          <BathIcon style={{fontSize: "16", marginLeft:'3px'}}/>
                          {house.bathroom}ba
                        </Box> 
                        <Box  style={{ color: "#7d7d7d", fontSize: "15px",fontWeight:'400'}}>
                          <PlaceIcon style={{fontSize: "16", marginRight:'2px', marginLeft:'3px'}}/>
                          {house.location} 
                        </Box> 
                      </Box>
                      
                      <Box style={{ color: "#7d7d7d", fontSize:"15px",fontWeight:'300',paddingTop:'8px' }}>{house.description .slice(0, 55)}  </Box>
                    </TableCell>
                
                    

                  
                    <TableCell>
                      <Button
                        style={{ color: "red" }}
                        color="primary"
                        onClick={() => setOpen(true)}
                      >
                        <DeleteIcon />
                      </Button>
                     
                    </TableCell>
                  </TableRow>
                  <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Confirm Deletion</DialogTitle>
                    <DialogContent>
                      {" "}
                      Are you sure you want to delete this house?
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setOpen(false)} color="primary">
                        Cancel
                      </Button>
                      <Button
                        onClick={() => {
                          deleteHouse(house.id);
                          setOpen(false);
                        }}
                        color="primary"
                      >
                        Delete
                      </Button>
                    </DialogActions>
                  </Dialog>
                </>
              ))
            ) : (
              <Alert severity="info">no houses added yet </Alert>
            )}
          </TableBody>
          <Snackbar open={openalert} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Deleted successfully
            </Alert>
          </Snackbar>
        </Table>
      </TableContainer>

    </Box>
  );
}
export default MyHouses;