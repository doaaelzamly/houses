import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/material';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from '@mui/icons-material/Info';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function Favorite() {
  const navigate = useNavigate();
  
  const handleInfoIcon = () => {
    navigate("DetailsHouse");
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#DFDFDF",
      color: theme.palette.common.white,
      fontSize: 20,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      color: "#1E1E1E",
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const [houses, setHouses] = useState([]);
  const [errorMsg, setError] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = useState(false);
  const [openalert, setOpenalert] = useState(false);
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenalert(false);
  };
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
      <Typography style={{fontWeight:'600'}}
        variant="h6"
        textAlign="center"
        paddingTop="0.5em"
        paddingBottom="0.5em"
        color="#1E1E1E"
      >
       My Favorites House  <span style={{color:'#007bff'}}>(4 Items) </span>
      </Typography>
    <TableContainer component={Paper} style={{ borderRadius:'', marginBottom:'100px', paddingTop:'20px'}}  >
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" style= {{color:'#1E1E1E' , fontSize:'18px' , fontWeight:'600'}}>Title</StyledTableCell>
            <StyledTableCell align="center" style= {{color:'#1E1E1E' , fontSize:'18px' , fontWeight:'600'}}>Price</StyledTableCell>
            <StyledTableCell align="center" style= {{color:'#1E1E1E' , fontSize:'18px' , fontWeight:'600'}}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {houses.slice(0, 4).map((house, idx) => (
            <React.Fragment key={idx}>
              <StyledTableRow>
                <StyledTableCell align="center" 
                  style= {{
                      backgroundColor:'white',
                      maxWidth: "100px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      }}>
                        {house.title}
                </StyledTableCell>
                <StyledTableCell align="center"  style= {{backgroundColor:'white'}}>{house.price}</StyledTableCell>
                <StyledTableCell align="center"  style= {{backgroundColor:'white'}}>
                  <Button
                    style={{ color: "red" }}
                    color="primary"
                    onClick={() => setOpen(true)}
                  >
                    <DeleteIcon />
                  </Button>
                  <Button style={{ marginTop:'8px' }} >
                  <Link
                   to={`/details/${house.id}`}
                    style={{ color: "#007bff" }}
                    color="primary"
                  >
                    <InfoIcon  />
                  </Link>
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
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
            </React.Fragment>
          ))}
          <Snackbar open={openalert} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Deleted successfully
            </Alert>
          </Snackbar>
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
export default Favorite;