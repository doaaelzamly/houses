import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent} from '@mui/material';
import BathIcon from '@mui/icons-material/Bathtub';
import PlaceIcon from '@mui/icons-material/Place';
import BdsIcon from '@mui/icons-material/Hotel';
import Layout from '../Layout';

import './style.css';

function Detail() {
  const [house, setHouses] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/doaaelzamly/mock-api/houses/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const {title, 
        bathroom, 
        bedroom, 
        location, 
        description, 
        price,
        image} = house;



  return (
    <Layout>

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
        {description}
        </Typography>
      </CardContent>
    </Card>
    </Layout>
  );
}


export default Detail;
