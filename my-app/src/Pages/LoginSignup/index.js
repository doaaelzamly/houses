import React, {useState} from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Typography, Link} from '@mui/material';
import { Container, Grid, Box} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Login from '../../Components/Login';
import Signup from '../../Components/Signup';
import './style.css';

const SignInOutContainer = ({ onLogin })=>{
    const [open, setOpen] = useState(false);
    const [value, setValue] = React.useState('1');

    const handleOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
      
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return(
        <Box>
            <Button variant="outlined" onClick={handleOpen} className='btnLogin'>
                Login/Signup
            </Button>

            <Dialog open={open} onClose={handleClose}>
            
            <DialogContent>
                <Box sx={{ width: '100%', typography: 'body1'}}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Login" value="1" />
                                <Tab label="Sign Up" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><Login handleChange={handleChange} onLogin={onLogin}/></TabPanel>
                        <TabPanel value="2"><Signup/></TabPanel>
                    </TabContext>
                </Box>
            </DialogContent>
            </Dialog>
        </Box>

    );
}

export default SignInOutContainer;