import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from "@mui/material/AppBar";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LoginSignup from '../../Pages/LoginSignup';
import { useAuth } from '../../Pages/Context';
import image from "../../Util/imgs/logo1.png";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpen(true);
};

  const handleabout = () => {
    navigate("/about");
  };
  const handleSearch = () => {
    navigate("/filter");
  };
  const handlehome = () => {
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profile");
};

const handleout = () => {
  setLogout(!logout);
  if (!logout) {
      navigate("/");
    toast.success('Signed out', {
      position: 'bottom-left',
      autoClose: 1500, 
      style: {
        color: '#4CAF50',
        boxShadow: '0px 2px 4px rgba(0, 128, 0, 0.1)'
      },
    });
  }
};

  return (
    <AppBar position="static" sx={{ bgcolor: "transparent", height: "65px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={image} className="img"
            style={{
              width: '4rem' ,
              height: '3rem',
            }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="#000000"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center" style={{fontSize:'20px' }}> Home</Typography>
                <Typography textAlign="center"> AboutUs</Typography>
                <Typography textAlign="center">Search</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#F6F6F6",
              textDecoration: "none",
            }}
          >
            <img src={image}     
             style={{
              width: '4rem' ,
              height: '3rem',
            }}/>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={handlehome}
              sx={{ my: 2, color: "#000", display: "block" }}
            >
              Home
            </Button>
            <Button
             onClick={handleabout}
              sx={{ my: 2, color: "#000", display: "block" }}
            >
              About us
            </Button>
          
            <Button sx={{ my: 2, color: "white", display: "block" }}></Button>
          </Box>
          
            <>
              <Box sx={{display:'flex', alignItems:'center'}}>
              <Button
                onClick={handleSearch}
                sx={{ my: 1, color: "#000", borderLeft:'1px'}}
              >
                <SearchIcon sx={{width:'3vw', height:'5vh'}}/>
              </Button>

            {isLoggedIn ? (

            <Box>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="#000"
            >
                <AccountCircle sx={{width:'3vw', height:'7vh'}}/>
            </IconButton>

            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleout}>Log out</MenuItem>
            </Menu>
            </Box>
            ) : (
            <Box className='btnLogin1'> <LoginSignup onClick={handleOpen}/> </Box>
            )}
            </Box>
            </>
        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;