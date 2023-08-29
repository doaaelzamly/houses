import React, {useState, useEffect }  from 'react'; 
import { Link , useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, IconButton, Tooltip} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from '../../Util/imgs/logo.png';
import Footer from '../../Components/Footer'
import CardContainer from '../../Components/CardContainer';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Login from '../../Components/Login';
import LoginSignup from '../LoginSignup';
import { useAuth } from '../Context';
import '../Landing/style.css';


const Landing = ()=> {
    const [house, setHouses] = useState([]);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handelfilter = () => {
        navigate('/filter')
    }

    const handleabout = () => {
        navigate("/about");
    };

    const handlehome = () => {
        navigate("#");
    };

    
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/sohaalakhras/mockread-api/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const filteredProducts = products.filter(product => product.price < 900);


    return <>
    <Box className ='heroContainer'>
        {/* NavBar */}
        <Box>
            <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }}>
                                <img src={logo} alt='logo' className='logo'/>
                            </IconButton>
                            </Tooltip>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        {isLoggedIn ? (

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
                                sx={{ my: 2, color: "#000", display: "block" }}>
                                Home
                                </Button>
                                <Button
                                onClick={handleabout}
                                sx={{ my: 2, color: "#000", display: "block" }}
                                >
                                About us
                                </Button>

                                <Button sx={{ my: 2, color: "white", display: "block" }}></Button>

                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="#000"
                                >
                                    <AccountCircle />
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
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>Log out</MenuItem>
                                </Menu>
                                </Box>
                        ) : (
                        <Box className='btnLogin1'> <LoginSignup onClick={handleOpen}/> </Box>
                        )}
                    
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
        {/* Hero */}
        <Box className ='heroContent'>
            <Typography variant="h1" 
            sx={{ 
                fontSize: '2.8rem', 
                marginBottom: '20px', 
                fontWeight:'bold', 
                color: '#ffffff' }}>
            Buy/Rent Dream Space
            </Typography>

            <Typography variant="h3" 
            sx={{ 
                fontSize: '1.12rem', 
                marginBottom: '30px', 
                fontWeight:'bold',
                color: '#ffffff' }}>
            Classy Private Space in Gaza
            </Typography>


            <Box id='searchBox'>
                <TextField type="search" variant="outlined" placeholder="Place, Neighborhood." id='heroSearch' onClick={handelfilter}/>
                <Link to={`/filter`} className="search">
                    <SearchIcon/>
                </Link> 
            </Box>
        </Box>
    </Box>

    {/* Card New List */}
    <Box className="cardContainer">
        <Box className="cardContainerTitle">
            <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"600", textAlign:'center'}}>
                Newly listed homes on Homely
            </Typography>
            <Typography gutterBottom variant="body1" style={{textAlign:'center'}}>
                Take a deep dive and browse homes for sale, original neighborhood photos, resident <br/>
                reviews and local insights to find what is right for you.
            </Typography>
        </Box>

        <Box className="card">
            
            {/* {house && house.length > 0 ? (
                house.slice(0,4).map((house)=>(
                    <CardContainer houses={house}/>
                ))
            ):(
                <p>Loading...</p>
            )} */}
            <CardContainer houses={house}/>
        </Box>  

    </Box>

    {/* Best Seller */}
    <Box className="cardContainer">
        <Box className="cardContainerTitle">
            <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"600", textAlign:'center'}}>
                Best Seller on Homely
            </Typography>
            <Typography gutterBottom variant="body1" style={{textAlign:'center'}}>
                Take a deep dive and browse homes for sale and rent and get discounts
            </Typography>
        </Box>
        <Box className="card">
            <CardContainer houses={filteredProducts}/>
        </Box>  
    </Box>

    {/* Footer */}
    <Footer/>
        
    </>
}

export default Landing



  
