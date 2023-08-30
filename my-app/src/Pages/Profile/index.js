import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Favorite from '../../Components/Favorite';
import AddHouse from '../../Components/AddHouse';
import House from '../../Components/House';
import Login from '../../Components/Login';
import ProfileInfo from '../../Components/ProfileInfo';
import Layout from '../Layout';


const VerticalTabs = () => {
  const [value, setValue] = React.useState('1');
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <Layout>
          <Box sx={{ width: '100%', typography: 'body1', display:'flex'}}>
              <TabContext value={value}>
                  <Box sx={{ borderRight: 1, borderColor: 'divider', height: '150vh', width:'18vw', paddingTop:'40px'}}>
                      <TabList onChange={handleTabChange} aria-label="lab API tabs example" orientation="vertical">
                        <Tab label="Profile information" value="1" />
                        <Tab label="Houses" value="2" />
                        <Tab label="Add House" value="3" />
                        <Tab label="Favorite" value="4" />
                        <Tab label="Log out" value="5" sx={{color:'red'}} onClick={handleLogout}/>
                      </TabList>
                  </Box>
                  <TabPanel value="1"><ProfileInfo handleChange={handleTabChange}/></TabPanel>
                  <TabPanel value="2" sx={{textAlign:'center'}}><House/></TabPanel>
                  <TabPanel value="3" sx={{textAlign:'center'}}><AddHouse/></TabPanel>
                  <TabPanel value="4" sx={{textAlign:'center'}}><Favorite/></TabPanel>
              </TabContext>
          </Box>
    </Layout>
              

  );
};

export default VerticalTabs;