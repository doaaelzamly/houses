import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Typography, Card, CardMedia, CardContent, Button} from '@mui/material';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CardActions from '@mui/material/CardActions';
import BathIcon from '@mui/icons-material/Bathtub';
import PlaceIcon from '@mui/icons-material/Place';
import BdsIcon from '@mui/icons-material/Hotel';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import house from '../../Util/imgs/house.jpg';

import Layout from '../Layout';

import './style.css';

function Detail() {
  const [house, setHouses] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handelHome = () => {
    navigate('/')
  }

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/doaaelzamly/mock-api2/houses/${id}`)
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
        image,
        img,
        img1} = house;

// Favorite
        
        const toggleFavorite = () => {
          setIsFavorite(!isFavorite);
          if (!isFavorite) {
            toast.success('Added to favorites!', {
              position: 'bottom-left',
              autoClose: 1500, 
              style: {
                color: '#4CAF50',
              },
            });
          }
        };


  return (
    <Layout>
    <Container maxWidth="lg" className="root">
      <Grid>
        <Grid container spacing={1}>
            <Grid item xs={6} sm={6} md={8} lg={8}>
                <CardMedia
                  sx={{ height: 400 }}
                  image={image}
                  title="Image House"
                  style={{ borderRadius: '10px 0px 0px 10px' }}
                />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap:1 }}>
                <CardMedia
                  sx={{ height: 196 }}
                  image={img}
                  title="Image House"
                  style={{ borderRadius: '0px 10px 0px 0px' }}
                />
                <CardMedia
                  sx={{ height: 196 }}
                  image={img1}
                  title="Image House"
                  style={{ borderRadius: '0px 0px 10px 0px' }}
                />
              </Box>
            </Grid>
        </Grid>

        <Grid xs="12" sm="12" md="12" lg="12">
          <Grid xs="12" sm="12" md="12" lg="12">
             <Box className="CardContentTitle1">
                <Box>
                  <Typography gutterBottom variant="h6" component="h2" className='title'>
                    {title}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h2" style={{fontWeight: "600", color:"#007bff", textAlign:'start'}}>
                    ${price}
                  </Typography>
                </Box>
             </Box>
          </Grid>
         
          <br/>
          <Grid container spacing={2} xs={12} lg={12}>
            <Box className='detailsCardBox1'>
              <Typography variant="body2" color="text.secondary" className='detailsCard'>
                <BdsIcon style={{fontSize: "20", marginRight:'5px'}}/> 
                {bedroom}bd
              </Typography>

              <Typography variant="body2" color="text.secondary" className='detailsCard'>
                <BathIcon style={{fontSize: "20", marginRight:'5px'}}/>
                {bathroom}ba
              </Typography>

              <Typography variant="body2" color="text.secondary" className='detailsCard'>
                <PlaceIcon style={{fontSize: "20" , marginRight:'5px'}}/>
                {location} 
              </Typography>
            </Box>
          </Grid>
          <br/>
          <br/>
          <Grid container spacing={2} xs={12} lg={12}>
            <Grid xs="12" sm="12" md="12" lg="9">
              <Box className='Description'>
                <Typography gutterBottom variant="h6" component="h2">
                  Description
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {description}
                  {description}
                  {description}
                  {description}
                </Typography>
                <br/>
                <br/>
                
                <Box className="descBtn">
                  <Button
                    onClick={toggleFavorite}
                    sx={{
                      color: "white",
                      bgcolor: "#007bff",
                      fontWeight: "300",
                      fontSize:'14px',
                      textTransform: 'capitalize',
                      "&:hover": {
                        backgroundColor: "#314E7E",
                        color: "white",
                      },
                    }}
                  >
                  {isFavorite ? (
                    <FavoriteIcon style={{ color: "red"}} />
                    ) : (
                      <FavoriteIcon className="favorite" style={{color: "white"}}/>
                    )}
                  add to Favorite
                  <ToastContainer />
                    </Button>
                    <Button
                      className="btn1"
                      onClick={handelHome}
                      sx={{
                        color: "#007bff",
                        bgcolor: "white",
                        transform:'capitalize',
                        marginLeft:"15px",
                        border:" #007bff solid 1px",
                        textTransform: 'capitalize',
                        "&:hover": {
                          backgroundColor: "#314E7E",
                          color: "white",
                          fontWeight: "300",
                        },
                      }}
                    >
                      Back To Home
                    </Button>
                </Box>
              </Box>
            </Grid>

            <Grid xs="12" sm="12" md="12" lg="3">
              <Box className='agentData'>
                <Box className='agent'>
                  <PersonIcon style={{color:'#007bff', marginRight:"5px"}}/>
                  <Typography variant="body2" color="text.secondary" style={{fontSize:'16px', margin:'3px'}}>
                    Doaa Elzamly
                  </Typography>
                </Box>
                <Box className='agent'>
                  <PhoneIcon style={{color:'#007bff', marginRight:"5px"}}/>
                  <Typography variant="body2" color="text.secondary" style={{fontSize:'16px', margin:'3px'}}>
                    0595204783
                  </Typography>
                </Box>
                <Box className='agent'>
                  <MailIcon style={{color:'#007bff', marginRight:"5px"}}/>
                  <Typography variant="body2" color="text.secondary" style={{fontSize:'16px', margin:'3px'}}>
                    doelzamli@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>   
        </Grid>
      </Grid>
    </Container>
    </Layout>
  );
}


export default Detail;
