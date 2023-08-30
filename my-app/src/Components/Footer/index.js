import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../../Util/imgs/logo.png';

import './style.css';

function Footer() {

  return (
    <AppBar position="static" sx={{ bgcolor: "#314E7E", height: "65px" }}>
      <Container maxWidth="xl" className='footer'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <img src={logo} alt='logo' className='logo'/>
                </IconButton>
              </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Typography variant="body2" style={{fontSize:'11px', fontWeight: 300}}>
          © 2023 Homly. All rights reserved
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
       
          <Box className='iconFooter'>
            <a href='https://www.instagram.com/doaaelzamly2000/' target='_blank' style={{color:'white'}}> <InstagramIcon/> </a>
            <a href='https://twitter.com/Doaaelzamly2' target='_blank' style={{color:'white'}}> <TwitterIcon/> </a>
            <a href='https://www.linkedin.com/in/doaa-elzamly/' target='_blank' style={{color:'white'}}><WhatsAppIcon/></a>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;