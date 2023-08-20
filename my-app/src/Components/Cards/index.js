import React from 'react';
import { Link } from "react-router-dom";
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BdsIcon from '@mui/icons-material/Hotel';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import BathIcon from '@mui/icons-material/Bathtub';
import PlaceIcon from '@mui/icons-material/Place';



import './style.css';




export default function MediaCard({house}){

  const {title, 
        bathroom, 
        bedroom, 
        location, 
        description, 
        price,
        image} = house;

       

  const descriptionString = JSON.stringify(description);
  const slicedDescription = descriptionString.slice(0, 70);



  return (
    <Card sx={{ maxWidth: '22vw', height:'62vh', borderRadius: '10px', margin: '10px'}}>
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
            <BdsIcon style={{fontSize: "18"}}/> 
            {bedroom}
          </Typography>

          <Typography variant="body2" color="text.secondary" className='detailsCard'>
            <BathIcon style={{fontSize: "18"}}/>
            {bathroom}
          </Typography>

          <Typography variant="body2" color="text.secondary" className='detailsCard'>
            <PlaceIcon style={{fontSize: "18"}}/>
            {location} 
          </Typography>
        </Box>
        
        <Typography variant="body2" color="text.secondary">
        {slicedDescription}
        </Typography>
      </CardContent>
      
      <CardActions className='cardActions'>
        <Link to={`{/details}/${house.id}`} className="detailsLink">
          View More
        </Link>

      <FavoriteIcon/>
      </CardActions>
    </Card>

  );
}