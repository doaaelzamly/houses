import React, {useState, useEffect}  from 'react'; 
import { Box, Typography, TextField, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import { Cards} from '../../Components';
import CardContainer from '../../Components/CardContainer';


import '../Landing/style.css';


const Landing = ()=> {
    const [house, setHouses] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/doaaelzamly/mock-api/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


    return <>
    <Box className ='heroContainer'>
        <NavBar/>
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

            <Cards/>  
            
        </Box>

        <Footer/>
        
    </>
}

export default Landing



  
