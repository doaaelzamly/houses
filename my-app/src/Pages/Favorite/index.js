import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import PrivateRoute from '../../Components/Route/private'; 
import Card from '../../Components/Cards';
import Details from '../Details';

const Favorites = ({ favoriteCards }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>المفضلة</h2>
      {favoriteCards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
      <Button onClick={() => navigate('/')}>Go Back to Landing Page</Button>
    </div>
  );
};

export default Favorites;

