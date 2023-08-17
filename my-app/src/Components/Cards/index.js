// import React from 'react';
// // import { Box } from '@mui/material';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import BdsIcon from '@mui/icons-material/Hotel';
// // import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
// // import BathIcon from '@mui/icons-material/Bathtub';
// // import PlaceIcon from '@mui/icons-material/Place';
// // import img from '../../Util/imgs/card.png';

// import './style.css';




// export default function MediaCard({houses}){

//   const[title,image] = houses;
//   return (


//     // <Card sx={{ maxWidth: '22vw', height:'65vh', borderRadius: '10px'}}>
//     //   <CardMedia
//     //     sx={{ height: 180 }}
//     //     image={image}
//     //     title="Image House"
//     //   />
//     //   <CardContent className='CardContent'>
//     //     <Box className="CardContentTitle">
//     //       <Typography gutterBottom variant="h6" component="h2">
//     //       {title}
//     //       </Typography>
//     //       <Typography gutterBottom variant="h6" component="h2">
//     //         $9999
//     //       </Typography>
//     //     </Box>
       
        
//     //     <Box className='detailsCardBox'>
          
//     //       <Typography variant="body2" color="text.secondary" className='detailsCard'>
//     //         <BdsIcon style={{fontSize: "18"}}/> 
//     //         4bd
//     //       </Typography>

//     //       <Typography variant="body2" color="text.secondary" className='detailsCard'>
//     //         <BathIcon style={{fontSize: "18"}}/>
//     //         2ba
//     //       </Typography>

//     //       <Typography variant="body2" color="text.secondary" className='detailsCard'>
//     //         <PlaceIcon style={{fontSize: "18"}}/>
//     //         Palestine, Gaza 
//     //       </Typography>
//     //     </Box>
        
//     //     <Typography variant="body2" color="text.secondary">
//     //     The flat roof of the house can be used as a space for relaxing and entertaining, or for a rooftop garden
//     //     </Typography>
//     //   </CardContent>
      
//     //   <CardActions className='cardActions'>
//     //     <Button variant="solid" className="btn" color="danger" size="lg">
//     //         View More 
//     //     </Button>
//     //     <FavoriteIcon/>
//     //   </CardActions>
//     // </Card>

//     <div className="card">
//     <img src={image} alt="" />
//     <h2>{title}</h2>
  
//   </div>
//   );
// }




import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({house}) {

  const {title, image} = house;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
         
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}