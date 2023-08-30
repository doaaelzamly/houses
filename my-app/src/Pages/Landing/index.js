import React, {useState, useEffect }  from 'react'; 
import { Link , useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import LoginSignup from '../LoginSignup';
import { useAuth } from '../Context';
import '../Landing/style.css';


const Landing = ()=> {
    const [house, setHouses] = useState([]);
    const [products, setProducts] = useState([]);
    const [bestHouse, setBestHouse] = useState([]);
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [logout, setLogout] = useState(false);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
      };

    const handelfilter = () => {
        navigate('/filter')
    }


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
    
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/doaaelzamly/mock-api2/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
        setProducts(data);
        const bestSlice = data.slice(0,3);
        setBestHouse(bestSlice);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const filteredProducts = products.filter(product => product.price < 900).slice(0,4);

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

                                <Box >
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="#000"
                                >
                                    <AccountCircle sx={{width:'3vw', height:'6vh', color:'#ffffff'}}/>
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
            <Typography gutterBottom variant="body2" style={{textAlign:'center'}}>
                Take a deep dive and browse homes for sale, original neighborhood photos, resident <br/>
                reviews and local insights to find what is right for you.
            </Typography>
        </Box>
<br/>
        <Box className="card">
            <CardContainer houses={bestHouse}/>
        </Box>  

    </Box>

    {/* Best Seller */}
    <Box className="cardContainer">
        <Box className="cardContainerTitle">
            <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"600", textAlign:'center'}}>
                Best Seller on Homely
            </Typography>
            <Typography gutterBottom variant="body2" style={{textAlign:'center'}}>
                Take a deep dive and browse homes for sale and rent and get discounts
            </Typography>
        </Box>
        <br/>
        <Box className="card">
            <CardContainer houses={filteredProducts}/>
        </Box>  
    </Box>

    {/* Footer */}
    <Footer/>
        
    </>
}

export default Landing



  
