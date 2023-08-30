import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, IconButton, Tooltip, Grid} from '@mui/material';
import InputLabel from "@mui/material/InputLabel";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/SearchSharp";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CardContainer from '../../Components/CardContainer';
import { locationFilter, priceFilter, bathroomFilter, bedroomFilter } from "../../Util/filterData";
import Layout from '../Layout';
import "./style.css";

function SearchPage() {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [location, setLocation] = useState();
  const [bedrooms, setBedrooms] = useState(0);
  const [bathdrooms, setBathdrooms] = useState(0);
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const navigate = useNavigate();
 

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
  };

  const handleBathdroomsChange = (event) => {
    setBathdrooms(event.target.value);
  };
  const handlePriceRangeChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategroy = (event) => {
    setCategory(event.target.value);
  };



  useEffect(() => {
    fetch("https://my-json-server.typicode.com/doaaelzamly/mock-api2/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const handleSearch = (event) => {
    event.preventDefault();
    let filterarray = houses
    .filter((houses)=>(location ? houses.location === location : true))
    .filter((houses)=>(bedrooms ? houses.bedroom === parseInt(bedrooms): true))
    .filter((houses)=>(bathdrooms ? houses.bathroom === parseInt(bathdrooms): true))
    .filter((houses)=>(price ? houses.price === parseInt(price): true))
    setFilteredHouses(filterarray);
  };
 

  return (
  <Layout>
       <Container maxWidth="xl" style={{padding:'30px', marginBottom:'280px'}}>
        <Box className='form'>
           <form id='searchBox'>
                <TextField type="search" variant="outlined" placeholder="Place, Neighborhood." id='heroSearch' onChange={handleCategroy}/>
                <Button sx={{minWidth: '4vw', bgcolor: '#007bff', color:'#fff', height:'7.2vh', "&:hover": {
                        backgroundColor: "#007bff"}}} onClick={handleSearch}>
                    <SearchIcon/>
                </Button> 
            </form>
            <Box className='filter1'> 
                <FormControl sx={{minWidth: 90}} size="small">
                    <InputLabel id="demo-simple-select-helper-label">Price</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={price}
                        placeholder='Price'
                        label='Price'
                        onChange={handlePriceRangeChange}
                      >
                      {priceFilter.map((item) => (
                        <MenuItem value={item}>{item.toLocaleLowerCase()}</MenuItem>
                      ))}
                    </Select>
                </FormControl>
          
              <FormControl sx={{minWidth: 120}} size="small">
                  <InputLabel id="demo-simple-select-helper-label">Bedroom</InputLabel>
                  <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={bedrooms}
                      placeholder='bed room'
                      label='bed room'
                      onChange={handleBedroomsChange}
                    >
                    {bedroomFilter.map((item) => (
                      <MenuItem value={item}>{item.toLocaleLowerCase()}</MenuItem>
                    ))}
                  </Select>
              </FormControl>
             
                <FormControl sx={{minWidth: 130}} size="small">
                  <InputLabel id="demo-simple-select-helper-label">Bathsroom</InputLabel>
                  <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={bathdrooms}
                      placeholder='Baths Room'
                      label='baths room'
                      onChange={handleBathdroomsChange}
                    >
                      {bathroomFilter.map((item) => (
                        <MenuItem value={item}>{item.toLocaleLowerCase()}</MenuItem>
                      ))}
                    </Select>
                </FormControl>

                <FormControl sx={{minWidth: 110}} size="small">
                  <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
                  <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      placeholder='Location'
                      value={location}
                      label='Location'
                      onChange={handleLocationChange}
                    >
                    {locationFilter.map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
            </Box>
        </Box>
        
        <Box className="container">
          <Typography  className="available-houses"
            variant="h5"
            component="h4"
            textAlign="center"
          >
            <span>  {filteredHouses.length} </span>
            <span className="available-houses1"> Available Houses</span>
            <span>{` `}</span>
          </Typography>
          <CardContainer houses={filteredHouses} />
        </Box>
      </Container>
         
  </Layout>
  );
}
export default SearchPage;


