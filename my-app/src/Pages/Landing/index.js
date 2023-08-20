import React, {useState, useEffect}  from 'react'; 
import { Box, Typography, TextField, Button, IconButton, Tooltip} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from '../../Util/imgs/logo.png';
import Footer from '../../Components/Footer'
import CardContainer from '../../Components/CardContainer';
import '../Landing/style.css';


const Landing = ()=> {
    const [house, setHouses] = useState([]);
    const [products, setProducts] = useState([]);

    
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/doaaelzamly/mock-api/houses")
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

                    <Button variant="contained" className='btnLogin'>Sign in/ Sign up</Button>
                
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


            <Box id='search'>
                <TextField type="search" variant="outlined" placeholder="Place, Neighborhood." id='heroSearch'/>
                <Button variant="contained" className='searchBtn'> <SearchIcon/></Button>
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



  
