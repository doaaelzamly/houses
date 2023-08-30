import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BdsIcon from '@mui/icons-material/Hotel';
import BathIcon from '@mui/icons-material/Bathtub';
import PlaceIcon from '@mui/icons-material/Place';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import './style.css';




export default function MediaCard({house}){

  const {id,
        title, 
        bathroom, 
        bedroom, 
        location, 
        description, 
        price,
        image} = house;

  const descriptionString = JSON.stringify(description);
  const slicedDescription = descriptionString.slice(0, 70);
  
  // Favorite
  const [isFavorite, setIsFavorite] = useState(false);
  const addToFavorite = async (id) => {
    const response = await fetch(
      `https://my-json-server.typicode.com/sohaalakhras/mockread-api/houses/${id}`
    );
    const item = await response.json();
    fetch(
     "https://my-json-server.typicode.com/sohaalakhras/mockread-api/favorites",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("House added to favorites");
          setIsFavorite(true);
        } else {
          console.error("Failed to add to favorites");
        }
      })
      .catch((error) => {
        console.error("Error adding to favorites:", error);
      });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      toast.success('Added to favorites!', {
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
    <Card sx={{ borderRadius: '10px', margin: '10px'}}>
      <CardMedia
        sx={{ height: 180 }}
        image={image}
        title="Image House"
      />
      <CardContent className='CardContent'>
        <Box className="CardContentTitle">
          <Typography gutterBottom variant="h6" component="h2">
          {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            ${price}
          </Typography>
        </Box>
       
        
        <Box className='detailsCardBox'>
          
          <Typography variant="body2" color="text.secondary" className='detailsCard'>
            <BdsIcon style={{fontSize: "18", marginRight:'5px'}}/> 
            {bedroom}bd
          </Typography>

          <Typography variant="body2" color="text.secondary" className='detailsCard'>
            <BathIcon style={{fontSize: "18", marginRight:'5px'}}/>
            {bathroom}ba
          </Typography>

          <Typography variant="body2" color="text.secondary" className='detailsCard'>
            <PlaceIcon style={{fontSize: "18", marginRight:'5px'}}/>
            {location} 
          </Typography>
        </Box>
        
        <Typography variant="body2" color="text.secondary">
        {slicedDescription}
        </Typography>
      </CardContent>
      
      <CardActions className='cardActions'>
        <Link to={`/details/${house.id}`} className="detailsLink">
          View More
        </Link>

     <>
          <Button style={{padding:"1px", color:'#000'}}>
            {isFavorite ? (
              <FavoriteIcon style={{ color: "red", fontSize:'30px'}} />
            ) : (
              <FavoriteBorderIcon className="favorite" onClick={toggleFavorite} style={{fontSize:'30px'}}/>
            )}
          </Button>
          <ToastContainer />
       </>
      </CardActions>
    </Card>

  );
}