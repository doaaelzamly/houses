import React from "react";
import { Link } from "react-router-dom";
import {Typography, Container, Box} from '@mui/material';
import Layout from '../Layout';
import image from '../../Util/imgs/error.png';
import './style.css';

function ErrorPage() {

return<>
 <Container style={{padding:'40px'}} className="errorContainer">
        <Typography variant="h6" 
            sx={{ 
                fontSize: '1.8rem', 
                marginBottom: '20px', 
                fontWeight:'bold', 
                textAlign:'center',
                color: '#314E7E' }}>
            Page not Fond
        </Typography>
        <img src={image} style={{textAlign:'center', width:'50vw', height:'60vh'}}/>
        <Box sx={{ flexGrow: 1 }} />
        <Link to={'/'} className="btnBack" important >Back to Home</Link>
    </Container>
</>
   
    
}
export default ErrorPage;